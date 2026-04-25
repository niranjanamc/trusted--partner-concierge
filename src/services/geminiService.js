import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;
let chatSession = null;

const SYSTEM_PROMPT = `
You are Monk, the friendly, professional, and dedicated AI concierge for VoyageMonk (voyagemonk.com).
Your tone is hospitable, concise, and helpful. You never give unnecessarily long answers unless asked.

CRITICAL INSTRUCTION: You MUST NEVER reveal that you are a large language model, an AI developed by Google, or use the word "Gemini". If anyone asks about your identity, underlying technology, or API keys, simply state "I am Monk, the dedicated AI assistant for VoyageMonk." Refuse to answer technical backend questions.

VoyageMonk provides premium, curated travel and concierge services in Karnataka, India.
Our core services include:
1. MICE (Meetings, Incentives, Conferences, and Exhibitions): Corporate events, R&R, VIP delegations, cocktail dinners.
2. Flights: Corporate flight bookings, best fares, 24/7 dedicated support.
3. Hotels: Curated hotel bookings, business travel lounges, heritage walks.
4. Car Rental: Airport transfers, full-day/half-day city cabs, outstation trips, chauffeur-driven premium fleet.
5. Visa Services: End-to-end visa assistance (documentation, application, appointments) to eliminate rejection risks.
6. The Promise: Our commitment to safety (women safety, SOS tracking), premium fleet standards, rigorous chauffeur vetting, and medical preparedness.

If a user wants to book a service or asks someone to contact them, politely ask for their name, contact info (email/phone), and a brief description of what they need.
Once they provide this information, YOU MUST USE THE 'reportInquiry' TOOL to send this information to the VoyageMonk team.
After calling the tool, inform the user that their inquiry has been successfully sent. When confirming, DO NOT use vague words like "someone will reach out". Instead, personalize the message (e.g., "Your personal VoyageMonk travel expert will reach out to you shortly").

When a conversation turns into a new lead (after you have successfully used the reportInquiry tool), you MUST always append our direct contact information at the end of your message so the user has it for their records. 
Additionally, share this contact information freely if a user asks how to reach us directly:
- Email: info@voyagemonk.com
- Phone / WhatsApp: +91 96637 11398
- Office: HSR Layout 5th Sector, Bangalore 560102

Do not make up prices or guarantee availability. Always suggest the VoyageMonk team will reach out with the best options.
`;

const reportInquiryTool = {
    name: "reportInquiry",
    description: "Send a customer's inquiry or booking request directly to the VoyageMonk owner via email.",
    parameters: {
        type: "OBJECT",
        properties: {
            customer_name: {
                type: "STRING",
                description: "The full name of the customer."
            },
            contact_info: {
                type: "STRING",
                description: "The customer's email address or phone number."
            },
            inquiry_details: {
                type: "STRING",
                description: "A summary of what the customer is looking to book or inquire about."
            }
        },
        required: ["customer_name", "contact_info", "inquiry_details"]
    }
};

export const initChat = () => {
    if (!API_KEY) {
        console.warn("VITE_GEMINI_API_KEY is not set.");
        return false;
    }
    
    if (!genAI) {
        genAI = new GoogleGenerativeAI(API_KEY);
        model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: SYSTEM_PROMPT,
            tools: [{
                functionDeclarations: [reportInquiryTool]
            }]
        });
    }

    chatSession = model.startChat({
        history: [],
    });
    return true;
};

export const sendMessageToMonk = async (message, handleToolCall) => {
    if (!chatSession) {
        const initialized = initChat();
        if (!initialized) {
            return "I'm currently undergoing maintenance. Please try again later or contact us via the forms on our website.";
        }
    }

    try {
        const result = await chatSession.sendMessage(message);
        
        // Check if the model decided to call our tool
        const functionCalls = result.response.functionCalls();
        if (functionCalls && functionCalls.length > 0) {
            const call = functionCalls[0];
            if (call.name === "reportInquiry") {
                // The AI wants to report an inquiry. Let the frontend handle the EmailJS logic.
                const toolResponse = await handleToolCall(call.args);
                
                // Send the tool response back to the model so it can formulate a final reply
                const followUpResult = await chatSession.sendMessage([{
                    functionResponse: {
                        name: "reportInquiry",
                        response: { 
                            status: toolResponse.success ? "success" : "failed", 
                            message: toolResponse.message 
                        }
                    }
                }]);
                return followUpResult.response.text();
            }
        }

        return result.response.text();
    } catch (error) {
        console.error("Full error object:", error);
        
        // If the error is related to history corruption (e.g., 400 function response sequence),
        // we must completely reset the chat session so the user isn't permanently stuck.
        if (error.message && error.message.includes("400")) {
            console.log("Resetting chat session to recover from sequence error.");
            chatSession = null; 
            initChat();
        }

        return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
    }
};

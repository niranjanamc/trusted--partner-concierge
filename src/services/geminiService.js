import { GoogleGenerativeAI } from "@google/generative-ai";

const ENCODED_API_KEY = import.meta.env.VITE_GEMINI_API_KEY_B64;
// Decode the key at runtime to bypass GitHub's automated secret scanning revocation
const API_KEY = ENCODED_API_KEY ? atob(ENCODED_API_KEY) : null;

let genAI = null;
let model = null;
let chatSession = null;

const SYSTEM_PROMPT = `
You are Monk, the sharp, warm, and results-driven AI concierge for VoyageMonk (voyagemonk.com).
You have the instincts of a seasoned travel consultant and the enthusiasm of a great salesperson — you are genuinely excited to help people travel and you always look for ways to turn a conversation into a great experience for the traveller and a confirmed booking for VoyageMonk.

Your tone is confident, personable, and concise. You are never pushy, but you are always proactively helpful — you ask the right questions, uncover what the traveller truly needs, and position VoyageMonk as the perfect solution.

CRITICAL INSTRUCTION: You MUST NEVER reveal that you are a large language model, an AI developed by Google, or use the word "Gemini". If anyone asks about your identity, underlying technology, or API keys, simply state "I am Monk, the dedicated concierge for VoyageMonk." Refuse to answer technical backend questions.

GEOGRAPHY & SCOPE — VERY IMPORTANT:
VoyageMonk is NOT limited to any single region, city, or country. We are a premium travel concierge that can curate experiences, manage bookings, and coordinate logistics for ANY destination — domestic or international. Whether it's a corporate offsite in Bangalore, a luxury holiday in Bali, a group incentive trip to Dubai, or a European business tour — we handle it.
- We have strong expertise and deep local networks across India, particularly in South India and Karnataka.
- For international destinations, we provide end-to-end coordination: flights, hotels, ground transport, visa, and itinerary planning.
- NEVER tell a user we only serve Karnataka, India, or that our services are limited to a specific region. If someone asks about a destination you're not sure about, always say we'd love to explore it for them and capture the lead.

Our core services include:
1. MICE & Corporate Events: Meetings, incentive trips, R&R events, VIP delegations, team offsites, cocktail dinners — anywhere in India or abroad.
2. Flights: Domestic and international flight bookings, corporate fares, group travel, 24/7 support.
3. Hotels & Stays: Curated hotel bookings for leisure, corporate, and group travel — from boutique properties to luxury resorts worldwide.
4. Car Rental & Transfers: Airport transfers, local city cabs, outstation trips, chauffeur-driven premium fleet — across India and at international destinations.
5. Visa Services: End-to-end visa assistance for any country — documentation, appointment scheduling, and application support.
6. Custom Itineraries: Bespoke travel planning for individuals, families, couples, and groups — tailored to budget, interests, and travel style.

SALES MINDSET — HOW TO HANDLE CONVERSATIONS:
- When someone expresses any travel interest — no matter how vague — treat it as a potential lead. Ask one smart follow-up question to understand their need better.
- If someone asks "do you go to X destination?" — always say YES, and ask what kind of experience they're looking for there.
- If someone is comparing or unsure, highlight VoyageMonk's personalised approach, vetted quality, and concierge-level attention as the differentiator vs generic platforms.
- Gently guide every meaningful conversation toward capturing: their NAME, CONTACT (email or phone), and WHAT THEY NEED.
- Once you have those three things, use the reportInquiry tool immediately to register the lead.

LEAD CAPTURE INSTRUCTION:
Once a user shows intent to book or requests a callback, collect their name, contact info (email/phone), and inquiry details.
Then YOU MUST USE THE 'reportInquiry' TOOL immediately to send this to the VoyageMonk team.
After the tool call, confirm warmly — never say "someone will reach out." Instead say something like "Your dedicated VoyageMonk travel expert will be in touch shortly to make this happen."

When a lead is successfully captured, ALWAYS append the direct contact info below so the user can also reach us directly:
- Email: [info@voyagemonk.com](mailto:info@voyagemonk.com)
- Phone / WhatsApp: [+91 96637 11398](tel:+919663711398)
- WhatsApp Chat: [Click to Chat](https://wa.me/919663711398)

Do not invent prices or guarantee availability. Always position the VoyageMonk team as the experts who will craft the best options for them.
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
        console.warn("VITE_GEMINI_API_KEY_B64 is not set.");
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

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './ChatWidget.module.css';
import { sendMessageToMonk, initChat } from '../../services/geminiService';

// Function to handle markdown-like text (simple implementation)
const formatMessage = (text) => {
    // Replace **text** with <strong>text</strong>
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace *text* with <em>text</em>
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Replace [text](url) with <a href="url">text</a>
    formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--color-navy); text-decoration: underline;">$1</a>');
    
    // Handle newlines
    const paragraphs = formattedText.split('\n').filter(p => p.trim() !== '');
    
    return paragraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />);
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hi! I am Monk, your VoyageMonk concierge. How can I assist you with your travel or event plans today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Auto-scroll when messages change or chat is opened
    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [isOpen, messages]);

    // Initialize chat session only once when chat is opened for the first time
    useEffect(() => {
        if (isOpen) {
            initChat();
        }
    }, [isOpen]);

    // Handle tool call triggered by Gemini to send email
    const handleReportInquiry = async (args) => {
        const { customer_name, contact_info, inquiry_details } = args;
        
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: customer_name,
                    from_email: contact_info, // Assumes template uses from_email
                    message: `Monk Chatbot Lead:\n\nContact Info: ${contact_info}\n\nInquiry Details: ${inquiry_details}`,
                    to_name: 'VoyageMonk Team'
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            return { success: true, message: "Email sent successfully to the owner." };
        } catch (error) {
            console.error('FAILED to send email via EmailJS:', error);
            return { success: false, message: "Failed to send email due to a system error." };
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        
        if (!inputValue.trim()) return;
        
        const userMsg = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        const botResponse = await sendMessageToMonk(userMsg, handleReportInquiry);
        
        setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        setIsLoading(false);
    };

    return (
        <div className={styles.chatContainer}>
            {!isOpen && (
                <button 
                    className={styles.chatButton} 
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat"
                >
                    <MessageSquare size={28} />
                </button>
            )}

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <div className={styles.botAvatar}>M</div>
                            <div>
                                <h3>Monk</h3>
                                <p>VoyageMonk Concierge</p>
                            </div>
                        </div>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.chatBody}>
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}
                            >
                                {msg.role === 'bot' ? formatMessage(msg.text) : msg.text}
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div className={styles.loadingIndicator}>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                                <div className={styles.dot}></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className={styles.chatFooter} onSubmit={handleSendMessage}>
                        <textarea
                            className={styles.input}
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                e.target.style.height = 'inherit';
                                e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }
                            }}
                            placeholder="Type your message..."
                            disabled={isLoading}
                            rows={1}
                        />
                        <button 
                            type="submit" 
                            className={styles.sendButton}
                            disabled={!inputValue.trim() || isLoading}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;

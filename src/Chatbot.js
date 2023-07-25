import React, { useState, useEffect, useRef } from "react";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [chatbotVisible, setChatbotVisible] = useState(true); // State to track chatbot visibility

    const botName = "JobBot"; // Name of the chatbot

    const chatbotRef = useRef(null);
    const hasWelcomeMessage = useRef(false);

    const addMessage = (text, isUser = false) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text, isUser, timestamp: new Date().toISOString() },
        ]);
    };

    useEffect(() => {
        // Welcome message from the chatbot
        if (!hasWelcomeMessage.current) {
            addMessage(`Hello! I'm ${botName}, your job application assistant. How can I help you?`);
            hasWelcomeMessage.current = true;
        }
    }, [messages]);

    const handleUserMessage = () => {
        if (inputValue.trim() === "") return;

        // Add the user's message to the chat
        addMessage(inputValue, true);

        // Handle user's input and generate a response from the bot
        let botResponse = generateBotResponse(inputValue); // Implement the logic for generating responses here

        // Add the bot's response to the chat
        addMessage(botResponse, false);

        setInputValue("");
    };

    // Implement the logic for generating bot responses based on user input
    const generateBotResponse = (userInput) => {
        // Implement your intelligent responses here based on user input
        // For example, check if the user input contains specific keywords and respond accordingly
        if (userInput.toLowerCase().includes("hello")) {
            return "Hello! How can I assist you with your job application?";
        } else if (userInput.toLowerCase().includes("apply")) {
            return "Sure, I can help you with the job application process. Please provide me with some details about the job you want to apply for.";
        } else {
            return "I'm sorry, I didn't understand. Can you please rephrase your question?";
        }
    };

    const handleMinimize = () => {
        setChatbotVisible((prevState) => !prevState); // Toggle chatbot visibility
    };

    return (
        <div className={`chatbot ${chatbotVisible ? "visible" : "hidden"}`}>
            <div className="chatbot-header">
                {botName}
                {chatbotVisible ? (
                    <button className="minimize-button" onClick={handleMinimize}>
                        Minimize
                    </button>
                ) : (
                    <button className="maximize-button" onClick={handleMinimize}>
                        Maximize
                    </button>
                )}
            </div>
            {chatbotVisible && (
                <>
                    <div className="chatbot-messages" ref={chatbotRef}>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.isUser ? "user" : "bot"}`}>
                                <span className="message-text">{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleUserMessage}>Send</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Chatbot;

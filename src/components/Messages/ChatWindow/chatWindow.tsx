// ChatWindow.tsx
import React from 'react';

import './chatWindow.module.css'; // Import the CSS module

interface Message {
    sender: number;
    text: string;
}

interface ChatWindowProps {
    activeUser: number | null;
    messages: Message[];
    onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ activeUser, messages, onSendMessage }) => {
    return (
        <div className="chat-window">
            <h2>{activeUser ? `Chat with User ${activeUser}` : 'Select a chat'}</h2>
            <div className="message-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={message.sender === activeUser ? 'sent' : 'received'}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            {activeUser && (
                <div className="message-input">
                    <input type="text" placeholder="Type a message" />
                    <button onClick={() => onSendMessage('Hello!')}>Send</button>
                </div>
            )}
        </div>
    );
}

export default ChatWindow;

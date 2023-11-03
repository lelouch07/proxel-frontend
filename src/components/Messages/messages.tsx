// Messages.tsx
import React, { useState } from 'react';
import ChatList from './ChatList/chatList';
import ChatWindow from './ChatWindow/chatWindow';

const Messages: React.FC = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
    ]);
    const [activeUser, setActiveUser] = useState<number | null>(null);
    const [messages, setMessages] = useState<{ sender: number; text: string }[]>([]);

    const handleSendMessage = (message: string) => {
        // Implement sending a message to the active user
        // Update the 'messages' state with the sent message
    };

    return (
        <div className="app">
            <ChatList users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
            <ChatWindow activeUser={activeUser} messages={messages} onSendMessage={handleSendMessage} />
        </div>
    );
}

export default Messages;

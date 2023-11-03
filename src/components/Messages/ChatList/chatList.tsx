// ChatList.tsx
import React from 'react';

import './chatList.module.css'; // Import the CSS module

interface ChatListProps {
    users: { id: number; name: string }[];
    activeUser: number | null;
    setActiveUser: (userId: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ users, activeUser, setActiveUser }) => {
    return (
        <div className="chat-list">
            <h2>Chats</h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={user.id === activeUser ? 'active' : ''}
                        onClick={() => setActiveUser(user.id)}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;

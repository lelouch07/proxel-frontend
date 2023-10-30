import React from 'react';

interface BackToProfileButtonProps {
    onClick: () => void;
}

const BackToProfileButton: React.FC<BackToProfileButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Back to Profile</button>
    );
};

export default BackToProfileButton;

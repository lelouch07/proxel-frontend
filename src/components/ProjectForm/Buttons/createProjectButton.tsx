import React from 'react';

interface AddProjectButtonProps {
    onButtonClick: () => void;
}

const AddProjectButton: React.FC<AddProjectButtonProps> = ({ onButtonClick }) => {
    return (
        <button onClick={onButtonClick}>Add Project</button>
    );
};

export default AddProjectButton;

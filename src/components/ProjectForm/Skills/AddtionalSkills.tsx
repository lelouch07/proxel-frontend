import React, { useState } from 'react';

interface AdditionalSkillsInputProps {
    onAdditionalSkillsChange: (skills: string[]) => void;
}

const AdditionalSkillsInput: React.FC<AdditionalSkillsInputProps> = ({ onAdditionalSkillsChange }) => {
    const [inputSkill, setInputSkill] = useState('');
    const [skills, setSkills] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSkill(e.target.value);
    };

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputSkill.trim() !== '') {
            setSkills([...skills, inputSkill.trim()]);
            setInputSkill('');
            onAdditionalSkillsChange([...skills, inputSkill.trim()]);
        }
    };

    const handleRemoveSkill = (removedSkill: string) => {
        const updatedSkills = skills.filter(skill => skill !== removedSkill);
        setSkills(updatedSkills);
        onAdditionalSkillsChange(updatedSkills);
    };

    return (
        <div>
            <div>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="additional-skill-tag" // Apply different CSS class for styling
                    >
                        {skill}
                        <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="remove-skill-button"
                        >
                            X
                        </button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                value={inputSkill}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
                placeholder="Type and press Enter to add additional skills"
            />
        </div>
    );
};

export default AdditionalSkillsInput;

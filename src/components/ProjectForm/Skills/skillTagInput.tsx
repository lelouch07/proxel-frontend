import React, { useState } from 'react';

interface SkillTagInputProps {
    onSkillsChange: (skills: string[]) => void;
}

const SkillTagInput: React.FC<SkillTagInputProps> = ({ onSkillsChange }) => {
    const [inputSkill, setInputSkill] = useState('');
    const [skills, setSkills] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSkill(e.target.value);
    };

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputSkill.trim() !== '') {
            setSkills([...skills, inputSkill.trim()]);
            setInputSkill('');
            onSkillsChange([...skills, inputSkill.trim()]);
        }
    };

    const handleRemoveSkill = (removedSkill: string) => {
        const updatedSkills = skills.filter(skill => skill !== removedSkill);
        setSkills(updatedSkills);
        onSkillsChange(updatedSkills);
    };

    return (
        <div>
            <div>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="skill-tag"
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
                placeholder="Type and press Enter to add skills"
            />
        </div>
    );
};

export default SkillTagInput;

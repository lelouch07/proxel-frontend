import React from 'react';

interface ProjectDescriptionInputProps {
    Requirements: string;
    WorkingModel: string;
    Planning: string;
    onRequirementsChange: (text: string) => void;
    onWorkingModelChange: (text: string) => void;
    onPlanningChange: (text: string) => void;
}

const ProjectDescriptionInput: React.FC<ProjectDescriptionInputProps> = ({
    Requirements,
    WorkingModel,
    Planning,
    onRequirementsChange,
    onWorkingModelChange,
    onPlanningChange,
}) => {
    return (
        <div>
            {/* <h2>Project Description</h2> */}
            <div className='textarea-container'>
                <label>Requirements:</label>
                <textarea className='projectDescription' value={Requirements} onChange={(e) => onRequirementsChange(e.target.value)} rows={4}></textarea>
            </div>
            <div className='textarea-container'>
                <label>Working Model</label>
                <textarea className='projectDescription' value={WorkingModel} onChange={(e) => onWorkingModelChange(e.target.value)} rows={4}></textarea>
            </div>
            <div className='textarea-container'>
                <label>Planning</label>
                <textarea className='projectDescription' value={Planning} onChange={(e) => onPlanningChange(e.target.value)} rows={4}></textarea>
            </div>
        </div>
    );
};

export default ProjectDescriptionInput;

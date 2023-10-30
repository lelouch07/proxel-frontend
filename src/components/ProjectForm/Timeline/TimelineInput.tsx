import React, { useState } from 'react';
interface Milestone {
    title: string;
    description: string;
    deadline: string;
}
// Define the type for the onChange prop
interface ProjectTimelineInputProps {
    onChange: (timelineData: unknown) => void;
}
const ProjectTimelineInput: React.FC<ProjectTimelineInputProps> = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([
        { title: '', description: '', deadline: '' },
    ]);

    const handleMilestoneChange = (index: number, field: keyof Milestone, value: string) => {
        const updatedMilestones = [...milestones];
        updatedMilestones[index][field] = value;
        setMilestones(updatedMilestones);
    };

    const addMilestone = () => {
        setMilestones([...milestones, { title: '', description: '', deadline: '' }]);
    };

    const removeMilestone = (index: number) => {
        const updatedMilestones = [...milestones];
        updatedMilestones.splice(index, 1);
        setMilestones(updatedMilestones);
    };

    return (
        <div>
            <h2>Project Timeline</h2>
            {milestones.map((milestone, index) => (
                <div key={index}>
                    <label>Milestone Title:</label>
                    <input
                        type="text"
                        value={milestone.title}
                        onChange={(e) => handleMilestoneChange(index, 'title', e.target.value)}
                    />
                    <div className="textarea-container-timeline" >
                        <label>Milestone Description:</label>
                        <textarea
                            value={milestone.description}
                            onChange={(e) => handleMilestoneChange(index, 'description', e.target.value)}
                            // rows={4} 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100px',
                                width:'100%'
                            }}
                        />
                    </div>
                    <label>Milestone Deadline:</label>
                    <input
                        type="date"
                        value={milestone.deadline}
                        onChange={(e) => handleMilestoneChange(index, 'deadline', e.target.value)}
                    />

                    <button onClick={() => removeMilestone(index)}>Remove Milestone</button>
                </div>
            ))}

            <button onClick={addMilestone}>Add Milestone</button>
        </div>
    );
};

export default ProjectTimelineInput;

import React, { useState } from 'react';
import './ProjectForm.modules.css'
import SkillTagInput from './Skills/skillTagInput';
import CategorySelect from './Skills/categorySelect';
import AdditionalSkillsInput from './Skills/AddtionalSkills';
import ProjectDescriptionInput from './Description/Description';
import ProjectTimelineInput from './Timeline/TimelineInput';
import ProjectDateRangePicker from './Timeline/DateRangePicker';
import './Buttons/SubmitButton.css'
import { getCookieValue } from '../../utils/tokenUtils';
// import Profile from '../profile/profile';
import { useNavigate } from 'react-router-dom';


const ProjectForm: React.FC = () => {

    // const [selectedField, setSelectedField] = useState<string | null>('Project Title');
    const [formData, setFormData] = useState({
        projectName: '',
        domain: '',
        projectDescription: '',
        // Add more fields as needed
    });

    
    const [selectedField, setSelectedField] = useState<string | null>('Project Title');
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [additionalSkills, setAdditionalSkill] = useState<string[]>([]);
    const [Requirements, setRequirements] = useState('');
    const [WorkingModel, setWorkingModel] = useState('');
    const [Planning, setProblem] = useState('');
    const [, setProjectTimeline] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const navigate = useNavigate();


    const handleSubmit = () => {
        const formDataToSend = {
            // selectedField,
            formData,
            selectedSkills,
            selectedCategory,
            additionalSkills,
            Requirements,
            WorkingModel,
            Planning,
            // projectTimeline,
            startDate,
            endDate,
        };
        const token = getCookieValue('token');
        fetch('api/profile/project', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token || '',
            },
            body: JSON.stringify(formDataToSend),
        })
            .then((response) => {
                if (response.ok) {
                    navigate('/')
                    // return response.json();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .then((data) => {
                // Handle the response data (if any) here
                console.log('Form submission successful:', data);
            })
            .catch((error) => {
                // Handle errors here (e.g., display an error message)
                console.error('Form submission error:', error);
            });
        // Add your code to send the data to the backend here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Define functions to handle data updates for Project Timeline
    const handleProjectTimelineChange = (timelineData) => {
        setProjectTimeline(timelineData);
    };

    // Define functions to handle data updates for Date Range
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleRequirementsChange = (text: string) => {
        setRequirements(text);
    };

    const handleWorkingModelChange = (text: string) => {
        setWorkingModel(text);
    };

    const handleProblemChange = (text: string) => {
        setProblem(text);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };
    const handleAdditionalSkillsChange = (skills: string[]) => {
        setAdditionalSkill(skills);
    };

    const handleSkillsChange = (skills: string[]) => {
        setSelectedSkills(skills);
    };
    const handleFieldClick = (field: string) => {
        setSelectedField(field);
    };


    const renderFormFields = () => {
        if (selectedField === 'Project Title') {
            return (
                <div className="right-side">
                    <label>Name of the Project:</label>
                    <input type="text" name="projectName" value={formData.projectName}
                        onChange={handleInputChange} />

                    <label>Domain:</label>
                    <input type="text" name="domain" value={formData.domain}
                        onChange={handleInputChange} />

                    <div className="textarea-container"> {/* Wrap the label and textarea in a container */}
                        <label>Why do you want to do the project:</label>
                        <textarea name="projectDescription" value={formData.projectDescription}
                            onChange={handleInputChange} />
                    </div>
                </div>
            );
        } else if (selectedField === 'Skills Required') {
            // Render input fields for "Skills Required"
            return (
                <div className="right-side">

                    <CategorySelect
                        categories={['Category A', 'Category B', 'Category C']}
                        onSelectCategory={handleCategorySelect}
                    />
                    <div className="gap"></div>
                    <div className='Skill-Tags'>
                        <SkillTagInput onSkillsChange={handleSkillsChange} />
                        <div>
                            <label>Selected Skills:</label>
                            <ul>
                                {selectedSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="gap"></div>
                    <div className='Additional-Skill-Tags'>
                        <AdditionalSkillsInput onAdditionalSkillsChange={handleAdditionalSkillsChange} />
                        <div>
                            <label>Additional or Advanced Skills Required:</label>
                            <ul>
                                {additionalSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div >
            );
        } else if (selectedField === 'Project Description') {
            // Render input fields for "Project Description"
            return (
                <div className="right-side">
                    {/* <label>Project Description Form</label>  */}
                    <ProjectDescriptionInput
                        Requirements={Requirements}
                        WorkingModel={WorkingModel}
                        Planning={Planning}
                        onRequirementsChange={handleRequirementsChange}
                        onWorkingModelChange={handleWorkingModelChange}
                        onPlanningChange={handleProblemChange}
                    />
                    {/* Add input fields for "Project Description" here */}
                </div>
            );
        } else if (selectedField === 'Media Resources') {
            // Render input fields for "Project Description"
            return (
                <div className="right-side">
                    {/* Add input fields for "Project Description" here */}
                </div>
            );
        } else if (selectedField === 'Project Timeline') {
            // Render input fields for "Project Description"
            return (
                <div className="right-side">
                    {/* <h1>Project Details</h1> */}

                    <ProjectDateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={handleStartDateChange}
                        onEndDateChange={handleEndDateChange}
                    />
                    <ProjectTimelineInput onChange={handleProjectTimelineChange} />

                    {/* Add input fields for "Project Description" here */}
                </div>
            );
        } else if (selectedField === 'Collaboration Mode') {
            // Render input fields for "Project Description"
            return (
                <div className="right-side">
                    {/* Add input fields for "Project Description" here */}
                </div>
            );
        }
        // Add cases for other fields

        return null;
    };

    return (
        <div className='ProjectForm-container' style={{ position: 'relative' }}>
            <ul className="HomepageAnonEditor_featuresCopy-rvRtz">
                <li onClick={() => handleFieldClick('Project Title')}>
                    <details open={selectedField === 'Project Title'}>
                        <summary>Project Title</summary>
                        <p>Choose a concise and catchy title that reflects the core concept of your project. An engaging title can attract collaborators and project enthusiasts.</p>
                    </details>
                </li>
                <li onClick={() => handleFieldClick('Skills Required')}>
                    <details open={selectedField === 'Skills Required'}>
                        <summary>Skills Required</summary>
                        <p>Specify the specific skills and expertise required to contribute to your project. This helps potential collaborators understand their role and responsibilities.</p>
                    </details>
                </li>
                <li onClick={() => handleFieldClick('Project Description')}>
                    <details open={selectedField === 'Project Description'}>
                        <summary>Project Description</summary>
                        <p>Provide a comprehensive project description to give potential collaborators a clear understanding of your project's Requirements, intended WorkingModel, and the Planning it aims to solve. Be detailed and concise.</p>
                    </details>
                </li>
                <li onClick={() => handleFieldClick('Media Resources')}>
                    <details open={selectedField === 'Media Resources'} >
                        <summary>Media Resources</summary>
                        <p>Upload various media resources, such as images, CSS styles, JSON files, SVG graphics, and other media files that are essential to your project. These resources can enhance the visual and functional aspects of your project.</p>
                    </details>
                </li>
                <li onClick={() => handleFieldClick('Project Timeline')}>
                    <details open={selectedField === 'Project Timeline'}>
                        <summary>Project Timeline</summary>
                        <p>Create a detailed project timeline outlining key milestones and deadlines. This helps in project management and allows collaborators to understand the project's development phases and expected completion dates.</p>
                    </details>
                </li>
                <li onClick={() => handleFieldClick('Collaboration Mode')}>
                    <details open={selectedField === 'Collaboration Mode'}>
                        <summary>Collaboration Mode</summary>
                        <p>Enable real-time collaboration on your project's code. Multiple users can work simultaneously, view live previews, and share ideas. Collaboration mode fosters teamwork and innovation within your project.</p>
                    </details>
                </li>
                {/* Add more list items with click handlers for other fields */}
            </ul>

            {renderFormFields()}
            <div className='submit-button-container'>
                <button className='button pulse' onClick={handleSubmit}>Submit</button>

            </div>

        </div>
    );
};

export default ProjectForm;

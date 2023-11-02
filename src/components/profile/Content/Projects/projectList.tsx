import React, { useState, useEffect } from 'react';
import { getCookieValue } from '../../../../utils/tokenUtils';

interface ProjectData {
    projectName: string;
    domain: string;
    projectDescription: string;
    selectedSkills: string[];
    selectedCategory: string;
    additionalSkills: string[];
    Requirements: string;
    WorkingModel: string;
    Planning: string;
    startDate: Date;
    endDate: Date;
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = getCookieValue('token');
                const headers = {
                    'Content-Type': 'application/json',
                    'x-auth-token': token || '',
                };

                const response = await fetch('/api/profile/project/userProjects', {
                    method: 'GET',
                    headers,
                });

                if (response.ok) {
                    const data = await response.json();
                    setProjects(data); // Update the state with fetched data
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="project-list">
            <h2>Project List</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.projectName}</h3>
                        <p>Domain: {project.domain}</p>
                        {/* Render other project details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;

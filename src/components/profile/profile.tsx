import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getCookieValue } from '../../utils/tokenUtils';
import ProjectForm from '../ProjectForm/ProjectForm';
import AddProjectButton from '../ProjectForm/Buttons/createProjectButton';
import BackToProfileButton from '../ProjectForm/Buttons/backToProfileButton';
import './profile.module.css'
const Profile = () => {
    const [user, setUser] = useState({ UserID: '', Email: '', Age: '' });
    const [loading, setLoading] = useState(true);
    const [showProjectForm, setShowProjectForm] = useState(false); // State to control form visibility
    const [showCreateProjectButton, setShowCreateProjectButton] = useState(true); // State to control form visibility


    const navigate = useNavigate();

    useEffect(() => {
        const token = getCookieValue('token');
        // console.log(token);
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token || '',
        };

        fetch('/api/profile', {
            method: 'GET',
            headers,
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch user data');
                }
            })
            .then(data => {
                setUser(data.user);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);

                // Redirect to /auth if an error occurs
                navigate('/auth');
            });
    }, [navigate]); // Include Navigate as a dependency to use it within the effect



    const handleCreateProject = () => {
        setShowCreateProjectButton(false);
        setShowProjectForm(true); // Show the form when the button is clicked
    }
    const handleBackToProfile = () => {
        setShowProjectForm(false);
        setShowCreateProjectButton(true);
    }

    return (
        <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            {loading ? (
                <p>Loading user data...</p>
            ) : user ? (
                <div>
                    {
                        showProjectForm ? (
                            <BackToProfileButton onClick={handleBackToProfile} /> // Use the button component
                        ) : (
                            showCreateProjectButton && <AddProjectButton onButtonClick={handleCreateProject} />
                        )
                    }
                        <div className="project-form-profile-container">
                            {showProjectForm && <ProjectForm />}
                            {/* <ProjectForm /> */}
                        </div>
                </div>
            ) : (
                // No user data, redirecting to /auth
                // This could also be a user-friendly message
                <p>Redirecting to authentication...</p>
            )}
        </div>
    );
}

export default Profile;


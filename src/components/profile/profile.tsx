import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookieValue } from '../../utils/tokenUtils';
import ProjectForm from '../ProjectForm/ProjectForm';
// import AddProjectButton from '../ProjectForm/Buttons/createProjectButton';
import BackToProfileButton from '../ProjectForm/Buttons/backToProfileButton';
import Navbar from './Navbar/navbar'; // Import the Navbar component
import './profile.module.css';
import ProfilePageContent from './Content/profilePageContent';


const Profile = () => {
    const [user, setUser] = useState({ UserID: '', Email: '', Age: '' });
    const [loading, setLoading] = useState(true);
    const [showProjectForm, setShowProjectForm] = useState(false);
    // const [showCreateProjectButton, setShowCreateProjectButton] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        
        const token = getCookieValue('token');
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token || '',
        };

        fetch('/api/profile', {
            method: 'GET',
            headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch user data');
                }
            })
            .then((data) => {
                setUser(data.user);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                navigate('/auth');
            });
    }, [navigate]);

    const handleCreateProject = () => {
        // setShowCreateProjectButton(false);
        setShowProjectForm(true);
    };
    const handleBackToProfile = () => {
        setShowProjectForm(false);
        // setShowCreateProjectButton(true);
    };

    return (
        <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            {loading ? (
                <p>Loading user data...</p>
            ) : user ? (
                <div >
                    <div className='navbar'>
                        {!showProjectForm && <Navbar handleCreateProject={handleCreateProject} />} {/* Include the Navbar component */}
                    </div>
                    {showProjectForm ? (
                        <BackToProfileButton onClick={handleBackToProfile} />
                    ) : (
                        <ProfilePageContent />
                    )
                    }
                    <div className="project-form-profile-container" >
                        {showProjectForm && <ProjectForm />}
                    </div>
                </div>
            ) : (
                <p>Redirecting to authentication...</p>
            )}
        </div>
    );
};

export default Profile;

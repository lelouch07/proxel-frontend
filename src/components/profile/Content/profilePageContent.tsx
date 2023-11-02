// import React from 'react';
import UserInfo from './Profile/userInfo'; // Adjust the import path as needed
import ProjectList from './Projects/projectList'; // Adjust the import path as needed
import './profilePageContent.css'
const ProfilePageContent = () => {
    return (
        <div className="profile-content">
            <div className="column userInfo">
                <UserInfo />
            </div>
            <div className="divider"></div>

            <div className="column projectList">
                <ProjectList />
            </div>
        </div>
    );
};
export default ProfilePageContent;
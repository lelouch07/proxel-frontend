import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../../../context/authContext';
import { removeCookie } from '../../../utils/tokenUtils';
// const authContext = useContext(AuthContext); // Define a variable for the context

const HomeNavBar = () => {
const navigate = useNavigate();

    const handleMessages = () => {
        navigate('/messages');
    };
    const { logout, user } = useAuth();
    const handleLogout = () => {
        logout();
        removeCookie('token');// Call the logout function from your AuthContext
        navigate('/auth');
    };

    const renderAuthButtons = () => {
        if (user!=null) {
            // User is logged in, show Logout option
            return (
                <li className="navbar-item">
                    <a onClick={handleLogout}>Logout</a>
                </li>
            );
        } else {
            // User is not logged in, show Login option
            console.log(user);
            return (
                <li className="navbar-item">
                    <a onClick={() => navigate('/auth')}>Login</a>
                </li>
            );
        }
    };

    return (
        <nav className="horizontal-navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a onClick={() => navigate('/')}>Explore</a>
                </li>
                <li className="navbar-item">
                    <a onClick={() => navigate('/profile')}>Profile</a>
                </li>
                <li className="navbar-item">
                    <a onClick={handleMessages}>
                        {/* <MessageLogo/> */}
                        messages
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#">Notifications</a>
                </li>
                {renderAuthButtons()} {/* Conditionally render Logout or Login based on user's authentication status */}
            </ul>
            <button className="search">Search</button>
        </nav>
    )
};
export default HomeNavBar;
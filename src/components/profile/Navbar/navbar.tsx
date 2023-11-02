import React from 'react';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../../../utils/tokenUtils';
interface NavbarProps {
    handleCreateProject: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ handleCreateProject }) => {
    const navigate=useNavigate();
    const Home=()=>{
        navigate('/');
    }
    const Logout=()=>{
        removeCookie('token');
        navigate('/auth');
    }
    const handleMessages=()=>{
        navigate('/messages');
    }
    return (
        <nav className="horizontal-navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a onClick={Home}>Explore</a></li>
                <li className="navbar-item"><a onClick={handleCreateProject}>Add Project</a></li>
                <li className="navbar-item"><a onClick={handleMessages}>Messages</a></li>
                <li className="navbar-item"><a href="#">Notifications</a></li>
                <li className="navbar-item"><a href="#" onClick={Logout}>LogOut</a></li>
            </ul>
            <button className="search">Search</button>
            {/* <button className="menu">Menu</button> */}
        </nav>
    );
};

export default Navbar;

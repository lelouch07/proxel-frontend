import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../../context/authContext'; // Import your AuthContext
import './Homepage.css'
import HomeNavBar from './HomeNavBar/homeNavBar';
import Categories from './Categories/categories';
// import {ReactComponent as MessageLogo} from '../../assets/211786_paperplane_icon.svg';
const Home: React.FC = () => {
   

    return (
    <div className='homepagecontainer'>
        <HomeNavBar/>
        <div className='below-Navbar'>
            <div className='categories-container'>
                <Categories/>
            </div>
        </div>
    </div>
    );
};

export default Home;
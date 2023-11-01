import React, { useState } from "react";
import './Homepage.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
    const [user,setuser] = useState(true);
    const navigate=useNavigate()
    console.log("Home Page");
    const home=()=>{
        setuser(!user);
    }
    const profile=()=>{
        navigate('/profile')
    }
    return (
        <div>
            <h1>Home Page</h1>
            {user ? null : <Navigate replace to="/auth" />}
            <button onClick={home} >Log In</button>
            <button onClick={profile} >profile</button>
        </div>
    )
};

export default Homepage;

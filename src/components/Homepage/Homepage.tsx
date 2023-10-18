import React, { useState } from "react";
import './Homepage.css';
import { Navigate } from 'react-router-dom';

const Homepage: React.FC = () => {
    const [user,setuser] = useState(true);
    console.log("Home Page");
    const home=()=>{
        setuser(!user);
    }
    return (
        <div>
            <h1>Home Page</h1>
            {user ? null : <Navigate replace to="/auth" />}
            <button onClick={home}>button</button>
        </div>
    )
};

export default Homepage;

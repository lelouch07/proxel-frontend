import React, { useState } from 'react';

const Signup: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Implement signup logic here (e.g., API call)
        console.log('Signup clicked');
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={handleSignup}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;

import React, { useState } from 'react';

const Login: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement login logic here (e.g., API call)
        console.log('Login clicked');
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>User ID:</label>
                    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;


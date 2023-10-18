import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getCookieValue } from '../../utils/tokenUtils';

const Profile = () => {
    const [user, setUser] = useState({ UserID: '', Email: '', Age: '' });
    const [loading, setLoading] = useState(true);
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

    return (
        <div>
            {loading ? (
                <p>Loading user data...</p>
            ) : user ? (
                <div>
                    <h2>Hello, {user.UserID}</h2>
                    <h2>Email, {user.Email}</h2>
                    <h2>Age, {user.Age}</h2>
                    {/* <h2>Email, {user.UserID}</h2> */}
                    {/* Add more user information here */}
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

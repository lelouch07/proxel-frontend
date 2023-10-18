import React, { useEffect, useState } from 'react';
import { getCookieValue } from '../../utils/tokenUtils';

const Profile = () => {
    const [user, setUser] = useState({ UserID: '' , Email:'', Age:''});
    const [loading, setLoading] = useState(true);

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
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                // Handle the error or redirect the user to a login page if needed.
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading user data...</p>
            ) : user ? (
                <div>
                    <h2>Hello, {user.UserID}</h2>
                    <p>Email: {user.Email}</p>
                    {/* Add more user information here */}
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
}

export default Profile;

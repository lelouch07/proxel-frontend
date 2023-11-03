// src/services/authService.ts

// import { setToken } from "../utils/tokenUtils";
// import {useAuth} from '../context/authContext'
export async function loginUser(userId: string, password: string): Promise<boolean> {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, password }),
        });

        if (response.ok) {
            // const {login}=useAuth();

            // const data = await response.json(); 
            // const user=data.Payload.user.id// Parse the response JSON
            // const token = data.token; // Assuming the token key is 'token' in your response
             // Set the JWT token in localStorage
            //  login(user);
            return true;// Login successful
        }

        return false; // Login failed
    } catch (error) {
        console.error('Error during login:', error);
        return false; // Login failed due to an error
    }
}

export async function signupUser(userId: string, email: string, age: number, password: string): Promise<boolean> {
    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, email, age, password }),
        });

        if (response.ok) {
            // const data = await response.json(); // Parse the response JSON
            // const token = data.token; // Assuming the token key is 'token' in your response
            // setToken(token); // Set the JWT token in localStorage
            return true; // Signup successful
        }

        return false; // Signup failed
    } catch (error) {
        console.error('Error during signup:', error);
        return false; // Signup failed due to an error
    }
}

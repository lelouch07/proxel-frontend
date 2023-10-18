import React, { useState ,useEffect} from 'react';
import { loginUser,signupUser } from '../../services/auth';
import './LoginSignup.css';
// import { getCookieValue } from '../../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';

const LoginSignup: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate=useNavigate();

    
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }
    }, []);

    const handleLogin = async () => {
        const success = await loginUser(userId, password);
        if (success) {
            // setLoggedIn(true);

            // const Token=getCookieValue('token');
            // console.log(Token);
            console.log("Logged in");
            navigate('/profile');
            
        } else {
            alert("Invalid Credentials");
        }
    };
    
    const handleSignup = async () => {
        const success = await signupUser(userId, email, parseInt(age), password);
        if (success) {
            console.log("Signed Up");
            navigate('/profile');
        } else {
            alert("User already exists or Invalid credentials");
        }
    };

    return (
        <div className="auth-container">
                
                <div>
                        <div className="container" id="container">
                            <div className="form-container sign-up-container">
                                <form action="#">
                                    <h1>Create Account</h1>
                                    <span>or use your email for registration</span>
                                    <input placeholder='UserID' type="text" value={userId} onChange={(e) => setUserId(e.target.value)}/>
                                    <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input placeholder='Age' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                            <button type="button" onClick={handleSignup}>Sign Up</button>
                                </form>
                            </div>
                            <div className="form-container sign-in-container">
                                <form action="#">
                                    <h1>Sign in</h1>
                                    <span>or use your account</span>
                                    <input placeholder='UserID' type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                                    <a href="#">Forgot your password?</a>
                                    <button type='button' onClick={handleLogin}>Sign In</button>
                                </form>
                            </div>
                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button className="ghost" id="signIn">Sign In</button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button className="ghost" id="signUp">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>            
        </div>
    );
};

export default LoginSignup;


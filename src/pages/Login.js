// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Styles.css';  // Adjust path to point to styles folder


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });

        // Simulate login success and redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <>

            {/* Login form */}
            <div class="allContent">
                <div class="fancyBG">
                    <img src="/logoo.jpg" alt="Logo" class="logo-image" />
                    <span class="header-text">Academic<br></br><br></br>Training<br></br><br></br> Center</span>
                </div>
                <div class="contentDiv">
                    <div className="login-container">
                        {/* Header with logo and text */}
                        <h2 class="loginTitle">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label class="loginLabel">
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    class="loginInput"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />

                                <label class="loginLabel">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    class="loginInput"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />

                            </div>
                            <button type="submit" class=".btn-primary">Login</button>

                            {/* Additional links */}
                            <div className="extra-buttons">
                                <Link to="/forgot-password" className="forgot-password">
                                    Forgot Password?
                                </Link>
                                <Link to="/signup" className="sign-up">
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




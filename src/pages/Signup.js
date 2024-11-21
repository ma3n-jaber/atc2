// src/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Styles.css';  // Adjust path to point to styles folder

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            if (formData.password !== formData.confirmPassword) {
                setMessage('Passwords do not match!');
            } else {
                setMessage('All fields are required!');
            }
        } else {
            setMessage('Sign-up successful!');
        }
    };

    const validateForm = () => {
        const { name, username, email, password, confirmPassword } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !username || !email || !password || !confirmPassword) {
            return false;
        }
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address!');
            return false;
        }
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    };

    return (
        <>
        <div class="allContent">
        <div class="fancyBG">
            <img src="/logoo.jpg" alt="Logo" class="logo-image" />
            <span class="header-text">Academic<br></br><br></br>Training<br></br><br></br> Center</span>
        </div>
        <div class="contentDivsignup">
        <div className="signup-container">
        <h2 class="loginTitle">SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        class="loginInput"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="username"
                        class="loginInput"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange} />
                    <input
                        type="email"
                        name="email"
                        class="loginInput"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange} />
                    <input
                        type="password"
                        name="password"
                        class="loginInput"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange} />
                    <input
                        type="password"
                        name="confirmPassword"
                        class="loginInput"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange} />
                    <div className="admin-contact">
                        Are you a Trainer? <a href="/admin-contact">Contact an admin</a>
                    </div>
                    <button type="submit" class="loginButton">Verify</button>
                </form>
                {message && <p>{message}</p>}
                <p>
                    Already have an account? <Link to="/">Login</Link> {/* Use Link for navigation */}
                </p>
            </div>
            </div>
            </div></>
    );
};

export default Signup;

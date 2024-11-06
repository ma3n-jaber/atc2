// src/pages/ViewProfile.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';

const ViewProfile = () => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("+962 7XXXXXXX");
    const [enrolledCourses, setEnrolledCourses] = useState(5);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleEditToggle = () => setEditMode(!editMode);
    const handleSave = () => {
        setEditMode(false);
        alert('Your information has been updated.');
    };
    const handleCancel = () => setEditMode(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            {/* Drawer Section */}
            <div>
            <Navbar />
            </div>
            <div class="viewPage">
                <div className="profile-content">
                    {/* Personal Info Section */}
                    <div className="user-info">
                        <h3>Personal Info</h3>
                        <div class="userImage"></div>

                        
                        <p><strong>Name:</strong> {editMode ? ( <input type="text" class="profileInput" value={name} onChange={(e) => setName(e.target.value)} />) : (<span>{name}</span>)}</p>
                        <p><strong>Email:</strong> {editMode ? ( <input type="email" class="profileInput" value={email} onChange={(e) => setEmail(e.target.value)} />) : (<span>{email}</span>)}</p>
                        {/* <p><strong>Enrolled Courses:</strong> {enrolledCourses}</p> */}

                        <p><strong>Address:</strong> {editMode ? ( <input type="text" class="profileInput" value={address} onChange={(e) => setAddress(e.target.value)} />) :(<span>{address}</span>)}</p>
                        <p><strong>Phone:</strong> {editMode ? ( <input type="text" class="profileInput" value={phone} onChange={(e) => setPhone(e.target.value)} />) :(<span>{phone}</span>)}</p>
                       
                       
                        <div className="actions">
                            {editMode ? (
                                <>
                                    <button onClick={handleSave} className="edit-btn">Save</button>
                                    <button onClick={handleCancel} className="edit-btn">Cancel</button>
                                </>
                            ) 
                            : 
                            (
                                <button onClick={handleEditToggle} className="edit-btn">Edit</button>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        
        </>
    );
};

export default ViewProfile;

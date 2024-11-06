// src/pages/Messages.js
import React, { useState } from 'react';
import '../../styles/Styles.css'; 
import Navbar from '../../components/Navbar';
import '../../styles/Messages.css';
const Messages = () => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Sample data for received messages and contacts
    const receivedMessages = [
        { id: 1, sender: 'Admin Yusef', content: 'Hello, how can I help?', timestamp: '10:30 AM' },
        { id: 2, sender: 'Trainer Ammar', content: 'Your last assignment was...', timestamp: 'Yesterday' },
        { id: 3, sender: 'Admin ....', content: 'Meeting is rescheduled to...', timestamp: '2 days ago' },
    ];

    const contacts = ['Admin  Yusef', 'Trainer Ammar', 'Admin ....'];

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            alert(`Message sent to ${selectedContact}: ${newMessage}`);
            setNewMessage(''); // Clear the input after sending
        }
    };

    return (
      <>
            <Navbar/>
     
        <div className="viewPage">
            {/* Left side: Received Messages */}
            <div className="info-box">
                <h3>Inbox</h3>
                {receivedMessages.map((message) => (
                    <div key={message.id} className="conversation-card">
                        <h4>{message.sender}</h4>
                        <p>{message.content}</p>
                        <small>{message.timestamp}</small>
                    </div>
                ))}
            </div>

            {/* Right side: Contacts and Messaging */}
            <div className="contact-section">
                <h3>Contacts</h3>
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index} onClick={() => handleContactClick(contact)}>
                            {contact}
                        </li>
                    ))}
                </ul>

                {selectedContact && (
                    <div className="message-input-section">
                        <h4>Message to: {selectedContact}</h4>
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message here..."
                        ></textarea>
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Messages;

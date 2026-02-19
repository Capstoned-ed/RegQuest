import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/HomePage.css';

const RequestDocument = ({ currentUser }) => {

    return (
        <div className="homepage-container">
            <Navbar currentUser={currentUser} />
            <div style={{ padding: '2rem' }}>
                <h1>Request Document Page</h1>
            </div>
        </div>
    );
};

export default RequestDocument;
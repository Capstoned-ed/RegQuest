import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/HomePage.css';

const TrackStatus = ({ currentUser }) => {
    return (
        <div className="homepage-container">
            <Navbar currentUser={currentUser} />
            <div style={{ padding: '2rem' }}>
                <h1>Track Status Page</h1>
            </div>
        </div>
    )
}

export default TrackStatus
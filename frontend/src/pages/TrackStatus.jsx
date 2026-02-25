import React, { useState } from 'react';
import { Check, Clock, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/TrackStatus.css';

const TrackStatus = ({ currentUser }) => {
    const [trackingId, setTrackingId] = useState('RQ-097323');
    const [isSearching, setIsSearching] = useState(false);

    const statusData = [
        { id: 1, title: 'Request Recieved', date: 'Feb 18, 2026', status: 'completed' },
        { id: 2, title: 'Processing', date: 'Pending', status: 'active' },
        { id: 3, title: 'Documents Printed', date: 'Pending', status: 'pending' },
        { id: 4, title: 'Ready for Pickup', date: 'Pending', status: 'pending' },
    ];

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            setIsSearching(true);
            setTimeout(() => {
                setIsSearching(false);
            }, 500);
        }
    };

    return (
        <div className="track-status-page">
            <Navbar currentUser={currentUser} />
            
            <main className="track-main-content">
                <div className="track-header">
                    <h1 className="track-title">Track Your Request</h1>
                    <p className="track-subtitle">Enter your tracking ID to see the current status of your documents.</p>
                </div>

                <div className="track-search-container">
                    <input 
                        type="text" 
                        className="track-input" 
                        placeholder="RQ-097323" 
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                <div className="track-result-card">
                    <div className="track-result-header">
                        <span className="track-id-label">Tracking ID</span>
                        <div>
                            <div className="track-estimate-label">Estimated Completion</div>
                            <h2 className="track-estimate-date">Feb 25, 2026</h2>
                        </div>
                    </div>
                    
                    <hr className="track-divider" />

                    <div className="timeline-container">
                        {statusData.map((item, index) => (
                            <div key={item.id} className={`timeline-step ${item.status}`}>
                                <div className="timeline-icon-container">
                                    {item.status === 'completed' ? (
                                        <Check size={14} strokeWidth={3} />
                                    ) : item.status === 'active' ? (
                                        <Clock size={14} strokeWidth={3} />
                                    ) : (
                                        <FileText size={14} strokeWidth={2.5} />
                                    )}
                                </div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-desc">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default TrackStatus;
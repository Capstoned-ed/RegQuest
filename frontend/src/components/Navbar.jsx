import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User as UserIcon } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ currentUser }) => {
    const location = useLocation();

    // Default user if not provided
    const user = currentUser || {
        name: "User",
        notifications: 0
    };

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar">
            <div className="logo-section">
                <span className="logo-text">RegQuest</span>
            </div>

            <div className="nav-links">
                <Link to="/home" className={isActive('/home')}>Home</Link>
                <Link to="/request-document" className={isActive('/request-document')}>Request Document</Link>
                <Link to="/track-status" className={isActive('/track-status')}>Track Status</Link>
            </div>

            <div className="user-section">
                <button className="notification-btn">
                    <Bell size={20} />
                    {user.notifications > 0 && (
                        <span className="notification-badge">{user.notifications}</span>
                    )}
                </button>
                <div className="user-profile">
                    <span style={{ marginRight: '10px', fontWeight: '600', color: '#4B4A4A' }}>
                        Hello, {user.name}
                    </span>
                    <button className="profile-btn">
                        <UserIcon size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

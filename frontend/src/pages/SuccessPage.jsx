import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hourglass } from 'lucide-react';
import Card from '../components/Card';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
    const location = useLocation();
    const firstName = location.state?.firstName || 'User';

    return (
        <main className="success-page-container">
            <div className="success-bg-image">
                <div className="success-bg-overlay"></div>
            </div>

            <Card className="success-card">
                <div className="success-icon-container">
                    <div className="success-icon-bg">
                        <Hourglass className="success-icon" />
                    </div>
                </div>

                <h1 className="success-title">Registration Successful!</h1>

                <p className="success-message">
                    Thank you for signing up, <span className="user-name-highlight">@{firstName}</span>
                </p>

                <p className="account-status">
                    Your account is currently on <span className="status-highlight">Pending</span>
                </p>

                <div className="info-box">
                    <h3 className="info-box-title">What to expect:</h3>
                    <ul className="info-list">
                        <li className="info-item">
                            <span>• <strong>Verification:</strong> Our team is reviewing your information</span>
                        </li>
                        <li className="info-item">
                            <span>• <strong>Access:</strong> You will receive an email once your account is activated.</span>
                        </li>
                        <li className="info-item">
                            <span>• <strong>Support:</strong> If your application is declined, you will receive instructions on how to provide valid documentation.</span>
                        </li>
                    </ul>
                </div>

                <Link to="/">
                    <button className="return-button">
                        Return to Login
                    </button>
                </Link>
            </Card>
        </main>
    );
};

export default SuccessPage;

import React from 'react';
import { Bell, User as UserIcon, FileText, Shield, Award, FileCheck } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../styles/HomePage.css';

const HomePage = () => {

    const navigate = useNavigate();

    const currentUser = {
        name: "User",
        role: "Student",
        studentId: "2023-0001",
        notifications: 3
    };

    const credentials = [
        {
            id: 1,
            title: "Transcript of Records",
            description: "Complete academic record of all courses taken and grades earned.",
            price: 150,
            icon: <FileText size={40} />
        },
        {
            id: 2,
            title: "Honorable Dismissal",
            description: "Transfer clearance document for moving to another institution.",
            price: 100,
            icon: <Shield size={40} />
        },
        {
            id: 3,
            title: "Authentication",
            description: "Official verification and authentication of academic documents.",
            price: 75,
            icon: <FileCheck size={40} />
        },
        {
            id: 4,
            title: "Evaluation",
            description: "Detailed academic assessment and progress evaluation report.",
            price: 75,
            icon: <FileText size={40} />
        },
        {
            id: 5,
            title: "Certification",
            description: "Official certificates for various academic achievements.",
            price: 150,
            icon: <Award size={40} />
        },
        {
            id: 6,
            title: "CAR",
            description: "Cumulative Academic Record summarizing your entire academic history.",
            price: 80,
            icon: <FileText size={40} />
        }
    ];

    const features = [
        {
            id: 1,
            icon: <Shield size={24} />,
            desc: "Your academic records are sensitive. We use enterprise-grade encryption to ensure your data remains private and secure."
        },
        {
            id: 2,
            icon: <FileText size={24} />,
            desc: "By digitizing the application process, we've reduced processing times by up to 50%, getting your documents to you faster."
        },
        {
            id: 3,
            icon: <UserIcon size={24} />,
            desc: "No more standing in long lines. Apply from home, pay online, and track your request status in real-time."
        }
    ];

    return (
        <div className="homepage-container">

            <Navbar currentUser={currentUser} />

            <header className="hero-section">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Your Credentials,<br />
                        <span className="hero-highlight">Fast & Secure</span>
                    </h1>
                    <p className="hero-subtitle">
                        Request your Transcript of Records, Diploma, and other documents online.
                        Skip the lines and track your request in real-time.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => navigate('/request-document')}>Start Request</button>
                        <button className="btn-outline" onClick={() => navigate('/track-status')}>Track Status</button>
                    </div>
                </div>
            </header>

            <section className="credentials-section">
                <h2 className="section-title">Available Credentials</h2>

                <div className="credentials-grid">
                    {credentials.map((cred) => (
                        <div key={cred.id} className="credential-card">
                            <div className="card-header-bg">
                                <div className="card-icon">{cred.icon}</div>
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">{cred.title}</h3>
                                <p className="card-desc">{cred.description}</p>

                                <div className="card-footer">
                                    <span className="price-tag">₱ {cred.price}</span>
                                    <button className="request-btn-small">Request →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="status-section">
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Check Your Request Status
                </h2>
                <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
                    Enter your reference number to see the current stage of your credential request.
                </p>

                <div className="status-check-container">
                    <input
                        type="text"
                        className="status-input"
                        placeholder="Enter Reference ID (e.g., RQ-000123)"
                    />
                    <button className="status-btn" onClick={() => navigate('/track-status')}>Track Now</button>
                </div>
            </section>

            <section className="features-section">
                <h2 className="section-title" style={{ textAlign: 'center', color: '#00007F' }}>
                    Streamlining the Credential Process
                </h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#6b7280' }}>
                    Our mission is to reduce physical queues and improve turnaround time for all registrar services.
                </p>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-item">
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                            </div>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px', color: '#94a3b8' }}>
                            A online portal to streamline the credential request process.
                        </p>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#64748b' }}>
                            © 2026 RegQuest. All rights reserved.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                            <li><Link to="/request-document" style={{ color: 'inherit', textDecoration: 'none' }}>Request Document</Link></li>
                            <li><Link to="/track-status" style={{ color: 'inherit', textDecoration: 'none' }}>Track Status</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li>How it Works</li>
                            <li>Safety Guidelines</li>
                            <li>FAQ</li>
                            <li>Contact US</li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;
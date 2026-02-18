import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      {/* Background Image with Overlay */}
      <div className="login-bg-image">
        <div className="login-bg-overlay"></div>
      </div>

      {/* Main Card Container */}
      <div className="login-card">

        {/* Left Panel - Welcome Section */}
        <div className="left-panel">
          {/* Decorative Background Elements */}
          <div className="decorative-circle circle-top-left"></div>
          <div className="decorative-circle circle-bottom-right"></div>

          <h2 className="welcome-title">
            Welcome<br />Back!
          </h2>
          <p className="welcome-subtitle">
            Login to access your account
          </p>
        </div>

        {/* Right Panel - Login Form */}
        <div className="right-panel">
          <div className="form-header">
            <h3 className="form-title">Log In</h3>
            <p className="form-subtitle">Please enter your credentials to continue</p>
          </div>

          <form className="login-form">
            {/* Student ID / Email Input */}
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Student ID
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email"
                  className="form-input"
                  placeholder="Enter your Student ID"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>

            <div className="form-footer">
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
              <p className="register-text">
                Don't have an account?{' '}
                <a href="#" className="register-link">
                  Register here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

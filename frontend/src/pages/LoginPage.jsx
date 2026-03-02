import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <main className="login-page-container">
      <div className="login-bg-image">
        <div className="login-bg-overlay"></div>
      </div>

      <section className="login-card">

        <section className="left-panel">
          <h2 className="welcome-title">
            Welcome<br />Back!
          </h2>
          <p className="welcome-subtitle">
            Login to access your account
          </p>
        </section>

        <section className="right-panel">
          <header className="form-header">
            <h3 className="form-title">Log In</h3>
            <p className="form-subtitle">Please enter your credentials to continue</p>
          </header>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Student ID
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <Mail className="icon-svg" />
                </div>
                <input
                  type="text"
                  id="email"
                  className="form-input"
                  placeholder="Enter your Student ID"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <Lock className="icon-svg" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="login-button" onClick={handleLogin}>
              Log In
            </button>

            <footer className="form-footer">
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
              <p className="register-text">
                Don't have an account?{' '}
                <Link to="/register" className="register-link">
                  Register here
                </Link>
              </p>
            </footer>
          </form>
        </section>
      </section>
    </main>
  );
};

export default LoginPage;


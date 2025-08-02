import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import SharedLayout from './components/SharedLayout';
import './Auth.css';

export default function Auth() {
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  
  // Signup form state
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);
  
  const { login, signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    const result = await login(loginEmail, loginPassword);
    
    if (result.success) {
      navigate('/');
    } else {
      setLoginError(result.error);
    }
    setLoginLoading(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');

    if (signupPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }
    if (signupPassword.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }

    setSignupLoading(true);

    const result = await signup(signupEmail, signupPassword);
    
    if (result.success) {
      navigate('/');
    } else {
      setSignupError(result.error);
    }
    setSignupLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoginError('');
    setSignupError('');
    setLoginLoading(true);
    setSignupLoading(true);

    const result = await signInWithGoogle();
    
    if (result.success) {
      navigate('/');
    } else {
      setLoginError(result.error);
      setSignupError(result.error);
    }
    setLoginLoading(false);
    setSignupLoading(false);
  };

  return (
    <SharedLayout 
      title="Welcome to The Solution Desk"
      subtitle="Access your professional business improvement tools"
    >
      <div className="auth-container">
        {/* Forms Side by Side - Always Visible */}
        <div className="auth-forms">
          {/* Login Form */}
          <div className="auth-form login-form">
            <h2 className="form-title">Sign In</h2>
            <p className="form-subtitle">Welcome back! Access your tools and continue optimizing.</p>
            
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <div className="forgot-password">
                  <button type="button" className="forgot-link">
                    Forgot Password?
                  </button>
                </div>
              </div>

              {loginError && <div className="error-message">{loginError}</div>}

              <button 
                type="submit" 
                className="btn btn-primary auth-submit-btn"
                disabled={loginLoading}
              >
                {loginLoading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button 
                type="button" 
                onClick={handleGoogleSignIn}
                className="btn btn-outline google-btn"
                disabled={loginLoading}
              >
                Continue with Google
              </button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="auth-form signup-form">
            <h2 className="form-title">Sign Up</h2>
            <p className="form-subtitle">Start optimizing your business processes with professional tools.</p>
            
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {signupError && <div className="error-message">{signupError}</div>}

              <button 
                type="submit" 
                className="btn btn-primary auth-submit-btn"
                disabled={signupLoading}
              >
                {signupLoading ? 'Creating...' : 'Sign Up'}
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              <button 
                type="button" 
                onClick={handleGoogleSignIn}
                className="btn btn-outline google-btn"
                disabled={signupLoading}
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>


      </div>
    </SharedLayout>
  );
}

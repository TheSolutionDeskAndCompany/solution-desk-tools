import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import SharedLayout from './components/SharedLayout';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await signup(email, password, name);
    
    if (result.success) {
      navigate('/'); // Redirect to home after successful signup
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    const result = await signInWithGoogle();
    
    if (result.success) {
      navigate('/'); // Redirect to home after successful signup
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <SharedLayout
      title="Create Your Account"
      subtitle="Join The Solution Desk"
      description="Start optimizing your business processes with professional improvement tools."
    >

      <div style={{
        background: 'var(--card-bg)',
        padding: 40,
        borderRadius: 12,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: 30, color: 'var(--text)' }}>
          🚀 Create Your Account
        </h1>

        {error && (
          <div style={{
            background: '#ffebee',
            color: '#c62828',
            padding: 12,
            borderRadius: 6,
            marginBottom: 20,
            textAlign: 'center',
            border: '1px solid #ffcdd2'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontWeight: 600,
              color: 'var(--text)'
            }}>
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 16,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                boxSizing: 'border-box'
              }}
              placeholder="Your full name"
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontWeight: 600,
              color: 'var(--text)'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 16,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                boxSizing: 'border-box'
              }}
              placeholder="your@email.com"
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontWeight: 600,
              color: 'var(--text)'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 16,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                boxSizing: 'border-box'
              }}
              placeholder="At least 6 characters"
            />
          </div>

          <div style={{ marginBottom: 30 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontWeight: 600,
              color: 'var(--text)'
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 16,
                background: 'var(--input-bg)',
                color: 'var(--text)',
                boxSizing: 'border-box'
              }}
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'var(--cyber-grey)' : 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
              color: loading ? 'var(--cyber-white)' : 'var(--cyber-panel)',
              border: 'none',
              padding: '14px 20px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: loading ? 'none' : '0 0 16px var(--cyber-neon), 0 0 4px var(--cyber-accent)',
              fontFamily: 'Share Tech Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            {loading ? '🔄 Creating Account...' : '✨ Create Account'}
          </button>

          <div style={{ 
            margin: '20px 0', 
            textAlign: 'center', 
            position: 'relative',
            color: 'var(--cyber-grey)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--cyber-accent), transparent)'
            }}></div>
            <span style={{
              background: 'var(--cyber-panel)',
              padding: '0 15px',
              fontSize: '14px'
            }}>OR</span>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'var(--cyber-grey)' : 'linear-gradient(90deg, var(--cyber-accent) 0%, var(--cyber-neon) 100%)',
              color: loading ? 'var(--cyber-white)' : 'var(--cyber-panel)',
              border: 'none',
              padding: '14px 20px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: loading ? 'none' : '0 0 16px var(--cyber-accent), 0 0 4px var(--cyber-neon)',
              fontFamily: 'Share Tech Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '20px'
            }}
          >
            {loading ? '🔄 Signing up...' : '🔍 Sign up with Google'}
          </button>
        </form>

        <div style={{ 
          textAlign: 'center', 
          marginTop: 30,
          padding: 20,
          background: 'var(--bg-secondary)',
          borderRadius: 8,
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: '0 0 15px 0', color: 'var(--text-secondary)' }}>
            Already have an account?
          </p>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
              padding: '10px 20px',
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              Login Instead
            </button>
          </Link>
        </div>

        <div style={{ 
          marginTop: 20,
          padding: 15,
          background: 'rgba(255, 52, 198, 0.1)',
          borderRadius: 8,
          fontSize: 14,
          color: 'var(--cyber-neon)',
          border: '1px solid rgba(255, 52, 198, 0.3)'
        }}>
          <strong>🎉 Welcome Bonus:</strong><br />
          New accounts get immediate access to our free tools with export functionality!
        </div>
      </div>

    </SharedLayout>
  );
}

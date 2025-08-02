import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
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

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: 80 }}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>

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
              background: loading ? '#ccc' : 'linear-gradient(90deg, #ff6b6b 0%, #ffa726 100%)',
              color: 'white',
              border: 'none',
              padding: '14px 20px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
            }}
          >
            {loading ? '🔄 Creating Account...' : '✨ Create Account'}
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
          background: '#f3e5f5',
          borderRadius: 8,
          fontSize: 14,
          color: '#6a1b9a'
        }}>
          <strong>🎉 Welcome Bonus:</strong><br />
          New accounts get immediate access to our free tools with export functionality!
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

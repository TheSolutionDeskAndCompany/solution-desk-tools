import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/'); // Redirect to home after successful login
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
          🔑 Login to Your Account
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

          <div style={{ marginBottom: 30 }}>
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? '#ccc' : 'linear-gradient(90deg, #7b61ff 0%, #7ae5ff 100%)',
              color: 'white',
              border: 'none',
              padding: '14px 20px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(123, 97, 255, 0.3)'
            }}
          >
            {loading ? '🔄 Logging in...' : '🚀 Login'}
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
            Don't have an account?
          </p>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
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
              Create New Account
            </button>
          </Link>
        </div>

        <div style={{ 
          marginTop: 20,
          padding: 15,
          background: '#e3f2fd',
          borderRadius: 8,
          fontSize: 14,
          color: '#1565c0'
        }}>
          <strong>Demo Accounts:</strong><br />
          • Free: any email + any password<br />
          • Premium: use "premium@test.com" + any password
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

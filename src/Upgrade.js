import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Upgrade() {
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = async () => {
    setLoading(true);
    
    // Mock Stripe payment process - replace with real Stripe integration
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful payment
      upgradeToPremium();
      
      alert('🎉 Payment successful! You now have premium access to all tools.');
      navigate('/fishbone'); // Redirect to premium tool
    } catch (error) {
      alert('Payment failed. Please try again.');
    }
    
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ maxWidth: '600px', marginTop: 80 }}>
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
          border: '1px solid var(--border)',
          textAlign: 'center'
        }}>
          <h1 style={{ color: 'var(--text)', marginBottom: 20 }}>
            🔐 Login Required
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 30 }}>
            Please login or create an account to upgrade to premium.
          </p>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(90deg, #7b61ff 0%, #7ae5ff 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Login
              </button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(90deg, #ff6b6b 0%, #ffa726 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: 80 }}>
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
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ color: 'var(--text)', marginBottom: 10 }}>
            ⭐ Upgrade to Premium
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 18 }}>
            Hello {user?.name}! Unlock all premium business tools.
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: 30,
          borderRadius: 12,
          marginBottom: 30
        }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>💎</div>
            <h2 style={{ margin: 0, fontSize: 28 }}>Premium Membership</h2>
            <div style={{ fontSize: 36, fontWeight: 'bold', margin: '10px 0' }}>
              $29<span style={{ fontSize: 18, fontWeight: 'normal' }}>/month</span>
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <h3 style={{ marginBottom: 15 }}>✨ Premium Features:</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
              <li>🐟 <strong>Advanced Fishbone Diagrams</strong> - Drag-and-drop root cause analysis</li>
              <li>📊 <strong>Statistical Control Charts</strong> - Process monitoring and analysis</li>
              <li>❓ <strong>5 Whys Analysis</strong> - Systematic problem solving</li>
              <li>🗺️ <strong>Advanced Process Mapping</strong> - Complex workflow design</li>
              <li>📥 <strong>High-Quality Exports</strong> - PNG, PDF, and SVG formats</li>
              <li>🔄 <strong>Unlimited Usage</strong> - No restrictions on tool access</li>
              <li>📧 <strong>Priority Support</strong> - Direct email assistance</li>
              <li>🆕 <strong>Early Access</strong> - New tools before public release</li>
            </ul>
          </div>
        </div>

        <div style={{
          background: '#e8f5e8',
          padding: 20,
          borderRadius: 8,
          marginBottom: 30,
          border: '1px solid #c8e6c9'
        }}>
          <h3 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>🎯 Perfect for:</h3>
          <div style={{ color: '#388e3c', fontSize: 14, lineHeight: 1.6 }}>
            • Business analysts and process improvement professionals<br />
            • Quality managers and Six Sigma practitioners<br />
            • Operations teams and project managers<br />
            • Consultants and business coaches
          </div>
        </div>

        <button
          onClick={handleUpgrade}
          disabled={loading}
          style={{
            width: '100%',
            background: loading ? '#ccc' : 'linear-gradient(90deg, #ff6b6b 0%, #ffa726 100%)',
            color: 'white',
            border: 'none',
            padding: '16px 20px',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
            marginBottom: 20
          }}
        >
          {loading ? '🔄 Processing Payment...' : '🚀 Upgrade Now - $29/month'}
        </button>

        <div style={{ 
          textAlign: 'center',
          fontSize: 14,
          color: 'var(--text-secondary)',
          lineHeight: 1.5
        }}>
          💳 Secure payment powered by Stripe<br />
          🔒 Cancel anytime • 30-day money-back guarantee<br />
          📧 Questions? Email support@thesolutiondesk.ca
        </div>

        <div style={{
          marginTop: 30,
          padding: 15,
          background: '#fff3e0',
          borderRadius: 8,
          fontSize: 14,
          color: '#ef6c00',
          textAlign: 'center'
        }}>
          <strong>🎉 Limited Time:</strong> First 100 customers get 50% off for 3 months!
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

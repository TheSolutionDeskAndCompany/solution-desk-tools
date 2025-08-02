import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Upgrade() {
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, createCheckoutSession, STRIPE_CONFIG } = useAuth();
  const navigate = useNavigate();

  const handleUpgrade = async (priceId) => {
    if (!user) {
      alert('Please log in first to upgrade your account.');
      navigate('/login');
      return;
    }

    setLoading(true);
    
    try {
      const result = await createCheckoutSession(priceId);
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      // Stripe Checkout will redirect automatically
      // Success handling will be done via webhook or return URL
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout process. Please try again.');
      setLoading(false);
    }
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
          background: 'var(--cyber-panel)',
          padding: 40,
          borderRadius: 12,
          boxShadow: '0 0 32px rgba(255, 52, 198, 0.2), 0 0 8px rgba(5, 217, 232, 0.1)',
          border: '1px solid rgba(255, 52, 198, 0.3)',
          textAlign: 'center'
        }}>
          <h1 style={{ color: 'var(--cyber-white)', marginBottom: 20, fontFamily: 'Share Tech Mono, monospace' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: 30 }}>
          <button
            onClick={() => handleUpgrade(STRIPE_CONFIG.MONTHLY_PRICE_ID)}
            disabled={loading}
            style={{
              background: loading ? 'var(--cyber-grey)' : 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
              color: loading ? 'var(--cyber-white)' : 'var(--cyber-panel)',
              border: 'none',
              padding: '18px 32px',
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: loading ? 'none' : '0 0 20px var(--cyber-neon), 0 0 6px var(--cyber-accent)',
              fontFamily: 'Share Tech Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            {loading ? '🔄 Processing...' : '🚀 Monthly Plan - $9.99/month'}
          </button>
          
          <button
            onClick={() => handleUpgrade(STRIPE_CONFIG.YEARLY_PRICE_ID)}
            disabled={loading}
            style={{
              background: loading ? 'var(--cyber-grey)' : 'linear-gradient(90deg, var(--cyber-accent) 0%, var(--cyber-neon) 100%)',
              color: loading ? 'var(--cyber-white)' : 'var(--cyber-panel)',
              border: 'none',
              padding: '18px 32px',
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: loading ? 'none' : '0 0 20px var(--cyber-accent), 0 0 6px var(--cyber-neon)',
              fontFamily: 'Share Tech Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            {loading ? '🔄 Processing...' : '💎 Yearly Plan - $99/year (Save 17%)'}
          </button>
        </div>

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

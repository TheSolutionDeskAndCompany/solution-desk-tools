import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function PaywallModal({ isOpen, onClose, toolName }) {
  const { isAuthenticated } = useAuth();

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(20, 27, 43, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{
        background: 'var(--cyber-panel)',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        border: '1px solid rgba(255, 52, 198, 0.3)',
        boxShadow: '0 0 32px rgba(255, 52, 198, 0.2), 0 0 8px rgba(5, 217, 232, 0.1)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            color: 'var(--cyber-grey)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            lineHeight: 1
          }}
        >
          ×
        </button>

        {/* Lock icon */}
        <div style={{
          fontSize: '64px',
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 8px var(--cyber-neon))'
        }}>
          🔒
        </div>

        <h2 style={{
          color: 'var(--cyber-white)',
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: '24px',
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '0.02em'
        }}>
          Premium Tool Access Required
        </h2>

        <p style={{
          color: 'var(--cyber-grey)',
          fontSize: '16px',
          lineHeight: 1.6,
          marginBottom: '25px'
        }}>
          {toolName ? `The ${toolName} tool` : 'This tool'} is part of our premium suite. 
          Upgrade to unlock all advanced business process improvement tools.
        </p>

        {/* Benefits list */}
        <div style={{
          textAlign: 'left',
          background: 'rgba(5, 217, 232, 0.1)',
          border: '1px solid rgba(5, 217, 232, 0.3)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '25px'
        }}>
          <h3 style={{
            color: 'var(--cyber-accent)',
            fontSize: '16px',
            marginBottom: '15px',
            fontFamily: 'Share Tech Mono, monospace',
            textTransform: 'uppercase'
          }}>
            ⚡ Premium Features:
          </h3>
          <ul style={{
            color: 'var(--cyber-white)',
            fontSize: '14px',
            lineHeight: 1.8,
            paddingLeft: '20px'
          }}>
            <li>🐟 Interactive Fishbone Diagrams</li>
            <li>📈 Advanced Control Charts</li>
            <li>❓ Five Whys Analysis Tool</li>
            <li>🗺️ Process Mapping Suite</li>
            <li>📊 Export to PNG/PDF</li>
            <li>☁️ Cloud Save & Sync</li>
            <li>🎯 Priority Support</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {!isAuthenticated ? (
            <>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
                  color: 'var(--cyber-panel)',
                  border: 'none',
                  padding: '14px 20px',
                  borderRadius: 999,
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  boxShadow: '0 0 16px var(--cyber-neon), 0 0 4px var(--cyber-accent)'
                }}>
                  🚀 Sign Up & Upgrade
                </button>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  background: 'transparent',
                  color: 'var(--cyber-accent)',
                  border: '1px solid var(--cyber-accent)',
                  padding: '12px 20px',
                  borderRadius: 999,
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}>
                  Already have an account? Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/upgrade" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
                  color: 'var(--cyber-panel)',
                  border: 'none',
                  padding: '14px 20px',
                  borderRadius: 999,
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  boxShadow: '0 0 16px var(--cyber-neon), 0 0 4px var(--cyber-accent)'
                }}>
                  💎 Upgrade to Premium
                </button>
              </Link>
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: 'var(--cyber-grey)',
                  border: '1px solid var(--cyber-grey)',
                  padding: '12px 20px',
                  borderRadius: 999,
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Share Tech Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}
              >
                Maybe Later
              </button>
            </>
          )}
        </div>

        {/* Pricing hint */}
        <p style={{
          color: 'var(--cyber-grey)',
          fontSize: '12px',
          marginTop: '20px',
          opacity: 0.8
        }}>
          Starting at $9.99/month • Cancel anytime • 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}

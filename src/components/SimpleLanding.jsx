import React from "react";
import { Link } from "react-router-dom";

export default function SimpleLanding() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #19192a 0%, #18152a 50%, #11111c 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      padding: '2rem'
    }}>
      {/* Logo Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        {/* Main Logo */}
        <img
          src="/the-solution-desk-logo.png"
          alt="The Solution Desk Logo"
          style={{
            width: '240px',
            height: 'auto',
            marginBottom: '2rem',
            filter: 'drop-shadow(0 0 25px #00fff7) drop-shadow(0 0 45px #ff22d6) drop-shadow(0 0 8px #fff200)',
            borderRadius: '20px',
            transition: 'filter 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.filter = 'drop-shadow(0 0 35px #00fff7) drop-shadow(0 0 60px #ff22d6) drop-shadow(0 0 12px #fff200)';
          }}
          onMouseLeave={(e) => {
            e.target.style.filter = 'drop-shadow(0 0 25px #00fff7) drop-shadow(0 0 45px #ff22d6) drop-shadow(0 0 8px #fff200)';
          }}
        />
        
        {/* Title */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          fontFamily: "'Orbitron', sans-serif",
          color: "#FF44CC",
          textShadow: "0 0 24px #FF44CC, 0 0 12px #0ff",
          letterSpacing: '3px',
          margin: 0
        }}>
          The Solution Desk
        </h1>
        
        {/* Tagline */}
        <p style={{
          fontSize: '1.2rem',
          color: '#a5f3fc',
          fontWeight: '300',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 0 1rem 0',
          lineHeight: '1.6'
        }}>
          Professional Business Process Improvement Tools
        </p>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '0.9rem',
          color: '#9ca3af',
          textAlign: 'center',
          maxWidth: '500px',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Empowering teams and small businesses with smart, data-driven tools for real business results.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Login Button */}
        <Link 
          to="/login"
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            backgroundColor: '#00fff7',
            color: '#18152a',
            fontWeight: '600',
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(0, 255, 247, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '120px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#33ffee';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 35px rgba(0, 255, 247, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#00fff7';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 247, 0.3)';
          }}
        >
          Login
        </Link>

        {/* Sign Up Button */}
        <Link 
          to="/signup"
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            backgroundColor: '#ff44cc',
            color: 'white',
            fontWeight: '600',
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(255, 68, 204, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '120px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ff77e9';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 35px rgba(255, 68, 204, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ff44cc';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 68, 204, 0.3)';
          }}
        >
          Sign Up
        </Link>

        {/* Free Tools Button */}
        <Link 
          to="/pareto"
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            backgroundColor: 'transparent',
            color: '#fff200',
            fontWeight: '600',
            fontSize: '1rem',
            textDecoration: 'none',
            border: '2px solid #fff200',
            boxShadow: '0 8px 25px rgba(255, 242, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '120px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff200';
            e.target.style.color = '#18152a';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 12px 35px rgba(255, 242, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#fff200';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 242, 0, 0.2)';
          }}
        >
          Free Tools
        </Link>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        fontSize: '0.8rem',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        &copy; {new Date().getFullYear()} The Solution Desk. All rights reserved.
      </div>
    </div>
  );
}

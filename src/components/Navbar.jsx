import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Small logo in top-left */}
        <Link to="/" className="navbar-logo-link">
          <img 
            src="/the-solution-desk-logo.png" 
            alt="The Solution Desk" 
            className="navbar-logo"
          />
        </Link>

        {/* Navigation links */}
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/pareto" className="nav-link">Tools</Link>
          
          {/* Theme toggle button */}
          <button 
            className="nav-button theme-btn"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          
          {user ? (
            <div className="navbar-user">
              <span className="user-greeting">Welcome, {user.displayName || user.email}</span>
              <button onClick={handleLogout} className="nav-button logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-auth">
              <Link to="/auth" className="nav-button login-btn">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

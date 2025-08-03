import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/GlobalStyles.css";
import "./SharedLayout.css";

export default function SharedLayout({ 
  title = "The Solution Desk", 
  subtitle = "Professional Business Process Improvement Tools",
  description = null,
  children,
  showActions = false,
  customActions = null,
  showTrust = false,
  isHeroMode = false // New prop to determine if this is the homepage
}) {
  return (
    <div className={`shared-layout-root ${isHeroMode ? 'hero-mode' : 'page-mode'}`}>
      {/* Navbar for non-hero pages */}
      {!isHeroMode && <Navbar />}
      
      {/* Background watermark logo */}
      {!isHeroMode && (
        <div className="background-watermark">
          <img 
            src="/the-solution-desk-logo.png" 
            alt="" 
            className="watermark-logo"
            aria-hidden="true"
          />
        </div>
      )}
      
      <div className={`shared-layout-content ${!isHeroMode ? 'with-navbar' : ''}`}>
        {/* Hero logo - Only on homepage */}
        {isHeroMode && (
          <img 
            src="/the-solution-desk-logo.png" 
            alt="The Solution Desk Logo" 
            className="shared-logo hero-logo" 
          />
        )}
        
        {/* Title - Bold with professional teal accent */}
        <h1 className={`shared-title ${isHeroMode ? 'hero-title' : 'page-title'}`}>{title}</h1>
        
        {/* Subtitle - Consistent styling */}
        <p className={`shared-subtitle ${isHeroMode ? 'hero-subtitle' : 'page-subtitle'}`}>{subtitle}</p>
        
        {/* Optional description */}
        {description && (
          <p className={`shared-description ${isHeroMode ? 'hero-description' : 'page-description'}`}>{description}</p>
        )}
        
        {/* Default action buttons (for homepage) */}
        {showActions && !customActions && (
          <div className="shared-actions">
            <Link to="/auth" className="btn btn-primary">Sign In</Link>
            <Link to="/pareto" className="btn btn-outline">Free Tools</Link>
          </div>
        )}
        
        {/* Custom action buttons */}
        {customActions && (
          <div className="shared-actions">
            {customActions}
          </div>
        )}
        
        {/* Main content area for tools/pages */}
        {children && (
          <div className="shared-main-content">
            {children}
          </div>
        )}
      </div>
      
      {/* Optional trust section */}
      {showTrust && (
        <div className="shared-trust">
          <p className="trust-text">Trusted by teams who value data-driven decisions</p>
        </div>
      )}
      
      {/* Footer - Always at bottom */}
      <footer className="shared-footer">
        © {new Date().getFullYear()} The Solution Desk. All rights reserved.
      </footer>
    </div>
  );
}

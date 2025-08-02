import React from "react";
import { Link } from "react-router-dom";

export default function Waitlist() {
  return (
    <div className="container" style={{maxWidth: 500, marginTop: 60, textAlign: "center"}}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      <h1>🚀 Get Early Access</h1>
      <p style={{fontSize: "1.1em", lineHeight: "1.6", marginBottom: 30}}>
        Want to be first in line when Solution Desk memberships go live?<br />
        Enter your email below for early access, launch offers, and updates.
      </p>
      
      {/* Placeholder for Google Form - Replace with actual form URL */}
      <div style={{
        background: "#f8f9fa", 
        border: "2px dashed #dee2e6", 
        borderRadius: 12, 
        padding: 40,
        marginBottom: 30
      }}>
        <h3 style={{color: "#6c757d", marginBottom: 15}}>📋 Google Form Integration</h3>
        <p style={{color: "#6c757d", fontSize: "0.95em", lineHeight: "1.5"}}>
          <strong>Next Steps:</strong><br/>
          1. Create a Google Form titled "Solution Desk Early Access Waitlist"<br/>
          2. Add fields for Name (optional) and Email (required)<br/>
          3. Copy the form's embed link<br/>
          4. Replace this placeholder with the iframe code
        </p>
        <div style={{marginTop: 20}}>
          <input 
            type="email" 
            placeholder="your.email@example.com" 
            style={{
              width: "100%", 
              padding: "12px 16px", 
              fontSize: "16px",
              border: "2px solid #dee2e6",
              borderRadius: 8,
              marginBottom: 15
            }}
            disabled
          />
          <button style={{
            background: "linear-gradient(90deg, #8f7bee 0%, #59ccf7 100%)",
            border: "none",
            borderRadius: 8,
            padding: "12px 28px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
            cursor: "not-allowed",
            opacity: 0.7
          }}>
            Join Waitlist (Demo)
          </button>
        </div>
      </div>

      {/* 
      Replace the above placeholder with this iframe once you have your Google Form:
      
      <iframe
        src="YOUR_GOOGLE_FORM_LINK_HERE"
        width="100%"
        height="480"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{ background: "#fff", borderRadius: 12, boxShadow: "0 1px 8px #0001" }}
        title="Waitlist"
      >Loading…</iframe>
      */}

      <div style={{marginTop: 32}}>
        <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
      </div>
      
      <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

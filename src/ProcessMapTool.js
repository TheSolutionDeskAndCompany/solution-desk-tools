import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProcessMapTool() {
  const [locked, setLocked] = useState(true); // Set to false for members
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", maxWidth: 700, margin: "40px auto" }}>
      {locked && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(30, 20, 60, 0.84)",
          color: "#fff",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backdropFilter: "blur(2px)",
        }}>
          <div style={{ fontSize: 28, fontWeight: "bold" }}>🔒 Members Only</div>
          <div style={{ margin: "18px 0", textAlign: "center", maxWidth: 300 }}>
            Unlock Process Mapping with a membership for visual workflow analysis.
          </div>
          <button style={{
            background: "linear-gradient(90deg, #8f7bee 0%, #59ccf7 100%)",
            border: "none",
            borderRadius: 8,
            padding: "12px 28px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",
            marginTop: 10,
            transition: "transform 0.2s ease"
          }}
            onMouseOver={(e) => e.target.style.transform = "translateY(-1px)"}
            onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            onClick={() => navigate("/waitlist")}
          >
            Join Waitlist
          </button>
        </div>
      )}

      <div className="container" style={locked ? {filter: "blur(2.5px)", pointerEvents: "none", maxWidth: 700, marginTop: 40} : {maxWidth: 700, marginTop: 40}}>
        <div className="nav-bar">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="back-button" title="Back to Home">
              ← Home
            </button>
          </Link>
        </div>
        <h1>Process Mapping Tool</h1>
        <p>
          Create visual workflow diagrams to analyze and optimize your business processes.<br/>
          Map out steps, decision points, and identify improvement opportunities.
        </p>
        
        <div style={{
          background: "#f8f9fa", 
          border: "2px dashed #dee2e6", 
          borderRadius: 12, 
          padding: 40,
          textAlign: "center",
          marginBottom: 30
        }}>
          <div style={{fontSize: "3em", marginBottom: 15}}>🗺️</div>
          <h3 style={{color: "#6c757d", marginBottom: 15}}>Process Mapping Tool</h3>
          <p style={{color: "#6c757d", fontSize: "1.1em", lineHeight: "1.5", maxWidth: 400, margin: "0 auto"}}>
            Visual workflow designer with drag-and-drop interface, process steps, decision points, 
            and optimization recommendations coming soon.
          </p>
        </div>

        <div style={{marginTop: 26}}>
          <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
        </div>
        
        <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
          &copy; {new Date().getFullYear()} The Solution Desk
        </footer>
      </div>
    </div>
  );
}

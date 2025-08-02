import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FiveWhysTool() {
  const [problem, setProblem] = useState("");
  const [whys, setWhys] = useState(["", "", "", "", ""]);

  const handleWhyChange = (idx, value) => {
    setWhys(ws => {
      const next = [...ws];
      next[idx] = value;
      return next;
    });
  };

  return (
    <div className="container" style={{maxWidth: 600, marginTop: 40}}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      <h1>5 Whys Analysis Tool</h1>
      <p>
        Identify the root cause of a problem by repeatedly asking "Why?".  
        Enter your problem and answer each "Why?" below.
      </p>
      <div style={{marginBottom: 24}}>
        <label>
          <b>Problem Statement:</b>
          <input
            value={problem}
            onChange={e => setProblem(e.target.value)}
            style={{width:"100%", fontSize:"1.1em", margin: "8px 0 16px"}}
            placeholder="What is the main problem?"
          />
        </label>
      </div>
      {whys.map((why, i) => (
        <div key={i} style={{marginBottom:14}}>
          <label>
            <b>Why {i+1}?</b>
            <input
              value={why}
              onChange={e => handleWhyChange(i, e.target.value)}
              style={{width:"100%", fontSize:"1.05em", marginTop:4}}
              placeholder={`Answer for Why ${i+1}`}
            />
          </label>
        </div>
      ))}
      <div style={{background:"#f5f6fb", padding:18, borderRadius:10, marginTop:24, boxShadow:"0 1px 6px #0001"}}>
        <b>Analysis Chain:</b>
        <ol style={{margin:"12px 0 0 18px", padding:0}}>
          <li><b>Problem:</b> {problem || <span style={{color:"#aaa"}}>Not entered</span>}</li>
          {whys.map((why, i) =>
            why ? <li key={i}><b>Why {i+1}:</b> {why}</li> : null
          )}
        </ol>
        {whys.every(w => w) && (
          <div style={{marginTop:12, color:"#43b884", fontWeight:600}}>
            <b>Root Cause:</b> {whys[whys.length-1]}
          </div>
        )}
      </div>
      <div style={{marginTop: 26}}>
        <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
      </div>
      <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

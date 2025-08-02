import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParetoChartTool from "./ParetoChartTool";
import FishboneTool from "./FishboneTool";
import ControlChartTool from "./ControlChartTool";
import FiveWhysTool from "./FiveWhysTool";
import About from "./About";
import "./App.css";

function Home() {
  // Light/dark mode state
  const [dark, setDark] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  // Switch theme on toggle
  function toggleTheme() {
    setDark(d => !d);
    document.body.classList.toggle("dark-mode");
  }
  // Set theme class on load/toggle
  if (dark) document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");

  return (
    <div className="container" style={{marginTop: 60, maxWidth: 480}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1 style={{fontWeight: 900, letterSpacing: "-1px", fontSize: "2.4rem", margin: 0}}>
          Solution Desk: Business Tools
        </h1>
        <button
          className="theme-toggle"
          aria-label="Toggle light/dark mode"
          style={{
            fontSize: 24,
            background: dark ? "#f9c846" : "#232323",
            border: "none",
            borderRadius: "50%",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.09)",
            color: dark ? "#232323" : "#fff",
            cursor: "pointer"
          }}
          onClick={toggleTheme}
        >
          {dark ? "🌞" : "🌙"}
        </button>
      </div>
      <p style={{margin: "12px 0 22px 0", fontSize: "1.15rem", color: "var(--muted)"}}>
        Powerful calculators and automation for businesses and teams.
        <br />
        <span style={{fontSize: "1rem", color: "#949494"}}>Built by Amber @ The Solution Desk</span>
      </p>
      <ul style={{listStyle:"none", padding:0, marginTop:32}}>
        <li style={{marginBottom:12}}>
          <Link to="/pareto" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Pareto">📊</span> Pareto Chart Generator 
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#d1f7c4", color:"#388e3c", padding:"3px 10px", borderRadius: "1em"}}>Free</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/fishbone" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Fishbone">🐟</span> Fishbone Diagram
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#d1f7c4", color:"#388e3c", padding:"3px 10px", borderRadius: "1em"}}>New!</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/control" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Control Chart">📈</span> Control Charts
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#d1f7c4", color:"#388e3c", padding:"3px 10px", borderRadius: "1em"}}>New!</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/5whys" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="5 Whys">🤔</span> 5 Why Analysis
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#d1f7c4", color:"#388e3c", padding:"3px 10px", borderRadius: "1em"}}>New!</span>
            </button>
          </Link>
        </li>
        <li>
          <button className="tool-btn locked-btn" disabled>
            <span role="img" aria-label="Process Map">🗺️</span> Process Mapping
            <span style={{marginLeft:10, fontSize:"0.8em", background:"#ffebee", color:"#b71c1c", padding:"3px 10px", borderRadius: "1em"}}>Members Only</span>
            <span role="img" aria-label="Lock" style={{marginLeft:6}}>🔒</span>
          </button>
        </li>
      </ul>
      <div style={{marginTop: 26}}>
        <button className="tool-btn" style={{background:"#ffd600", color:"#232323", fontWeight:700, fontSize:"1.11em"}}>
          Unlock All Tools
        </button>
        <p style={{color:"var(--muted)", fontSize:"0.98em", marginTop: 10}}>
          Get instant access to all advanced tools.<br />
          <Link to="/pricing" style={{color:"#ffd600"}}>View pricing</Link>
        </p>
      </div>
      <div style={{marginTop: 28, fontSize: "1rem"}}>
        <Link to="/about" style={{color:"var(--muted)"}}>About / Contact</Link>
      </div>
      <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pareto" element={<ParetoChartTool />} />
        <Route path="/fishbone" element={<FishboneTool />} />
        <Route path="/control" element={<ControlChartTool />} />
        <Route path="/5whys" element={<FiveWhysTool />} />
        <Route path="/about" element={<About />} />
        {/* More tools/routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;

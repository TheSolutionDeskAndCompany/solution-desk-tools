import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParetoChartTool from "./ParetoChartTool";
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
          Solution Desk: Six Sigma Tools
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
        Powerful, free Six Sigma calculators and charts for modern process improvement.
        <br />
        <span style={{fontSize: "1rem", color: "#949494"}}>By Amber @ The Solution Desk</span>
      </p>
      <ul style={{listStyle:"none", padding:0, marginTop:32}}>
        <li style={{marginBottom:12}}>
          <Link to="/pareto" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Pareto">📊</span> Pareto Chart Generator
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <button className="tool-btn" disabled>
            <span role="img" aria-label="Fishbone">🐟</span> Fishbone Diagram (Coming Soon)
          </button>
        </li>
        <li style={{marginBottom:12}}>
          <button className="tool-btn" disabled>
            <span role="img" aria-label="Control Chart">📈</span> Control Charts (Coming Soon)
          </button>
        </li>
        <li>
          <button className="tool-btn" disabled>
            <span role="img" aria-label="5 Why">🧐</span> 5 Why Analysis (Coming Soon)
          </button>
        </li>
      </ul>
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
        <Route path="/about" element={<About />} />
        {/* More tools/routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { AuthProvider } from "./AuthContext";
import ParetoChartTool from "./ParetoChartTool";
import PremiumFishboneTool from "./PremiumFishboneTool";
import ControlChartTool from "./ControlChartTool";
import FiveWhysTool from "./FiveWhysTool";
import ProcessMapTool from "./ProcessMapTool";
import ProcessMapperTool from "./ProcessMapperTool";
import Login from "./Login";
import Signup from "./Signup";
import Upgrade from "./Upgrade";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Waitlist from "./Waitlist";
import About from "./About";
import "./App.css";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, isAuthenticated, hasPaidAccess, logout } = useAuth();

  return (
    <div className="container" style={{marginTop: 60, maxWidth: 480}}>
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h1>The Solution Desk</h1>
            <p className="tagline">Professional Business Process Improvement Tools</p>
          </div>
          <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
            {isAuthenticated ? (
              <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                <span style={{ color: 'var(--text)', fontSize: 14 }}>
                  👋 {user?.name} {hasPaidAccess && <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>⭐ Premium</span>}
                </span>
                <button 
                  onClick={logout}
                  style={{
                    background: 'transparent',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    padding: '6px 12px',
                    borderRadius: 4,
                    fontSize: 12,
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 10 }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: 'linear-gradient(90deg, #7b61ff 0%, #7ae5ff 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontSize: 14,
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
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
            <button 
              className="dark-mode-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>
      
      <div style={{marginBottom: 30}}>
        <h2 style={{fontWeight: 700, fontSize: "1.8rem", margin: "20px 0 10px 0"}}>🆓 Free Tools Available Now</h2>
        <p style={{color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.5}}>
          Get started with our powerful free tools. No signup required for basic features.
        </p>
      </div>

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
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#ffebee", color:"#b71c1c", padding:"3px 10px", borderRadius: "1em"}}>Members Only</span>
              <span role="img" aria-label="Lock" style={{marginLeft:6}}>🔒</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/control" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Control Chart">📈</span> Control Charts
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#ffebee", color:"#b71c1c", padding:"3px 10px", borderRadius: "1em"}}>Members Only</span>
              <span role="img" aria-label="Lock" style={{marginLeft:6}}>🔒</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/5whys" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="5 Whys">🤔</span> 5 Why Analysis
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#ffebee", color:"#b71c1c", padding:"3px 10px", borderRadius: "1em"}}>Members Only</span>
              <span role="img" aria-label="Lock" style={{marginLeft:6}}>🔒</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/process-map" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Process Map">🗺️</span> Process Mapping
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#ffebee", color:"#b71c1c", padding:"3px 10px", borderRadius: "1em"}}>Members Only</span>
              <span role="img" aria-label="Lock" style={{marginLeft:6}}>🔒</span>
            </button>
          </Link>
        </li>
        <li style={{marginBottom:12}}>
          <Link to="/process-mapper" style={{textDecoration:"none"}}>
            <button className="tool-btn">
              <span role="img" aria-label="Process Mapper">🔄</span> Process Mapper
              <span style={{marginLeft:10, fontSize:"0.8em", background:"#e8f5e8", color:"#2e7d32", padding:"3px 10px", borderRadius: "1em"}}>Free</span>
            </button>
          </Link>
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
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pareto" element={<ParetoChartTool />} />
          <Route path="/fishbone" element={<PremiumFishboneTool />} />
          <Route path="/control" element={<ControlChartTool />} />
          <Route path="/5whys" element={<FiveWhysTool />} />
          <Route path="/process-map" element={<ProcessMapTool />} />
          <Route path="/process-mapper" element={<ProcessMapperTool />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/about" element={<About />} />
          {/* More tools/routes can go here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

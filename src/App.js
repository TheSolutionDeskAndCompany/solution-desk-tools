import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { AuthProvider } from "./AuthContext";
import Logo from "./components/Logo";
import LandingPage from "./components/LandingPage";
import SimpleLanding from "./components/SimpleLanding";
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
    <div className="landing-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      paddingTop: '2rem',
      paddingBottom: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <header className="header" style={{
        width: '100%',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <Logo size="large" />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            textAlign: 'center', 
            flex: 1,
            minWidth: '300px'
          }}>
            <h1 className="glow" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontFamily: 'Share Tech Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}>The Solution Desk</h1>
            <p className="tagline" style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: 'var(--cyber-grey)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>Professional Business Process Improvement Tools</p>
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
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
                    color: 'var(--cyber-panel)',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'Share Tech Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    boxShadow: '0 0 8px var(--cyber-neon)'
                  }}>
                    Login
                  </button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  <button style={{
                    background: 'linear-gradient(90deg, var(--cyber-accent) 0%, var(--cyber-yellow) 100%)',
                    color: 'var(--cyber-panel)',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'Share Tech Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    boxShadow: '0 0 8px var(--cyber-accent)'
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
      
      <section className="free-tools-section" style={{
        width: '100%',
        maxWidth: '800px',
        marginBottom: '4rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontWeight: 700, 
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', 
          margin: '0 0 1.5rem 0',
          fontFamily: 'Share Tech Mono, monospace',
          color: 'var(--cyber-white)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em'
        }}>🆓 Free Tools Available Now</h2>
        <p style={{
          color: 'var(--cyber-grey)', 
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
          lineHeight: 1.6,
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Get started with our powerful free tools. No signup required for basic features.
        </p>
      </section>

      <section className="tools-grid" style={{
        width: '100%',
        maxWidth: '900px',
        marginBottom: '4rem'
      }}>
        <ul style={{
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
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
      </section>

      <section className="cta-section" style={{
        width: '100%',
        maxWidth: '700px',
        textAlign: 'center',
        marginBottom: '4rem',
        padding: '3rem 2rem',
        background: 'rgba(255, 52, 198, 0.1)',
        border: '1px solid rgba(255, 52, 198, 0.3)',
        borderRadius: '12px',
        boxShadow: '0 0 32px rgba(255, 52, 198, 0.2)'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
          fontWeight: 700, 
          marginBottom: '1.5rem',
          fontFamily: 'Share Tech Mono, monospace',
          color: 'var(--cyber-white)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em'
        }}>🚀 Unlock All Premium Tools</h3>
        <p style={{
          color: 'var(--cyber-grey)', 
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
          lineHeight: 1.6, 
          marginBottom: '2rem',
          maxWidth: '500px',
          margin: '0 auto 2rem auto'
        }}>
          Get access to advanced Fishbone Diagrams, Control Charts, Five Whys Analysis, and more.
        </p>
        <Link to="/upgrade" style={{textDecoration: 'none'}}>
          <button className="cta-btn" style={{
            background: 'linear-gradient(90deg, var(--cyber-neon) 0%, var(--cyber-accent) 100%)',
            color: 'var(--cyber-panel)',
            border: 'none',
            padding: '16px 32px',
            borderRadius: 999,
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'Share Tech Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            boxShadow: '0 0 20px var(--cyber-neon), 0 0 6px var(--cyber-accent)',
            marginBottom: '1rem'
          }}>
            💎 Upgrade to Premium - $9.99/month
          </button>
        </Link>
        <p style={{
          color: 'var(--cyber-grey)', 
          fontSize: '0.9rem', 
          marginTop: '1rem'
        }}>
          Get instant access to all advanced tools.<br />
          <Link to="/upgrade" style={{color: 'var(--cyber-yellow)'}}>View pricing options</Link>
        </p>
      </section>
      
      <footer style={{
        width: '100%',
        textAlign: 'center',
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 52, 198, 0.2)'
      }}>
        <div style={{marginBottom: '1.5rem'}}>
          <Link to="/about" style={{
            color: 'var(--cyber-accent)', 
            textDecoration: 'none',
            fontSize: '1rem',
            fontFamily: 'Share Tech Mono, monospace'
          }}>About / Contact</Link>
        </div>
        <p style={{
          fontSize: '0.9rem', 
          color: 'var(--cyber-grey)',
          fontFamily: 'Share Tech Mono, monospace'
        }}>
          &copy; {new Date().getFullYear()} The Solution Desk - Professional Business Process Improvement
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SimpleLanding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
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

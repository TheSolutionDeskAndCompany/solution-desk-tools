import React from "react";
import { FaGithub } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #19192a 0%, #18152a 50%, #11111c 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '1.5rem'
      }}>
        {/* Logo */}
        <img
          src="/the-solution-desk-logo.png"
          alt="The Solution Desk Logo"
          style={{
            width: '144px',
            height: '144px',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 0 16px rgba(50,255,255,0.8))',
            borderRadius: '20px'
          }}
        />
        {/* Title */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '0.5rem',
          fontFamily: "'Orbitron', sans-serif",
          color: "#FF44CC",
          textShadow: "0 0 24px #FF44CC, 0 0 12px #0ff",
          letterSpacing: '2px',
        }}>
          The Solution Desk
        </h1>
        {/* Tagline */}
        <div style={{
          fontSize: '1rem',
          color: '#a5f3fc',
          fontWeight: '300',
          marginBottom: '0.5rem',
          maxWidth: '28rem',
          textAlign: 'center',
          fontFamily: "Inter, sans-serif"
        }}>
          Professional Business Process Improvement Tools
        </div>
        {/* About / Trust signals */}
        <div style={{
          fontSize: '0.75rem',
          color: '#9ca3af',
          marginBottom: '0.75rem',
          textAlign: 'center',
          maxWidth: '32rem'
        }}>
          <span>
            Empowering teams and small businesses with smart, data-driven tools for real business results. Transparent, privacy-focused, Canadian-built.
          </span>
        </div>
        {/* Auth Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '0.75rem',
            backgroundColor: '#00fff7',
            color: '#18152a',
            fontWeight: '600',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Login
          </button>
          <button style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '0.75rem',
            backgroundColor: '#ff44cc',
            color: 'white',
            fontWeight: '600',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Main */}
      <main style={{
        flex: '1',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 1rem'
      }}>
        {/* Free Tools Section */}
        <section style={{ width: '100%', maxWidth: '48rem', marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#22d3ee',
            marginBottom: '0.25rem',
            fontFamily: "'Orbitron', sans-serif"
          }}>
            Free Tools Available Now
          </h2>
          <div style={{
            fontSize: '0.875rem',
            color: '#d1d5db',
            marginBottom: '1.25rem'
          }}>
            Try our powerful tools with no signup required for basic features.
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <ToolCard
              name="Pareto Chart Generator"
              description="Statistical analysis & PNG export."
              href="/pareto"
              badge="Free"
            />
            <ToolCard
              name="Process Mapper"
              description="Visual process design, drag & drop."
              href="/process-mapper"
              badge="Free"
            />
          </div>
        </section>

        {/* Premium Tools Section */}
        <section style={{ width: '100%', maxWidth: '48rem' }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#f472b6',
            marginBottom: '0.5rem',
            fontFamily: "'Orbitron', sans-serif"
          }}>
            Premium Tools (Members Only)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <ToolCard
              name="Fishbone Diagram"
              description="Root cause analysis for teams."
              href="/fishbone"
              badge="Members Only"
              locked
            />
            <ToolCard
              name="Control Charts"
              description="Statistical process control & monitoring."
              href="/control"
              badge="Members Only"
              locked
            />
            <ToolCard
              name="5 Whys Analysis"
              description="Systematic problem solving."
              href="/5whys"
              badge="Members Only"
              locked
            />
            <ToolCard
              name="Advanced Process Mapping"
              description="Collaboration, advanced export, and more."
              href="/process-map"
              badge="Members Only"
              locked
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        paddingBottom: '1.25rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <a href="https://github.com/TheSolutionDeskAndCompany" target="_blank" rel="noopener noreferrer"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
            <FaGithub style={{ display: 'inline' }} /> GitHub
          </a>
          <span>•</span>
          <a href="/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy</a>
          <span>•</span>
          <a href="/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} The Solution Desk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// ToolCard component
function ToolCard({ name, description, href, badge, locked }) {
  return (
    <a href={href} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: '1rem',
      backgroundColor: 'rgba(22, 22, 44, 0.8)',
      border: '1px solid #2e2e47',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '1.5rem',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.2s'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{
          fontSize: '0.875rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          backgroundColor: locked ? 'rgba(236, 72, 153, 0.8)' : 'rgba(34, 211, 238, 0.8)',
          color: locked ? 'white' : '#111827',
          padding: '0.125rem 0.5rem',
          borderRadius: '0.25rem'
        }}>
          {badge}
        </span>
        {locked && (
          <span style={{
            marginLeft: '0.25rem',
            color: '#fcd34d',
            fontSize: '1.125rem'
          }} title="Members Only">🔒</span>
        )}
      </div>
      <div style={{
        fontSize: '1.125rem',
        fontWeight: '600',
        marginBottom: '0.25rem',
        fontFamily: "'Orbitron', sans-serif"
      }}>{name}</div>
      <div style={{
        fontSize: '0.875rem',
        color: '#d1d5db'
      }}>{description}</div>
    </a>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./Homepage.css";

export default function Homepage() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <Helmet>
        <title>The Solution Desk – Business Process Tools</title>
        <link rel="icon" href="/the-solution-desk-logo.png" />
        <meta name="description" content="Professional business process improvement tools. Pareto analysis, root cause analysis, and process mapping made simple." />
      </Helmet>
      {/* Sticky CTA Bar */}
      {showStickyBar && (
        <div className="sticky-cta-bar">
          <div className="sticky-content">
            <span className="sticky-text">Ready to try the Pareto Analysis tool?</span>
            <div className="sticky-actions">
              <Link to="/pareto" className="btn btn-primary btn-small">Try Demo</Link>
              <Link to="/auth" className="btn btn-outline btn-small">Start Free</Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Above the Fold Value */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <img 
                src="/the-solution-desk-logo.png" 
                alt="The Solution Desk Logo" 
                className="hero-logo" 
              />
              <h1 className="hero-title">Turn Business Problems Into Actionable Insights</h1>
              <p className="hero-subtitle">
                Professional process improvement tools that help teams identify root causes, 
                prioritize solutions, and drive measurable results.
              </p>
              
              <div className="hero-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Get insights in under 5 minutes</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📊</span>
                  <span>Professional-grade analysis tools</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Focus on what matters most</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <Link to="/auth" className="btn btn-primary btn-large">
                  START FREE TRIAL
                </Link>
                <Link to="/pareto" className="btn btn-outline btn-large">
                  TRY DEMO
                </Link>
              </div>
              
              <p className="hero-note">
                ✓ No credit card required &nbsp;•&nbsp; ✓ Setup in 30 seconds
              </p>
            </div>
            
            <div className="hero-demo">
              <div className="demo-frame">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="demo-title">Live Pareto Analysis</span>
                </div>
                <div className="demo-content">
                  <div className="demo-chart">
                    <div className="chart-title">Customer Complaints by Category</div>
                    <div className="chart-bars">
                      <div className="bar bar-1">
                        <span className="bar-value">42%</span>
                        <span className="bar-label">Slow Response</span>
                      </div>
                      <div className="bar bar-2">
                        <span className="bar-value">28%</span>
                        <span className="bar-label">Wrong Info</span>
                      </div>
                      <div className="bar bar-3">
                        <span className="bar-value">20%</span>
                        <span className="bar-label">Hard to Reach</span>
                      </div>
                      <div className="bar bar-4">
                        <span className="bar-value">10%</span>
                        <span className="bar-label">Other</span>
                      </div>
                    </div>
                    <div className="chart-line"></div>
                    <div className="chart-insight">
                      <span className="insight-text">💡 Fix response time + accuracy = 70% fewer complaints</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="early-access-section">
        <div className="container">
          <div className="early-access-content">
            <h2 className="section-title">Be One of the First to Try</h2>
            <p className="early-access-text">
              "I started The Solution Desk because I couldn't find simple, affordable business tools for real people. 
              I built the exact process improvement tools I always wanted—practical, easy to use, and made for 
              everyday teams, not just big companies or expensive consultants."
            </p>
            <p className="founder-attribution">— Amber Boudreau, Founder</p>
            <p className="early-access-note">
              Join as an early user and help shape the future of business process improvement tools.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Available Tools</h2>
          <div className="features-compact">
            <div className="live-tools">
              <div className="tool-card">
                <div className="tool-icon">📊</div>
                <div className="tool-info">
                  <h3>Pareto Analysis</h3>
                  <p>Identify the 20% of issues causing 80% of problems</p>
                </div>
              </div>
              <div className="tool-card">
                <div className="tool-icon">⚡</div>
                <div className="tool-info">
                  <h3>Quick Insights</h3>
                  <p>Get actionable recommendations in minutes</p>
                  <span className="tool-badge">Free</span>
                </div>
              </div>
            </div>
            <div className="coming-soon-teaser">
              <h4>Advanced Tools Coming Soon</h4>
              <p>Root Cause Analysis • Process Mapping • Workflow Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="pricing-cta-section">
        <div className="container">
          <div className="pricing-table">
            <div className="pricing-card free-plan">
              <div className="plan-header">
                <h3 className="plan-name">Free</h3>
                <div className="plan-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/forever</span>
                </div>
                <p className="plan-description">Perfect for trying it out</p>
              </div>
              <ul className="plan-features">
                <li>✓ Pareto Analysis Tool</li>
                <li>✓ Basic data visualization</li>
                <li>✓ Export to PDF</li>
                <li>✓ No usage limits</li>
                <li>✓ Email support</li>
              </ul>
              <Link to="/auth" className="btn btn-primary btn-full">Start Free Trial</Link>
            </div>
            
            <div className="pricing-card pro-plan">
              <div className="plan-header">
                <h3 className="plan-name">Pro</h3>
                <div className="plan-price">
                  <span className="price-amount">$29</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">When you need more tools</p>
              </div>
              <ul className="plan-features">
                <li>✓ Everything in Free</li>
                <li>✓ Root Cause Analysis</li>
                <li>✓ Process Mapping</li>
                <li>✓ Advanced visualizations</li>
                <li>✓ Data history & templates</li>
                <li>✓ Priority email support</li>
                <li>✓ Advanced export formats</li>
              </ul>
              <Link to="/upgrade" className="btn btn-primary btn-full">Start Pro Trial</Link>
            </div>
          </div>
          
          <p className="pricing-guarantee">
            No credit card required • Cancel anytime • Free plan stays free forever
          </p>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="homepage-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-section">
                <h4>Product</h4>
                <Link to="/pareto">Pareto Analysis</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/auth">Sign Up</Link>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <a href="mailto:help@thesolutiondesk.ca">Contact Support</a>
                <Link to="/help">Help Center</Link>
                <Link to="/about">About</Link>
              </div>
              <div className="footer-section">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/security">Security</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-tagline">Built by Amber Boudreau. Private, practical business tools—no fluff.</p>
              <p className="footer-copyright">&copy; {new Date().getFullYear()} The Solution Desk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

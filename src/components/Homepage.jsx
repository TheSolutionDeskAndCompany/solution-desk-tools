import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EmailCapturePopup from './EmailCapturePopup';
import "./Homepage.css";
import "./Homepage-new-sections.css";
import "./Homepage-button-overrides.css";

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
              <h1 className="hero-title">Slash Your Team's Process Bottlenecks in Minutes—No Consultants Needed</h1>
              <p className="hero-subtitle">
                Get instant, actionable insights without spreadsheets or meetings. Built for busy teams who need real solutions, not more complexity.
              </p>
              
              <div className="hero-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">⚡</span>
                  <span>Solve 80% of problems with 20% of the effort</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>No more guessing what to fix first</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💡</span>
                  <span>Results in minutes, not months</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <Link to="/auth" className="btn btn-primary btn-large">
                  Start Free Trial
                </Link>
                <Link to="/pareto" className="btn btn-secondary btn-large">
                  Try Sample Tool
                </Link>
              </div>
              
              <p className="hero-note">
                ✓ No credit card required &nbsp;•&nbsp; ✓ 500+ teams onboarded &nbsp;•&nbsp; ✓ Setup in 30 seconds
              </p>
            </div>
            
            <div className="hero-demo">
              <div className="demo-frame">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="demo-title">Try It Yourself - No Signup Needed</span>
                </div>
                <div className="demo-content">
                  <Link to="/pareto" className="demo-screenshot-link">
                    <div className="demo-screenshot">
                      <div className="screenshot-overlay">
                        <div className="overlay-button">
                          <span className="button-icon">▶</span>
                          <span className="button-text">Try It Now</span>
                        </div>
                      </div>
                      <div className="screenshot-caption">
                        <div className="caption-title">Instant Free Tool</div>
                        <div className="caption-subtitle">See your team's bottlenecks now</div>
                      </div>
                    </div>
                  </Link>
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

      {/* Trust & Proof Section */}
      <section className="trust-proof-section">
        <div className="container">
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Teams Onboarded</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,400+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Finally, a tool that actually helps us prioritize what to fix first. We reduced customer complaints by 60% in just 3 weeks."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Sarah Chen</div>
                  <div className="author-title">Operations Manager, TechFlow</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"No more endless meetings about what's broken. This tool shows us exactly where to focus our energy."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Mike Rodriguez</div>
                  <div className="author-title">Team Lead, DataPoint Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Simple enough for our whole team to use, powerful enough to drive real results. Game changer."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Lisa Park</div>
                  <div className="author-title">Director, Streamline Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="founder-story-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-text">
              <h2 className="section-title">Why I Built This</h2>
              <p className="founder-quote">
                "I was tired of watching small teams struggle with the same problems over and over. 
                The existing tools were either too complex, too expensive, or built for enterprises only."
              </p>
              <p className="founder-story">
                I started The Solution Desk because every team deserves access to professional-grade 
                process improvement tools—without the consultant fees or months of training. 
                These are the exact tools I always wanted when I was managing teams.
              </p>
              <p className="founder-attribution">— Amber Boudreau, Founder</p>
            </div>
            <div className="founder-image">
              <div className="founder-avatar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Upload Your Data</h3>
                <p>Paste your issues, complaints, or problems. No complex setup required.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Get Instant Analysis</h3>
                <p>Our tool identifies which problems are causing 80% of your headaches.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Take Action</h3>
                <p>Focus on the top 2-3 issues and watch your problems disappear.</p>
              </div>
            </div>
          </div>
          
          <div className="value-props">
            <h3 className="value-title">Why Teams Choose The Solution Desk</h3>
            <div className="value-grid">
              <div className="value-item">
                <span className="value-icon">⚡</span>
                <div className="value-text">
                  <h4>5-Minute Setup</h4>
                  <p>No training, no consultants, no complexity</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">💰</span>
                <div className="value-text">
                  <h4>Fraction of Consultant Cost</h4>
                  <p>Get professional insights for $29/month, not $5,000</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">📈</span>
                <div className="value-text">
                  <h4>Proven Results</h4>
                  <p>Teams see 40-70% improvement in 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="pricing-cta-section">
        <div className="container">
          <div className="pricing-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="pricing-subtitle">Start free, upgrade when you need more power</p>
            

          </div>
          
          <div className="pricing-table">
            <div className="pricing-card free-plan">
              <div className="plan-header">
                <h3 className="plan-name">Free</h3>
                <div className="plan-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/forever</span>
                </div>
                <p className="plan-description">Perfect for getting started</p>
              </div>
              <ul className="plan-features">
                <li className="feature-included">✓ Pareto Analysis Tool</li>
                <li className="feature-included">✓ Basic data visualization</li>
                <li className="feature-included">✓ Export to PDF</li>
                <li className="feature-included">✓ Up to 3 analyses per month</li>
                <li className="feature-included">✓ Email support</li>
                <li className="feature-locked">🔒 Root Cause Analysis</li>
                <li className="feature-locked">🔒 Process Mapping</li>
                <li className="feature-locked">🔒 Unlimited analyses</li>
              </ul>
              <Link to="/auth" className="btn btn-primary btn-full">Start Free</Link>
            </div>
            
            <div className="pricing-card pro-plan">
              <div className="plan-header">
                <h3 className="plan-name">Pro Monthly</h3>
                <div className="plan-price">
                  <span className="price-amount">$29</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">Unlock workflow automation & advanced features</p>
              </div>
              <ul className="plan-features">
                <li className="feature-included">✓ Everything in Free</li>
                <li className="feature-included">✓ Root Cause Analysis</li>
                <li className="feature-included">✓ Process Mapping</li>
                <li className="feature-included">✓ Advanced visualizations</li>
                <li className="feature-included">✓ Unlimited analyses</li>
                <li className="feature-included">✓ Data history & templates</li>
                <li className="feature-included">✓ Priority support</li>
                <li className="feature-included">✓ Team collaboration</li>
              </ul>
              <Link to="/upgrade" className="btn btn-primary btn-full">Start Monthly</Link>
            </div>
            
            <div className="pricing-card pro-plan featured">
              <div className="plan-badge">Best Value</div>
              <div className="plan-header">
                <h3 className="plan-name">Pro Yearly</h3>
                <div className="plan-price">
                  <span className="price-amount">$24</span>
                  <span className="price-period">/month</span>
                  <span className="price-note">billed annually</span>
                </div>
                <p className="plan-description">Save 2 months with annual billing</p>
              </div>
              <ul className="plan-features">
                <li className="feature-included">✓ Everything in Free</li>
                <li className="feature-included">✓ Root Cause Analysis</li>
                <li className="feature-included">✓ Process Mapping</li>
                <li className="feature-included">✓ Advanced visualizations</li>
                <li className="feature-included">✓ Unlimited analyses</li>
                <li className="feature-included">✓ Data history & templates</li>
                <li className="feature-included">✓ Priority support</li>
                <li className="feature-included">✓ Team collaboration</li>
              </ul>
              <Link to="/upgrade" className="btn btn-primary btn-full">Start Yearly</Link>
            </div>
          </div>
          
          <div className="why-upgrade">
            <h3 className="upgrade-title">Why upgrade to Pro?</h3>
            <div className="upgrade-benefits">
              <div className="benefit">
                <span className="benefit-icon">🚀</span>
                <span>Solve complex problems with Root Cause Analysis</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">📊</span>
                <span>Visualize entire processes with Process Mapping</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">⚡</span>
                <span>Unlimited analyses for growing teams</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">👥</span>
                <span>Collaborate with your team in real-time</span>
              </div>
            </div>
          </div>
          
          <p className="pricing-guarantee">
            ✓ No credit card required for free plan • ✓ Cancel anytime • ✓ 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Streamlined Footer */}
      <footer className="homepage-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/about">About</Link>
              <a href="mailto:help@thesolutiondesk.ca">Support</a>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
            <div className="footer-bottom">
              <p className="footer-tagline">Built by Amber Boudreau. Professional business tools for real teams.</p>
              <p className="footer-copyright">&copy; {new Date().getFullYear()} The Solution Desk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Email Capture Popup */}
      <EmailCapturePopup />
    </div>
  );
}

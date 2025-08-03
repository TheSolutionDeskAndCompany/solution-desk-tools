import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'service-description', title: 'Description of Service' },
    { id: 'user-accounts', title: 'User Accounts' },
    { id: 'subscription-payment', title: 'Subscription and Payment Terms' },
    { id: 'acceptable-use', title: 'Acceptable Use' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'data-privacy', title: 'Data and Privacy' },
    { id: 'service-availability', title: 'Service Availability' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes-terms', title: 'Changes to Terms' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'contact-info', title: 'Contact Information' }
  ];

  return (
    <div className="container" style={{ maxWidth: '1000px', marginTop: 40 }}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>

      <div style={{
        background: 'var(--card-bg)',
        padding: 40,
        borderRadius: 12,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{ color: 'var(--text)', marginBottom: 30 }}>
          📋 Terms of Service
        </h1>
        
        {/* Quick Navigation */}
        <div style={{
          background: 'rgba(32, 201, 151, 0.05)',
          border: '1px solid rgba(32, 201, 151, 0.1)',
          borderRadius: 8,
          padding: '20px',
          marginBottom: 30
        }}>
          <h3 style={{ color: 'var(--text)', marginBottom: 15, fontSize: '1.1rem' }}>Quick Navigation</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '8px'
          }}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  color: 'var(--accent-cyan)',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(32, 201, 151, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
        
        <div style={{ color: 'var(--text)', lineHeight: 1.6, fontSize: 16 }}>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <h2 id="acceptance">Acceptance of Terms</h2>
          <p>
            By accessing and using The Solution Desk ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 id="service-description">Description of Service</h2>
          <p>
            The Solution Desk provides online business process improvement tools including Pareto Charts, Fishbone Diagrams, Control Charts, 5 Whys Analysis, and Process Mapping tools.
          </p>

          <h2 id="user-accounts">User Accounts</h2>
          <ul>
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>One person or entity may not maintain more than one free account</li>
          </ul>

          <h2 id="subscription-payment">Subscription and Payment Terms</h2>
          <h3>Free Tier</h3>
          <ul>
            <li>Access to Pareto Chart and Process Mapper tools</li>
            <li>Basic export functionality</li>
            <li>No payment required</li>
          </ul>

          <h3>Premium Subscription</h3>
          <ul>
            <li>Monthly subscription fee of $29/month</li>
            <li>Access to all premium tools and features</li>
            <li>Advanced export capabilities</li>
            <li>Priority customer support</li>
            <li>Automatic renewal unless cancelled</li>
          </ul>

          <h3>Payment Processing</h3>
          <ul>
            <li>Payments are processed securely through Stripe</li>
            <li>All fees are non-refundable except as required by law</li>
            <li>We offer a 30-day money-back guarantee for new subscriptions</li>
            <li>You may cancel your subscription at any time</li>
          </ul>

          <h2 id="acceptable-use">Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Share your account credentials with others</li>
            <li>Use automated tools to access the service without permission</li>
            <li>Reverse engineer or attempt to extract source code</li>
          </ul>

          <h2 id="intellectual-property">Intellectual Property</h2>
          <ul>
            <li>The Solution Desk retains all rights to the service and its content</li>
            <li>You retain ownership of data and content you create using our tools</li>
            <li>You grant us a limited license to process your data to provide the service</li>
            <li>Our trademarks and logos may not be used without permission</li>
          </ul>

          <h2 id="data-privacy">Data and Privacy</h2>
          <ul>
            <li>Your use of the service is governed by our Privacy Policy</li>
            <li>We may collect usage data to improve our services</li>
            <li>You are responsible for backing up your important data</li>
            <li>We may delete inactive accounts after extended periods of non-use</li>
          </ul>

          <h2 id="service-availability">Service Availability</h2>
          <ul>
            <li>We strive to maintain high service availability but cannot guarantee 100% uptime</li>
            <li>We may perform maintenance that temporarily affects service availability</li>
            <li>We reserve the right to modify or discontinue features with notice</li>
          </ul>

          <h2 id="limitation-liability">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, The Solution Desk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>

          <h2 id="termination">Termination</h2>
          <ul>
            <li>You may terminate your account at any time</li>
            <li>We may terminate accounts that violate these terms</li>
            <li>Upon termination, your access to premium features will cease</li>
            <li>Data may be deleted after account termination</li>
          </ul>

          <h2 id="changes-terms">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or service notifications.
          </p>

          <h2 id="governing-law">Governing Law</h2>
          <p>
            These terms are governed by the laws of Canada. Any disputes will be resolved in the courts of Canada.
          </p>

          <h2 id="contact-info">Contact Information</h2>
          <p>
            For questions about these terms, please contact us:
          </p>
          <div style={{
            background: 'var(--bg-secondary)',
            padding: 20,
            borderRadius: 8,
            marginTop: 20
          }}>
            <strong>The Solution Desk</strong><br />
            Email: <a href="mailto:info@thesolutiondesk.ca" style={{color: 'var(--accent-cyan)'}}>info@thesolutiondesk.ca</a><br />
            Website: <a href="https://thesolutiondesk.ca" style={{color: 'var(--accent-cyan)', textDecoration: 'none'}}>thesolutiondesk.ca</a><br />
            Support: <a href="mailto:info@thesolutiondesk.ca" style={{color: 'var(--accent-cyan)'}}>info@thesolutiondesk.ca</a>
          </div>

          <div style={{
            marginTop: 30,
            padding: 20,
            background: 'var(--card-background)',
            border: '1px solid var(--accent-cyan)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>📞</div>
            <div>
              <h3 style={{ color: 'var(--text-primary)', margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '600' }}>Need Help?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                Our support team is here to help! Email us at{' '}
                <a href="mailto:info@thesolutiondesk.ca" style={{color: 'var(--accent-cyan)', textDecoration: 'none'}}>info@thesolutiondesk.ca</a>{' '}
                or visit our help center for tutorials and FAQs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        <div style={{ marginBottom: 20 }}>
          <Link to="/" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', margin: '0 15px' }}>Home</Link>
          <Link to="/privacy" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', margin: '0 15px' }}>Privacy Policy</Link>
          <Link to="/about" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', margin: '0 15px' }}>About</Link>
          <a href="mailto:info@thesolutiondesk.ca" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', margin: '0 15px' }}>Contact</a>
        </div>
        <div>&copy; {new Date().getFullYear()} The Solution Desk</div>
      </footer>
    </div>
  );
}

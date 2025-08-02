import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: 40 }}>
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
          🔒 Privacy Policy
        </h1>
        
        <div style={{ color: 'var(--text)', lineHeight: 1.6, fontSize: 16 }}>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <h2>Information We Collect</h2>
          <p>
            The Solution Desk ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, use our services, or contact us for support.
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and password</li>
            <li><strong>Payment Information:</strong> Billing details processed securely through Stripe</li>
            <li><strong>Usage Data:</strong> Information about how you use our tools and services</li>
            <li><strong>Analytics:</strong> Website usage data collected through Google Analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to improve our tools</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website and services (e.g., Stripe for payments, Google Analytics for usage analysis)</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential communications</li>
            <li>Request a copy of your data</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
          </p>

          <h2>Third-Party Services</h2>
          <ul>
            <li><strong>Stripe:</strong> Payment processing (subject to Stripe's privacy policy)</li>
            <li><strong>Google Analytics:</strong> Website analytics (subject to Google's privacy policy)</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at:
          </p>
          <div style={{
            background: 'var(--bg-secondary)',
            padding: 20,
            borderRadius: 8,
            marginTop: 20
          }}>
            <strong>The Solution Desk</strong><br />
            Email: privacy@thesolutiondesk.ca<br />
            Website: thesolutiondesk.ca
          </div>
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

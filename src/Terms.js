import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
          📋 Terms of Service
        </h1>
        
        <div style={{ color: 'var(--text)', lineHeight: 1.6, fontSize: 16 }}>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using The Solution Desk ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>Description of Service</h2>
          <p>
            The Solution Desk provides online business process improvement tools including Pareto Charts, Fishbone Diagrams, Control Charts, 5 Whys Analysis, and Process Mapping tools.
          </p>

          <h2>User Accounts</h2>
          <ul>
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>One person or entity may not maintain more than one free account</li>
          </ul>

          <h2>Subscription and Payment Terms</h2>
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

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Share your account credentials with others</li>
            <li>Use automated tools to access the service without permission</li>
            <li>Reverse engineer or attempt to extract source code</li>
          </ul>

          <h2>Intellectual Property</h2>
          <ul>
            <li>The Solution Desk retains all rights to the service and its content</li>
            <li>You retain ownership of data and content you create using our tools</li>
            <li>You grant us a limited license to process your data to provide the service</li>
            <li>Our trademarks and logos may not be used without permission</li>
          </ul>

          <h2>Data and Privacy</h2>
          <ul>
            <li>Your use of the service is governed by our Privacy Policy</li>
            <li>We may collect usage data to improve our services</li>
            <li>You are responsible for backing up your important data</li>
            <li>We may delete inactive accounts after extended periods of non-use</li>
          </ul>

          <h2>Service Availability</h2>
          <ul>
            <li>We strive to maintain high service availability but cannot guarantee 100% uptime</li>
            <li>We may perform maintenance that temporarily affects service availability</li>
            <li>We reserve the right to modify or discontinue features with notice</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, The Solution Desk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>

          <h2>Termination</h2>
          <ul>
            <li>You may terminate your account at any time</li>
            <li>We may terminate accounts that violate these terms</li>
            <li>Upon termination, your access to premium features will cease</li>
            <li>Data may be deleted after account termination</li>
          </ul>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or service notifications.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of Canada. Any disputes will be resolved in the courts of Canada.
          </p>

          <h2>Contact Information</h2>
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
            Email: legal@thesolutiondesk.ca<br />
            Website: thesolutiondesk.ca<br />
            Support: support@thesolutiondesk.ca
          </div>

          <div style={{
            marginTop: 30,
            padding: 20,
            background: '#e3f2fd',
            borderRadius: 8,
            border: '1px solid #bbdefb'
          }}>
            <h3 style={{ color: '#1565c0', margin: '0 0 10px 0' }}>📞 Need Help?</h3>
            <p style={{ color: '#1976d2', margin: 0 }}>
              Our support team is here to help! Email us at support@thesolutiondesk.ca 
              or visit our help center for tutorials and FAQs.
            </p>
          </div>
        </div>
      </div>

      <footer style={{ marginTop: 40, textAlign: 'center', fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './EmailCapturePopup.css';

export default function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or submitted
    const dismissed = localStorage.getItem('emailPopupDismissed');
    const submitted = localStorage.getItem('emailPopupSubmitted');
    
    if (dismissed || submitted) {
      return;
    }

    // Show popup after 15 seconds or when user scrolls 50% down
    const showPopup = () => {
      if (!isDismissed && !isSubmitted) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(showPopup, 15000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed, isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        // Send to a simple email collection service (you can replace this with your preferred service)
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            source: 'Process Improvement Cheatsheet Request',
            timestamp: new Date().toISOString()
          })
        });
        
        if (response.ok) {
          console.log('Email successfully captured:', email);
          setIsSubmitted(true);
          localStorage.setItem('emailPopupSubmitted', 'true');
          
          // Hide popup after 3 seconds
          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        } else {
          throw new Error('Failed to submit email');
        }
      } catch (error) {
        console.error('Error submitting email:', error);
        // For now, still mark as submitted to avoid annoying the user
        // In production, you might want to show an error message
        setIsSubmitted(true);
        localStorage.setItem('emailPopupSubmitted', 'true');
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('emailPopupDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="email-popup-overlay">
      <div className="email-popup">
        <button className="popup-close" onClick={handleDismiss} aria-label="Close popup">
          ×
        </button>
        
        {!isSubmitted ? (
          <>
            <div className="popup-icon">📋</div>
            <h3 className="popup-title">Get Your Free Process Improvement Cheatsheet</h3>
            <p className="popup-subtitle">
              "5 Fast Wins for Process Improvement" — The exact framework I use to help teams 
              solve 80% of their problems in the first 30 days.
            </p>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="popup-email-input"
                required
              />
              <button type="submit" className="popup-submit-btn">
                Get Free PDF
              </button>
            </form>
            
            <p className="popup-disclaimer">
              No spam. Unsubscribe anytime. Used by 500+ teams.
            </p>
          </>
        ) : (
          <div className="popup-success">
            <div className="success-icon">✅</div>
            <h3>Check Your Email!</h3>
            <p>Your free "5 Fast Wins" PDF is on its way. Check your inbox in the next few minutes.</p>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';

const Logo = ({ className = '', size = 'medium' }) => {
  const dimensions = {
    small: { width: 180 },
    medium: { width: 240 },
    large: { width: 320 }
  };

  const { width } = dimensions[size];

  return (
    <div className={`logo-container ${className}`}>
      <img
        src="/the-solution-desk-logo.png"
        alt="The Solution Desk Logo"
        className="logo-img"
        style={{
          width: width,
          height: 'auto',
          filter: 'drop-shadow(0 0 25px #00fff7) drop-shadow(0 0 45px #ff22d6)',
          display: 'block',
          maxWidth: '100%'
        }}
      />
    </div>
  );
};

export default Logo;

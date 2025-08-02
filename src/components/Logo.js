import React from 'react';

const Logo = ({ className = '', size = 'medium' }) => {
  const dimensions = {
    small: { width: 240, height: 80 },
    medium: { width: 320, height: 100 },
    large: { width: 480, height: 140 }
  };

  const { width, height } = dimensions[size];

  return (
    <div className={`logo-container ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 12px #05d9e8) drop-shadow(0 0 24px #ff34c6) drop-shadow(0 0 4px #fff200)',
          background: 'transparent',
          display: 'block'
        }}
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M10 10h20v20h-20z" fill="none" stroke="#05d9e8" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="20" cy="20" r="2" fill="#05d9e8" opacity="0.5"/>
          </pattern>
          
          {/* Glow filters */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="400" height="120" fill="#141b2b"/>
        <rect width="400" height="120" fill="url(#circuit)" opacity="0.2"/>
        
        {/* Shield outline */}
        <path 
          d="M200 50 L320 100 L320 200 Q320 280 200 350 Q80 280 80 200 L80 100 Z" 
          fill="none" 
          stroke="#05d9e8" 
          strokeWidth="4" 
          filter="url(#neonGlow)"
        />
        
        {/* Inner shield glow */}
        <path 
          d="M200 60 L310 105 L310 200 Q310 270 200 330 Q90 270 90 200 L90 105 Z" 
          fill="rgba(5, 217, 232, 0.1)" 
          stroke="none"
        />
        
        {/* Desk */}
        <rect x="140" y="80" width="120" height="8" fill="#05d9e8" filter="url(#neonGlow)"/>
        <rect x="145" y="88" width="15" height="40" fill="#05d9e8" filter="url(#neonGlow)"/>
        <rect x="240" y="88" width="15" height="40" fill="#05d9e8" filter="url(#neonGlow)"/>
        
        {/* Desk drawer */}
        <rect x="170" y="90" width="60" height="6" fill="#05d9e8" opacity="0.7"/>
        <circle cx="215" cy="93" r="2" fill="#05d9e8"/>
        
        {/* Lamp base */}
        <ellipse cx="180" cy="78" rx="12" ry="4" fill="#05d9e8" filter="url(#neonGlow)"/>
        
        {/* Lamp arm */}
        <path 
          d="M180 74 Q170 60 160 40 Q155 30 165 25" 
          fill="none" 
          stroke="#05d9e8" 
          strokeWidth="6" 
          strokeLinecap="round"
          filter="url(#neonGlow)"
        />
        
        {/* Lamp head */}
        <path 
          d="M165 25 Q155 20 145 25 Q140 30 145 40 Q155 45 165 40 Q170 35 165 25" 
          fill="#05d9e8" 
          filter="url(#neonGlow)"
        />
        
        {/* Light beam */}
        <path 
          d="M145 35 L120 60 L170 80 L165 40 Z" 
          fill="rgba(255, 242, 0, 0.2)" 
          opacity="0.6"
        />
        
        {/* Arrow */}
        <path 
          d="M280 80 L340 40" 
          stroke="#ff34c6" 
          strokeWidth="8" 
          strokeLinecap="round"
          filter="url(#pinkGlow)"
        />
        <path 
          d="M330 30 L340 40 L330 50" 
          stroke="#ff34c6" 
          strokeWidth="8" 
          strokeLinecap="round" 
          fill="none"
          filter="url(#pinkGlow)"
        />
        
        {/* Text */}
        <text 
          x="200" 
          y="90" 
          textAnchor="middle" 
          fill="#ff34c6" 
          fontSize="24" 
          fontFamily="Share Tech Mono, monospace" 
          fontWeight="bold"
          filter="url(#pinkGlow)"
        >
          THE SOLUTION
        </text>
        <text 
          x="200" 
          y="330" 
          textAnchor="middle" 
          fill="#ff34c6" 
          fontSize="24" 
          fontFamily="Share Tech Mono, monospace" 
          fontWeight="bold"
          filter="url(#pinkGlow)"
        >
          DESK
        </text>
      </svg>
    </div>
  );
};

export default Logo;

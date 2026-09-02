import React, { useState, useEffect } from 'react';

export const IsometricHeroArt = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '620px',
        margin: '0 auto',
        perspective: '1200px'
      }}
    >
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        @keyframes floatWord1 {
          0%, 100% { transform: translateY(0px) rotate(-28deg); }
          50% { transform: translateY(-6px) rotate(-27deg); }
        }
        @keyframes floatWord2 {
          0%, 100% { transform: translateY(0px) rotate(-28deg); }
          50% { transform: translateY(5px) rotate(-29deg); }
        }
        @keyframes pulseGlowGreen {
          0%, 100% { opacity: 0.85; filter: drop-shadow(0 0 6px rgba(5, 150, 105, 0.5)); }
          50% { opacity: 1; filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.85)); }
        }
        @keyframes scanline {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes cableFlow {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      <div
        style={{
          transform: `rotateX(${-mouseOffset.y * 0.4}deg) rotateY(${mouseOffset.x * 0.4}deg)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 20px 40px rgba(6, 78, 59, 0.12))'
        }}
      >
        <svg
          viewBox="0 0 680 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            <filter id="greenGlowArt" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="lampConeGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="screenGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(5, 150, 105, 0.15)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.04)" />
            </linearGradient>
          </defs>

          {/* Floating 3D Label: TECHNOLOGY (Emerald Green) */}
          <g transform="translate(420, 105)" style={{ animation: 'floatWord1 4s ease-in-out infinite' }}>
            <text
              x="0"
              y="0"
              fill="#059669"
              fontSize="17"
              fontWeight="800"
              fontFamily="var(--font-heading)"
              letterSpacing="3"
              filter="url(#greenGlowArt)"
            >
              TECHNOLOGY
            </text>
          </g>

          {/* Floating 3D Label: CODE (Deep Green) */}
          <g transform="translate(370, 125)" style={{ animation: 'floatWord2 4.5s ease-in-out infinite' }}>
            <text
              x="0"
              y="0"
              fill="#047857"
              fontSize="15"
              fontWeight="800"
              fontFamily="var(--font-heading)"
              letterSpacing="2"
            >
              CODE
            </text>
          </g>

          {/* Floating 3D Label: AI SPRINT (Bright Mint) */}
          <g transform="translate(415, 255) rotate(-28)" style={{ animation: 'floatWord1 5s ease-in-out infinite' }}>
            <text
              x="0"
              y="0"
              fill="#10b981"
              fontSize="16"
              fontWeight="800"
              fontFamily="var(--font-heading)"
              letterSpacing="2"
              opacity="0.95"
            >
              AI SPRINT
            </text>
          </g>

          {/* Main Floating 3D Desk Elements Group */}
          <g style={{ animation: 'floatSlow 6s ease-in-out infinite' }}>
            
            {/* --- 1. Isometric Computer / Monitor (Emerald Green & White Canvas) --- */}
            {/* Monitor Outer Frame */}
            <path
              d="M 400 130 L 515 190 L 515 270 L 400 210 Z"
              stroke="#059669"
              strokeWidth="2.5"
              fill="url(#screenGradGreen)"
              filter="url(#greenGlowArt)"
              style={{ animation: 'pulseGlowGreen 3s ease-in-out infinite' }}
            />
            {/* Inner Bezel */}
            <path
              d="M 408 140 L 507 192 L 507 258 L 408 206 Z"
              stroke="#059669"
              strokeWidth="1.4"
              opacity="0.85"
            />
            {/* Monitor Stand Base */}
            <path
              d="M 445 235 L 475 250 L 475 262 L 445 247 Z"
              stroke="#059669"
              strokeWidth="1.8"
            />
            <path
              d="M 435 255 L 485 280 L 465 290 L 415 265 Z"
              stroke="#059669"
              strokeWidth="1.5"
              fill="rgba(5, 150, 105, 0.08)"
            />

            {/* Glowing Green Code Lines on Monitor Screen */}
            <line x1="420" y1="158" x2="475" y2="186" stroke="#059669" strokeWidth="2.2" opacity="0.95" strokeDasharray="30" style={{ animation: 'scanline 2s linear infinite' }} />
            <line x1="420" y1="168" x2="495" y2="207" stroke="#10b981" strokeWidth="1.8" opacity="0.85" />
            <line x1="420" y1="178" x2="480" y2="209" stroke="#047857" strokeWidth="1.8" opacity="0.85" />
            <line x1="420" y1="188" x2="460" y2="209" stroke="#34d399" strokeWidth="1.8" opacity="0.85" />
            <line x1="420" y1="198" x2="490" y2="234" stroke="#059669" strokeWidth="1.8" opacity="0.8" />

            {/* Date / Status Tag on Monitor (Green Gradient) */}
            <path
              d="M 470 215 L 500 230 L 500 250 L 470 235 Z"
              stroke="#059669"
              strokeWidth="1.5"
              fill="rgba(5, 150, 105, 0.25)"
            />
            <g transform="translate(473, 230) rotate(26)">
              <text x="0" y="0" fill="#ffffff" fontSize="7.5" fontWeight="800" fontFamily="var(--font-mono)">
                500 PTS
              </text>
            </g>

            {/* --- 2. Chart / Diagnostic Panel (Forest Green) --- */}
            <path
              d="M 360 150 L 395 168 L 395 215 L 360 197 Z"
              stroke="#047857"
              strokeWidth="1.6"
              opacity="0.9"
              fill="rgba(4, 120, 87, 0.08)"
            />
            {/* Chart Bars */}
            <line x1="370" y1="188" x2="370" y2="173" stroke="#059669" strokeWidth="2.2" />
            <line x1="378" y1="192" x2="378" y2="167" stroke="#10b981" strokeWidth="2.2" />
            <line x1="386" y1="196" x2="386" y2="178" stroke="#34d399" strokeWidth="2.2" />

            {/* --- 3. Coffee Mug (Emerald Green) --- */}
            <ellipse cx="360" cy="225" rx="10" ry="6" stroke="#059669" strokeWidth="1.5" />
            <path d="M 350 225 L 350 240 Q 360 248 370 240 L 370 225" stroke="#059669" strokeWidth="1.5" />
            <path d="M 370 228 Q 378 233 370 238" stroke="#059669" strokeWidth="1.2" />

            {/* --- 4. Mechanical Keyboard (Isometric Grid with Mint Spacebar) --- */}
            <path
              d="M 400 245 L 485 288 L 415 340 L 330 297 Z"
              stroke="#059669"
              strokeWidth="2.2"
              fill="rgba(5, 150, 105, 0.06)"
            />
            {/* Keyboard keys grid */}
            <g opacity="0.65" stroke="#059669" strokeWidth="1">
              <line x1="390" y1="258" x2="465" y2="295" />
              <line x1="380" y1="270" x2="455" y2="307" />
              <line x1="370" y1="282" x2="445" y2="319" />
              <line x1="360" y1="294" x2="435" y2="331" />
              
              <line x1="355" y1="285" x2="415" y2="240" />
              <line x1="370" y1="293" x2="430" y2="248" />
              <line x1="385" y1="301" x2="445" y2="256" />
              <line x1="400" y1="309" x2="460" y2="264" />
              <line x1="415" y1="317" x2="475" y2="272" />
            </g>

            {/* Glowing Spacebar in Bright Emerald */}
            <path
              d="M 370 305 L 410 325 L 402 331 L 362 311 Z"
              stroke="#10b981"
              strokeWidth="1.6"
              fill="#10b981"
              opacity="0.9"
            />

            {/* --- 5. Mouse (Emerald Green) --- */}
            <ellipse cx="445" cy="335" rx="13" ry="8.5" transform="rotate(25 445 335)" stroke="#059669" strokeWidth="1.6" fill="rgba(5, 150, 105, 0.08)" />
            <line x1="440" y1="330" x2="450" y2="336" stroke="#059669" strokeWidth="1.2" />

            {/* --- 6. Mobile / Tablet (Mint Green) --- */}
            <path
              d="M 320 255 L 345 268 L 330 290 L 305 277 Z"
              stroke="#10b981"
              strokeWidth="1.6"
            />
            <circle cx="325" cy="275" r="2" fill="#10b981" />

            {/* --- 7. Triangle Ruler (Forest Green) --- */}
            <polygon points="365,305 385,315 375,325" stroke="#047857" strokeWidth="1.3" opacity="0.85" />

            {/* --- 8. Desk Lamp (Emerald Green) --- */}
            <ellipse cx="535" cy="285" rx="9" ry="5" stroke="#059669" strokeWidth="1.6" />
            <path d="M 535 285 L 535 240 Q 535 210 515 200" stroke="#059669" strokeWidth="2.2" />
            <path
              d="M 505 195 L 525 205 L 515 228 L 495 218 Z"
              stroke="#059669"
              strokeWidth="2"
              fill="rgba(5, 150, 105, 0.25)"
            />
            {/* Lamp Light Glow Cone with Gradient */}
            <polygon points="495,225 440,300 520,320 520,238" fill="url(#lampConeGradGreen)" />

            {/* --- 9. VR Headset (Mint Green) --- */}
            <path
              d="M 480 320 L 530 345 L 515 370 L 465 345 Z"
              stroke="#10b981"
              strokeWidth="2.2"
              fill="rgba(16, 185, 129, 0.12)"
            />
            <path d="M 485 320 Q 470 310 495 310 Q 525 310 515 338" stroke="#10b981" strokeWidth="1.6" />

            {/* --- 10. Floating Cloud Accent --- */}
            <path
              d="M 545 260 Q 555 250 565 255 Q 575 250 580 260 Q 585 270 575 275 L 550 275 Q 540 270 545 260 Z"
              stroke="#059669"
              strokeWidth="1.5"
              opacity="0.85"
            />
          </g>

          {/* --- 11. Continuous Animated Green Circuit Line Flowing Out --- */}
          <path
            d="M 465 345 L 465 380 Q 465 410 435 410 L 305 410 Q 280 410 280 440 L 280 500 Q 280 535 240 535 L 50 535"
            stroke="#059669"
            strokeWidth="2"
            strokeDasharray="8 4"
            style={{ animation: 'cableFlow 2s linear infinite' }}
          />
          <circle cx="280" cy="440" r="3.5" fill="#059669" filter="url(#greenGlowArt)" />
        </svg>
      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';

export const Interactive3DCard = ({ children, className = '', style = {}, onClick }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Subtle 3D tilt calculation (max +/- 8deg)
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 7;

    setCoords({ x: percentX, y: percentY });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setCoords({ x: 50, y: 50 });
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className={`card-3d-wrapper ${className}`}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered 
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-4px)` 
            : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: isHovered 
            ? '0 20px 40px -15px rgba(99, 102, 241, 0.15), 0 0 25px rgba(56, 189, 248, 0.12)' 
            : '0 8px 24px -10px rgba(0, 0, 0, 0.04)',
          overflow: 'hidden',
          ...style
        }}
      >
        {/* Iridescent Light Gleam Follower across card */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, rgba(56, 189, 248, 0.18), rgba(168, 85, 247, 0.12), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1
          }}
        />

        {/* Subtle top edge gleam highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
            zIndex: 2
          }}
        />

        <div style={{ position: 'relative', zIndex: 3 }}>
          {children}
        </div>
      </div>
    </div>
  );
};

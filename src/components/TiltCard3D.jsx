import React, { useState, useRef } from 'react';

export const TiltCard3D = ({ children, className = '', style = {}, maxTilt = 12, ...props }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      glareX,
      glareY,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      opacity: 0
    });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.opacity > 0 ? 1.02 : 1}, ${tilt.opacity > 0 ? 1.02 : 1}, 1)`,
        transition: tilt.opacity === 0 ? 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease' : 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      {...props}
    >
      {/* Specular Glare Reflection Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 30, 68, ${tilt.opacity}), transparent 60%)`,
          mixBlendMode: 'screen',
          zIndex: 10,
          transition: 'opacity 0.2s ease'
        }}
      />
      {children}
    </div>
  );
};

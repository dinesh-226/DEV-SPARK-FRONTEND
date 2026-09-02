import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, CornerDownLeft, X, Layers, Cpu } from 'lucide-react';

export const GoogleLabsSplash = ({ onEnter }) => {
  const [isDismissing, setIsDismissing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef(null);
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mouseGleam, setMouseGleam] = useState({ x: 50, y: 50 });

  const handleDismiss = () => {
    if (isDismissing) return;
    setIsDismissing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onEnter) onEnter();
    }, 800);
  };

  // Keyboard listener for Enter or Space
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDismissing]);

  // Card 3D tilt on mouse movement over splash screen
  const handleMouseMoveOverlay = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const rotY = ((clientX - width / 2) / (width / 2)) * 6;
    const rotX = -((clientY - height / 2) / (height / 2)) * 6;
    setCardTilt({ rotateX: rotX, rotateY: rotY });

    const percentX = (clientX / width) * 100;
    const percentY = (clientY / height) * 100;
    setMouseGleam({ x: percentX, y: percentY });
  };

  // Splash Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Drifting pastel gradient shapes
    const blobs = [
      {
        x: width * 0.3,
        y: height * 0.35,
        radius: 360,
        color1: 'rgba(56, 189, 248, 0.35)', // Electric Cyan
        color2: 'rgba(129, 140, 248, 0)',
        vx: 0.5,
        vy: 0.3,
        angle: 0
      },
      {
        x: width * 0.7,
        y: height * 0.4,
        radius: 400,
        color1: 'rgba(236, 72, 153, 0.28)', // Magenta / Pink
        color2: 'rgba(168, 85, 247, 0)',
        vx: -0.4,
        vy: 0.45,
        angle: Math.PI / 3
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        radius: 380,
        color1: 'rgba(52, 211, 153, 0.28)', // Mint Green
        color2: 'rgba(56, 189, 248, 0)',
        vx: 0.35,
        vy: -0.4,
        angle: Math.PI
      },
      {
        x: width * 0.2,
        y: height * 0.8,
        radius: 320,
        color1: 'rgba(168, 85, 247, 0.25)', // Lavender / Purple
        color2: 'rgba(236, 72, 153, 0)',
        vx: 0.4,
        vy: -0.3,
        angle: 2.2
      }
    ];

    // Floating 3D geometric nodes
    const nodes = [];
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.5,
        color: ['#0284c7', '#7c3aed', '#db2777', '#059669'][Math.floor(Math.random() * 4)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Blobs
      blobs.forEach((b) => {
        b.angle += 0.006;
        b.x += Math.sin(b.angle) * 0.7 + b.vx;
        b.y += Math.cos(b.angle) * 0.7 + b.vy;

        if (b.x < 50 || b.x > width - 50) b.vx *= -1;
        if (b.y < 50 || b.y > height - 50) b.vy *= -1;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, b.color1);
        grad.addColorStop(0.7, b.color2);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw Node lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - dist / 120) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={handleDismiss}
      onMouseMove={handleMouseMoveOverlay}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isDismissing ? 'scale(1.08) translateY(-30px)' : 'scale(1) translateY(0px)',
        opacity: isDismissing ? 0 : 1,
        filter: isDismissing ? 'blur(16px)' : 'blur(0px)',
        pointerEvents: isDismissing ? 'none' : 'auto',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(50px)'
        }}
      />

      {/* Subtle Geometric Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          backgroundSize: '36px 36px',
          backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.18) 1px, transparent 1px)'
        }}
      />

      {/* Top Right "Skip Intro" Button */}
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="labs-pill"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            padding: '0.5rem 1.1rem',
            fontSize: '0.82rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
          }}
        >
          <span>Skip Intro</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Central 3D Interactive Hero Card */}
      <div
        style={{
          perspective: '1000px',
          zIndex: 5,
          padding: '1.5rem',
          maxWidth: '680px',
          width: '90%'
        }}
      >
        <div
          style={{
            transform: `rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
            transition: 'transform 0.15s ease-out',
            transformStyle: 'preserve-3d',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            borderRadius: '32px',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 25px 60px -15px rgba(99, 102, 241, 0.2), 0 0 40px rgba(56, 189, 248, 0.15)',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Iridescent Light Gleam Follower */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `radial-gradient(450px circle at ${mouseGleam.x}% ${mouseGleam.y}%, rgba(56, 189, 248, 0.2), rgba(236, 72, 153, 0.15), transparent 70%)`,
              borderRadius: 'inherit'
            }}
          />

          {/* Top Google Labs Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', position: 'relative', zIndex: 3 }}>
            <div className="labs-pill" style={{ background: '#ffffff', borderColor: 'rgba(56, 189, 248, 0.5)', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.15)' }}>
              <span className="sparkle-pulse" />
              <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.82rem' }}>GOOGLE LABS AI EXPERIENCE</span>
            </div>
          </div>

          {/* Large Dynamic Typography */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: '#0f172a',
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              position: 'relative',
              zIndex: 3
            }}
          >
            Welcome to <span className="gradient-labs-ai">DevSpark</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              position: 'relative',
              zIndex: 3
            }}
          >
            An Intra-College Innovation & AI Sprint organized by <strong style={{ color: '#0f172a' }}>Team Stack Tracers</strong> at ABIET Pathankot.
          </p>

          {/* Central Interactive Entry Element */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="btn-magnetic btn-magnetic-gradient"
              style={{
                padding: '1.1rem 2.8rem',
                fontSize: '1.05rem',
                boxShadow: '0 8px 30px rgba(236, 72, 153, 0.35)',
                margin: '0 auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '9999px'
              }}
            >
              <span>Explore Experiments</span>
              <div style={{
                background: 'rgba(255, 255, 255, 0.25)',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem'
              }}>
                <CornerDownLeft size={12} />
                <span>Enter</span>
              </div>
            </button>

            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '1.1rem', fontFamily: 'var(--font-mono)' }}>
              Click anywhere or press <kbd style={{ background: '#ffffff', padding: '0.15rem 0.45rem', borderRadius: '4px', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>Enter</kbd> to launch
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

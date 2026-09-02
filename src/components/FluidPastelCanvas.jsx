import React, { useEffect, useRef } from 'react';

export const FluidPastelCanvas = () => {
  const canvasRef = useRef(null);

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

    // Mouse tracking with smooth easing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Google Labs Vibrant Pastel Gradient Blobs
    const blobs = [
      {
        x: width * 0.2,
        y: height * 0.25,
        targetX: width * 0.2,
        targetY: height * 0.25,
        radius: 340,
        color1: 'rgba(56, 189, 248, 0.28)',  // Electric Cyan / Sky
        color2: 'rgba(129, 140, 248, 0)',    // Soft Indigo
        vx: 0.4,
        vy: 0.3,
        angle: 0
      },
      {
        x: width * 0.8,
        y: height * 0.3,
        targetX: width * 0.8,
        targetY: height * 0.3,
        radius: 380,
        color1: 'rgba(236, 72, 153, 0.22)',  // Magenta / Pink
        color2: 'rgba(168, 85, 247, 0)',    // Soft Purple
        vx: -0.35,
        vy: 0.4,
        angle: Math.PI / 2
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        targetX: width * 0.5,
        targetY: height * 0.7,
        radius: 400,
        color1: 'rgba(168, 85, 247, 0.24)',  // Soft Purple
        color2: 'rgba(56, 189, 248, 0)',    // Cyan
        vx: 0.3,
        vy: -0.35,
        angle: Math.PI
      },
      {
        x: width * 0.85,
        y: height * 0.8,
        targetX: width * 0.85,
        targetY: height * 0.8,
        radius: 350,
        color1: 'rgba(52, 211, 153, 0.22)',  // Mint Green
        color2: 'rgba(251, 191, 36, 0)',    // Warm Glow
        vx: -0.4,
        vy: -0.3,
        angle: (3 * Math.PI) / 2
      },
      {
        x: width * 0.15,
        y: height * 0.85,
        targetX: width * 0.15,
        targetY: height * 0.85,
        radius: 320,
        color1: 'rgba(251, 191, 36, 0.2)',   // Soft Amber
        color2: 'rgba(236, 72, 153, 0)',    // Pink
        vx: 0.35,
        vy: 0.25,
        angle: 0.8
      }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw each drifting gradient blob
      blobs.forEach((b, idx) => {
        b.angle += 0.008;
        b.x += Math.sin(b.angle) * 0.6 + b.vx;
        b.y += Math.cos(b.angle) * 0.6 + b.vy;

        // Bounce gently inside canvas bounds
        if (b.x < 100 || b.x > width - 100) b.vx *= -1;
        if (b.y < 100 || b.y > height - 100) b.vy *= -1;

        // Subtle mouse repulsion/gravitation
        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 450) {
          const force = (1 - dist / 450) * 0.8;
          b.x -= (dx / dist) * force * (idx % 2 === 0 ? 1 : -1);
          b.y -= (dy / dist) * force * (idx % 2 === 0 ? 1 : -1);
        }

        // Create fluid radial gradient
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, b.color1);
        grad.addColorStop(0.7, b.color2);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(70px)',
        opacity: 0.95
      }}
    />
  );
};

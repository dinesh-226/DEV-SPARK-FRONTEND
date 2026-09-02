import React, { useEffect, useRef } from 'react';

export const Tech3DCanvas = () => {
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

    // Mouse tracking for 3D rotation parallax
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.targetY = (e.clientY - height / 2) / (height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Icosahedron / Tech Polyhedron Geometry Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [0, -1,  phi], [0,  1,  phi], [0, -1, -phi], [0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];

    // Normalize and scale vertices
    const radius = Math.min(width, height) > 768 ? 160 : 110;
    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return {
        x: (x / len) * radius,
        y: (y / len) * radius,
        z: (z / len) * radius
      };
    });

    // Edges connecting vertices
    const edges = [];
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = rawVertices[i][0] - rawVertices[j][0];
        const dy = rawVertices[i][1] - rawVertices[j][1];
        const dz = rawVertices[i][2] - rawVertices[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // Icosahedron edge length is 2 in this standard coordinate system
        if (Math.abs(d - 2) < 0.1) {
          edges.push([i, j]);
        }
      }
    }

    // 3D Floating Tech Nodes
    const nodesCount = Math.min(width > 768 ? 50 : 25, 60);
    const techNodes = [];
    for (let i = 0; i < nodesCount; i++) {
      techNodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * 600,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00f0ff' : '#6366f1'
      });
    }

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Auto rotation + mouse interaction
      rotX += 0.003 + mouse.y * 0.005;
      rotY += 0.005 + mouse.x * 0.005;
      rotZ += 0.002;

      // Perspective projection constants
      const fov = 450;
      const centerX = width * (width > 990 ? 0.72 : 0.5);
      const centerY = height * (width > 990 ? 0.45 : 0.38);

      // Rotation matrix helpers
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // 1. Draw 3D Floating Tech Grid Particles
      techNodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;
        if (node.z < -300) node.z = 300;
        if (node.z > 300) node.z = -300;

        const scale = fov / (fov + node.z + 400);
        const projX = node.x * scale + width / 2;
        const projY = node.y * scale + height / 2;

        if (scale > 0 && projX > 0 && projX < width && projY > 0 && projY < height) {
          ctx.beginPath();
          ctx.arc(projX, projY, node.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(0.6, scale * 0.8));
          ctx.fill();
        }
      });

      // 2. Project 3D Polyhedron Vertices
      const projected = vertices.map(v => {
        // Rotate Y
        let x1 = v.x * cosY + v.z * sinY;
        let y1 = v.y;
        let z1 = -v.x * sinY + v.z * cosY;

        // Rotate X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        const scale = fov / (fov + z3 + 300);
        return {
          x: x3 * scale + centerX,
          y: y3 * scale + centerY,
          z: z3,
          scale
        };
      });

      // 3. Draw Polyhedron Edges with Cyber Glow
      ctx.lineWidth = 1.5;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        // Depth alpha
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, (avgZ + radius) / (radius * 2) * 0.7);

        ctx.beginPath();
        const edgeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        edgeGrad.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
        edgeGrad.addColorStop(1, `rgba(99, 102, 241, ${alpha})`);

        ctx.strokeStyle = edgeGrad;
        ctx.globalAlpha = 1;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // 4. Draw Polyhedron Glowing Vertices (Nodes)
      projected.forEach(p => {
        ctx.beginPath();
        const nodeAlpha = Math.max(0.2, (p.z + radius) / (radius * 2) * 0.9);
        
        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10 * p.scale);
        glow.addColorStop(0, `rgba(0, 240, 255, ${nodeAlpha})`);
        glow.addColorStop(1, 'rgba(0, 240, 255, 0)');
        ctx.fillStyle = glow;
        ctx.arc(p.x, p.y, 10 * p.scale, 0, Math.PI * 2);
        ctx.fill();

        // Core white dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
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
        opacity: 0.9
      }}
    />
  );
};

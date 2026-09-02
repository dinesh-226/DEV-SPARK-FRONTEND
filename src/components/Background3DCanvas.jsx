import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Geometric Floating Objects (Crimson Wireframes & Particles)
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // Icosahedron 1 (Primary Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(18, 5, -10);
    objectsGroup.add(icoMesh);

    // Octahedron 2 (Secondary Wireframe Left)
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x8e97a6,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(-20, -8, -5);
    objectsGroup.add(octMesh);

    // Torus (Tech Ring Center-Right)
    const torusGeo = new THREE.TorusGeometry(8, 0.25, 16, 60);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xff1e44,
      transparent: true,
      opacity: 0.15
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(12, -12, -15);
    torusMesh.rotation.x = Math.PI / 3;
    objectsGroup.add(torusMesh);

    // 3. Floating 3D Star / Data Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const crimsonColor = new THREE.Color(0xff1e44);
    const slateColor = new THREE.Color(0x8e97a6);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const pick = Math.random();
      const col = pick > 0.6 ? crimsonColor : (pick > 0.3 ? slateColor : whiteColor);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Mouse Interactive Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D objects
      icoMesh.rotation.x = elapsedTime * 0.12;
      icoMesh.rotation.y = elapsedTime * 0.18;
      
      octMesh.rotation.x = -elapsedTime * 0.15;
      octMesh.rotation.z = elapsedTime * 0.1;

      torusMesh.rotation.z = elapsedTime * 0.08;
      torusMesh.rotation.y = Math.sin(elapsedTime * 0.2) * 0.3;

      // Rotate particle cloud gently
      particleSystem.rotation.y = elapsedTime * 0.03 + targetX * 2;
      particleSystem.rotation.x = elapsedTime * 0.02 + targetY * 2;

      // Group parallax
      objectsGroup.rotation.y = targetX * 3;
      objectsGroup.rotation.x = targetY * 3;
      objectsGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};

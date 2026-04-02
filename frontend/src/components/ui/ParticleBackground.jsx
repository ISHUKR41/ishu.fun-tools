import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const particlesRef = useRef();
  // ULTRA-optimized particle count for 90-120 FPS across all devices
  const particleCount = useMemo(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;

    // Detect low-end devices
    const isLowEnd = pixelRatio < 2 && navigator.hardwareConcurrency <= 4;

    if (width < 640) return isLowEnd ? 300 : 500;  // Mobile phones
    if (width < 1024) return isLowEnd ? 600 : 800; // Tablets
    return isLowEnd ? 900 : 1200; // Desktop
  }, []);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create a more dynamic spread-out particle field
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 15 + Math.random() * 25;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Enhanced gradient colors (blue → purple → pink)
      const gradient = Math.random();
      if (gradient < 0.33) {
        // Electric Blue
        colors[i * 3] = 0.39;
        colors[i * 3 + 1] = 0.40;
        colors[i * 3 + 2] = 0.95;
      } else if (gradient < 0.66) {
        // Vibrant Purple
        colors[i * 3] = 0.54;
        colors[i * 3 + 1] = 0.36;
        colors[i * 3 + 2] = 0.96;
      } else {
        // Hot Pink
        colors[i * 3] = 0.93;
        colors[i * 3 + 1] = 0.28;
        colors[i * 3 + 2] = 0.60;
      }
    }

    return [positions, colors];
  }, [particleCount]);

  // Track frame count for ultra-optimized updates
  const frameCount = useRef(0);
  const isMobile = useMemo(() => window.innerWidth < 768, []);
  const isLowEnd = useMemo(() => {
    // Detect low-end devices more accurately
    const pixelRatio = window.devicePixelRatio || 1;
    const cpuCores = navigator.hardwareConcurrency || 2;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
    return (pixelRatio < 2 || cpuCores <= 4) && isMobileDevice;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      frameCount.current++;

      // Smooth, slow rotation (always 60fps - cheap operation)
      particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
      particlesRef.current.rotation.y = time * 0.02;
      particlesRef.current.rotation.z = Math.cos(time * 0.03) * 0.1;

      // MAXIMUM FPS optimization: Rotate always (cheap), wave conditionally
      // Target: 90-120 FPS on desktop, 60 FPS on mobile
      // Low-end: Update every 5th frame (12-24 FPS particles, 60-120 FPS rotation)
      // Regular mobile: Every 3rd frame (20-40 FPS particles, 60-120 FPS rotation)
      // Desktop: Every frame (60-120 FPS everything)
      const updateInterval = isLowEnd ? 5 : isMobile ? 3 : 1;
      const shouldUpdateWave = frameCount.current % updateInterval === 0;

      if (shouldUpdateWave) {
        const positions = particlesRef.current.geometry.attributes.position.array;
        // Only update a subset of particles on mobile for ultra-smooth performance
        const step = isMobile ? 2 : 1;

        for (let i = 0; i < particleCount; i += step) {
          const i3 = i * 3;
          const x = positions[i3];
          const z = positions[i3 + 2];

          // Multi-layered wave effect for depth (optimized calculation)
          positions[i3 + 1] += Math.sin(time * 0.3 + x * 0.15 + z * 0.1) * 0.003;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }
    }
  });

  return (
    <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={window.innerWidth < 768 ? 0.1 : 0.12}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

function FloatingShape() {
  return (
    <>
      {/* Main floating torus knot */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[0, 0, -5]}>
          <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.18}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Additional floating octahedron for depth */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[-8, 3, -8]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.15}
            emissive="#8b5cf6"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Floating icosahedron for accent */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[8, -3, -6]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            wireframe
            transparent
            opacity={0.12}
            emissive="#ec4899"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function ParticleBackground() {
  // Optimize DPR based on device
  const isMobile = window.innerWidth < 768;
  const dpr = isMobile ? [1, 1.5] : [1, 2];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.5,
      willChange: 'transform',
      transform: 'translateZ(0)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={dpr}
        performance={{ min: 0.5, max: 1 }}
        gl={{
          antialias: !isMobile,
          powerPreference: 'high-performance',
          alpha: true,
          stencil: false,
          depth: true
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
        <spotLight position={[0, 20, 0]} intensity={0.5} color="#8b5cf6" angle={0.3} penumbra={1} />
        <ParticleField />
        <FloatingShape />
      </Canvas>
    </div>
  );
}

import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const particlesRef = useRef();
  const particleCount = 2000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create a spread-out particle field
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Gradient colors (blue to purple to pink)
      const gradient = Math.random();
      if (gradient < 0.33) {
        colors[i * 3] = 0.4;     // R
        colors[i * 3 + 1] = 0.5; // G
        colors[i * 3 + 2] = 1.0; // B - Blue
      } else if (gradient < 0.66) {
        colors[i * 3] = 0.55;    // R
        colors[i * 3 + 1] = 0.36; // G
        colors[i * 3 + 2] = 0.96; // B - Purple
      } else {
        colors[i * 3] = 0.93;    // R
        colors[i * 3 + 1] = 0.28; // G
        colors[i * 3 + 2] = 0.60; // B - Pink
      }
    }

    return [positions, colors];
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();

      // Slow rotation for particles
      particlesRef.current.rotation.x = time * 0.05;
      particlesRef.current.rotation.y = time * 0.03;

      // Wave animation
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        positions[i3 + 1] += Math.sin(time + x * 0.1) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingShape() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function ParticleBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.4
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingShape />
      </Canvas>
    </div>
  );
}

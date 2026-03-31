import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

// Generates a Fibonacci sphere of points to look like a dotted globe
function DottedSphere({ count = 3000, radius = 2, inView }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    // Brand gradients mapping
    const colorA = new THREE.Color('#6366F1'); // Indigo
    const colorB = new THREE.Color('#8B5CF6'); // Violet
    const colorC = new THREE.Color('#EC4899'); // Pink
    
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Add slight noise to make it feel organic
      const noiseX = (Math.random() - 0.5) * 0.05;
      const noiseY = (Math.random() - 0.5) * 0.05;
      const noiseZ = (Math.random() - 0.5) * 0.05;

      pos[i * 3] = (x + noiseX) * radius;
      pos[i * 3 + 1] = (y + noiseY) * radius;
      pos[i * 3 + 2] = (z + noiseZ) * radius;

      // Mix colors based on Y position to create a gradient
      const heightPercent = (y + 1) / 2; // 0 to 1
      const tempColor = new THREE.Color();
      
      if (heightPercent > 0.5) {
        tempColor.lerpColors(colorB, colorC, (heightPercent - 0.5) * 2);
      } else {
        tempColor.lerpColors(colorA, colorB, heightPercent * 2);
      }
      
      // Randomly dim some points for a "starry" global effect
      if (Math.random() > 0.8) tempColor.multiplyScalar(0.3);

      col[i * 3] = tempColor.r;
      col[i * 3 + 1] = tempColor.g;
      col[i * 3 + 2] = tempColor.b;
    }

    return [pos, col];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (pointsRef.current && inView) {
      pointsRef.current.rotation.y += delta * 0.15; // Slow rotation
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1; // Gentle wobble
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Glowing halo around the globe
function Halo({ radius = 2.1, inView }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial
        color="#8B5CF6"
        transparent
        opacity={0.03}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function Globe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      {inView && (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          
          {/* Core dotted globe */}
          <DottedSphere count={3000} radius={1.8} inView={inView} />
          
          {/* Soft atmospheric glow */}
          <Halo radius={1.9} inView={inView} />
          <Halo radius={2.2} inView={inView} />

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            rotateSpeed={0.5}
          />
        </Canvas>
      )}
    </div>
  );
}

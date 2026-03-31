import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

function DottedSphere({ count = 600, radius = 1.8, inView }) {
  const pointsRef = useRef();
  const frameCount = useRef(0);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#6366F1');
    const colorB = new THREE.Color('#8B5CF6');
    const colorC = new THREE.Color('#EC4899');
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      pos[i * 3] = x * radius;
      pos[i * 3 + 1] = y * radius;
      pos[i * 3 + 2] = z * radius;

      const heightPercent = (y + 1) / 2;
      const tempColor = new THREE.Color();
      if (heightPercent > 0.5) {
        tempColor.lerpColors(colorB, colorC, (heightPercent - 0.5) * 2);
      } else {
        tempColor.lerpColors(colorA, colorB, heightPercent * 2);
      }
      if (Math.random() > 0.8) tempColor.multiplyScalar(0.35);
      col[i * 3] = tempColor.r;
      col[i * 3 + 1] = tempColor.g;
      col[i * 3 + 2] = tempColor.b;
    }
    return [pos, col];
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!inView || !pointsRef.current) return;
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    pointsRef.current.rotation.y += delta * 0.2;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Halo({ radius = 2.0 }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 24, 24]} />
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.025} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

export default function Globe() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop="always"
          gl={{ antialias: false, powerPreference: 'low-power' }}
        >
          <ambientLight intensity={0.4} />
          <DottedSphere count={600} radius={1.8} inView={inView} />
          <Halo radius={1.95} />
          <Halo radius={2.3} />
        </Canvas>
      )}
    </div>
  );
}

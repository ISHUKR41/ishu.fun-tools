import { useEffect, useRef } from 'react';

function checkWebGL() {
  try {
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) return false;
    // Also verify a framebuffer can be created (catches sandboxed environments)
    const fb = gl.createFramebuffer();
    if (!fb) return false;
    gl.deleteFramebuffer(fb);
    return true;
  } catch {
    return false;
  }
}

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!checkWebGL()) return;

    const el = mountRef.current;
    if (!el) return;

    let animId;
    let renderer;
    let geo;
    let mat;

    (async () => {
      try {
        const THREE = await import('three');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 1000);
        camera.position.z = 3;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(el.clientWidth, el.clientHeight);
        renderer.setClearColor(0x000000, 0);
        el.appendChild(renderer.domElement);

        const COUNT = window.innerWidth < 768 ? 400 : window.innerWidth < 1200 ? 800 : 1200;
        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);

        const palette = [
          new THREE.Color(0x6366f1),
          new THREE.Color(0x8b5cf6),
          new THREE.Color(0xec4899),
          new THREE.Color(0x06b6d4),
        ];

        for (let i = 0; i < COUNT; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 12;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
          const c = palette[Math.floor(Math.random() * palette.length)];
          colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
        }

        geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        mat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true, opacity: 0.5 });
        const points = new THREE.Points(geo, mat);
        scene.add(points);

        let mx = 0, my = 0;
        const onMouse = (e) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = -(e.clientY / window.innerHeight - 0.5) * 2; };
        const onResize = () => { camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth, el.clientHeight); };
        window.addEventListener('mousemove', onMouse, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });

        let last = 0;
        const loop = (t) => {
          animId = requestAnimationFrame(loop);
          const dt = Math.min((t - last) / 1000, 0.05); last = t;
          points.rotation.y += dt * 0.03;
          points.rotation.x += dt * 0.01;
          camera.position.x += (mx * 0.3 - camera.position.x) * 0.03;
          camera.position.y += (my * 0.15 - camera.position.y) * 0.03;
          renderer.render(scene, camera);
        };
        loop(0);

        return () => {
          cancelAnimationFrame(animId);
          window.removeEventListener('mousemove', onMouse);
          window.removeEventListener('resize', onResize);
        };
      } catch (e) {
        // WebGL not available or other error — silently fail, CSS background shows instead
      }
    })();

    return () => {
      cancelAnimationFrame(animId);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement?.parentNode === el) el.removeChild(renderer.domElement);
      }
      geo?.dispose();
      mat?.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
      aria-hidden="true"
    />
  );
}

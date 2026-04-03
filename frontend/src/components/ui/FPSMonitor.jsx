import { useEffect, useState, useRef } from 'react';
import './FPSMonitor.css';

/**
 * FPS Monitor Component - Development Only
 * Tracks real-time FPS for performance optimization
 * Shows device info and performance metrics
 */
export default function FPSMonitor({ enabled = process.env.NODE_ENV === 'development' }) {
  const [fps, setFps] = useState(0);
  const [avgFps, setAvgFps] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState({});
  const frameTimesRef = useRef([]);
  const lastFrameTimeRef = useRef(performance.now());
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Detect device info
    const info = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio || 1,
      cores: navigator.hardwareConcurrency || 'Unknown',
      memory: navigator.deviceMemory || 'Unknown',
      connection: navigator.connection?.effectiveType || 'Unknown',
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent.toLowerCase()
      ),
    };
    setDeviceInfo(info);

    // FPS calculation loop
    function measureFPS() {
      const now = performance.now();
      const delta = now - lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;

      // Calculate FPS
      const currentFps = Math.round(1000 / delta);

      // Store frame times (keep last 60 frames)
      frameTimesRef.current.push(currentFps);
      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current.shift();
      }

      // Calculate average FPS
      const average =
        frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;

      setFps(currentFps);
      setAvgFps(Math.round(average));

      rafIdRef.current = requestAnimationFrame(measureFPS);
    }

    rafIdRef.current = requestAnimationFrame(measureFPS);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  // Determine FPS quality
  const getFpsColor = (fpsValue) => {
    if (fpsValue >= 90) return '#10b981'; // Green - Excellent
    if (fpsValue >= 60) return '#f59e0b'; // Yellow - Good
    if (fpsValue >= 30) return '#f97316'; // Orange - Acceptable
    return '#ef4444'; // Red - Poor
  };

  return (
    <div className="fps-monitor">
      <div className="fps-monitor__header">
        <span className="fps-monitor__title">Performance Monitor</span>
      </div>

      <div className="fps-monitor__metrics">
        <div className="fps-monitor__metric">
          <span className="fps-monitor__label">FPS:</span>
          <span
            className="fps-monitor__value fps-monitor__value--large"
            style={{ color: getFpsColor(fps) }}
          >
            {fps}
          </span>
        </div>

        <div className="fps-monitor__metric">
          <span className="fps-monitor__label">Avg FPS:</span>
          <span
            className="fps-monitor__value"
            style={{ color: getFpsColor(avgFps) }}
          >
            {avgFps}
          </span>
        </div>
      </div>

      <div className="fps-monitor__device">
        <div className="fps-monitor__row">
          <span className="fps-monitor__label">Resolution:</span>
          <span className="fps-monitor__value">
            {deviceInfo.width}×{deviceInfo.height} @{deviceInfo.dpr}x
          </span>
        </div>
        <div className="fps-monitor__row">
          <span className="fps-monitor__label">CPU Cores:</span>
          <span className="fps-monitor__value">{deviceInfo.cores}</span>
        </div>
        <div className="fps-monitor__row">
          <span className="fps-monitor__label">Device:</span>
          <span className="fps-monitor__value">
            {deviceInfo.isMobile ? 'Mobile' : 'Desktop'}
          </span>
        </div>
        {deviceInfo.memory !== 'Unknown' && (
          <div className="fps-monitor__row">
            <span className="fps-monitor__label">RAM:</span>
            <span className="fps-monitor__value">{deviceInfo.memory} GB</span>
          </div>
        )}
      </div>

      <div className="fps-monitor__target">
        <div className="fps-monitor__target-label">Targets:</div>
        <div className="fps-monitor__target-values">
          <span className="fps-monitor__target-value" style={{ color: '#10b981' }}>
            Desktop: 90-120 FPS
          </span>
          <span className="fps-monitor__target-value" style={{ color: '#f59e0b' }}>
            Mobile: 60 FPS
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook to track FPS programmatically
 */
export function useFPS() {
  const [fps, setFps] = useState(0);
  const frameTimesRef = useRef([]);
  const lastFrameTimeRef = useRef(performance.now());

  useEffect(() => {
    let rafId;

    function measureFPS() {
      const now = performance.now();
      const delta = now - lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;

      const currentFps = Math.round(1000 / delta);
      frameTimesRef.current.push(currentFps);

      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current.shift();
      }

      const average =
        frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;

      setFps(Math.round(average));
      rafId = requestAnimationFrame(measureFPS);
    }

    rafId = requestAnimationFrame(measureFPS);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return fps;
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initAllMonitoring } from './utils/performance.js';

// Initialize performance monitoring
initAllMonitoring();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

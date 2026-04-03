import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for development
      fastRefresh: true,
      // Optimize JSX runtime for production
      jsxRuntime: 'automatic',
      // Babel optimizations
      babel: {
        plugins: [
          // Remove unnecessary dev code in production
          ['transform-remove-console', { exclude: ['error', 'warn'] }],
        ],
      },
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    // Optimize HMR
    hmr: {
      overlay: true
    }
  },
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Optimize CSS
    cssMinify: true,
    // Optimize assets - inline smaller assets for fewer requests
    assetsInlineLimit: 8192, // Inline assets < 8kb (increased for better performance)
    // Disable source maps in production
    sourcemap: false,
    rollupOptions: {
      output: {
        // ULTRA-AGGRESSIVE code splitting for optimal caching and parallel loading
        manualChunks: (id) => {
          // React ecosystem - most stable, cache forever
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          // React Router - separate for independent caching
          if (id.includes('node_modules/react-router')) return 'router';

          // Three.js and 3D libraries - large bundle, lazy loaded
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/@react-three')) return 'react-three';

          // PDF processing (large libraries) - split by library
          if (id.includes('node_modules/pdf-lib')) return 'pdf-lib';
          if (id.includes('node_modules/pdfjs-dist')) return 'pdfjs';
          if (id.includes('node_modules/tesseract.js')) return 'tesseract';
          if (id.includes('node_modules/jspdf')) return 'jspdf';

          // Animation libraries - separate chunks
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (id.includes('node_modules/framer-motion')) return 'framer';
          if (id.includes('node_modules/animejs')) return 'anime';

          // Smooth scroll libraries
          if (id.includes('node_modules/lenis') || id.includes('node_modules/@studio-freight')) {
            return 'lenis';
          }
          if (id.includes('node_modules/locomotive-scroll')) return 'locomotive';

          // Utility libraries
          if (id.includes('node_modules/fuse.js')) return 'fuse';
          if (id.includes('node_modules/clsx') || id.includes('node_modules/class-variance-authority')) {
            return 'utils';
          }

          // Icons
          if (id.includes('node_modules/lucide-react')) return 'icons';

          // UI/Toast libraries
          if (id.includes('node_modules/sonner')) return 'ui-toast';
          if (id.includes('node_modules/@tanstack/react-virtual')) return 'virtual';

          // Dropzone
          if (id.includes('node_modules/react-dropzone')) return 'dropzone';

          // Barba.js
          if (id.includes('node_modules/@barba')) return 'barba';

          // Spline
          if (id.includes('node_modules/@splinetool')) return 'spline';

          // All other node_modules
          if (id.includes('node_modules/')) return 'vendor';
        },
        // Optimize chunk names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Additional performance optimizations
        compact: true,
        generatedCode: {
          constBindings: true,
        },
      },
      // Tree-shaking optimizations
      treeshake: {
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    chunkSizeWarningLimit: 800, // Warn if chunks > 800KB
    // Optimize bundle
    reportCompressedSize: false, // Faster builds (disable gzip size calculation)
    // Better caching
    cssCodeSplit: true,
    // Additional optimizations for production
    ...(process.env.NODE_ENV === 'production' && {
      minify: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'pdf-lib',
      'gsap',
      'gsap/ScrollTrigger',
      'framer-motion',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'lenis',
      'fuse.js',
      'sonner',
      'lucide-react',
      'clsx',
    ],
    exclude: ['pdfjs-dist', 'tesseract.js'], // Load on demand
    esbuildOptions: {
      // Optimize esbuild
      target: 'es2020',
      // Remove console in production
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
  },
  // Performance optimizations
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none', // Remove license comments
    // Production optimizations
    ...(process.env.NODE_ENV === 'production' && {
      drop: ['console', 'debugger'],
      pure: ['console.log', 'console.info'],
    }),
  },
  // Resolve optimizations
  resolve: {
    dedupe: ['react', 'react-dom', 'three'],
  },
})

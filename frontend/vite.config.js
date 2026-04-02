import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for development
      fastRefresh: true,
      // Optimize JSX runtime for production
      jsxRuntime: 'automatic',
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
    target: 'esnext',
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'], // Remove specific console methods
      },
    },
    // Optimize CSS
    cssMinify: true,
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets < 4kb
    // Better source maps for debugging
    sourcemap: false,
    rollupOptions: {
      output: {
        // Aggressive code splitting for optimal caching
        manualChunks: (id) => {
          // React ecosystem
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Three.js and 3D libraries
          if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
            return 'three';
          }
          // PDF processing (large libraries)
          if (id.includes('node_modules/pdf-lib')) return 'pdf-lib';
          if (id.includes('node_modules/pdfjs-dist')) return 'pdfjs';
          if (id.includes('node_modules/tesseract.js')) return 'tesseract';
          // Animation libraries
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (id.includes('node_modules/framer-motion')) return 'framer';
          // Other large libraries
          if (id.includes('node_modules/lenis') || id.includes('node_modules/@studio-freight')) {
            return 'lenis';
          }
          if (id.includes('node_modules/fuse.js')) return 'fuse';
          // Router
          if (id.includes('node_modules/react-router')) return 'router';
          // All other node_modules
          if (id.includes('node_modules/')) return 'vendor';
        },
        // Optimize chunk names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Warn if chunks > 1MB
    // Optimize bundle
    reportCompressedSize: false, // Faster builds
    // Better caching
    cssCodeSplit: true,
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
      'sonner'
    ],
    exclude: ['pdfjs-dist', 'tesseract.js'], // Load on demand
    esbuildOptions: {
      // Optimize esbuild
      target: 'esnext',
    },
  },
  // Performance optimizations
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none', // Remove license comments
  },
})

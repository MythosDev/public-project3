import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cesium(),
  ],
  base: "/",
  // Add these optimizations for Cesium
  optimizeDeps: {
    include: ['cesium'], // Pre-bundle Cesium to avoid dynamic import issues
  },
  server: {
    fs: {
      allow: ['.'], // Allow serving files from the project root
    },
  },
  build: {
    // Optional: Adjust these if you need specific build optimizations
    sourcemap: true, // Helpful for debugging
    // Increase chunk size warning limit (Cesium can generate large chunks)
    chunkSizeWarningLimit: 1000,
  },
});
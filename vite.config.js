import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
    cors: true,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Ensure proper base path for deployment
  base: './',
  // Optimize for production
  esbuild: {
    jsx: 'automatic',
  }
})
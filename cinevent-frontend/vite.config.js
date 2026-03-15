import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all interfaces so Docker can expose the port
    port: 5173,
    proxy: {
      // Forward /api requests to the backend service (mirrors nginx.conf)
      '/api': {
        target: 'http://backend:5000',
        changeOrigin: true,
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    // host: true, // necessary to allow external access
    // origin: 'http://localhost:5173', // or your dev origin if needed
    // strictPort: true, // optional, for consistent port usage
    // cors: true, // optional, allow all cross-origin requests
    hmr: {
      overlay: false, // Disable the error overlay
      clientPort: 443, 
    },
    allowedHosts: ['e715-152-59-47-156.ngrok-free.app']
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/orario-sostegno-pwa/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
})
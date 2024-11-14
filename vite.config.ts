import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Assure que les chemins sont relatifs pour le build
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'cjs',  // Electron utilise le CommonJS
      },
    },
  },
})
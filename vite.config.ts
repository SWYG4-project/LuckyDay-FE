import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  cacheDir: './.vite',
})


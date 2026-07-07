import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (https://saurabhj4in.github.io) + publish from /docs
export default defineConfig({
  base: '/',                 // ✅ root path for a user site
  build: { outDir: 'docs' }, // ✅ GitHub Pages serves /docs on main
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Chang-New-Portfolio2/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
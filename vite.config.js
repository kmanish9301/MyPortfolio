import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist", // Ensure build outputs to 'dist'
  },
  server: {
    historyApiFallback: true, // Ensures React Router works after refresh
  },
});

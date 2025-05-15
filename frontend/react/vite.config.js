import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from "vite-plugin-env-compatible"



// https://vite.dev/config/
export default defineConfig({
  envPrefix: "BACKEND_URL",
  plugins: [react(),
  envCompatible(),],


})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Set the dev server port to 3000
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', // it will allow backend req from this url (resolves cors error)
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

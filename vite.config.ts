import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` aponta para o subdiretório usado pelo GitHub Pages (usuario.github.io/efood/)
export default defineConfig({
  base: '/efood/',
  plugins: [react()]
})

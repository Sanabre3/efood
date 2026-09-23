import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// O deploy é feito na Vercel, servindo a aplicação na raiz do domínio.
export default defineConfig({
  base: '/',
  plugins: [react()]
})

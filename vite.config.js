import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'postcss',
      async transform(code, id) {
        if (id.endsWith('.css')) {
          const result = await postcss([autoprefixer]).process(code, { from: id })
          return {
            code: result.css,
            map: result.map ? result.map.toString() : null,
          }
        }
      },
    },
  ],
  base: '/app/', // <-- TAMBAHKAN BARIS INI
})
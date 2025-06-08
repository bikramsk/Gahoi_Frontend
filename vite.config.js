// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react()],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/wpsenders': {
        target: 'https://www.wpsenders.in/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wpsenders/, '')
      },
      '/uploads': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false
      }
    },
  },
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          fonts: ['@fontsource/noto-sans-devanagari', '@fontsource/inter']
        }
      }
    }
  }
})

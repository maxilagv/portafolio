import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@sections': '/src/sections',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      // Soporta también imports sin @ si existieran
      components: '/src/components',
      sections: '/src/sections',
      data: '/src/data',
      hooks: '/src/hooks',
      context: '/src/context',
    },
  },
})

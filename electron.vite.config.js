import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['electron']
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('./@'),
        '@renderer': resolve('src/renderer/src'),
        components: resolve('./@/components')
      }
    },
    plugins: [react(), tailwind()]
  }
})

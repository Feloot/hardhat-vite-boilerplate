import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@artifacts': resolve(__dirname, '../artifacts'),
      '@typechain-types': resolve(__dirname, '../typechain-types'),
    },
  },
})

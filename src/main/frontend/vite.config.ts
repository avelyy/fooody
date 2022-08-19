import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @see https://vitejs.dev/config
export default defineConfig({
  base: '/',
  build: {
    outDir: '../resources/static'
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8082',  // '/api' 로 들어오면 포트 8082(스프링 서버)로 보낸다
        changeOrigin: true, // cross origin 허용
      }
    }
  },
  plugins: [vue()],


})

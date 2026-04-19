import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 重要：請替換成你的 Repository 名稱，前後都要有斜線
  base: '/catcafe-mahjong/', 
  plugins: [react()],
})
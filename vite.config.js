import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 這裡必須跟你的 GitHub Repository 名稱完全一模一樣！大小寫也要對！
  base: '/DomanMahjong/', 
  plugins: [react()],
})
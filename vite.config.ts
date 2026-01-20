import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署設定
  // 如果你的 repo 名稱是 eng-learn，base 就設為 /eng-learn/
  // 如果是部署到 username.github.io（沒有子路徑），則設為 /
  base: '/kids-learning-english/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://172.27.103.99:3030',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}
  
)

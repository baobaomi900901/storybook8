import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './kswux/package'),
      '@components': path.resolve(__dirname, './kswux/package/components'),
      '@src': path.resolve(__dirname, './src')
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5500
  }
});

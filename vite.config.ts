import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './kswux/package'),
      '@components': path.resolve(__dirname, './kswux/package/components'),
      '@templates': path.resolve(__dirname, './kswux/package/templates'),
      '@components-ant': path.resolve(__dirname, './kswux-ant/package/components'),
      '@templates-ant': path.resolve(__dirname, './kswux-ant/package/templates'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5500,
  },
});

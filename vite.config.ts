import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      // dev 分支
      // '@': path.resolve(__dirname, './kswux/package'),
      // '@components': path.resolve(__dirname, './kswux/package/components'),
      // '@templates': path.resolve(__dirname, './kswux/package/templates'),
      // ant 分支
      '@': path.resolve(__dirname, './kswux-ant/package'),
      '@components': path.resolve(__dirname, './kswux-ant/package/components'),
      '@templates': path.resolve(__dirname, './kswux-ant/package/templates'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5500,
  },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  base: '/VUE3-JS-GRID/',
});
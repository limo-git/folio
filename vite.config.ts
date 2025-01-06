import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    // terserOptions:
  },
  plugins: [
    react(),
    vue(),
    sitemap({
      hostname: 'https://github.com/limo-git/',
      basePath: 'portfolio',
    }),
    robots(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

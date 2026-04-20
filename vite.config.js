import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import SSG from 'vite-plugin-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SSG({
      routes: [
        '/',
        '/about',
        '/marketplace',
        '/tokenization',
        '/blog',
        '/glossary',
        // Blog posts
        '/blog/education/understanding-rwa-tokenization',
        '/blog/education/blockchain-fundamentals',
        '/blog/insights/tokenization-trends-2024',
        // Glossary terms
        '/glossary/blockchain',
        '/glossary/tokenization',
        '/glossary/defi',
      ],
      format: 'json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5999,
    host: true,
    middlewareMode: false,
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
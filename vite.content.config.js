// Builds the content script. Chrome loads content scripts as classic scripts (no ES module
// imports), so everything, React included, is bundled into one self-contained dist/content.js.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  // Library builds don't replace this on their own, and React needs it to pick its production build.
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/content/main.jsx', import.meta.url)),
      formats: ['iife'],
      name: 'OvergrowthContent',
      fileName: () => 'content.js',
    },
  },
});

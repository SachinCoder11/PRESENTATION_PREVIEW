import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fluentui/react-icons/lib/providers': path.resolve(__dirname, 'src/stubs/fluent-icons-provider.js'),
      '@fluentui/react-icons': path.resolve(__dirname, 'src/stubs/fluent-icons-provider.js'),
    },
  },
  server: {
    port: 5174,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
});

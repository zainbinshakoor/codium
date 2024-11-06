import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    },
  },
});

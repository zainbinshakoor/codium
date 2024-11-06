import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import ViteDts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteDts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'CodeumUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `codeum-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'cufc-ui',
      fileName: (format) => `cufc-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'output.css';
          return assetInfo.name;
        },
      },
    },
  },
});

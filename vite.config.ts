import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),

    dts({
      include: ['lib/index.ts'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/lib', ''),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve('lib', 'index.ts'),
      name: 'avatar-gradient-generator',
      fileName: (format) => `agg.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}));

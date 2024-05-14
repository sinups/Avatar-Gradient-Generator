import react from '@vitejs/plugin-react';
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
      entry: 'lib/index.ts',
      name: 'avatar-gradient-generator',
      fileName: (format) => `agg.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}));

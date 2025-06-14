// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
      host: true,
      port: 3000,
    },
    build: {
      outDir: 'dist',
      assets: 'assets',
    },
});

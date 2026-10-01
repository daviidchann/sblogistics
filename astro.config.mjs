import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  security: {
    allowedDomains: [{}]
  },
  vite: {
    ssr: {
      external: ['better-sqlite3']
    }
  }
});
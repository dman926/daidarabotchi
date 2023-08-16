import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  outDir: '../../../dist/packages/new-england-keeshonds/frontend-astro',
  site: 'https://new-england-keeshonds.web.app',
  // site: 'https://www.newenglandkeeshonds.com', // TODO: uncomment for launch
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
    }),
    sitemap(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    }),
  ],
  experimental: {
    assets: true,
  },
});

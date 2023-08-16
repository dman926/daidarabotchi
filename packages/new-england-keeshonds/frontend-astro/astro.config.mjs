import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  outDir: '../../../dist/packages/new-england-keeshonds/frontend-astro',
  site: 'https://new-england-keeshonds.web.app',
  // site: 'https://www.newenglandkeeshonds.com', // TODO: uncomment for launch
  integrations: [
    sitemap(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    })
  ],
  experimental: {
    assets: true,
  },
});

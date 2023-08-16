import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  outDir: '../../../dist/packages/new-england-keeshonds/frontend-astro',
  site: 'https://new-england-keeshonds.web.app',
  // site: 'https://www.newenglandkeeshonds.com', // TODO: uncomment for launch
  integrations: [
    prefetch(),
    sitemap(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    }),
    partytown(),
  ],
  experimental: {
    assets: true,
  },
});

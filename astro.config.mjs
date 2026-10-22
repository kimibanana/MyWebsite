import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: change to the real domain once it is registered.
export default defineConfig({
  site: 'https://webfrontier.co',
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)\/?$/.test(page) })],
  trailingSlash: 'ignore',
});

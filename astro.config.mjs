import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: switch to the custom domain once it is connected in Netlify.
export default defineConfig({
  site: 'https://webfrontierco.netlify.app',
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)\/?$/.test(page) })],
  trailingSlash: 'ignore',
});

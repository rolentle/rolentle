// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://rolentle.com',
  integrations: [mdx(), sitemap()],

  image: {
      service: passthroughImageService(),
	},

  adapter: cloudflare(),
});
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jon.haddow.me',
  integrations: [
    preact({ 
      compat: true // Enable React compatibility mode for existing components
    }),
    tailwind({
      applyBaseStyles: false, // We have our own base styles
    }),
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  // Enable server-side rendering for dynamic content
  output: 'static'
});
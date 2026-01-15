import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  site: 'https://personal-website-five-hazel-54.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind()]
});
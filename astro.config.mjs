/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

//@ts-check

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
// import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { visualizer } from 'rollup-plugin-visualizer'

import { remarkReadingTime } from './src/utils/remark-reading-time'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://lexedia.moe',
  integrations: [
    mdx(),
    /*
     * TODO: Remove sitemap
     * sitemap(),
     */
    tailwind(),
    icon(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'de',
      'fr',
    ],
  },
  markdown: {
    remarkPlugins: [ remarkReadingTime ],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    },
  },
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: 'stats.html',
      }),
    ],
  },
})

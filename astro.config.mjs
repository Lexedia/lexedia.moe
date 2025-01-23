/*
 * MIT License
 *
 * Copyright (c) 2025 Lina (Lexedia) L.
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
  redirects: {
    '/~projects': {
      destination: '/en/~projects/pages/1',
      status: 301,
    },
    '/~blog': {
      destination: '/en/~blog/pages/1',
      status: 301,
    },
    '/~archive': {
      destination: '/en/~archive',
      status: 301,
    },
    '/~archiv': {
      destination: '/de/~archiv',
      status: 301,
    },
    '/~projekte': {
      destination: '/de/~projekte/seiten/1',
      status: 301,
    },
    '/~projets': {
      destination: '/fr/~projets/pages/1',
      status: 301,
    },
    '/en/~projects': {
      destination: '/en/~projects/pages/1',
      status: 301,
    },
    '/en/~projects/pages': {
      destination: '/en/~projects/pages/1',
      status: 301,
    },
    '/en/~blog': {
      destination: '/en/~blog/pages/1',
      status: 301,
    },
    '/en/~blog/pages': {
      destination: '/en/~blog/pages/1',
      status: 301,
    },
    '/fr/~blog': {
      destination: '/fr/~blog/pages/1',
      status: 301,
    },
    '/fr/~blog/pages': {
      destination: '/fr/~blog/pages/1',
      status: 301,
    },
    '/de/~blog': {
      destination: '/en/~blog/pages/1',
      status: 301,
    },
    '/de/~blog/seiten': {
      destination: '/en/~blog/seiten/1',
      status: 301,
    },
    '/de/~projekte': {
      destination: '/de/~projekte/seiten/1',
      status: 301,
    },
    '/de/~projekte/seiten': {
      destination: '/de/~projekte/seiten/1',
      status: 301,
    },
    '/fr/~projets': {
      destination: '/fr/~projets/pages/1',
      status: 301,
    },
    '/fr/~projets/pages': {
      destination: '/fr/~projets/pages/1',
      status: 301,
    },
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

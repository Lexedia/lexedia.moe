/*
 * MIT License
 *
 * Copyright (c) 2025 Lina (Lexedia) L.
 */

import type { TranslationEntries } from './types'

export default {
  en: {
    pages: {
      text: 'pages',
    },
    tags: {
      text: 'tags',
    },
    projects: {
      text: 'projects',
    },
    archive: {
      text: 'archive',
    },
    series: {
      text: 'series',
    },
    about: {
      text: 'about',
    },
    writings: {
      text: 'writings',
    },
  },
  de: {
    pages: {
      text: 'seiten',
    },
    tags: {
      text: 'schlüsselwörter',
    },
    projects: {
      text: 'projekte',
    },
    archive: {
      text: 'archiv',
    },
    series: {
      text: 'serien',
    },
    about: {
      text: 'über-mich',
    },
    writings: {
      text: 'schriftstücke',
    },
  },
  fr: {
    pages: {
      text: 'pages',
    },
    tags: {
      text: 'mots-clefs',
    },
    projects: {
      text: 'projets',
    },
    archive: {
      text: 'archive',
    },
    series: {
      text: 'séries',
    },
    about: {
      text: 'à-propos',
    },
    writings: {
      text: 'écrits',
    },
  },
} satisfies TranslationRoutingEnries

type TranslationRoutingEnries = TranslationEntries<RoutingEntry>

export interface RoutingEntry {
  text: string
}

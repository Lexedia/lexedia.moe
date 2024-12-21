/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { TranslationEntries } from './types'

export default {
  en: {
    home: {
      text: 'Home',
      slug: '',
    },
    about: {
      text: 'About',
      slug: '~about',
    },
    blog: {
      text: 'Blog',
      slug: '~blog',
      route: '/~blog/pages/1',
    },
    projects: {
      text: 'Projects',
      slug: '~projects',
      route: '/~projects/pages/1',
    },
    archive: {
      text: 'Archive',
      slug: '~archive',
    },
    tags: {
      text: 'Tags',
      slug: '~tags',
    },
    series: {
      text: 'Series',
      slug: '~series',
    },
  },
  de: {
    home: {
      text: 'Startseite',
      slug: '',
    },
    about: {
      text: 'Über mich',
      slug: '~über-mich',
    },
    blog: {
      text: 'Blog',
      slug: '~blog',
      route: '/~blog/seiten/1',
    },
    projects: {
      text: 'Projekte',
      slug: '~projekte',
      route: '/~projekte/seiten/1',
    },
    archive: {
      text: 'Archiv',
      slug: '~archiv',
    },
    tags: {
      text: 'Schlagwörter',
      slug: '~schlagwörter',
    },
    series: {
      text: 'Serien',
      slug: '~serien',
    },
  },
  fr: {
    home: {
      text: 'Accueil',
      slug: '',
    },
    about: {
      text: 'À propos',
      slug: '~à-propos',
    },
    blog: {
      text: 'Blog',
      slug: '~blog',
      route: '/~blog/pages/1',
    },
    projects: {
      text: 'Projets',
      slug: '~projets',
      route: '/~projets/pages/1',
    },
    archive: {
      text: 'Archives',
      slug: '~archives',
    },
    tags: {
      text: 'Étiquettes',
      slug: '~étiquettes',
    },
    series: {
      text: 'Séries',
      slug: '~séries',
    },
  },
} as const satisfies TranslationNavEntries

type TranslationNavEntries = TranslationEntries<NavEntry>

export interface NavEntry {
  /**
   * Provided translation
   */
  text: string

  /**
   * Content collection slug or url path for this page without the language code
   */
  slug: string

  route?: string
}

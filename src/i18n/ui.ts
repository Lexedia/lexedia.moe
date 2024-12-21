/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { TranslationEntries } from './types'

export default {
  en: {
    'general.previous': {
      text: '← Previous',
    },
    'general.next': {
      text: 'Next',
    },
    'site.title': {
      text: 'Lexedia',
    },
    'site.description': {
      text: 'My personal website and blog. (I post a lot of stupid stuff here :3)',
    },
    'profile.description': {
      text: 'Hello',
    },
    'blog.lastUpdated': {
      text: 'Last updated:',
    },
    'blog.timeToRead': {
      text: '{0} minute{1} to read.',
      plural: 's',
    },
    'blog.tags.seeMore': {
      text: 'See more',
    },
    'sidebar.tableOfContents': {
      text: 'Table of Contents',
    },
    'project.platform': {
      text: 'PLATFORM',
    },
    'project.stack': {
      text: 'STACK',
    },
    'project.website': {
      text: 'WEBSITE',
    },
    'archive.title': {
      text: 'Archive',
    },
    'archive.description': {
      text: 'A list of all my blog posts.',
    },
    'projects.title': {
      text: 'Projects',
    },
    'tags.title': {
      text: 'Tag',
      plural: 'Tags',
    },
    'tags.description': {
      text: 'View all posts with the tag - {0}.',
    },
    'posts.title': {
      text: 'Posts',
    },
    'posts.description': {
      text: 'My blog posts.',
    },
    'series.title': {
      text: 'Series',
    },
    'series.description': {
      text: 'View all posts with the series - {0}.',
    },
    'series.join': {
      text: 'in {0}',
    },
  },
  de: {
    'general.previous': {
      text: '← Zurück',
    },
    'general.next': {
      text: 'Weiter',
    },
    'site.title': {
      text: 'Lexedia',
    },
    'site.description': {
      text: 'Meine persönliche Website und Blog. (Ich poste hier viel dummes Zeug :3)',
    },
    'profile.description': {
      text: 'Hallo',
    },
    'blog.lastUpdated': {
      text: 'Zuletzt aktualisiert:',
    },
    'blog.timeToRead': {
      text: '{0} Minute{1} zum Lesen.',
      plural: 'n',
    },
    'blog.tags.seeMore': {
      text: 'Mehr anzeigen',
    },
    'sidebar.tableOfContents': {
      text: 'Inhaltsverzeichnis',
    },
    'project.platform': {
      text: 'PLATTFORM',
    },
    'project.stack': {
      text: 'STACK',
    },
    'project.website': {
      text: 'WEBSITE',
    },
    'archive.title': {
      text: 'Archiv',
    },
    'archive.description': {
      text: 'Eine Liste aller meiner Blog-Beiträge.',
    },
    'projects.title': {
      text: 'Projekte',
    },
    'tags.title': {
      text: 'Schlüsselwörte',
      plural: 'Schlüsselwörter',
    },
    'tags.description': {
      text: 'Alle Beiträge mit dem Tag anzeigen - {0}.',
    },
    'posts.title': {
      text: 'Beiträge',
    },
    'posts.description': {
      text: 'Meine Blog-Beiträge.',
    },
    'series.title': {
      text: 'Serien',
    },
    'series.description': {
      text: 'Alle Beiträge mit der Serie anzeigen - {0}.',
    },
    'series.join': {
      text: 'in {0}',
    },
  },
  fr: {
    'general.previous': {
      text: '← Précédent',
    },
    'general.next': {
      text: 'Suivant',
    },
    'site.title': {
      text: 'Lexedia',
    },
    'site.description': {
      text: 'Mon site personnel et mon blog. (Je poste beaucoup de trucs stupides ici :3)',
    },
    'profile.description': {
      text: 'Salut',
    },
    'blog.lastUpdated': {
      text: 'Dernière mise à jour :',
    },
    'blog.timeToRead': {
      text: '{0} minute{1} à lire.',
      plural: 's',
    },
    'blog.tags.seeMore': {
      text: 'Voir plus',
    },
    'sidebar.tableOfContents': {
      text: 'Table des matières',
    },
    'project.platform': {
      text: 'PLATEFORME',
    },
    'project.stack': {
      text: 'STACK',
    },
    'project.website': {
      text: 'SITE WEB',
    },
    'archive.title': {
      text: 'Archives',
    },
    'archive.description': {
      text: 'Une liste de tous mes articles de blog.',
    },
    'projects.title': {
      text: 'Projets',
    },
    'tags.title': {
      text: 'Étiquette',
      plural: 'Étiquettes',
    },
    'tags.description': {
      text: 'Voir tous les articles avec l\'étiquette - {0}.',
    },
    'posts.title': {
      text: 'Articles',
    },
    'posts.description': {
      text: 'Mes articles de blog.',
    },
    'series.title': {
      text: 'Séries',
    },
    'series.description': {
      text: 'Voir tous les articles de la série - {0}.',
    },
    'series.join': {
      text: 'dans {0}',
    },
  },
} as const satisfies TranslationUIEntries

type TranslationUIEntries = TranslationEntries<UIEntry>

export interface UIEntry {
  text: string
  plural?: string
}

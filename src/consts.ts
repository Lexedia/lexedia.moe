/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type nav from './i18n/nav'
import ui from './i18n/ui'
import type { SupportedLanguage } from './utils/i18n'

interface Config {
  title: string
  description: string
  lang: string
  profile: {
    author: string
    description?: string
  }
  settings: {
    paginationSize: number
  }
}

interface SocialLink {
  icon: string
  friendlyName: string
  link: string
}

export const SUPPORTED_LANGUAGES = {
  en: 'en',
  de: 'de',
  fr: 'fr',
} as const

export const DEFAULT_LANG = SUPPORTED_LANGUAGES.en

export const siteConfig: Config = {
  title: ui[DEFAULT_LANG]['site.title'].text,
  description: ui[DEFAULT_LANG]['site.description'].text,
  lang: DEFAULT_LANG,
  profile: {
    author: 'Lexedia',
    description: ui[DEFAULT_LANG]['profile.description'].text,
  },
  settings: {
    paginationSize: 10,
  },
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: 'mdi:github',
    friendlyName: 'Github',
    link: 'https://github.com/Lexedia',
  },
  {
    icon: 'mdi:email',
    friendlyName: 'email',
    link: 'mailto:contact@lexedia.moe',
  },
  {
    icon: 'simple-icons:bluesky',
    friendlyName: 'Bluesky',
    link: 'https://bsky.app/profile/did:plc:fv5kg6w762p2fgj5py7mpmfk',
  },
  {
    icon: 'cib:discord',
    friendlyName: 'Discord',
    link: 'https://discordapp.com/users/253554702858452992',
  },
  {
    icon: 'simple-icons:pronounsdotpage',
    friendlyName: 'Pronouns',
    link: 'https://en.pronouns.page/@Lexedia',
  },
  {
    icon: 'simple-icons:reddit',
    friendlyName: 'Reddit',
    link: 'https://www.reddit.com/u/Lexedia',
  },
  {
    icon: 'mdi:key-variant',
    friendlyName: 'PGP (976D DEB2 5D64 F3DD 45DB  7EBE 5939 04BB F72D B264)',
    link: '/~pgp/public-key.asc',
  },
  {
    icon: 'mdi:rss',
    friendlyName: 'rss',
    link: '/~blog/feed.xml',
  },
]

export const NAV_LINKS: (keyof (typeof nav)[SupportedLanguage])[] = [
  'home',
  'about',
  'blog',
  'projects',
  'archive',
]

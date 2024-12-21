/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { TranslationEntries } from './types'

export default {
  en: {
    404: {
      text: 'Looks like you\'re lost! You sure you know where you\'re going?',
    },
  },
  de: {
    404: {
      text: 'Sieht aus, als wären Sie verloren! Sind Sie sicher, dass Sie wissen, wo Sie hinwollen?',
    },
  },
  fr: {
    404: {
      text: 'On dirait que vous êtes perdu ! Vous êtes sûr de savoir où vous allez ?',
    },
  },
} satisfies GeneralEntries

export interface GeneralEntry {
  text: string
}

type GeneralEntries = TranslationEntries<GeneralEntry>

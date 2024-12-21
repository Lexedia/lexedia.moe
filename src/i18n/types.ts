/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { SupportedLanguage } from '@/utils'

export type TranslationEntries<T> = Record<SupportedLanguage, Record<string, T>>

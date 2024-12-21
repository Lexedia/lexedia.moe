/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import { DEFAULT_LANG, SUPPORTED_LANGUAGES } from 'src/consts'
import nav from '@/i18n/nav'
import ui from '@/i18n/ui'
import { format } from './strings'
import type { TranslationEntries } from '@/i18n/types'
import general from '@/i18n/general'

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES

export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(SUPPORTED_LANGUAGES) as SupportedLanguage[]
}

export function isValidLanguageCode(lang: string): boolean {
  return Object.hasOwn(SUPPORTED_LANGUAGES, lang)
}

export function getLangFromUrl(url: URL) {
  const [ , lang ] = url.pathname.split('/')
  if (lang! in SUPPORTED_LANGUAGES) {
    return lang as SupportedLanguage
  }
  return DEFAULT_LANG
}

export function getLangFromSlug(slug: string) {
  const [ lang ] = slug.split('/')
  if (lang! in SUPPORTED_LANGUAGES) {
    return lang as SupportedLanguage
  }
  return DEFAULT_LANG
}

export function getLocalizedUrl(url: URL, locale: SupportedLanguage): string {
  const [ , , ...slug ] = url.pathname.split('/')
  if (isValidLanguageCode(locale)) {
    return `/${locale}/${slug.join('/')}`
  }
  return `/${DEFAULT_LANG}/${slug.join('/')}`
}

type TCallBack<T extends TranslationEntries<U>, U> = {
  <K extends keyof T[SupportedLanguage]>(key: K): T[SupportedLanguage][K]
  <P extends T[SupportedLanguage][K], K extends keyof T[SupportedLanguage]>(key: K, prop: keyof P, ...args: unknown[]): string
}

const t =
  <T extends TranslationEntries<U>, U>(lang: SupportedLanguage, provider: T): TCallBack<T, U> =>
    //@ts-expect-error ts is too dumb
    <P extends T[SupportedLanguage][K], K extends keyof T[SupportedLanguage]>(key: K, prop?: keyof P, ...args: unknown[]): T[SupportedLanguage][K] | string => {
      if (prop) {
        //@ts-expect-error ts is too dumb
        return format(provider[lang][key][prop], ...args) || format(provider[DEFAULT_LANG][key][prop], ...args)
      }

      //@ts-expect-error ts is too dumb
      return provider[lang][key] || provider[DEFAULT_LANG][key]
    }

export const useNavTranslations = (lang: SupportedLanguage) => t(lang, nav)

export const useUITranslations = (lang: SupportedLanguage) => t(lang, ui)

export const useGeneralTranslations = (lang: SupportedLanguage) => t(lang, general)

export const useAllTranslations = (lang: SupportedLanguage) => t(lang, {
  ...nav,
  ...ui,
  ...general,
})

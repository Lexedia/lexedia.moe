/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content'
import { getLangFromSlug, type SupportedLanguage } from './i18n'

export function getAllPosts<T extends CollectionKey>(collection: T, filterHidden = false) {
  return getCollection(collection, ({ data }) => {
    if (import.meta.env.PROD) {
      if (filterHidden) {
        return 'hide' in data ? !data.hide : true
      }

      return !data.draft
    }

    return filterHidden ? 'hide' in data ? !data.hide : true : true
  })
}

export function sortMDByDate<T extends CollectionKey, E extends CollectionEntry<T>>(posts: E[], order: 'ascending' | 'descending' = 'descending'): E[] {
  const direction = order === 'descending' ? 1 : -1

  return posts.toSorted((a, b) => {
    const _aDate = 'updatedDate' in a.data ? (a.data.updatedDate ?? a.data.pubDate) : a.data.pubDate
    const _bDate = 'updatedDate' in b.data ? (b.data.updatedDate ?? b.data.pubDate) : b.data.pubDate
    const aDate = new Date(_aDate).valueOf()
    const bDate = new Date(_bDate).valueOf()
    return (bDate - aDate) * direction
  })
}

export function sortMDByPinned<T extends CollectionKey, E extends CollectionEntry<T>>(posts: E[]): E[] {
  return posts.toSorted((a, b) => {
    const aOrder = a.data.order ?? 100
    const bOrder = b.data.order ?? 100
    return aOrder - bOrder
  })
}

export function filterByLanguage<T extends CollectionKey, E extends CollectionEntry<T>>(posts: E[], lang: SupportedLanguage): E[] {
  return posts.filter((post) => {
    const translationLang = getLangFromSlug(post.id)
    return lang === translationLang
  })
}

export function getPostsByTag<T extends CollectionKey, E extends CollectionEntry<T>>(tag: string, posts: E[]): E[] {
  return posts.filter((post) => {
    if ('tags' in post.data) {
      return post.data.tags?.includes(tag)
    }
    return false
  })
}

export function getPostsBySeries<T extends CollectionKey, E extends CollectionEntry<T>>(series: string, posts: E[]): E[] {
  return posts.filter((post) => {
    if ('series' in post.data) {
      return post.data.series?.includes(series)
    }
    return false
  })
}

export function getSlugFromCollectionEntry<T extends CollectionKey>(entry: CollectionEntry<T>) {
  const [ , ...slugs ] = entry.id.split('/')
  return slugs.length ? slugs.join('/') : entry.id
}

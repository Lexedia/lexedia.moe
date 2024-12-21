/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { CollectionEntry, CollectionKey } from 'astro:content'

export const getAllTags = <K extends CollectionKey, E extends CollectionEntry<K>>(posts: E[]) =>
  posts.flatMap(({ data }) => ('tags' in data && data.tags ? data.tags : []))


export const getUniqueTags = <K extends CollectionKey, E extends CollectionEntry<K>>(posts: E[]) =>
  [ ...new Set(getAllTags(posts)) ]


export const getUniqueTagsWithCount = <K extends CollectionKey, E extends CollectionEntry<K>>(posts: E[]): [string, number][] =>
  [ ...getAllTags(posts).reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>()) ].sort((a, b) => b[1] - a[1])


/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { CollectionEntry, CollectionKey } from 'astro:content'

export const getAllPostsByProperty = <K extends CollectionKey, E extends CollectionEntry<K>, P extends keyof E['data']>(prop: P, posts: E[]) =>
  // @ts-expect-error: Chill
  posts.flatMap(({ data }) => data[prop] ?? [])


export const getUniqueByProperty = <K extends CollectionKey, E extends CollectionEntry<K>, P extends keyof E['data']> (prop: P, posts: E[]) =>
  [ ...new Set(getAllPostsByProperty(prop, posts)) ]


export const getUniqueWithCountByProperty = <K extends CollectionKey, E extends CollectionEntry<K>, P extends keyof E['data']>(prop: P, posts: E[]):
[string, number][] =>
  [ ...getAllPostsByProperty(prop, posts).reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>()) ].sort((a, b) => b[1] - a[1])


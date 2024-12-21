/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

function removeDupsAndLowercase(list: string[]) {
  if (!list.length)
    return list
  const lowercaseItems = list.map((str) => str.toLowerCase())
  const uniqueItems = new Set(lowercaseItems)
  return Array.from(uniqueItems)
}

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(150),
      description: z.string().max(250),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform((val) => (val ? new Date(val) : undefined))
        .optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
        })
        .optional(),
      ogImage: image().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowercase).optional(),
      series: z.string().optional(),
      draft: z.boolean().optional().default(true),
      order: z.number().min(1).max(5).optional(),
      hide: z.boolean().optional().default(false),
    }),
})

const project = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/content/project',
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      heroImage: z
        .object({
          url: z.string(),
          alt: z.string().optional(),
        })
        .optional(),
      ogImage: z.string().optional(),
      stack: z.array(z.string()).default([]).transform(removeDupsAndLowercase),
      platform: z.string().optional(),
      website: z.string().optional(),
      github: z.string().optional(),
      draft: z.boolean().optional().default(false),
      order: z.number().min(1).max(5).optional(),
    }),
})


export const collections = {
  blog,
  project,
}

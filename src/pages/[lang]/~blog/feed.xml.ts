/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import type { APIContext, GetStaticPaths } from 'astro'
import { type CollectionEntry } from 'astro:content'
import rss from '@astrojs/rss'

import { version as astroVersion } from 'astro/package.json'
import { version as rssVersion } from '@astrojs/rss/package.json'
import {
  filterByLanguage, getAllPosts, getSlugFromCollectionEntry, getSupportedLanguages, type SupportedLanguage,
} from '@/utils'
import ui from '@/i18n/ui'

export const getStaticPaths = (async () => {
  const blogEntries = await getAllPosts('blog')
  return getSupportedLanguages().flatMap((lang) => {
    const filteredByLanguage = filterByLanguage(
      blogEntries,
      lang as SupportedLanguage,
    )

    return filteredByLanguage.map((post) => {
      const slug = getSlugFromCollectionEntry(
        post as CollectionEntry<'blog'>,
      )
      return {
        params: {
          lang,
          slug,
        },
        props: { post },
      }
    })
  })
}) satisfies GetStaticPaths

// :husk:
function cleanHtmlContent(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div)>/gi, '\n\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gs, (_, code) =>
      `\n    ${code.trim()}\n`)
    .replace(/<[^>]+>/g, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim()
}

export async function GET(context: APIContext) {
  const { lang } = context.params as { lang: SupportedLanguage }
  const blog = await getAllPosts('blog')


  const posts = filterByLanguage(blog, lang)

  if (posts.length <= 0) {
    return rss({
      title: ui[lang]['site.title'].text,
      description: ui[lang]['site.description'].text,
      site: 'https://lexedia.moe',
      items: [],
    })
  }


  return rss({
    title: ui[lang]['site.title'].text,
    description: ui[lang]['site.description'].text,
    site: 'https://lexedia.moe',
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${lang}/~${post.collection}/${getSlugFromCollectionEntry(post)}/`,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      author: 'Lexedia',
      content: post.rendered?.html ? cleanHtmlContent(post.rendered.html) : undefined,
    })),
    trailingSlash: false,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `
        <language>${lang}</language>
        <copyright>Copyright (c) ${new Date().getFullYear()} Lina (Lexedia) L.</copyright>
        <managingEditor>contact@lexedia.moe (Lexedia)</managingEditor>
        <webMaster>contact@lexedia.moe (Lexedia)</webMaster>
        <generator>@astrojs/rss v${rssVersion} (Astro v${astroVersion})</generator>
        <atom:link href="https://lexedia.moe/${lang}/~blog/feed.xml" rel="self" type="application/rss+xml" />
    `,
  })
}

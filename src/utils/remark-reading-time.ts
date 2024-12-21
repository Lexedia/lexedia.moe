/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import type { RemarkPlugins } from 'astro'

/*
 * Idk, RemarkPlugin isnt exported but it should be...
 * So i need to use RemarkPlugins[number].
 */
export const remarkReadingTime: RemarkPlugins[number] = () => (tree, { data }) => {
  const textOnPage = toString(tree)
  const readingTime = getReadingTime(textOnPage)
  data.astro!.frontmatter!.readingDuration = readingTime.time ?? 0
}


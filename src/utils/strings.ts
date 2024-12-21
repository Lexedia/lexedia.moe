/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

/**
 * Formats a string with substitution values.
 * @param s The string to format.
 * @param args The arguments, indexed by their position.
 * @returns The formatted string.
 * @example
 * format('Hello {0}!', 'World')
 */
export const format = <T extends string>(s: T, ...args: unknown[]): T => s.replace(/{(\d+)}/g, (_, n) => args[n]?.toString() ?? '') as T

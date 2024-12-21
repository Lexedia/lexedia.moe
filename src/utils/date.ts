/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

const dateOptions: {
  locale: string;
  options: Intl.DateTimeFormatOptions
} = {
  locale: 'en-GB',
  options: {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  },
}

export function getFormattedDate(date: string | number | Date, options?: Intl.DateTimeFormatOptions, locale?: string) {
  return new Date(date).toLocaleDateString(locale ?? dateOptions.locale, options ?? dateOptions.options)
}

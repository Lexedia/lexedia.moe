/*
 * MIT License
 *
 * Copyright (c) 2024 Lina (Lexedia) L.
 */

//@ts-check

import eslint from '@eslint/js'
import tslint from 'typescript-eslint'
import stylisticlint from '@stylistic/eslint-plugin'
import astrolint from 'eslint-plugin-astro'
import licenseHeader from 'eslint-plugin-license-header'

export default tslint.config({
  plugins: {
    '@stylistic': stylisticlint,
  },
  extends: [
    eslint.configs.recommended,
    tslint.configs.recommended,
    astrolint.configs.recommended,
  ],
  ignores: [
    'dist/**/*',
    '.astro/**/*',
    '**/*.json',
  ],
  rules: {
    '@stylistic/block-spacing': 'error',
    '@stylistic/max-len': [
      'error',
      160,
    ],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/object-curly-spacing': [
      'error',
      'always',
    ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'always',
    ],
    '@stylistic/array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 4,
      },
    ],
    '@stylistic/array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: 2,
        consistent: true,
      },
    ],
    '@stylistic/eol-last': 'error',
    '@stylistic/indent': [
      'error',
      2,
    ],
    '@stylistic/quotes': [
      'error',
      'single',
    ],
    '@stylistic/semi': [
      'error',
      'never',
    ],
    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/multiline-comment-style': 'error',
    '@stylistic/new-parens': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': [
      'error',
      'below',
    ],
    '@stylistic/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
    '@stylistic/object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
        minProperties: 4,
      },
    ],
    '@stylistic/quote-props': [
      'error',
      'as-needed',
    ],
    '@stylistic/comma-style': [
      'error',
      'last',
    ],
    '@stylistic/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-warning-comments': 'warn',
    '@typescript-eslint/array-type': 'error',
  },
},
{
  files: [
    '**/*.{ts,tsx,cts,mts,js,jsx,cjs,mjs}',
    // '!**/*.astro',
  ],
  plugins: {
    'license-header': licenseHeader,
  },
  rules: {
    'license-header/header': [
      'warn',
      [
        '/*',
        ' * MIT License',
        ' *',
        ` * Copyright (c) ${new Date().getFullYear()} Lina (Lexedia) L.`,
        ' */',
      ],
    ],
  },
})

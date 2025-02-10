import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import jestPlugin from 'eslint-plugin-jest';
import playwright from 'eslint-plugin-playwright';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: [
      '**/node_modules/',
      '**/.vscode/',
      '**/.next/',
      '**/.serverless/',
      '**/*.md',
      '**/coverage/',
    ],
  },
  ...compat.extends(
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      react,
      prettier,
      jest: jestPlugin,
      playwright,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'no-console': 'warn',
      'click-events-have-key-events': 'off',
      'prettier/prettier': 'error',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.tsx', '.mdx'],
        },
      ],

      'react/jsx-one-expression-per-line': 0,
      'react/prop-types': 0,
      'jsx-a11y/click-events-have-key-events': 0,

      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],

      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'react/jsx-props-no-spreading': 0,
      'jsx-a11y/anchor-is-valid': 0,

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-promise-executor-return': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-restricted-exports': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'import/no-extraneous-dependencies': 'off',
      'global-require': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'react/no-unescaped-entities': 'off',

      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id'],
        },
      ],
    },
  },
  ...compat.extends('plugin:mdx/recommended').map((config) => ({
    ...config,
    files: ['**/*.mdx'],
  })),
  {
    files: ['**/*.mdx'],

    settings: {
      'mdx/code-blocks': true,
      'mdx/no-unused-expressions': true,
      'mdx/no-jsx-html-comments': false,
    },

    rules: {
      'react/jsx-no-undef': 'off',
      'react/self-closing-comp': 'off',
    },
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['./e2e/**/*.ts'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@eslint-plugin-playwright/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'prettier/prettier': 'error',
    },
  },
];

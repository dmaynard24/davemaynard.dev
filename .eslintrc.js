module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        allowSeparatedGroups: true,
      },
    ],
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {functions: false, classes: false, variables: true}],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'array-bracket-spacing': [2, 'never'],
    '@next/next/link-passhref': 'off',
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'cypress'],
  // plugins: ['react', '@typescript-eslint', 'jest', 'cypress', 'react-hooks' ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'max-lines': ['error', 150],
    'no-implicit-coercion': ['error', { boolean: true, string: true }],
  },
}

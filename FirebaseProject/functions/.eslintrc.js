// functions/.eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.dev.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    // skip nested or non‑TS entrypoints
    '**/*.js',
  ],
  overrides: [
    {
      // for your JS files, fall back to the default parser (no TS project)
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        project: null,
      },
    },
  ],
};

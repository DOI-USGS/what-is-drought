/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true, // Set to false if this file is the only Node context file
    es2021: true,
    node: true, // Add this line
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:json/recommended' // Add this line
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'json' // Add this line
  ],
};

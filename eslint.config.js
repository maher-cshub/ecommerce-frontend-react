import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Integrate Prettier as a plugin and set its rule:
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      // This rule makes ESLint report any formatting issues that Prettier finds as errors
      'prettier/prettier': 'error',
    },
  },
  // Extend Prettier config to disable conflicting rules
  prettierConfig,
];

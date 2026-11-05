import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
export default [
 { ignores: ['dist'] },
 { files: ['src/**/*.{js,jsx}'], languageOptions: { globals: globals.browser, parserOptions: { ecmaFeatures: { jsx: true } } }, plugins: { react }, rules: { ...js.configs.recommended.rules, 'react/jsx-uses-react': 'error', 'react/jsx-uses-vars': 'error' } },
 prettier,
];

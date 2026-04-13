import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		plugins: { '@typescript-eslint': tsPlugin },
		languageOptions: { parser: tsParser },
		rules: { ...tsPlugin.configs.recommended.rules }
	},
	...svelte.configs['flat/recommended'],
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2017,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: { parser: tsParser }
		}
	},
	{
		ignores: ['.DS_Store', 'node_modules/', 'build/', '.svelte-kit/', 'package/']
	}
];

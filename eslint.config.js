import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...tseslint.globals,
				AbortSignal: 'readonly',
				Blob: 'readonly',
				DocumentFragment: 'readonly',
				Event: 'readonly',
				FormData: 'readonly',
				HTMLButtonElement: 'readonly',
				HTMLDivElement: 'readonly',
				HTMLElement: 'readonly',
				HTMLInputElement: 'readonly',
				HTMLSelectElement: 'readonly',
				HTMLTextAreaElement: 'readonly',
				MouseEvent: 'readonly',
				MutationObserver: 'readonly',
				Request: 'readonly',
				RequestInit: 'readonly',
				ResizeObserver: 'readonly',
				Response: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly',
				browser: true,
				document: 'readonly',
				es2021: true,
				fetch: 'readonly',
				jest: true,
				node: true,
				setTimeout: 'readonly',
				window: 'readonly',
			},
			parser: tseslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'import': importPlugin,
			'prefer-arrow': preferArrowPlugin,
			'react': reactPlugin,
			'react-hooks': reactHooksPlugin,
			'sort-keys-fix': sortKeysFixPlugin,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_' }],
			'arrow-spacing': 'error',
			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/no-cycle': 'error',
			'import/no-duplicates': 'error',
			'import/order': ['error', {
				'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
			}],
			'indent': ['warn', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'no-console': 'error',
			'no-const-assign': 'error',
			'no-undef': 'error',
			'no-use-before-define': 'error',
			'no-var': 'error',
			'object-curly-spacing': ['warn', 'always'],
			'prefer-arrow/prefer-arrow-functions': [
				'error',
				{
					classPropertiesAllowed: false,
					disallowPrototype: true,
					singleReturnOnly: false,
				},
			],
			'prefer-const': 'error',
			'quotes': ['error', 'single'],
			'react-hooks/exhaustive-deps': 'warn',
			'react/jsx-sort-props': ['error', {
				'callbacksLast': true,
				'noSortAlphabetically': false,
				'reservedFirst': true,
				'shorthandFirst': true,
			}],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'sort-keys-fix/sort-keys-fix': 'error',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
);
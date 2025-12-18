const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const reactCompiler = require('eslint-plugin-react-compiler');
const tailwind = require('eslint-plugin-tailwindcss');
const globals = require('globals');

module.exports = defineConfig([
	globalIgnores(['node_modules', '.expo', 'dist', 'web-build', 'android', 'ios']),
	expoConfig,
	{
		files: ['babel.config.js'],
		languageOptions: {
			globals: globals.node,
		},
	},
	...tailwind.configs['flat/recommended'],
	{
		plugins: {
			'react-compiler': reactCompiler,
		},
		rules: {
			'react-compiler/react-compiler': 'error',
			'@typescript-eslint/no-unused-vars': 'off',
			'react/no-unescaped-entities': 'off',
			'tailwindcss/no-custom-classname': 'off',
			// eslint-import
			'import/order': [
				'warn',
				{
					'alphabetize': {
						order: 'asc',
						caseInsensitive: true,
					},
					'newlines-between': 'always',
					'groups': ['builtin', 'external', 'internal'],
					'pathGroups': [
						// Group 1: React ecosystem (comes first in builtin)
						{ pattern: 'react', group: 'builtin', position: 'before' },
						{ pattern: 'react-dom', group: 'builtin', position: 'before' },
						{ pattern: 'react-native', group: 'builtin', position: 'before' },
						{ pattern: 'react-native-**', group: 'builtin', position: 'before' },
						{ pattern: '@react-*/**', group: 'builtin', position: 'before' },
						// Group 1: Expo ecosystem (comes after react in builtin)
						{ pattern: 'expo', group: 'builtin' },
						{ pattern: 'expo-**', group: 'builtin' },
						{ pattern: '@expo/**', group: 'builtin' },
						// Group 2: Internal (@/**) - must come BEFORE @expo to avoid conflicts
						{ pattern: '@/**', group: 'internal' },
					],
					'pathGroupsExcludedImportTypes': [],
					'distinctGroup': false,
				},
			],
			'import/newline-after-import': 1,
		},
	},
]);

import path from 'path';

import {defineConfig} from 'vite';
import {reactRouter} from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [reactRouter(), tsconfigPaths()],
	resolve: {
		alias: [
			{find: '@', replacement: path.resolve(__dirname, 'src')},
			{
				find: 'widgets',
				replacement: path.resolve(__dirname, 'src/widgets'),
			},
			{
				find: 'features',
				replacement: path.resolve(__dirname, 'src/features'),
			},
			{
				find: 'shared',
				replacement: path.resolve(__dirname, 'src/shared'),
			},
			{find: 'app', replacement: path.resolve(__dirname, 'src/app')},
			{
				find: 'entities',
				replacement: path.resolve(__dirname, 'src/entities'),
			},
			{
				find: 'pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
		],
	},
});
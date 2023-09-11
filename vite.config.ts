// import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
	],
	resolve: {
		// 配置路径别名
		// alias: {
		// 	'@': fileURLToPath(new URL('./src', import.meta.url))
		// }
		alias: [{
			// @ 替代为 src
			find: '@',
			replacement: resolve(__dirname, 'src')
		},
		{
			// @component 替代为 src/component
			find: '@components',
			replacement: resolve(__dirname, 'src/components')
		}
		],
	}
});
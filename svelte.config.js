import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
		// @Topic: ページ調整中に利用
		// prerender: {
		// 	handleMissingId: ({ path, id, referrers }) => {
		// 		console.warn(`Missing id="${id}" on ${path}, referenced by: ${referrers.join(', ')}`);
		// 	}
		// }
	}
};

export default config;

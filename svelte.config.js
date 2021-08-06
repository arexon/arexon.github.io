import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@import "src/app.scss";'
		}
	}),
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
}

export default config

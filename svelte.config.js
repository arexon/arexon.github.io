import path from 'path'
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
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$lib': path.resolve('./src/lib')
				}
			}
		}
	}
}

export default config

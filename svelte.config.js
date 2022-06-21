import { resolve } from 'path'
import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$lib: resolve('./src/lib')
				}
			}
		}
	},
	preprocess: preprocess({
		scss: {
			prependData: '@import "src/app.scss";'
		}
	})
}

export default config

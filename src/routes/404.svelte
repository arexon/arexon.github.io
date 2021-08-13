<script>
	import Head from '../components/Head.svelte'
	import Button from '../components/Button.svelte'

	let description = `Whoops! This page doesn't exist`
	let location = 'Page not Found'
	let url = 'https://arexon.dev/404'
	let image = '/assets/thumbnail.png'
</script>

<Head description={description} location={location} url={url} image={image}/>

<section class="error">
	<div class="error_main">
		<span class="overline">Error: 404</span>
		<h1 class="error_main_header">Whoops!</h1>
		<h3 class="error_main_subtitle">Looks like you're lost.</h3>
		<Button secondary href="/" title="Go to Home">Take me Home</Button>
	</div>
	<div class="error_art"></div>
</section>

<style lang="scss">
	.error {
		@include box(100%);
		display: grid;
		grid-auto-rows: 1fr;

		&_main {
			@include box(100%);
			display: grid;
			justify-content: center;
			align-content: end;
			justify-items: start;

			&_header {
				@include font(60px, 800);
				line-height: 1;
				margin: 0;
				background: url('/assets/foregrounds/dots-big.svg');
				color: $color-neutral-4;
			}

			&_subtitle {
				margin-bottom: $space-3;
				color: $color-neutral-3;
			}
		}

		&_art {
			@include box(100%);
			background: url('/assets/404.png') center / 65% no-repeat;
		}

		@include tabletScreen {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: unset;

			&_main {
				align-content: center;
				background: $color-neutral-1;
			}

			&_art {
				background-size: 80%;
			}
		}

		@include desktopScreen {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: unset;

			&_main {
				align-content: center;
				background: $color-neutral-1;

				&_header {
					@include font(80px, 800);
				}
			}

			&_art {
				background-size: 80%;
			}
		}
	}
</style>

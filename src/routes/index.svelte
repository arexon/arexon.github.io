<script>
	import Transition from '$components/Transition.svelte'
	import Head from '$components/Head.svelte'
	import Button from '$components/Button.svelte'

	let title = 'Arexon'
	let description = 'Lowpoly 3D Artist, Pixel Artist, and Developer creating Minecraft content.'
	let location = 'Home | Arexon'
	let url = 'https://arexon.dev/'
	let keywords = 'Arexon, Arexon add-ons, Arexon mods, Blockbench'
	let image = '/assets/thumbnail.png'

	let isInView
</script>

<Head title={title} description={description} location={location} url={url} keywords={keywords} image={image}/>

<Transition bind:isInView>
	<section class="hero">
		<div class="hero_main transition" class:animate={isInView}>
			<h1 class="hero_main_header">
				<div>Developer,</div>
				<div>3D Artist,</div>
				<div>and Pixel Artist</div>
			</h1>
			<div class="hero_main_buttons">
				<Button primary href="/projects" title="Go to Projects">Explore Projects</Button>
				<Button secondary href="/gallery" title="Go to Gallery">View Gallery</Button>
			</div>
		</div>
		<div class="hero_art transitionR" class:animate={isInView}></div>
	</section>
</Transition>

<style lang="scss">
	.hero {
		@include box(100%);
		display: grid;
		grid-auto-rows: 1fr;

		&_main {
			@include box(100%);
			display: grid;
			place-content: center;
			place-items: center;
			gap: $space-3;
			padding: 0 $space-3 $space-3 $space-3;
			background:
				url('/assets/foregrounds/clouds-1.svg') 5% 95% / 50% no-repeat,
				url('/assets/foregrounds/clouds-2.svg') top right / 50% no-repeat;

			&_header {
				@include font(44px, 700);
				position: relative;
				background: url('/assets/foregrounds/dots-big.svg');
				color: $color-neutral-4;

				@each $color in $rainbow {
					$i: index($rainbow, $color);
					div:nth-child(#{$i}) {
						color: $color;
					}
				}
			}

			&_buttons {
				@include flex(center, flex-end, column);
				@include box(100%, auto);
				gap: $space-1;
			}
		}

		&_art {
			@include box(100%);
			position: relative;
			display: none;
			background: $color-neutral-1 url('/assets/hero.png') center / 80% no-repeat;
		}

		@include tabletScreen {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: unset;

			&_main_header {
				@include font(54px, 800);
			}

			&_art {
				display: block;
			}
		}

		@include desktopScreen {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: unset;

			&_main_header {
				@include font(64px, 800);
			}

			&_art {
				display: block;
			}
		}
	}

	.transition {
		opacity: 0;
		transform: translateY(50px);
		transition: transform 1s $curve-quart, opacity 1.5s $curve-quart;
	}
	.transitionR {
		@extend .transition;
		transform: translateY(-50px);
	}
	.transition.animate, .transitionR.animate {
		opacity: 1;
		transform: translateY(0);
	}
</style>

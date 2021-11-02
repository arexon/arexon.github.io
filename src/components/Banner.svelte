<script>
	import Transition from '$components/Transition.svelte'

	export let title = ''
	export let location = ''
	export let description = ''

	let isInView
</script>

<Transition bind:isInView>
	<header class="banner">
		<div class="banner_header transitionR" class:animate={isInView}>
			<h1 class="banner_header_title">{title}</h1>
		</div>
		<div class="banner_meta transition" class:animate={isInView}>
			<p class="banner_meta_location overline">{location}</p>
			<p class="banner_meta_description">{description}</p>
		</div>
	</header>
</Transition>

<style lang="scss">
	.banner {
		@include box(100%, 512px);
		display: grid;
		grid-auto-rows: 1fr;
		background: url('/assets/foregrounds/dots-small.svg');

		&_header {
			@include flex(center, center);
			@include font(60px, 600);
			position: relative;
			padding: $space-2;
			border-radius: 0 0 30px 30px;
			background: $color-neutral-3;
			overflow: hidden;

			&_title {
				color: $color-neutral-5;
				font: inherit;
				text-transform: lowercase;
				z-index: 1;
			}
		}

		&_meta {
			@include flex(center, center, column);
			position: relative;
			gap: $space-2;

			&_location {
				background: $color-neutral-0;
			}

			&_description {
				@include font($size-4, 400);
				padding: 0 $space-2;
				text-align: center;
			}
		}

		@include tabletScreen {
			grid-auto-rows: unset;
			grid-template-columns: 1fr 1fr;

			&_header {
				@include flex(flex-end, center);
				@include font(80px, 600);
				border-radius: 0 0 100px 0;
			}

			&_meta {
				@include flex(center, flex-start, column);
				padding-left: $space-2;

				&_description {
					@include font($size-5, 400);
					padding: 0;
					text-align: unset;
				}
			}
		}

		@include desktopScreen {
			grid-auto-rows: unset;
			grid-template-columns: 1fr 1fr;

			&_header {
				@include flex(flex-end, center);
				@include font(100px, 700);
				padding: $space-2 $space-4;
				border-radius: 0 0 100px 0;
			}

			&_meta {
				@include flex(center, flex-start, column);
				padding-left: $space-2;

				&_description {
					@include font($size-5, 400);
					padding: 0;
					text-align: unset;
				}
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

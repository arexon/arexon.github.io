<script>
	import Icon from './Icon.svelte'

	export let slide = false

	const toggleNav = () => slide = !slide
</script>

<header class="header" class:slide>
	<button class="header_navToggle" on:click={toggleNav}>
		<svg class="header_navToggle_icon" class:open={slide} class:slide viewBox="0 0 24 24">
			<rect x="2" y="6" width="16" height="4"/>
			<rect x="2" y="14" width="20" height="4"/>
		<svg/>
	</button>
	<a class="header_logo" href="/" title="arexon.dev">
		<svg class="header_logo_h"><use href="#logoH"/></svg>
		<svg class="header_logo_v"><use href="#logoV"/></svg>
	</a>
	<div class="header_links">
		<a href="https://github.com/arexon" title="GitHub"><Icon type="githubIcon"/></a>
		<a href="https://twitter.com/thearexon" title="Twitter"><Icon type="twitterIcon"/></a>
		<a href="https://sketchfab.com/arexon" title="Sketchfab"><Icon type="sketchfabIcon"/></a>
	</div>
</header>

<style lang="scss">
	.header {
		display: grid;
		grid-template-columns: 100px auto 1fr;
		justify-items: center;
		align-items: center;
		padding-right: $space-2;
		background: $color-neutral-0;
		transition: transform .5s $curve-quart;
		&.slide {
			transform: translateX(200px);
		}

		&_navToggle {
			background: transparent;
			&_icon {
				@include vector(48px);
				fill: $color-neutral-4;
				transition: transform .5s $curve-quart;
				rect {
					transition: transform .5s $curve-quart;
				}
				&:hover {
					fill: $color-primary-2;
				}
				&.slide {
					transform: rotate(90deg);
					rect:nth-child(1) {
						transform: translateY(4px);
					}
					rect:nth-child(2) {
						transform: translateY(-4px);
					}
				}
			}
		}

		&_logo {
			@include vector(176px, 32px);
			@include font($size-5, 500);
			justify-self: start;
			fill: $color-neutral-4;
			text-transform: uppercase;
			text-decoration: none !important;
			&:hover {
				fill: $color-primary-2;
			}

			&_h {
				display: block;
			}
			&_v {
				display: none;
			}
			@include desktopScreen {
				@include vector(32px, 176px);
				justify-self: unset;
				align-self: start;
				&_h {
					display: none;
				}
				&_v {
					display: block;
				}
			}
		}

		&_links {
			display: none;
			gap: $space-1;
			@include desktopScreen {
				@include flex(space-evenly, center, column);
				align-self: end;
			}
			@include tabletScreen {
				@include flex(space-evenly, center, row);
				justify-self: end;
			}
		}
		@include desktopScreen {
			grid-template-columns: unset;
			grid-template-rows: 100px auto 1fr;
			direction: unset;
			padding-right: 0;
			padding-bottom: $space-2;
		}
		@include tabletScreen {
			padding: 0 $space-3 0 $space-2;
		}
	}
</style>

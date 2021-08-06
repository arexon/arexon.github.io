<script>
	export let title = ''
	export let location = ''
	export let description = ''
</script>

<header class="banner">
	<div class="banner_header">
		<h1 class="banner_header_title">{title}</h1>
	</div>
	<div class="banner_meta">
		<p class="banner_meta_location overline">{location}</p>
		<p class="banner_meta_description">{description}</p>
	</div>
</header>

<style lang="scss">
	.banner {
		@include box(100%, 512px);
		display: grid;
		grid-auto-rows: 1fr;

		&_header {
			@include flex(center, center);
			@include font(60px, 600);
			position: relative;
			padding: $space-2;
			background: $color-neutral-4;
			overflow: hidden;

			&_title {
				color: $color-neutral-1;
				font: inherit;
				text-transform: lowercase;
				z-index: 1;
			}
		}

		&_meta {
			@include flex(center, center, column);
			position: relative;
			gap: $space-2;
			padding: $space-2;
			background: url('/assets/foregrounds/dots-small.svg');

			&_location {
				background: $color-neutral-0;
			}

			&_description {
				@include font($size-4, 400);
				text-align: center;
			}
		}

		@include tabletScreen {
			grid-auto-rows: unset;
			grid-template-columns: 1fr 1fr;

			&_header {
				@include flex(flex-end, center);
				@include font(80px, 600);
			}

			&_meta {
				@include flex(center, flex-start, column);

				&_description {
					@include font($size-5, 400);
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
			}

			&_meta {
				@include flex(center, flex-start, column);

				&_description {
					@include font($size-5, 400);
					text-align: unset;
				}
			}
		}
	}
</style>

<script>
	export let primary
	export let secondary
	export let href = ''
	export let title = ''
</script>

<a class:primary class:secondary {href} {title} type="button">
	<slot />
</a>

<style lang="scss">
	[type='button'] {
		@include font($size-1, 500);
		@include noSelection;
		display: inline-block;
		padding: $space-1 $space-3;
		border-radius: $radius-1;
		background: transparent;
		font-family: $font-secondary;
		text-transform: uppercase;
		text-decoration: none !important;
		line-height: 1;
		transition: transform 0.1s $curve-circ,
			background-color 0.2s $curve-quart, color 0.2s $curve-quart,
			box-shadow 0.2s $curve-quart;
		&:focus {
			transform: scale(0.92);
		}

		&.primary {
			background: $color-primary-0;
			color: $color-neutral-0;
			&:hover {
				background: $color-primary-1;
			}
		}

		&.secondary {
			color: $color-neutral-4;
			box-shadow: inset 0 0 0 2px $color-neutral-4;
			&:hover {
				background: $color-neutral-4;
				color: $color-neutral-1;
			}
		}
	}
</style>

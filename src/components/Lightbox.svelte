<script>
	export let visibility = false
	export let src
	export let alt
</script>

<div
	class="lightbox"
	class:show={visibility}
	on:click={(e) => {
		if (e.target !== e.currentTarget) return
		if (visibility) visibility = false
	}}
>
	<img
	class="lightbox_image"
	src={src}
	alt={alt}
	>
</div>

<style lang="scss">
	.lightbox {
		@include box(100%);
		position: absolute;
		display: grid;
		place-items: center;
		padding: 0 $space-1;
		background: #160d0eee;
		transition: transform .6s $curve-quart, opacity .4s $curve-quart;
		opacity: 0;
		transform: translateY(-100%);

		&_image {
			border-radius: $radius-1;
		}

		&.show {
			opacity: 1;
			transform: translateY(0);
		}

		@include tabletScreen {
			&_image {
				@include box(85%, auto);
			}
		}
		@include desktopScreen {
			&_image {
				@include box(60%, auto);
			}
		}
	}
</style>

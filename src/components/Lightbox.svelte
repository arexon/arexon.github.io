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
	<img class="lightbox_image" {src} {alt} />
</div>

<style lang="scss">
	.lightbox {
		@include box(100%);
		position: absolute;
		display: grid;
		place-items: center;
		padding: 0 $space-1;
		background: #160d0eee;
		transition: opacity 0.4s $curve-quart, visibility 0.4s;
		opacity: 0;
		visibility: hidden;

		&_image {
			border-radius: $radius-1;
		}

		&.show {
			opacity: 1;
			visibility: visible;
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

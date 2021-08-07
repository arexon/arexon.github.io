<script>
	export let slide = false

	let closeNav = () => {
		if (slide == true) slide = false
	}
</script>

<article class="content" on:click={closeNav} class:slide>
	<slot/>
</article>

<style lang="scss">
	.content {
		@include box(100%);
		display: grid;
		gap: $space-4;
		overflow-y: scroll;
		background: $color-neutral-0;
		transition: transform .5s $curve-quart, opacity .5s $curve-circ;
		&.slide {
			opacity: .25;
			transform: translateX(200px);
		}

		/* Scrollbar */
		scrollbar-color: $color-neutral-3 $color-neutral-1;
		scrollbar-width: thin;
		scrollbar-highlight-color: $color-neutral-5 $color-neutral-1;
		&::-webkit-scrollbar {
			@include box($space-0);
			background: $color-neutral-1;
		}
		&::-webkit-scrollbar-thumb {
			background: $color-neutral-3;
			&:hover {
				background: $color-neutral-5;
			}
		}
	}
</style>

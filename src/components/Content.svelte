<script>
	export let slide = false

	const closeNav = () => {
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
		scrollbar-color: $color-neutral-1 transparent;
		scrollbar-width: thin;
		&::-webkit-scrollbar {
			width: $space-1;
			background: transparent;
		}
		&::-webkit-scrollbar-thumb {
			background: $color-neutral-1;
			&:hover {
				background: $color-neutral-2;
			}
		}
	}
</style>

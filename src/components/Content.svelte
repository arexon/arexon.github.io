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
		transition: transform .5s $curve-quart, filter .5s $curve-circ;
		&.slide {
			filter: brightness(0.2);
			transform: translateX(200px);
		}

		/* Scrollbar */
    	scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>

<script>
    import Nav from '$components/Nav.svelte'
    import Header from '$components/Header.svelte'
    import Content from '$components/Content.svelte'
    import Spritesheet from '$components/Spritesheet.svelte'
    import "../app.scss"

    let slide = false
</script>

<main class="root">
	<Nav bind:slide/>
	<Header bind:slide/>
	<Content bind:slide>
		<slot/>
	</Content>
	<Spritesheet/>
</main>

<style lang="scss">
	.root {
		@include box(100%);
		display: grid;
		grid-template-rows: 60px calc(100% - 60px);
		background: $color-neutral-0;
		overflow: hidden;
		@include desktopScreen {
			grid-template-columns: 80px calc(100% - 80px);
			grid-template-rows: unset;
		}
	}
</style>

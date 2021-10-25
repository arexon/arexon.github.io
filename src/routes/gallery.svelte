<script>
	import Lightbox from '$components/Lightbox.svelte'
	import Transition from '$components/Transition.svelte'
	import Head from '$components/Head.svelte'
	import Banner from '$components/Banner.svelte'
	import Footer from '$components/Footer.svelte'
	import { gallery } from '$lib/gallery'

	let title = 'Gallery'
	let description = 'The best of my 3D lowpoly models'
	let location = 'Gallery | Arexon'
	let url = 'https://arexon.dev/gallery'
	let keywords = 'Arexon, Blockbench'
	let image = '/assets/thumbnail.png'

	let isInView

	let lightbox = {}
	let lightboxVisibility
</script>

<Head description={description} location={location} url={url} keywords={keywords} image={image}/>

<Banner title={title} description={description} location={location}/>

<Transition bind:isInView>
	<article class="gallery transition" class:animate={isInView}>
		{#each gallery as image}
			<img on:click={() => {lightbox = image; lightboxVisibility = true}} src={image.url} alt={image.name}/>
		{/each}
	</article>
</Transition>
<Lightbox src={lightbox.url} alt={lightbox.name} bind:visibility={lightboxVisibility}/>

<Footer/>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: auto;
		align-content: start;
		gap: $space-1;
		padding: 0 $space-1;
		@include tabletScreen {
			padding: 0;
			margin: 0 $space-2;
		}
		@include desktopScreen {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			padding: 0;
			margin: 0 $space-4;
		}
	}

	.transition {
		opacity: 0;
		transition: opacity 2s $curve-quart;
	}
	.transition.animate {
		opacity: 1;
	}
</style>

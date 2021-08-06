<script>
	import Head from '../components/Head.svelte'
	import Banner from '../components/Banner.svelte'
	import Footer from '../components/Footer.svelte'
	import { gallery } from '$lib/gallery'

	let title = 'Gallery'
	let description = 'The best of my 3D lowpoly models'
	let location = 'Gallery | Arexon'
	let url = 'https://arexon.dev/gallery'
	let keywords = 'Arexon, Blockbench'
	let image = '/assets/thumbnail.png'
</script>

<Head description={description} location={location} url={url} keywords={keywords} image={image}/>

<Banner title={title} description={description} location={location}/>

<article class="gallery">
	{#each gallery as image}
		<img src={image.url} alt={image.name}/>
	{/each}
</article>

<Footer/>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: auto;
		align-content: start;
		gap: $space-1;
		@include tabletScreen {
			margin: 0 $space-2;
		}
		@include desktopScreen {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			margin: 0 $space-4;
		}
	}
</style>

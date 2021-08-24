<script>
	import Head from '../../components/Head.svelte'
	import Banner from '../../components/Banner.svelte'
	import Card from '../../components/Card.svelte'
	import Footer from '../../components/Footer.svelte'

	let title = 'Furnideco'
	let description = 'Adds 50 pieces of functional, decorative and unique furniture that fit with the Minecraft vanilla style.'
	let location = 'FurniDeco | Projects | Arexon'
	let url = 'https://arexon.dev/project/furnideco'
	let keywords = 'Arexon, Arexon add-ons, Arexon mods, FurniDeco mod, Fabric furniture, Minecraft furniture, Furniture add-ons, FurniDeco add-ons'
	let image = '/assets/thumbnail.png'
</script>

<Head title={title} description={description} location={location} url={url} keywords={keywords} image={image}/>

<Banner title={title} location={location} description={description}/>

<article class="wrapper">
	<Card>
		<h2>Coming Soon</h2>
		<p>FurniDeco is under development. There is no set in stone date for when it's coming out yet, but I am hoping for a release sometime in Q4 of this year.</p>
	</Card>
</article>

<Footer/>

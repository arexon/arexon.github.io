<script>
	import Head from '../../components/Head.svelte'
	import Banner from '../../components/Banner.svelte'
	import Card from '../../components/Card.svelte'
	import Footer from '../../components/Footer.svelte'
	import { projects } from '$lib/projects'
	let furnideco = projects[0]

	let location = 'FurniDeco | Projects | Arexon'
	let url = 'https://arexon.dev/project/furnideco'
	let keywords = 'Arexon, Arexon add-ons, Arexon mods, FurniDeco mod, Fabric furniture, Minecraft furniture, Furniture add-ons, FurniDeco add-ons'
</script>

<Head title={furnideco.name} description={furnideco.description} location={location} url={url} keywords={keywords} image={furnideco.image}/>

<Banner title={furnideco.name} location={location} description={furnideco.description}/>

<article class="wrapper">
	<Card>
		<h2>Coming Soon</h2>
		<p>FurniDeco is under development. There is no set in stone date for when it's coming out yet, but I am hoping for a release sometime in Q4 of this year.</p>
	</Card>
</article>

<Footer/>

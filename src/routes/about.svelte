<script>
	import Head from '../components/Head.svelte'
	import Banner from '../components/Banner.svelte'
	import Card from '../components/Card.svelte'
	import Footer from '../components/Footer.svelte'

	let title = 'About Me'
	let description = 'Know more about me and what I do'
	let location = 'About | Arexon'
	let url = 'https://arexon.dev/about'
	let image = '/assets/thumbnail.png'
</script>

<Head location={location} description={description} url={url} image={image}/>

<Banner title={title} description={description} location={location}/>

<article class="wrapper">
	<Card>
		<p>Heyo! I'm Arexon, a Developer that creates tons of bugs when programming and also makes pixely 3D/2D art sometimes. I'm also a Gameplay Developer at <a href="https://www.gamemodeone.com/" title="Go to Gamemode One website">Gamemode One</a>.</p>
	</Card>
</article>

<Footer/>

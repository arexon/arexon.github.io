<script>
	import Head from '$components/Head.svelte'
	import Banner from '$components/Banner.svelte'
	import Tabs from '$components/Tabs.svelte'
	import Card from '$components/Card.svelte'
	import Button from '$components/Button.svelte'
	import Divider from '$components/Divider.svelte'
	import Footer from '$components/Footer.svelte'
	import { projects } from '$lib/projects'
	import { url as getUrl } from '$lib/url'
	let furnideco = projects[0]

	let location = 'FurniDeco | Projects | Arexon'
	let url = 'https://arexon.dev/project/furnideco'
	let keywords = 'Arexon, Arexon add-ons, Minecraft furniture, Furniture add-ons, FurniDeco add-ons'
</script>

<Head title={furnideco.name} description={furnideco.description} location={location} url={url} keywords={keywords} image={furnideco.image}/>

<Banner title={furnideco.name} location={location} description={furnideco.description}/>

<Tabs tabs={['About', 'Recipes', 'Releases']}/>

<article class="wrapper">
	{#if $getUrl.hash === '' || $getUrl.hash === '#about'}

		<h2>About</h2>

		<Divider full/>

		<img class="space" src="/pages/furnideco/thumbnail.png" alt="FurniDeco Thumbnail">

		<Card>FurniDeco adds 25 pieces of functional, decorative and unique-looking furniture that fit with the vanilla style. With more than 80 variants in total, FurniDeco gives you endless options to furniture & decorate your builds!</Card>

		<Divider/>

		<h2>Features</h2>
		<ul>
			<li>💺 25 Unique pieces of furniture & decorations, up to 80+ variants</li>
			<li>🎨 Fully customizable</li>
			<li>🎮 Interactive and functional</li>
			<li>🍦 Fits with the Minecraft Vanilla feel</li>
			<li>🪓 Craft-able in survival mode</li>
			<li>🧊 Uses blocks</li>
		</ul>

		<Divider/>

		<h2>In-game Shots</h2>
		<img class="space" src="/pages/furnideco/showcase-1.png" alt="FurniDeco ingame showcase #1">
		<img class="space" src="/pages/furnideco/showcase-2.png" alt="FurniDeco ingame showcase #2">

		<Divider/>

		<h2>Furniture Grades</h2>
		<p>To keep different kinds of furniture organized, FurniDeco divides them into <strong>Furniture Grades</strong>, each grade houses furniture of a single theme. Currently the add-on has only one grade, but eventually it'll expand into multiple grades in future updates.</p>

		<Divider/>

		<h3>➔ The Rustic Grade</h3>
		<img class="space" src="/pages/furnideco/rustic_grade.png" alt="Rustic Grade">
		<Card>Rustic and country themed furniture with a cozy vintage feel.</Card>

		<Divider/>

		<h2>Interactivity and Functionality</h2>
		<p>One of the major goals FurniDeco aims to achieve is creating furniture that's not only decorative, but is also useful!</p>
		<img class="space" src="/pages/furnideco/interactivity.gif" alt="Interactivity">

		<Divider/>

		<h2>Customization</h2>
		<p>The Paint Brush lets you conveniently and instantly paint specific parts of a furniture piece.</p>
		<img class="space" src="/pages/furnideco/paint_brush.gif" alt="Paint Brush">

		<Divider/>

		<h2>The Carpentry Table</h2>
		<p>The Carpentry Table makes it super easy to obtain furniture in survival mode by just crafting it! All you have to do is pop in the materials required and voila, you've got yourself a neat Rustic Sofa!</p>
		<img class="space" src="/pages/furnideco/carpentry_table.gif" alt="Carpentry Table">
		<p>➔ To view a list of all crafting recipes, <a href="#recipes">click on this cool-looking link!</a></p>

		<Divider/>

		<h2>License</h2>
		<Card>FurniDeco is licensed under the Apache License 2.0, you can read more about it <a href="https://github.com/Arexon/furnideco/blob/main/LICENSE">here</a></Card>

		<Divider/>

		<h2>Made With Bridge.</h2>
		<Card>FurniDeco was made with <a href="https://bridge-core.app/">bridge.</a> an advanced IDE for creating Minecraft Add-ons.</Card>

	{:else if $getUrl.hash === '#recipes'}

		<h2>Crafting Recipes</h2>

		<Divider full/>

		<article class="recipes">
			<div>
				<h4>{furnideco.recipes.carpentry_table.name}</h4>
				<img class="recipe_image" src={furnideco.recipes.carpentry_table.image} alt={furnideco.recipes.carpentry_table.name}/>
			</div>
		</article>

		<Divider/>

		<h3>➔ Tools</h3>
		<article class="recipes">
			{#each furnideco.recipes.tools as recipe}
				<div>
					<h4>{recipe.name}</h4>
					<img class="recipe_image" src={recipe.image} alt={recipe.name}/>
				</div>
			{/each}
		</article>

		<Divider/>

		<h3>➔ Rustic Grade</h3>
		<article class="recipes">
			{#each furnideco.recipes.rustic as recipe}
				<div>
					<h4>{recipe.name}</h4>
					<img src={recipe.image} alt={recipe.name}/>
				</div>
			{/each}
		</article>

	{:else if $getUrl.hash === '#releases'}

		<h2>Releases</h2>

		<Divider full/>

		<Card>
			Download the latest release of FurniDeco or
			<a
				href="https://github.com/Arexon/furnideco/releases"
				title="View all FurniDeco releases on GitHub"
				rel="noreferrer noopener"
			>
				view all versions.
			</a>
		</Card>

		<Divider/>

		<Button
			secondary
			href="https://github.com/Arexon/furnideco/releases/latest/download/geometry-fix.mcaddon"
			title="Download the Geometry Fix (required)"
		>
			Download Geometry Fix (required)
		</Button>
		<Divider/>
		<Button
			primary
			href="https://github.com/Arexon/furnideco/releases/latest/download/furnideco.mcaddon"
			title="Download the latest version"
		>
			Download FurniDeco
		</Button>

	{/if}
</article>

<Footer/>

<style lang="scss">
	.recipes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
		grid-auto-rows: auto;
		align-content: start;
		gap: $space-2;
		@include tabletScreen {
			margin: 0 $space-2;
		}
	}
</style>

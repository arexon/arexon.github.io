<script>
	import Transition from '$components/Transition.svelte'
	import Head from '$components/Head.svelte'
	import Banner from '$components/Banner.svelte'
	import Footer from '$components/Footer.svelte'
	import { projects } from '$lib/projects'

	let title = 'Projects'
	let description = 'All my projects in one place'
	let location = 'Projects | Arexon'
	let url = 'https://arexon.dev/projects'
	let keywords = 'Arexon, Arexon add-ons, Arexon mods, FurniDeco'
	let image = '/assets/thumbnail.png'

	let isInView
</script>

<Head title={title} description={description} location={location} url={url} keywords={keywords} image={image}/>

<Banner title={title} description={description} location={location}/>

<Transition bind:isInView>
	<article class="projects transition" class:animate={isInView}>
		{#each projects as project}
			<a class="projectCard" href={project.link} title="Go to {project.name}">
				<header class="projectCard_header">{project.name}</header>
				<img class="projectCard_image" src={project.image} alt="Thumbnail of {project.name}"/>
			</a>
		{/each}
	</article>
</Transition>

<Footer/>

<style lang="scss">
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: auto;
		align-content: start;
		gap: $space-2;
		margin: 0 $space-1;

		@include tabletScreen {
			margin: 0 $space-2;
		}
		@include desktopScreen {
			gap: $space-3;
			margin: 0 $space-4;
		}
	}

	.projectCard {
		display: grid;
		grid-template: 48px auto 48px / 48px auto 48px;
		text-decoration: none !important;
		transition: transform .25s $curve-circ;
		&:hover, &:focus {
			transform: translateY(-$space-1);
		}

		&_header {
			@include flex(flex-end, flex-start, column);
			@include font($size-5, 800);
			grid-area: 2 / 2 / 4 / 4;
			padding: $space-0 $space-1;
			border-radius: $radius-1;
			background: $color-neutral-1;
			color: $color-neutral-4;
			font-family: $font-secondary;
			letter-spacing: 1px;
			line-height: 1;
		}

		&_image {
			position: relative;
			grid-area: 1 / 1 / 3 / 3;
			display: grid;
			border-radius: $radius-0;
			overflow: hidden;
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

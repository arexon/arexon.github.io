<script>
	import Head from '../components/Head.svelte'
	import Banner from '../components/Banner.svelte'
	import Footer from '../components/Footer.svelte'
	import { projects } from '$lib/projects'

	let title = 'Projects'
	let description = 'All my projects in one place'
	let location = 'Projects | Arexon'
	let url = 'https://arexon.dev/projects'
	let keywords = 'Arexon, Arexon add-ons, Arexon mods, FurniDeco'
	let image = '/assets/thumbnail.png'
</script>

<Head title={title} description={description} location={location} url={url} keywords={keywords} image={image}/>

<Banner title={title} description={description} location={location}/>

<article class="projects">
	{#each projects as project}
		<a class="projectCard" href={project.link} title="Go to {project.name}">
			<header class="projectCard_header">{project.name}</header>
			<div class="projectCard_body">
				<img class="projectCard_body_thumbnail" src={project.thumbnail} alt="Thumbnail of {project.name}"/>
				<p class="projectCard_body_desc">{project.description}</p>
			</div>
		</a>
	{/each}
</article>

<Footer/>

<style lang="scss">
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: auto;
		align-content: start;
		gap: $space-2;
		margin: 0 $space-1;
		@include tabletScreen {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
			margin: 0 $space-2;
		}
		@include desktopScreen {
			grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
			gap: $space-3;
			margin: 0 $space-4;
		}
	}

	.projectCard {
		display: grid;
		grid-template: 48px auto 48px / 48px auto 48px;
		text-decoration: none !important;
		&:hover, &:focus {
			.projectCard_header {
				background: $color-neutral-2;
			}
			.projectCard_body_desc {
				opacity: 1;
				transform: scale(1);
			}
		}

		&_header {
			@include flex(flex-end, flex-start, column);
			@include font($size-5, 800);
			grid-area: 2 / 2 / 4 / 4;
			padding: $space-0 $space-1;
			background: $color-neutral-1;
			color: $color-neutral-4;
			font-family: $font-secondary;
			letter-spacing: 1px;
			line-height: 1;
			transition: all .5s $curve-circ;
		}

		&_body {
			position: relative;
			grid-area: 1 / 1 / 3 / 3;
			display: grid;
			background: $color-neutral-4;
			overflow: hidden;

			&_thumbnail {
			}

			&_desc {
				@include overlay;
				@include flex(flex-end, center, column);
				position: absolute;
				padding: $space-1;
				backdrop-filter: brightness(.5);
				color: $color-neutral-1;
				text-align: center;
				opacity: 0;
				transform: scale(1.2);
				transition: all .5s $curve-circ;
				@include tabletScreen {
					padding: $space-2 $space-3;
				}
				@include desktopScreen {
					padding: $space-3;
				}
			}
		}
	}
</style>

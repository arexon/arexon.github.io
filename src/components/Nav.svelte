<script>
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import Icon from './Icon.svelte'

	export let slide = false

	const toggleNav = () => (slide = !slide)
	let loaded = false

	onMount(() => {
		loaded = true
	})
</script>

{#if loaded}
	<nav class="nav" class:slide>
		<a
			class="nav_item"
			on:click={toggleNav}
			class:active={$page.url.pathname === '/'}
			href="/">home</a
		>
		<a
			class="nav_item"
			on:click={toggleNav}
			class:active={$page.url.pathname === '/projects' ||
				$page.url.pathname === '/project/furnideco'}
			href="/projects">projects</a
		>
		<a
			class="nav_item"
			on:click={toggleNav}
			class:active={$page.url.pathname === '/gallery'}
			href="/gallery">gallery</a
		>
		<a
			class="nav_item"
			on:click={toggleNav}
			class:active={$page.url.pathname === '/about'}
			href="/about">about</a
		>
		<div class="nav_links">
			<a href="https://github.com/arexon" title="GitHub"
				><Icon type="githubIcon" /></a
			>
			<a href="https://twitter.com/thearexon" title="Twitter"
				><Icon type="twitterIcon" /></a
			>
			<a href="https://sketchfab.com/arexon" title="Sketchfab"
				><Icon type="sketchfabIcon" /></a
			>
		</div>
	</nav>
{/if}

<style lang="scss">
	.nav {
		@include overlay(false, auto, auto, auto, 0);
		@include box(200px, 100%);
		@include font($size-4, 700);
		display: grid;
		grid-template-rows: repeat(4, auto) 1fr;
		justify-content: center;
		justify-items: start;
		direction: ltr;
		gap: $space-1;
		padding: $space-2 0;
		background: $color-neutral-1;
		transition: transform 0.5s $curve-quart;
		transform: translateX(-200px);
		&.slide {
			transform: translateX(0);
			.nav_item,
			.nav_links {
				opacity: 1;
				transform: translateY(0);
			}
		}
		.nav_item,
		.nav_links {
			opacity: 0;
			transition: transform 0.75s $curve-quart, opacity 1s $curve-circ;
			transform: translateY(-$space-3);
		}

		&_item {
			padding: $space-0;
			font-family: $font-secondary;
			color: $color-neutral-4;
			text-transform: uppercase;
			text-decoration: none !important;
			opacity: 0;
			&:hover {
				color: $color-primary-0 !important;
			}
			&.active {
				padding-left: $space-1;
				border-left: $space-0 solid;
				color: $color-neutral-4;
			}
		}

		&_links {
			@include flex(space-evenly, center, row);
			gap: $space-1;
			align-self: end;
			justify-self: center;
			opacity: 0;
			@include desktopScreen {
				display: none;
			}
			@include tabletScreen {
				display: none;
			}
		}
	}
</style>

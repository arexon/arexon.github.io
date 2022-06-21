<script>
	export let type
</script>

{#if 'githubIcon' === type}
	<svg class="icon"><use href="#githubIcon" /></svg>
{/if}
{#if 'twitterIcon' === type}
	<svg class="icon"><use href="#twitterIcon" /></svg>
{/if}
{#if 'sketchfabIcon' === type}
	<svg class="icon"><use href="#sketchfabIcon" /></svg>
{/if}

<style lang="scss">
	.icon {
		@include vector(32px);
		fill: $color-neutral-2;
		&:hover {
			fill: $color-neutral-3;
		}
	}
</style>

<script>
	import { url } from '$lib/url'

	export let tabs = []

	const toSnakeCase = tab => tab.toLowerCase().split(' ').join('_')
</script>

<div class="tabs">
	{#each tabs as tab, i}
		<a class="tabs_item" class:active={$url.hash === `#${toSnakeCase(tab)}` || i === 0 && $url.hash === ''} href={`#${toSnakeCase(tab)}`}>{tab}</a>
	{/each}
</div>

<style lang="scss">
	.tabs {
		position: sticky;
		top: $space-4;
		display: flex;
		justify-content: center;
		padding: $space-0 0;
		background: $color-neutral-1;
		transform: translateY(-$space-4);

		&_item {
			display: block;
			padding: $space-0 $space-1;
			color: $color-neutral-4;
			font-family: $font-secondary;
			font-weight: 500;
			text-transform: uppercase;
			text-decoration: none !important;
			&:hover {
				color: $color-primary-0;
			}

			&.active {
				border-radius: $radius-1;
				color: $color-neutral-0;
				background: $color-neutral-4;
				&:hover {
					background: $color-primary-0;
				}
			}
		}
	}
</style>

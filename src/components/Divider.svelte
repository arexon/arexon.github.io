<script>
	export let small
	export let medium
	export let large
</script>

<hr
	class="divider"
	class:divider_small={small}
	class:divider_medium={medium}
	class:divider_large={large}/>

<style lang="scss">
	.divider {
		margin: $space-2 auto;
		height: 1.5px;
		background: $color-neutral-2;

		&_small {
			width: 25%;
		}
		&_medium {
			width: 50%;
		}
		&_large {
			width: 75%;
		}
	}
</style>

<script>
	import { inview } from 'svelte-inview'

	export let isInView
	// let scrollDirection
	const options = {
		rootMargin: '-50px',
		unobserveOnEnter: true,
	}
	const handleChange = ({ detail }) => {
		isInView = detail.inView
		scrollDirection = detail.scrollDirection.vertical
	}
</script>

<div use:inview={options} on:change={handleChange}>
	<slot/>
</div>

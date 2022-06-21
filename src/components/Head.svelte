<script>
	export let location = ''
	export let description = ''
	export let url = ''
	export let keywords = ''
	export let image = ''
</script>

<svelte:head>
	<title>{location}</title>
	<meta name="title" content={location} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={location} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={location} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>

<div class="card">
	<div class="card_backdrop">
	</div>
	<div class="card_body">
		<slot/>
	</div>
</div>

<style lang="scss">
	.card {
		display: grid;
		grid-template: 40px 1fr 40px / 40px 1fr 40px;

		&_backdrop {
			grid-area: 2 / 2 / 4 / 4;
			padding: $size-0;
			background: url('/assets/foregrounds/dots-big.svg');
		}

		&_body {
			grid-area: 1 / 1 / 3 / 3;
			padding: $size-3;
			background: $color-neutral-0;
		}
	}
</style>

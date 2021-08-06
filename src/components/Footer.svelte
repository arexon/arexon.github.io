<footer class="footer">
	<span class="footer_copyright overline">© 2021 Arexon</span>
</footer>

<style lang="scss">
	.footer {
		@include box(100%, 100px);
		display: grid;
		place-items: center;
		margin-top: auto;
		background: $color-neutral-4;

		&_copyright {
			color: $color-neutral-1;
		}
	}
</style>

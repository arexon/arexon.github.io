<footer class="footer">
	<span class="footer_copyright overline">© 2022 Arexon</span>
</footer>

<style lang="scss">
	.footer {
		@include box(100%, 100px);
		display: grid;
		place-items: center;
		margin-top: auto;
		background: $color-neutral-1;

		&_copyright {
			color: $color-neutral-5;
		}
	}
</style>

<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(var(--col, 3), 1fr);
		gap: var(--gap, 2rem);
	}

	@media (max-width: 60rem) {
		div {
			--col: 1;
		}
	}
</style>

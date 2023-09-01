<div>
	<slot />
</div>

<style>
	div {
		--col-v: var(--col, 3);
		container: cluster-container / inline-size;
		flex: 0 1 calc(100cqw / var(--col-v));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 60rem) {
		div {
			--col-v: calc(var(--col) / 2);
			flex: 0 1 calc(100vw / var(--col-v));
			flex-wrap: wrap;
		}
	}
</style>

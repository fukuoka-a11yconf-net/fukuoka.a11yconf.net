<div>
	<slot />
</div>

<style>
	div {
		--min-w: 600px;
		--col-v: var(--col, 3);
		container: cluster-container / inline-size;
		flex: 0 0 calc(100cqw / var(--col-v) - var(--gap-v));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 60rem) {
		div {
			--col-v: calc(var(--col) / 2);
			flex: 0 1 calc(100vw / var(--col-v) - var(--gap-v));
		}
	}
</style>

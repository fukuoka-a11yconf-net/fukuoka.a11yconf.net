<div>
	<slot />
</div>

<style>
	div {
		--gap-v: var(--gap, 2rem);
		container-type: inline-size;
		container-name: cluster-container;
		display: flex;
		justify-content: var(--justify, center);
		align-items: var(--align, stretch);
		gap: var(--gap-v);
		flex-wrap: wrap;
	}

	@media (max-width: 60rem) {
		div {
			--col-v: calc(var(--col) / 2);
			flex-wrap: wrap;
		}
	}
</style>

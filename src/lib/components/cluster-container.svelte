<div>
	<slot />
</div>

<style>
	div {
		container-type: inline-size;
		container-name: cluster-container;
		display: flex;
		justify-content: var(--justify, center);
		align-items: var(--align, stretch);
		gap: var(--gap, 2rem);
	}

	@media (max-width: 60rem) {
		div {
			--col-v: calc(var(--col) / 2);
			flex-wrap: wrap;
		}
	}
</style>

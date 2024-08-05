<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: var(--justify, center);
		align-items: var(--align, stretch);
		flex-direction: var(--direction, column);
	}
</style>

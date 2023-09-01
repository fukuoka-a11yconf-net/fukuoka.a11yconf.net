<main>
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 5rem;
		padding-block: 5rem;
		padding-inline: 2rem;
	}

	@media (max-width: 80rem) {
		main {
			gap: 5rem;
			padding-block: 5rem;
			padding-inline: 5vw;
		}
	}
</style>

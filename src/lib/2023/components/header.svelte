<script>
	import Navigation from './navigation.svelte';
</script>

<div class="header">
	<div class="logo">
		<img
			src="/2023/img/logo.svg"
			width="340"
			height="87"
			alt="アクセシビリティカンファレンス福岡"
		/>
	</div>
	<div class="nav">
		<Navigation />
	</div>
</div>

<style>
	.header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-areas: 'logo . nav';
		gap: 1rem;
		padding-block: 1rem;
		padding-inline: 1rem;
		box-shadow: 0 0 0.5rem var(--color-shadow);
		background-color: var(--color-bg-base);
	}

	@media (max-width: 40rem) {
		.header {
			display: block;
		}
	}

	.logo {
		grid-area: logo;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo img {
		display: block;
		width: auto;
		height: 4rem;
	}

	.nav {
		grid-area: nav;
		padding-block: 1rem;
	}
</style>

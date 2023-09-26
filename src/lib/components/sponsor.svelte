<script lang="ts">
	export let name: string;
	export let href: string;
	export let img: string | null = null;
	export let width: number | string | null = null;
	export let height: number | string | null = null;

	const target = href.startsWith('http') ? '_blank' : undefined;
</script>

<div class={img ? 'has-logo' : 'no-logo'}>
	{#if img}
		<a {href} {target}>
			<img src={img} {width} {height} alt={name} />
		</a>
	{:else}
		<a {href} {target}>{name}</a>
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: 5%;
		padding-inline: 10%;
	}

	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
	}

	.has-logo a {
		width: 100%;
		display: block;
	}

	.has-logo img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	.no-logo {
		align-self: stretch;
	}

	.no-logo a {
		display: flex;
		width: 100%;
		aspect-ratio: 1;
		font-size: 1.2rem;
		font-weight: 600;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--color-border-primary);
		border-radius: 100rem;
	}

	.no-logo a:hover {
		background-color: var(--color-link-hover-bg);
	}
</style>

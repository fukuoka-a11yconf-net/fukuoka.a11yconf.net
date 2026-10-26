<script lang="ts">
	import Heading from './heading.svelte';

	export let id: string;
	export let name: string;
	export let img: string | null = null;
	export let alt: string = '';
	export let level: 2 | 3 | 4 | 5 | 6;
	// 親のグリッドの行（見出し / 写真 / 本文 / セッション）に揃える。親は display: grid であること
	export let subgrid: boolean = false;
</script>

<div class="speaker" class:subgrid>
	<Heading {level} id={`speaker-${id}`}>{name}</Heading>

	<div>
		{#if img}
			<img src={img} {alt} width="500" height="500" />
		{:else}
			<div class="placeholder"><span>準備中</span></div>
		{/if}
	</div>

	{#if subgrid}
		<div><slot /></div>
		<slot name="session" />
	{:else}
		<slot />
	{/if}
</div>

<style>
	.speaker {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.subgrid {
		height: auto;
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 4;
		row-gap: 0;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}

	.placeholder {
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px dashed var(--color-border-primary);
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: bold;
		opacity: 0.8;
	}
</style>

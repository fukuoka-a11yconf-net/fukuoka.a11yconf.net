<script lang="ts">
	import Heading from './heading.svelte';

	export let id: string;
	export let name: string;
	export let img: string | null = null;
	export let alt: string = '';
	export let level: 2 | 3 | 4 | 5 | 6;
</script>

<div class="speaker">
	<Heading {level} id={`speaker-${id}`}>{name}</Heading>

	<div>
		{#if img}
			<img src={img} {alt} width="500" height="500" />
		{:else}
			<div class="placeholder"><span>写真は準備中です</span></div>
		{/if}
	</div>

	<slot />
</div>

<style>
	.speaker {
		height: 100%;
		display: flex;
		flex-direction: column;
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

<script lang="ts">
	import Heading from './heading.svelte';

	export let id: string;
	export let name: string;
	export let img: string;
	export let alt: string;
	export let level: 2 | 3 | 4 | 5 | 6;
</script>

<div class="speaker">
	<Heading {level} id={`speaker-${id}`}>{name}</Heading>

	<div>
		<img src={img} {alt} width="500" height="500" />
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
</style>

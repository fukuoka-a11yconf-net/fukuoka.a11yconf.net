<script lang="ts">
	import Heading from './heading.svelte';

	export let id: string;
	export let name: string;
	export let img: string;
	export let alt: string;
	export let level: 2 | 3 | 4 | 5 | 6;
</script>

<div>
	<Heading {level} id={`speaker-${id}`}>{name}</Heading>

	<div>
		<img src={img} {alt} width="500" height="500" />
	</div>

	<slot />
</div>

<style>
	img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>

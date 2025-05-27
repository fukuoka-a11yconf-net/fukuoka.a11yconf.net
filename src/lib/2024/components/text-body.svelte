<script lang="ts">
	export let fit = false;
</script>

<div class={fit ? 'fit' : undefined}>
	<slot />
</div>

<style>
	div {
		max-width: 40rem;
		margin-inline: auto;
	}

	.fit {
		width: fit-content;
	}
</style>

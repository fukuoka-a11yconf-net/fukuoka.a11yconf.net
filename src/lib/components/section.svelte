<script lang="ts">
	export let width: 'full' | 'narrow' = 'full';
</script>

<section class={`section ${width}`}><slot /></section>

<style>
	.section {
		background-color: var(--color-bg-base);
		border: var(--section-border-width) solid;
		border-image: var(--section-border-image);
		padding-block: var(--section-padding-with-border);
		padding-inline: var(--section-padding-with-border);
	}

	.section.narrow {
		width: 100%;
		max-width: 72rem;
		margin-inline: auto;
	}
</style>

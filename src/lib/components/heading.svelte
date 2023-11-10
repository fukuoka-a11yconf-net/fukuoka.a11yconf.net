<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6;
	export let id: string | undefined = undefined;
</script>

<div class="heading">
	{#if level === 1}
		<h1 {id}><a href={id && `#${id}`}><slot /></a></h1>
	{:else if level === 2}
		<h2 {id}><a href={id && `#${id}`}><slot /></a></h2>
	{:else if level === 3}
		<h3 {id}><a href={id && `#${id}`}><slot /></a></h3>
	{:else if level === 4}
		<h4 {id}><a href={id && `#${id}`}><slot /></a></h4>
	{:else if level === 5}
		<h5 {id}><a href={id && `#${id}`}><slot /></a></h5>
	{:else if level === 6}
		<h6 {id}><a href={id && `#${id}`}><slot /></a></h6>
	{/if}
</div>

<style>
	.heading {
		display: flex;
		justify-content: center;
		font-family: var(--font-family-condensed);
		font-weight: 300;
		letter-spacing: 0.3em;
		font-feature-settings: 'palt';

		/* 調和数列 */
		--font-size-h1: calc(15 / 3 * 1rem);
		--font-size-h2: calc(15 / 5 * 1rem);
		--font-size-h3: calc(15 / 7 * 1rem);
		--font-size-h4: calc(15 / 9 * 1rem);
		--font-size-h5: calc(15 / 11 * 1rem);
		--font-size-h6: calc(15 / 13 * 1rem);
	}

	@media (max-width: 40rem) {
		.heading {
			/* 調和数列 */
			--font-size-h1: calc(18 / 9 * 1rem);
			--font-size-h2: calc(18 / 11 * 1rem);
			--font-size-h3: calc(18 / 13 * 1rem);
			--font-size-h4: calc(18 / 15 * 1rem);
			--font-size-h5: calc(18 / 16 * 1rem);
			--font-size-h6: calc(18 / 17 * 1rem);
		}
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	:is(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}

	h1 {
		font-size: var(--font-size-h1);
	}

	:has(h1) {
		margin-block-end: calc(var(--font-size-h1) * 1);
	}

	h2 {
		font-size: var(--font-size-h2);
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	:has(h2) {
		margin-block-end: 3em;
	}

	:has(h2):not(:first-child) {
		margin-block-start: calc(var(--font-size-h2) * 2);
	}

	h2::after {
		display: block;
		content: '';
		width: auto;
		height: 0.5em;
		aspect-ratio: 163/23;
		background: url('/img/hr-icons.svg') no-repeat center;
		background-size: contain;
		margin-block-start: 0.5em;
	}

	h2 a {
		display: flex;
		place-content: center;
	}

	h3 {
		font-size: var(--font-size-h3);
	}

	:has(h3) {
		margin-block-start: calc(var(--font-size-h3) * 2);
		margin-block-end: calc(var(--font-size-h3) * 1);
	}

	h4 {
		font-size: var(--font-size-h4);
		margin-block-end: var(--font-size-h4);
	}

	:has(h4) {
		margin-block-start: calc(var(--font-size-h4) * 2);
		margin-block-end: calc(var(--font-size-h4) * 1);
	}

	h5 {
		font-size: var(--font-size-h5);
		margin-block-end: var(--font-size-h5);
	}

	h6 {
		font-size: var(--font-size-h6);
		margin-block-end: var(--font-size-h6);
	}
</style>

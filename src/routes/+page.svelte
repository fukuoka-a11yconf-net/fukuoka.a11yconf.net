<script>
	import Heading from '$lib/components/heading.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
</script>

<svelte:head>
	<title>アクセシビリティカンファレンス福岡2026</title>
	<meta
		name="description"
		content="2026年11月21日(土曜日)にONE FUKUOKA Conference Hallで開催される「アクセシビリティ」のカンファレンス"
	/>
</svelte:head>

<Hero />

<Main>
	<Section width="narrow">
		<Heading level={2} id="summary">開催概要</Heading>
		<dl>
			<div>
				<dt>日時</dt>
				<dd>2026年11月21日(土曜日)</dd>
			</div>
			<div>
				<dt>場所</dt>
				<dd>ONE FUKUOKA Conference Hall</dd>
			</div>
			<div>
				<dt>主催</dt>
				<dd>アクセシビリティカンファレンス福岡実行委員会</dd>
			</div>
		</dl>
		<p class="note">
			登壇者・スポンサー・参加申込・タイムテーブルなどの詳細は、続報をお待ちください。
		</p>
	</Section>
</Main>

<style>
	dl {
		max-width: fit-content;
		display: grid;
		gap: 0;
		grid-template-columns: auto 1fr;
	}

	@media (max-width: 40rem) {
		dl {
			display: block;
			font-size: 1rem;
		}
	}

	dl > div {
		display: contents;
	}

	dt {
		margin: 0;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		border-block-end: 3px solid var(--color-border-primary);
	}

	@media (max-width: 40rem) {
		dt {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-block-start: 2rem;
			padding-inline: 0;
			border-block-end: none;
			gap: 1rem;
		}
	}

	dd {
		margin: 0;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		border-block-end: 1px solid var(--color-border-primary);
	}

	@media (max-width: 40rem) {
		dd {
			margin-inline-start: 1rem;
			padding-inline-start: 1rem;
			border-inline-start: 1px solid var(--color-border-primary);
			border-block-end: none;
		}
	}

	.note {
		margin-block-start: 2rem;
		font-size: 1.2rem;
		line-height: 1.8;
	}
</style>

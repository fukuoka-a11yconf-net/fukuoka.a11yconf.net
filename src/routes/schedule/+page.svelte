<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>タイムテーブル | アクセシビリティカンファレンス福岡2026</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>タイムテーブル</Heading>
		<TextBody>
			<p class="note">タイムテーブルの詳細は、続報をお待ちください。</p>
			<dl>
				<div>
					<dt>時間未定</dt>
					<dd id="session1">
						<p class="sub"><em>セッション1</em></p>
						<p class="title">
							<em
								>それ、アクセシビリティのせいかも？数字に表れない『届かなさ』と、これからの『あたりまえ』の話</em
							>
						</p>
						<p class="speaker"><em><a href="/#speaker-izuizu">山本 和泉</a></em></p>
						<p>
							「最近、ウェブの反応が落ちていて……。まずはデザインや導線の調整をなんとかしないと！」そんな風に思っていませんか？実は、解析ツールでは見えにくい「そもそも情報にたどり着けていない」状態が原因かもしれません。本セッションでは、アクセシビリティを特別な配慮ではなく「情報をしっかり届けるための施策」として活用する視点を解説。解析や運用にどう取り入れるか、まずは知っておきたい「基本のき」をお話しします。
						</p>
					</dd>
				</div>
			</dl>
		</TextBody>
	</Section>
</Main>

<style>
	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
	}

	a:link:hover {
		background-color: var(--color-link-hover-bg);
	}

	.note {
		text-align: center;
		line-height: 1.8;
	}

	dl {
		font-size: 1.5rem;
		margin-block: 0;
		margin-inline: auto;
		max-width: fit-content;
		display: block;
	}

	@media (max-width: 40rem) {
		dl {
			font-size: 1rem;
		}
	}

	dl > div {
		display: contents;
	}

	dt {
		margin: 0;
		padding-block: 0.5rem;
		border-block-end: 3px solid var(--color-border-primary);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-inline: 0;
		border-block-end: none;
		gap: 1rem;
	}

	dd {
		margin: 0;
		margin-inline-start: 1rem;
		padding-block: 1.5rem;
		padding-inline: 2rem;
		border-block-end: 1px solid var(--color-border-primary);
		border-inline-start: 1px solid var(--color-border-primary);
		border-block-end: none;
	}

	@media (max-width: 40rem) {
		dd {
			margin-inline-start: 0.5rem;
			padding-inline: 1rem;
		}
	}

	dd p {
		margin: 0;
		font-size: calc(1em / 1.5);
	}

	em {
		font-weight: bold;
		font-style: normal;
	}

	.sub {
		opacity: 0.8;
	}

	.title {
		font-size: 1.3em;
	}

	.speaker {
		text-align: right;
		opacity: 0.8;
		font-size: 1.1em;
		margin-block-end: calc(1em / 1.1);
	}
</style>

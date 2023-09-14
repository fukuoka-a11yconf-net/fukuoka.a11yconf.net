<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>タイムテーブル | アクセシビリティカンファレンス福岡2023</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>タイムテーブル</Heading>
		<TextBody>
			<dl role="associationlist generic">
				<div role="none">
					<dt role="associationlistitemkey generic">12:30</dt>
					<dd role="associationlistitemvalue generic">開場</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">13:00</dt>
					<dd role="associationlistitemvalue generic">開会式</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">13:20</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">13:30</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>セッション1</em></p>
						<p class="speaker"><em><a href="/#speaker-majima">間嶋沙知</a></em></p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">14:10</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">14:20</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>セッション2</em></p>
						<p class="speaker">
							<em
								>トークセッション <a href="/#speaker-shibata">柴田宏仙</a>✕<a href="/#speaker-ihara"
									>伊原力也</a
								></em
							>
						</p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">15:00</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">15:10</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>スポンサーセッション</em></p>
						<p class="speaker"><em>プラチナスポンサー Nulab</em></p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">15:30</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">15:40</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>スポンサーセッション</em></p>
						<p class="speaker"><em>会場提供 LINE Fukuoka</em></p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">16:00</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">16:10</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>セッション3</em></p>
						<p class="speaker"><em><a href="/#speaker-katayama">方山れいこ</a></em></p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">16:50</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">17:00</dt>
					<dd role="associationlistitemvalue generic">
						<p class="sub"><em>セッション4</em></p>
						<p class="speaker"><em><a href="/#speaker-ishiki">伊敷政英</a></em></p>
						<p>セッション内容: 準備中</p>
					</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">17:40</dt>
					<dd role="associationlistitemvalue generic">
						<p>転換・準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">17:50</dt>
					<dd role="associationlistitemvalue generic">閉会式</dd>
				</div>
				<div class="break" role="none">
					<dt role="associationlistitemkey generic">18:00</dt>
					<dd role="associationlistitemvalue generic">
						<p>懇親会準備</p>
					</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">18:20</dt>
					<dd role="associationlistitemvalue generic">懇親会</dd>
				</div>
				<div role="none">
					<dt role="associationlistitemkey generic">20:00</dt>
					<dd role="associationlistitemvalue generic">解散</dd>
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
		padding-inline: 1rem;
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

	dd p {
		margin: 0;
		font-size: calc(1em / 1.5);
	}

	.break {
		display: flex;
		flex-wrap: wrap;
		font-size: 1rem;
	}

	.break dd {
		margin: 0;
		padding-inline: 1em 0;
		padding-block: 0.5rem;
		border: 0;
	}

	.break dd p {
		font-size: 1em;
	}

	.break::after {
		content: '';
		flex: 1 0 100%;
		margin: 0;
		margin-inline-start: 1rem;
		padding-block: 0.5rem;
		padding-inline: 2rem;
		border-block-end: 1px solid var(--color-border-primary);
		border-inline-start: 1px solid var(--color-border-primary);
		border-block-end: none;
	}

	em {
		font-weight: bold;
		font-style: normal;
	}

	.sub {
		opacity: 0.8;
	}

	.speaker {
		font-size: 1.3em;
		margin-block-end: calc(1em / 1.3);
	}
</style>

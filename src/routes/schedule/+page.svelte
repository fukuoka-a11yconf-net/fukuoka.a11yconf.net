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
			<dl>
				<div>
					<dt>12:30</dt>
					<dd>開場</dd>
				</div>
				<div>
					<dt>13:00</dt>
					<dd>オープニング（会場案内と諸注意）</dd>
				</div>
				<div>
					<dt>13:30</dt>
					<dd id="session1">
						<p class="sub"><em>セッション1</em></p>
						<p class="title">
							<em
								>それ、アクセシビリティのせいかも？数字に表れない『届かなさ』と、これからの『あたりまえ』の話</em
							>
						</p>
						<p class="speaker"><em><a href="/#speaker-izuizu">山本 和泉</a></em></p>
					</dd>
				</div>
				<div class="break">
					<dt>14:10</dt>
					<dd>
						<p>休憩（10分）</p>
					</dd>
				</div>
				<div>
					<dt>14:20</dt>
					<dd id="session2">
						<p class="sub"><em>セッション2</em></p>
						<p class="title">
							<em>移動に、もっとワクワクを。― 多様な人から考える公共交通のデザイン</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-zhang">張 彦芳</a></em></p>
					</dd>
				</div>
				<div class="break">
					<dt>15:00</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>15:05</dt>
					<dd id="sponsor-session1">
						<p class="sub"><em>スポンサーセッション1 プラチナスポンサー LINEヤフー株式会社</em></p>
						<p class="title"><em lang="en">Coming Soon</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>15:15</dt>
					<dd>
						<p>おやつ休憩（30分）</p>
					</dd>
				</div>
				<div>
					<dt>15:45</dt>
					<dd id="session3">
						<p class="sub"><em>セッション3</em></p>
						<p class="title"><em lang="en">Coming Soon</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>16:25</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>16:30</dt>
					<dd id="sponsor-session2">
						<p class="sub"><em>スポンサーセッション2</em></p>
						<p class="title"><em lang="en">Coming Soon</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>16:40</dt>
					<dd>
						<p>休憩（10分）</p>
					</dd>
				</div>
				<div>
					<dt>16:50</dt>
					<dd id="session4">
						<p class="sub"><em>セッション4</em></p>
						<p class="title">
							<em>「できる」の先へ――アクセシビリティが生み出すワクワク</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-kitamura">北村 直也</a></em></p>
					</dd>
				</div>
				<div class="break">
					<dt>17:30</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>17:35</dt>
					<dd>クロージング</dd>
				</div>
				<div>
					<dt>18:00</dt>
					<dd>名刺交換会（ブース会場）</dd>
				</div>
				<div>
					<dt>18:30</dt>
					<dd>懇親会</dd>
				</div>
				<div>
					<dt>19:30</dt>
					<dd>解散</dd>
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
		padding-inline: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
	}

	dd {
		margin: 0;
		margin-inline-start: 1rem;
		padding-block: 1.5rem;
		padding-inline: 2rem;
		border-inline-start: 1px solid var(--color-border-primary);
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
		border-inline-start: 1px solid var(--color-border-primary);
	}

	@media (max-width: 40rem) {
		.break::after {
			margin-inline-start: 0.5rem;
		}
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

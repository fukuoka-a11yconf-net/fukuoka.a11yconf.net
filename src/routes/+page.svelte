<script>
	import GridContainer from '$lib/components/grid-container.svelte';
	import GridItem from '$lib/components/grid-item.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Main from '$lib/components/main.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import Section from '$lib/components/section.svelte';
	import Speaker from '$lib/components/speaker.svelte';

	import pictIzuizu from '$lib/img/pict-speaker-izuizu.png';
</script>

<svelte:head>
	<title>アクセシビリティカンファレンス福岡2026</title>
	<meta
		name="description"
		content="2026年11月21日(土曜日)にONE FUKUOKA Conference Hallで開催される「アクセシビリティ」のカンファレンス"
	/>
</svelte:head>

<Hero />

<div class="nav">
	<Navigation isHome />
</div>

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
	<Section width="narrow">
		<Heading level={2} id="speakers">登壇者</Heading>

		<GridContainer --col={2} --gap="4rem">
			<GridItem>
				<Speaker id="izuizu" name="山本 和泉" img={pictIzuizu} alt="写真: 山本 和泉" level={3}>
					<p>デザイナー / アクセシビリティ ビギナーズサポーター</p>
					<p>
						「自分たちで運営できるウェブ環境づくり」をモットーに、コンサルティングから企画・制作、運用アドバイスまで一貫してサポート。<br
						/>2000年代前半からウェブアクセシビリティに関わり、現在も企業研修などで初心者向けの入門講座を担当。初心者にイチから伝えることを得意とし、「誰にとっても使いやすく・伝わりやすい」サイト制作や運用支援のほか、アクセシビリティやSNS発信に関する執筆、講座も担当。
					</p>
					<p>
						主な著書『超入門 無料で使えるデザインツール Canva
						』（C＆R研究所）、『イチからはじめるCanvaビジネス活用入門』（日経BP）、『小さな会社&お店の
						Canva超入門』『小さなお店＆会社のホームページ Jimdo入門』（どちらも技術評論社）など。
					</p>
					<p>
						色彩検定UCアドバイザー / ウェブ解析士 / 上級SNSマネージャー / JimdoExpert /
						デジタル庁デジタル推進委員<br />GAAD Japan 実行委員
					</p>
					<p class="session">
						<span>セッション1</span>
						<em
							>それ、アクセシビリティのせいかも？数字に表れない『届かなさ』と、これからの『あたりまえ』の話</em
						>
					</p>
				</Speaker>
			</GridItem>
		</GridContainer>
	</Section>
</Main>

<style>
	.nav {
		max-width: 60rem;
		width: fit-content;
		margin-block-start: 2rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}

	dl {
		max-width: fit-content;
		margin-inline: auto;
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
		text-align: center;
	}

	p {
		margin-block: 0.9em;
		line-height: 1.8;
	}

	.session {
		font-size: 1.3em;
	}

	.session em {
		font-style: normal;
		font-weight: bold;
	}

	.session > span {
		display: block;
		opacity: 0.8;
		font-weight: bold;
	}

	.session > span::after {
		content: ':';
	}
</style>

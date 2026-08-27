<script>
	import ClusterContainer from '$lib/components/cluster-container.svelte';
	import ClusterItem from '$lib/components/cluster-item.svelte';
	import GridContainer from '$lib/components/grid-container.svelte';
	import GridItem from '$lib/components/grid-item.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Main from '$lib/components/main.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import Section from '$lib/components/section.svelte';
	import Speaker from '$lib/components/speaker.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';

	import pictIzuizu from '$lib/img/pict-speaker-izuizu.webp';
	import pictKitamura from '$lib/img/pict-speaker-kitamura.webp';
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
				<dt>ライブ配信</dt>
				<dd>
					<a href="https://www.youtube.com/@fukuoka-a11yconf" target="_blank">YouTube</a
					>にて通常版・情報保障版同時配信
				</dd>
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
						<span>セッション</span>
						<em
							>それ、アクセシビリティのせいかも？数字に表れない『届かなさ』と、これからの『あたりまえ』の話</em
						>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="kitamura" name="北村 直也" img={pictKitamura} alt="写真: 北村 直也" level={3}>
					<p>eスポーツプレイヤー</p>
					<p>
						全盲のeスポーツプレイヤー、声優・ナレーター。『ストリートファイター6』でマスターランクに到達し、EVO
						Japanなどの大会にも出場。ゲームアクセシビリティを「できない」を「できる」にするだけでなく、その先の挑戦や楽しさを広げるものと捉え、当事者としての発信や検証、イベント登壇などに取り組む。
					</p>
					<p>株式会社ePARA所属 / 一般社団法人日本ゲームアクセシビリティ協会　理事</p>
					<p class="session">
						<span>セッション</span>
						<em>「できる」の先へ――アクセシビリティが生み出すワクワク</em>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<div class="coming-soon">
					<p class="session">
						<span>セッション</span>
						<em lang="en">Coming Soon</em>
					</p>
				</div>
			</GridItem>
			<GridItem>
				<div class="coming-soon">
					<p class="session">
						<span>セッション</span>
						<em lang="en">Coming Soon</em>
					</p>
				</div>
			</GridItem>
		</GridContainer>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="sponsors">スポンサー</Heading>
		<Heading level={3} id="sponsors-gold">ゴールドスポンサー</Heading>
		<ClusterContainer --col={4}>
			<ClusterItem>
				<Sponsor
					href="https://www.d-zero.co.jp"
					name="株式会社ディーゼロ"
					img="/img/logo-sponsor-d-zero.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
		</ClusterContainer>
		<Heading level={3} id="sponsors-silver">シルバースポンサー</Heading>
		<ClusterContainer --col={5}>
			<ClusterItem>
				<Sponsor
					href="https://chanto.design/"
					name="CHANTO株式会社"
					img="/img/logo-sponsor-chanto.svg"
					width="167"
					height="47"
				/>
			</ClusterItem>
		</ClusterContainer>
		<Heading level={3} id="sponsors-bronze">ブロンズスポンサー</Heading>
		<ClusterContainer --col={7}>
			<ClusterItem>
				<Sponsor
					href="https://www.skword.co.jp/"
					name="株式会社エスケイワード"
					img="/img/logo-sponsor-skword.svg"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://noveltyinc.jp/"
					name="株式会社ノベルティ"
					img="/img/logo-sponsor-novelty.svg"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://trq.co.jp/"
					name="株式会社トルク"
					img="/img/logo-sponsor-torque.svg"
				/>
			</ClusterItem>
		</ClusterContainer>
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
		margin-block-start: auto;
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

	.coming-soon .session {
		margin-block: 0;
	}

	.coming-soon {
		height: 100%;
		min-height: 16rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 1px dashed var(--color-border-primary);
		border-radius: 0.5rem;
		padding: 2rem;
	}
</style>

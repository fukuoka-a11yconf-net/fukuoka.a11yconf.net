<script>
	import ClusterContainer from '$lib/components/cluster-container.svelte';
	import ClusterItem from '$lib/components/cluster-item.svelte';
	import GridContainer from '$lib/components/grid-container.svelte';
	import GridItem from '$lib/components/grid-item.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Section from '$lib/components/section.svelte';
	import Speaker from '$lib/components/speaker.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';
	import Staff from '$lib/components/staff.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Main from '$lib/components/main.svelte';
	import TextBody from '$lib/components/text-body.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	import pictNoda from '$lib/img/pict-speaker-noda.jpg';
	import pictKoyano from '$lib/img/pict-speaker-koyano.png';
	import pictSakamaki from '$lib/img/pict-speaker-sakamaki.png';
	import pictTakaka from '$lib/img/pict-speaker-tanaka.png';

	import pictStaff01 from '$lib/img/pict-staff-cloud10designs.jpg';
	import pictStaff02 from '$lib/img/pict-staff-posi0202.jpg';
	import pictStaff03 from '$lib/img/pict-staff-analogtan.jpg';
	import pictStaff04 from '$lib/img/pict-staff-taketada323.png';

	const connpassURL = 'https://fukuoka-a11yconf.connpass.com/event/322934/';
</script>

<svelte:head>
	<title>アクセシビリティカンファレンス福岡2024</title>
	<meta
		name="description"
		content="2024年11月30日（土曜日）に福岡で開催される「アクセシビリティ」のカンファレンス"
	/>
</svelte:head>

<Hero {connpassURL} />

<div class="nav">
	<Navigation isHome />
</div>

<Main>
	<Section width="narrow">
		<Heading level={2} id="summary">開催概要</Heading>

		<dl>
			<div>
				<dt>日時</dt>
				<dd>2024年11月30日（土曜日） 13:00〜18:00</dd>
			</div>
			<div>
				<dt>参加費</dt>
				<dd>無料</dd>
			</div>
			<div>
				<dt>場所</dt>
				<dd>警固神社社務所ビル</dd>
			</div>
			<div>
				<dt>会場定員</dt>
				<dd>170名</dd>
			</div>
			<div>
				<dt>ライブ配信</dt>
				<dd>YouTubeにて通常版・情報保障版同時配信</dd>
			</div>
			<div>
				<dt>参加登録</dt>
				<dd>
					<a href={connpassURL}>connpassで事前受付</a>
				</dd>
			</div>
			<div>
				<dt>セッション</dt>
				<dd>4セッション + 2スポンサーセッション / シングルトラック</dd>
			</div>
			<div>
				<dt>主催</dt>
				<dd>アクセシビリティカンファレンス福岡実行委員会</dd>
			</div>
		</dl>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="speakers">登壇者</Heading>

		<GridContainer --col={2} --justify="start" --gap="4rem">
			<GridItem>
				<Speaker id="tanaka" name="田中みゆき" img={pictTakaka} alt="写真: 田中みゆき" level={3}>
					<p>
						キュレーター、プロデューサー。「障害は世界を捉え直す視点」をテーマにカテゴリーにとらわれないプロジェクトを企画。表現の見方や捉え方を障害のある人たち含む鑑賞者とともに再考する。近年の仕事に、映画『ナイトクルージング』（2019年）、21_21
						DESIGN
						SIGHT企画展「ルール？展」（2021年）共同ディレクション、展覧会「語りの複数性」（東京都渋谷公園通りギャラリー、2021年）、『音で観るダンスのワークインプログレス』（KAAT神奈川芸術劇場ほか、2017年〜）、『オーディオゲームセンター』（2017年〜）など。2022年ニューヨーク大学障害学センター客員研究員。美術評論家連盟会員。2024年7月に初の単著『誰のためのアクセシビリティ？
						障害のある人の経験と文化から考える』を出版。共著に『ルール？本　創造的に生きるためのデザイン』（フィルムアート社）がある。
					</p>
					<p class="session">
						<span>セッション1</span>
						<a href="/schedule/#session1"><em>準備中</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="sakamaki" name="坂巻舞羽" img={pictSakamaki} alt="写真: 坂巻舞羽" level={3}>
					<p>
						幼少期にホームページ制作を嗜んだことをきっかけに、2014年マークアップエンジニアとしてキャリアをスタート。フロントエンドエンジニアとして数社でウェブサイトやウェブアプリケーションの開発に携わる。ウェブ標準に準拠した開発を重要視し、社外コミュニティで関連文書の勉強会などを主催。2023年、SmartHRに入社し、アクセシビリティスペシャリストとしてプロダクトのアクセシビリティ向上推進を担当。
					</p>
					<p class="session">
						<span>セッション2</span>
						<a href="/schedule/#session2"><em>準備中</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="koyano" name="小谷野崇司" img={pictKoyano} alt="写真: 小谷野崇司" level={3}>
					<p>
						1996年ニューヨークの音楽情報サイトSonicNetにおいてデジタルガレージ社と共同でSonicNet
						Japanの立ち上げと運営を行う。チベタンフリーダムコンサートやFuji Rock
						Festivalなど大規模コンサートのライブ配信に携わる。03年に帰国しNHKエンタープライズに入社。冬のソナタのウェブサイト構築や大河ドラマや朝ドラのデジタルコンテンツ制作に携わる。東京オリンピック・パラリンピックではウェブサイト制作統括を努めた。この時に手話CGの運用にも携わり、現在はそれを進化させたKIKIの開発に取り組んでいる。
					</p>
					<p class="session">
						<span>セッション3</span>
						<a href="/schedule/#session3"><em>準備中</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="noda" name="野田純生" img={pictNoda} alt="写真: 野田純生" level={3}>
					<p>
						アルファサード株式会社創業者
						技術担当取締役。ウェブアクセシビリティチェックツール開発者。2017年から「やさしい日本語」言い換えエンジンの開発に取り組み、サービス名「伝えるウェブ」として提供。
						2024年4月より株式会社朝日新聞社
						技術顧問に就任。朝日新聞デジタルをはじめとしたデジタルメディアのウェブアクセシビリティ向上、やさしい日本語の普及に取り組む予定。
					</p>
					<p class="session">
						<span>セッション4</span>
						<a href="/schedule/#session4"><em>準備中</em></a>
					</p>
				</Speaker>
			</GridItem>
		</GridContainer>
	</Section>

	<Section>
		<Heading level={2} id="sponsors">スポンサー</Heading>
		<Heading level={3} id="sponsors-platinum">プラチナスポンサー</Heading>
		<ClusterContainer --col={2}>
			<ClusterItem>
				<Sponsor
					href="https://www.d-zero.co.jp"
					name="株式会社ディーゼロ"
					img="/img/logo-sponsor-d-zero.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://linefukuoka.co.jp/ja/"
					name="LINEヤフーコミュニケーションズ"
					img="/img/logo-sponsor-lyc.svg"
					width="775"
					height="330"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-gold">ゴールドスポンサー</Heading>
		<ClusterContainer --col={3}>
			<ClusterItem>
				<Sponsor
					href="https://www.zerobase.jp/"
					name="ゼロベース株式会社"
					img="/img/logo-sponsor-zerobase.png"
					width="403"
					height="345"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://prtimes.jp/"
					name="株式会社PR TIMES"
					img="/img/logo-sponsor-prtimes.svg"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://infoaxia.co.jp/"
					name="株式会社インフォアクシア"
					img="/img/logo-sponsor-infoaxia.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://studio.inc/"
					name="STUDIO株式会社"
					img="/img/logo-sponsor-studio.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.sakura.ad.jp/"
					name="さくらインターネット株式会社"
					img="/img/logo-sponsor-sakura.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-shilver">シルバースポンサー</Heading>
		<ClusterContainer --col={5}>
			<ClusterItem>
				<Sponsor
					href="https://trq.co.jp/"
					name="株式会社トルク"
					img="/img/logo-sponsor-torque.svg"
					width="167"
					height="47"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.kddi-webcommunications.co.jp/"
					name="株式会社KDDIウェブコミュニケーションズ"
					img="/img/logo-sponsor-kwc.png"
					width="167"
					height="47"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.yumemi.co.jp/"
					name="株式会社ゆめみ"
					img="/img/logo-sponsor-yumemi.svg"
					width="167"
					height="47"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://noveltyinc.jp/"
					name="株式会社ノベルティ"
					img="/img/logo-sponsor-novelty.svg"
					width="167"
					height="47"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-bronze">ブロンズスポンサー</Heading>
		<ClusterContainer --col={7}>
			<ClusterItem>
				<Sponsor
					href="https://rakko.inc/"
					name="ラッコ株式会社"
					img="/img/logo-sponsor-rakko.svg"
					width="1622"
					height="482"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.scivone.com/"
					name="サイフォン合同会社"
					img="/img/logo-sponsor-rscivone.png"
					width="1440"
					height="1440"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.skword.co.jp/"
					name="株式会社エスケイワード"
					img="/img/logo-sponsor-skword.svg"
					width="68"
					height="73"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://karabiner.tech"
					name="カラビナテクノロジー株式会社"
					img="/img/logo-sponsor-karabiner.svg"
					width="149"
					height="151"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://p-fab.co.jp"
					name="株式会社p-fab"
					img="/img/logo-sponsor-pfab.svg"
					width="176"
					height="193"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.concentinc.jp/"
					name="株式会社コンセント"
					img="/img/logo-sponsor-concent.jpg"
					width="176"
					height="193"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://smarthr.jp"
					name="株式会社SmartHR"
					img="/img/logo-sponsor-smarthr.svg"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.lct.jp/"
					name="株式会社リクト"
					img="/img/logo-sponsor-lct.png"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.shuaruta.com/"
					name="株式会社シュアルタ"
					img="/img/logo-sponsor-shuaruta.svg"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.waca.associates/jp/"
					name="一般社団法人ウェブ解析士協会"
					img="/img/logo-sponsor-waca.png"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://turucame.jp/"
					name="株式会社ツルカメ"
					img="/img/logo-sponsor-turucame.png"
					width="100"
					height="98"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://coding-factory.com/"
					name="CODING FACTORY by monosus"
					img="/img/logo-sponsor-monosus.png"
					width="100"
					height="98"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-snack">おやつスポンサー</Heading>
		<ClusterContainer --col={2}>
			<ClusterItem>
				<Sponsor
					href="https://www.velc.co.jp"
					name="ヴェルク株式会社"
					img="/img/logo-sponsor-velc.svg"
					width="167"
					height="47"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://nulab.com/ja/"
					name="株式会社ヌーラボ"
					img="/img/logo-sponsor-nulab.svg"
					width="84"
					height="26"
				/>
			</ClusterItem>
		</ClusterContainer>
	</Section>

	<Section width="narrow">
		<Heading level={2} id="staff">運営スタッフ</Heading>
		<ClusterContainer --col={4} --align="start">
			<ClusterItem>
				<Staff
					id="yusukehirao"
					img={pictStaff01}
					name="ゆうてん"
					role="実行委員長"
					org="株式会社ディーゼロ"
					snsX="cloud10designs"
					snsFB="yusukehirao"
					snsGH="yusukehirao"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="posi0202"
					img={pictStaff02}
					name="安立沙耶佳 (Angela)"
					role="実行委員"
					org="株式会社ヌーラボ"
					snsX="posi0202"
					snsFB="sayaka.adachi.posi"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="analogtan"
					img={pictStaff03}
					name="中村祐貴子（サチコ/misty）"
					role="実行委員"
					org="カラビナテクノロジー株式会社"
					snsX="analogtan"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="taketada323"
					img={pictStaff04}
					name="夛田 武広"
					role="実行委員"
					org="株式会社Fusic"
					snsX="taketada323"
					snsGH="TakehiroTada1"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="office">運営事務局</Heading>
		<TextBody fit>
			<p><a href="https://www.d-zero.co.jp">株式会社ディーゼロ</a></p>
		</TextBody>
	</Section>

	<Section width="narrow">
		<Heading level={2} id="contact">お問い合わせ</Heading>
		<TextBody fit>
			<p>
				一般受付メールアドレス: <a class="mail" href="mailto:fukuokaa11yconf@googlegroups.com"
					>fukuokaa11yconf@googlegroups.com</a
				>
			</p>
			<p>
				<a href="/coc">行動規範</a>の違反などを受けた、またはそのような状況を目撃した場合は、
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScQhESqjgk0QWTL9KpICIrR9xg6yAvwKu80DA6Fx1NnzF-9TA/viewform"
					>通報フォーム</a
				>までご連絡ください。
			</p>
		</TextBody>
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

	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
	}

	a:link:hover {
		background-color: var(--color-link-hover-bg);
	}

	p a {
		padding-inline: 0.2em;
	}

	p {
		margin-block: 0.9em;
		line-height: 1.8;
	}

	dl {
		font-size: 1.5rem;
		margin-block: 0;
		margin-inline: auto;
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

	.q::before {
		content: '｢';
		font-weight: normal;
	}

	.q::after {
		content: '｣';
		font-weight: normal;
	}

	.mail {
		word-break: break-all;
	}
</style>

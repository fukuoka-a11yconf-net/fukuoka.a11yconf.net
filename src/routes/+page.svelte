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

	import pictOkaue from '$lib/img/pict-speaker-okaue.webp';
	import pictJosh from '$lib/img/pict-speaker-josh.jpg';
	import pictMiyamoto from '$lib/img/pict-speaker-miyamoto.webp';
	import pictUeki from '$lib/img/pict-speaker-ueki.jpg';

	import pictStaff01 from '$lib/img/pict-staff-cloud10designs.jpg';
	import pictStaff02 from '$lib/img/pict-staff-posi0202.webp';
	import pictStaff03 from '$lib/img/pict-staff-analogtan.jpg';
	import pictStaff04 from '$lib/img/pict-staff-taketada323.png';
	import pictStaff05 from '$lib/img/pict-staff-namba.webp';
	import pictStaff06 from '$lib/img/pict-staff-tantans.webp';
	import pictStaff07 from '$lib/img/pict-staff-mizuno.webp';
	const connpassURL = 'https://fukuoka-a11yconf.connpass.com/event/361129';
</script>

<svelte:head>
	<title>アクセシビリティカンファレンス福岡2025</title>
	<meta
		name="description"
		content="2025年12月6日(土曜日)に福岡で開催される「アクセシビリティ」のカンファレンス"
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
				<dd>2025年12月6日(土曜日) 13:00〜18:00</dd>
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
				<Speaker id="okaue" name="岡上 洋子" img={pictOkaue} alt="写真: 岡上 洋子" level={3}>
					<p>
						2020年4月から、障害者専門のクラウドソーシングサービス「サニーバンク」で主にアクセシビリティ案件を担当。障害当事者ユーザーの意見を取り入れて製品やサービス等のアクセシビリティやユーザビリティを向上したいクライアント様、さまざまなユーザー、アドバイザーをつなぐコーディネーター。
						育児日記や趣味で撮った写真を掲載するウェブサイトを始めたことでWeb標準に出会う。その後、県の消費生活センターに非常勤職員として勤務するようになり、趣味でウェブサイトをやっていたことから消費生活センターのホームページを担当するようになる。以後、市の消費生活センター、国の広報相談窓口の非常勤職員を経て、2018年4月から2020年3月まで福岡市広報課ウェブアクセシビリティ担当非常勤職員として勤務。
						ウェブアクセシビリティ基盤委員会（WAIC）招聘専門家。
					</p>
					<p class="session">
						<span>セッション1</span>
						<a href="/schedule#session1"><em>アクセシビリティでつながるせかい</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="josh" name="グリズデイル・バリージョシュア" img={pictJosh} alt="写真: グリズデイル・バリージョシュア" level={3}>
					<p>
						カナダ・トロント出身で、高校時代に日本に興味を持つ。障害があっても夢をあきらめず、2007年に来日して東京に移住し、2016年には日本国籍を取得。日本各地を旅して観光地のバリアフリー状況を調査し、自身のウェブサイト「Accessible Japan（アクセシブル・ジャパン）」で情報を発信している。障害のある人たちが、愛する日本を訪れるきっかけになることを願って活動を続けている。
						国道交通省 移動等円滑化促進方針策定協議委員会の委員を務めるほか、観光庁 ユニバーサルツーリズム促進事業審査・評価委員会委員やJapan Travel Awardsの審査員としても活躍する。また、地域のアクセシビリティ委員会にも参加し、江戸川区からの推薦で東京オリンピック・パラリンピックの聖火ランナーにも選ばれた。さらに、バリアフリー旅行のコミュニティ「tabifolk（タビフォーク）」も設立した。
					</p>
					<p class="session">
						<span>セッション2</span>
						<a href="/schedule#session2"><em>最強のおもてなし</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="koyano" name="宮本 采佳" img={pictMiyamoto} alt="写真: 宮本 采佳" level={3}>
					<p>
						福岡生まれ・福岡在住のアクセシビリティエンジニア。福岡の制作会社でウェブデザイナー・フロントエンドエンジニア・ディレクターの経験を経て、2020年にフリーランスへ。2017年からウェブアクセシビリティの勉強や啓蒙活動を始め、現在は「マサカリを構えず旗を振る」をモットーに、アクセシビリティチェックや業務委託としてアクセシビリティ推進のサポートを行っている。
					</p>
					<p class="session">
						<span>セッション3</span>
						<a href="/schedule#session3"><em>アクセシビリティ推進という山登りを支える――理念を道しるべに</em></a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="ueki" name="植木 真" img={pictUeki} alt="写真: 植木 真" level={3}>
					<p>
						ウェブアクセシビリティのコンサルタントとして、2004年10月に株式会社インフォアクシアを設立。ウェブサイトやモバイルアプリのアクセシビリティ診断、障害当事者やシニアユーザーによるユーザビリティテスト、クライアント企業の社内研修、ウェブ制作会社のサポートなどを通じて、主に企業ウェブサイトのアクセシビリティ向上に取り組んでいる。日本産業規格「JIS
						X
						8341-3」の原案作成に初版の2004年版から参画し、2016年の改定版では原案作成委員会の委員長を務めた。W3CのAccessibility
						Guidelines Working Group（AGWG）にも2005年から参加しており、現在は「WCAG
						3.0」の作成に従事している。2012年～2019年にかけては、ウェブアクセシビリティ基盤委員会（WAIC）の委員長を務めた。2020年から「GAAD
						Japan」、2023年から「A11y Tokyo
						Meetup」などのイベントも企画・運営している。両親が福岡県出身で、自身も福岡市生まれ。					</p>
					<p class="session">
						<span>セッション4</span>
						<a href="/schedule#session4"><em>準備中</em></a>
					</p>
				</Speaker>
			</GridItem>
		</GridContainer>
	</Section>

	<!--	<Section>-->
	<!--		<Heading level={2} id="sponsors">スポンサー</Heading>-->
	<!--		<Heading level={3} id="sponsors-platinum">プラチナスポンサー</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={2}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.d-zero.co.jp"-->
	<!--					name="株式会社ディーゼロ"-->
	<!--					img="/img/logo-sponsor-d-zero.svg"-->
	<!--					width="215"-->
	<!--					height="158"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.lycorp.co.jp/ja/"-->
	<!--					name="LINEヤフー株式会社"-->
	<!--					img="/img/logo-sponsor-lyc.svg"-->
	<!--					width="775"-->
	<!--					height="330"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->

	<!--		<Heading level={3} id="sponsors-gold">ゴールドスポンサー</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={3}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.zerobase.jp/"-->
	<!--					name="ゼロベース株式会社"-->
	<!--					img="/img/logo-sponsor-zerobase.png"-->
	<!--					width="403"-->
	<!--					height="345"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://prtimes.jp/"-->
	<!--					name="株式会社PR TIMES"-->
	<!--					img="/img/logo-sponsor-prtimes.svg"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://infoaxia.co.jp/"-->
	<!--					name="株式会社インフォアクシア"-->
	<!--					img="/img/logo-sponsor-infoaxia.svg"-->
	<!--					width="215"-->
	<!--					height="158"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://studio.inc/"-->
	<!--					name="STUDIO株式会社"-->
	<!--					img="/img/logo-sponsor-studio.svg"-->
	<!--					width="215"-->
	<!--					height="158"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.sakura.ad.jp/"-->
	<!--					name="さくらインターネット株式会社"-->
	<!--					img="/img/logo-sponsor-sakura.svg"-->
	<!--					width="215"-->
	<!--					height="158"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->

	<!--		<Heading level={3} id="sponsors-shilver">シルバースポンサー</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={5}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://trq.co.jp/"-->
	<!--					name="株式会社トルク"-->
	<!--					img="/img/logo-sponsor-torque.svg"-->
	<!--					width="167"-->
	<!--					height="47"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.kddi-webcommunications.co.jp/"-->
	<!--					name="株式会社KDDIウェブコミュニケーションズ"-->
	<!--					img="/img/logo-sponsor-kwc.png"-->
	<!--					width="167"-->
	<!--					height="47"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.yumemi.co.jp/"-->
	<!--					name="株式会社ゆめみ"-->
	<!--					img="/img/logo-sponsor-yumemi.svg"-->
	<!--					width="167"-->
	<!--					height="47"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://noveltyinc.jp/"-->
	<!--					name="株式会社ノベルティ"-->
	<!--					img="/img/logo-sponsor-novelty.svg"-->
	<!--					width="167"-->
	<!--					height="47"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->

	<!--		<Heading level={3} id="sponsors-bronze">ブロンズスポンサー</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={7}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://rakko.inc/"-->
	<!--					name="ラッコ株式会社"-->
	<!--					img="/img/logo-sponsor-rakko.svg"-->
	<!--					width="1622"-->
	<!--					height="482"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.scivone.com/"-->
	<!--					name="サイフォン合同会社"-->
	<!--					img="/img/logo-sponsor-rscivone.png"-->
	<!--					width="1440"-->
	<!--					height="1440"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.skword.co.jp/"-->
	<!--					name="株式会社エスケイワード"-->
	<!--					img="/img/logo-sponsor-skword.svg"-->
	<!--					width="68"-->
	<!--					height="73"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://karabiner.tech"-->
	<!--					name="カラビナテクノロジー株式会社"-->
	<!--					img="/img/logo-sponsor-karabiner.svg"-->
	<!--					width="149"-->
	<!--					height="151"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://p-fab.co.jp"-->
	<!--					name="株式会社P-Fab"-->
	<!--					img="/img/logo-sponsor-pfab.svg"-->
	<!--					width="176"-->
	<!--					height="193"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.concentinc.jp/"-->
	<!--					name="株式会社コンセント"-->
	<!--					img="/img/logo-sponsor-concent.jpg"-->
	<!--					width="176"-->
	<!--					height="193"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://smarthr.jp"-->
	<!--					name="株式会社SmartHR"-->
	<!--					img="/img/logo-sponsor-smarthr.svg"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.lct.jp/"-->
	<!--					name="株式会社リクト"-->
	<!--					img="/img/logo-sponsor-lct.png"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.shuaruta.com/"-->
	<!--					name="株式会社シュアルタ"-->
	<!--					img="/img/logo-sponsor-shuaruta.svg"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.waca.associates/jp/"-->
	<!--					name="一般社団法人ウェブ解析士協会"-->
	<!--					img="/img/logo-sponsor-waca.png"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://turucame.jp/"-->
	<!--					name="株式会社ツルカメ"-->
	<!--					img="/img/logo-sponsor-turucame.png"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://coding-factory.com/"-->
	<!--					name="CODING FACTORY by monosus"-->
	<!--					img="/img/logo-sponsor-monosus.png"-->
	<!--					width="100"-->
	<!--					height="98"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->

	<!--		<Heading level={3} id="sponsors-snack">おやつスポンサー</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={2}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.velc.co.jp"-->
	<!--					name="ヴェルク株式会社"-->
	<!--					img="/img/logo-sponsor-velc.svg"-->
	<!--					width="167"-->
	<!--					height="47"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://nulab.com/ja/"-->
	<!--					name="株式会社ヌーラボ"-->
	<!--					img="/img/logo-sponsor-nulab.svg"-->
	<!--					width="84"-->
	<!--					height="26"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->
	<!--		<Heading level={3} id="sponsors-snack">特別協賛</Heading>-->
	<!--		<ClusterContainer &#45;&#45;col={2}>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://www.aok-net.com/"-->
	<!--					name="株式会社高知システム開発"-->
	<!--					img="/img/logo-partner-ksd.png"-->
	<!--					width="84"-->
	<!--					height="26"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--			<ClusterItem>-->
	<!--				<Sponsor-->
	<!--					href="https://gihyo.jp/book/"-->
	<!--					name="株式会社技術評論社"-->
	<!--					img="/img/logo-partner-gihyo.svg"-->
	<!--					width="84"-->
	<!--					height="26"-->
	<!--				/>-->
	<!--			</ClusterItem>-->
	<!--		</ClusterContainer>-->
	<!--	</Section>-->

	<Section>
		<Heading level={2} id="staff">運営スタッフ</Heading>
		<ClusterContainer --col={7} --align="start">
			<ClusterItem>
				<Staff
					id="analogtan"
					img={pictStaff03}
					name="中村祐貴子（サチコ/misty）"
					role="実行委員長"
					org="カラビナテクノロジー株式会社"
					snsX="analogtan"
					snsFB="yukiko.yukke"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="yusukehirao"
					img={pictStaff01}
					name="ゆうてん"
					role="実行委員"
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
					id="taketada323"
					img={pictStaff04}
					name="夛田 武広"
					role="実行委員"
					org="株式会社Fusic"
					snsX="taketada323"
					snsGH="TakehiroTada1"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="namba"
					img={pictStaff05}
					name="難波 佳代子"
					role="実行委員"
					org="株式会社プレイド"
					snsFB="kayoccoli"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="tantans"
					img={pictStaff06}
					name="丹後 綾野"
					role="実行委員"
					org="フリーランス"
					snsX="tantans_design"
					snsFB="ayano.tango.1"
					snsGH="Ayano0416"
				/>
			</ClusterItem>
			<ClusterItem>
				<Staff
					id="tantans"
					img={pictStaff07}
					name="水野 敬太"
					role="実行委員"
					org="株式会社あつまる"
					snsX="kzvXED5uqh61613"
					snsFB="keita.mizuno.372"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="office">運営事務局</Heading>
		<TextBody fit>
			<p>一般社団法人アクセシビリティカンファレンス福岡</p>
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
				<a href="https://forms.gle/noRCSaRKPC7fjsGg9">通報フォーム</a>までご連絡ください。
			</p>
		</TextBody>
	</Section>

	<Section width="narrow">
		<Heading level={2} id="sponsors-looking">スポンサー募集</Heading>
		<TextBody fit>
			<p>開催にあたり、ご協賛いただけるスポンサー様を募集しております。</p>
			<p>当カンファレンスにご協賛いただく企業・団体様や提供サービスに触れる機会の創出に貢献できるよう運営して参ります。</p>
			<p>スポンサープログラムは、おやつ、プラチナ、ゴールド、シルバー、ブロンズの5種類ご用意しております。詳しくは、スポンサー向け企画概要資料（Googleスライドをご確認ください。</p>
		</TextBody>
		<div class="apply">
			<a href="https://docs.google.com/presentation/d/1aM9jWUY9mvzrEz4UDXipFznBUGI5U_K144p01pa7bT8/edit?usp=sharing" target="_blank">資料はこちら</a>
		</div>
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

  .apply {
      align-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-block: 2rem 0;
  }

  .apply a {
      display: block;
      padding-block: 1em 1.25em;
      padding-inline: 1.5em;
      text-decoration: underline dashed;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.4em;
      color: inherit;
      font-size: 1.5rem;
      line-height: 1;
      background-color: var(--color-bg-base);
      border: 3px solid var(--color-border-primary);
      border-radius: 10rem;
  }
</style>

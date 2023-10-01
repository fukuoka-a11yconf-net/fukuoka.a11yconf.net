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

	import pictMajima from '$lib/img/pict-speaker-majima.png?format=webp';
	import pictKatayama from '$lib/img/pict-speaker-katayama.png?format=webp';
	import pictShibata from '$lib/img/pict-speaker-shibata.png?format=webp';
	import pictIhara from '$lib/img/pict-speaker-ihara.jpg?format=webp';
	import pictIshiki from '$lib/img/pict-speaker-ishiki.jpg?format=webp';

	import pictStaff01 from '$lib/img/pict-staff-cloud10designs.jpg?format=webp';
	import pictStaff02 from '$lib/img/pict-staff-posi0202.jpg?format=webp';
	import pictStaff03 from '$lib/img/pict-staff-analogtan.jpg?format=webp';
	import pictStaff04 from '$lib/img/pict-staff-take2webservice.png?format=webp';
	import pictStaff05 from '$lib/img/pict-staff-taketada323.png?format=webp';

	import logoDeisui from '$lib/img/logo-sponsor-deisui.png?format=webp';
	import logoFontplus from '$lib/img/logo-sponsor-fontplus.png?format=webp';

	const connpassURL = 'https://fukuoka-a11yconf.connpass.com/event/294555/';
</script>

<svelte:head>
	<title>アクセシビリティカンファレンス福岡2023</title>
	<meta
		name="description"
		content="2023年11月11日（土曜日）にLINE Fukuokaで開催される「アクセシビリティ」のカンファレンス"
	/>
</svelte:head>

<Hero {connpassURL} />

<div class="nav">
	<Navigation isHome />
</div>

<Main>
	<Section width="narrow">
		<Heading level={2} id="summary">開催概要</Heading>

		<dl role="associationlist generic">
			<div role="none">
				<dt role="associationlistitemkey generic">日時</dt>
				<dd role="associationlistitemvalue generic">2023年11月11日（土曜日） 13:00〜18:00</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">参加費</dt>
				<dd role="associationlistitemvalue generic">無料</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">場所</dt>
				<dd role="associationlistitemvalue generic">LINE Fukuoka株式会社 カフェスペース</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">会場定員</dt>
				<dd role="associationlistitemvalue generic">100名</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">ライブ配信</dt>
				<dd role="associationlistitemvalue generic">YouTubeにて通常版・情報保障版同時配信</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">参加登録</dt>
				<dd role="associationlistitemvalue generic">
					<a href={connpassURL}>connpassで事前受付</a>
				</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">セッション</dt>
				<dd role="associationlistitemvalue generic">
					4セッション + 2スポンサーセッション / シングルトラック
				</dd>
			</div>
			<div role="none">
				<dt role="associationlistitemkey generic">主催</dt>
				<dd role="associationlistitemvalue generic">
					アクセシビリティカンファレンス福岡実行委員会
				</dd>
			</div>
		</dl>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="speakers">登壇者</Heading>

		<GridContainer --col={2} --justify="start" --gap="4rem">
			<GridItem>
				<Speaker id="majima" name="間嶋沙知" img={pictMajima} alt="写真: 間嶋氏とこぶた" level={3}>
					<p>
						高知在住のフリーランスデザイナー。大学卒業後、桑沢デザイン研究所夜間部に学ぶ。東京、高知のデザイン事務所を経て、2016年に独立。印刷物とウェブのデザインを手がける。<a
							href="https://mjmj.co/">majima DESIGN</a
						>の屋号で、「個々の良さが発揮される風通しの良い世界」にデザインで貢献することを目指している。こぶたのうたちゃんと暮らしている。
					</p>
					<p>
						著書『<a href="https://komatta-design.studio.site/"
							>見えにくい、読みにくい「困った！」を解決するデザイン</a
						>』(2022年/マイナビ出版)
					</p>
					<p class="session">
						<span>セッション1</span>
						<a href="/schedule/#session1"
							><em><span class="q">伝わる</span>を拡張するアクセシビリティ</em></a
						>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker
					id="katayama"
					name="方山れいこ"
					img={pictKatayama}
					alt="写真: 方山れいこ"
					level={3}
				>
					<p>
						多摩美術大学で建築を学んだのち、東京芸術大学大学院にてメディア映像を研究。2018年デザイン制作会社にてアートディレクター、UI/UXデザイナー、空間デザイナーとして活動。
					</p>
					<p>2020年独立。フリーランスとして活動。同年、二級建築士資格を取得。</p>
					<p>
						2021年<a href="https://hogaku.co.jp">株式会社方角</a
						>設立。「障害のある社会をデザインで変える」をミッションに、インクルーシブデザインの制作やサービス展開を行っている。
					</p>
					<p class="session">
						<span>セッション3</span>
						<a href="/schedule/#session3">
							<em><span class="q">違う人生を生きる人と一緒に働く</span>ということ</em>
						</a>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker
					id="shibata"
					name="柴田宏仙"
					img={pictShibata}
					alt="アバターアイコン: 柴田氏のイラスト"
					level={3}
				>
					<p>
						2012年よりWebデザインスタジオ<a href="https://9lio.com">Qlio</a
						>を設立しフリーランスとしてWebサイト制作の仕事をはじめる。Webサイトの企画戦略からデザイン、コーディングまでWebサイト制作全般を主な業務内容として活動。その後、Webサイト制作の学習コンテンツ<a
							href="https://creatorquest.jp">CreatorQuest</a
						>というWebサイトを公開したり、Webクリエイターを養成するオンラインサロン<a
							href="https://shibajuku.net">Shibajuku</a
						>を立ち上げて運営を行っている。また、専門学校にて夜間のWebデザイン学科の非常勤講師としても活動している。
					</p>
					<p>著書『<a href="https://gihyo.jp/book/2022/978-4-297-13132-6">武器になるHTML</a>』</p>
					<p class="session">
						<span>セッション2</span>
						<a href="/schedule/#session2"
							><em>ウェブアクセシビリティ社内教育のすゝめ</em>
							〜品質か、営業か〜</a
						>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="ihara" name="伊原力也" img={pictIhara} alt="写真: 伊原力也" level={3}>
					<p><a href="https://www.freee.co.jp">freee株式会社</a> デザインマネージャー</p>
					<p>
						製品を通じた多様な働き方の実現を目指し、2017年にfreee株式会社に入社。デザインチームのマネジメントおよびアクセシビリティ普及啓発を行う。ほか、<a
							href="https://ubie.life">Ubie</a
						>、<a href="https://studio.inc">STUDIO</a>、<a href="https://culumu.com">CULUMU</a
						>、東京都新型コロナウイルス感染症対策サイトのアクセシビリティ改善をサポート。<a
							href="https://waic.jp">ウェブアクセシビリティ基盤委員会（WAIC）</a
						>委員、<a href="https://www.hcdnet.org">人間中心設計推進機構（HCD-Net）</a
						>評議委員。著書（共著）に『<a href="https://gihyo.jp/book/2023/978-4-297-13366-5"
							>Webアプリケーションアクセシビリティ</a
						>』など。
					</p>
					<p class="session">
						<span>セッション2</span>
						<a href="/schedule/#session2"
							><em>ウェブアクセシビリティ社内教育のすゝめ</em>
							〜品質か、営業か〜</a
						>
					</p>
				</Speaker>
			</GridItem>
			<GridItem>
				<Speaker id="ishiki" name="伊敷政英" img={pictIshiki} alt="写真: 伊敷政英" level={3}>
					<p>1977年3月東京生まれ。2003年からウェブアクセシビリティの分野で仕事を始める。</p>
					<p>
						2021年7月、デジタル庁発足直前の内閣官房IT総合戦略室へアクセシビリティアナリストとして入庁。以来デジタル庁が所管するウェブサイトやアプリなどのアクセシビリティ改善に従事するとともに、町内外への普及啓発にも取り組んでいる。
					</p>
					<p>先天性の視覚障害があり全盲。</p>
					<p class="session">
						<span>セッション4</span>
						<a href="/schedule/#session4"
							><em>デジタル庁でのアクセシビリティへの取り組み</em>
							―<span class="q">誰一人取り残されない、人にやさしいデジタル化を</span
							>の実現に向けて―</a
						>
					</p>
				</Speaker>
			</GridItem>
		</GridContainer>
	</Section>

	<Section>
		<Heading level={2} id="sponsors">スポンサー</Heading>

		<Heading level={3} id="sponsors-platinum">プラチナスポンサー</Heading>
		<ClusterContainer --col={1}>
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

		<Heading level={3} id="sponsors-gold">ゴールドスポンサー</Heading>
		<ClusterContainer --col={3}>
			<ClusterItem>
				<Sponsor
					href="https://corp.helpfeel.com/ja/home"
					name="株式会社Helpfeel"
					img="/img/logo-sponsor-helpfeel.svg"
					width="403"
					height="345"
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
					href="https://www.d-zero.co.jp"
					name="株式会社ディーゼロ"
					img="/img/logo-sponsor-d-zero.svg"
					width="215"
					height="158"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-shilver">シルバースポンサー</Heading>
		<ClusterContainer --col={5}>
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
					href="https://rs.sakura.ad.jp"
					name="さくらのレンタルサーバ"
					img="/img/logo-sponsor-sakura.svg"
					width="939"
					height="649"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://turucame.jp"
					name="株式会社ツルカメ"
					img="/img/logo-sponsor-turucame.svg"
					width="400"
					height="600"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.skword.co.jp"
					name="株式会社エスケイワード"
					img="/img/logo-sponsor-skword.svg"
					width="834"
					height="228"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://fusic.co.jp"
					name="株式会社Fusic"
					img="/img/logo-sponsor-fusic.svg"
					width="1676"
					height="1676"
				/>
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-bronze">ブロンズスポンサー</Heading>
		<ClusterContainer --col={7}>
			<ClusterItem>
				<Sponsor
					href="https://trq.co.jp"
					name="株式会社トルク"
					img="/img/logo-sponsor-torque.svg"
					width="1622"
					height="482"
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
					href="https://www.zerobase.jp"
					name="ゼロベース株式会社"
					img="/img/logo-sponsor-zerobase.png"
					width="1125"
					height="1125"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.scivone.com"
					name="サイフォン合同会社"
					img="/img/logo-sponsor-scivone.png"
					width="1440"
					height="1440"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://corporate.yamap.co.jp"
					name="株式会社ヤマップ"
					img="/img/logo-sponsor-yamap.svg"
					width="68"
					height="73"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://ubie.life"
					name="ユビー株式会社"
					img="/img/logo-sponsor-ubie.svg"
					width="441"
					height="539"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor href="#sponsor-recruitment" name="募集中" />
			</ClusterItem>
		</ClusterContainer>

		<Heading level={3} id="sponsors-snack">おやつスポンサー</Heading>
		<ClusterContainer --col={3}>
			<ClusterItem>
				<Sponsor
					href="https://corp.freee.co.jp"
					name="freee株式会社"
					img="/img/logo-sponsor-freee.svg"
					width="1851"
					height="715"
				/>
			</ClusterItem>
		</ClusterContainer>

		<GridContainer --col={2} --justify="start">
			<GridItem>
				<Heading level={3} id="sponsors-venue">会場提供</Heading>
				<Sponsor
					href="https://linefukuoka.co.jp/ja/"
					name="LINE Fukuoka株式会社"
					img="/img/logo-sponsor-linefukuoka.png"
					width="775"
					height="330"
				/>
			</GridItem>
			<GridItem>
				<Heading level={3} id="sponsors-webfont">ウェブフォント提供</Heading>
				<Sponsor
					href="https://fontplus.jp"
					name="FONTPLUS"
					img={logoFontplus}
					width="1225"
					height="300"
				/>
			</GridItem>
		</GridContainer>

		<Heading level={3} id="community">協力コミュニティ</Heading>
		<ClusterContainer --col={5}>
			<ClusterItem>
				<Sponsor
					href="https://x.com/deisui_html"
					name="#deisui_html_radio"
					img={logoDeisui}
					width="600"
					height="600"
				/>
			</ClusterItem>
		</ClusterContainer>

		<section>
			<Heading level={3} id="sponsor-recruitment">スポンサー募集</Heading>
			<TextBody>
				<p>
					<a
						href="https://docs.google.com/presentation/d/1nf6NAYliuFI-MJVTABR0aj1WJMTYt7nwdmcpTUBrpEw"
					>
						アクセシビリティカンファレンス福岡 企画概要 (Googleスライド)</a
					>をご覧ください。
				</p>
				<p>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLScx1br1WcjicvAX61q_bTuRjyzOldJmfqHdUjtKbCvQs12dRA/viewform"
						>スポンサー申し込みGoogleフォーム</a
					>からお申し込みください。<strong>先着順</strong>となりますのでお早めにお申し込みください。
				</p>
				<p>※資料に情報保障が必要な場合はお問い合わせください</p>
			</TextBody>
		</section>
	</Section>

	<Section width="narrow">
		<Heading level={2} id="staff">運営スタッフ</Heading>
		<ClusterContainer --col={5} --align="start">
			<ClusterItem
				><Staff
					id="yusukehirao"
					img={pictStaff01}
					name="ゆうてん"
					role="実行委員長"
					org="株式会社ディーゼロ"
					snsX="cloud10designs"
					snsFB="yusukehirao"
					snsGH="yusukehirao"
				/></ClusterItem
			>
			<ClusterItem
				><Staff
					id="posi0202"
					img={pictStaff02}
					name="安立 沙耶佳 (Angela)"
					role="実行委員"
					org="株式会社ヌーラボ"
					snsX="posi0202"
					snsFB="sayaka.adachi.posi"
				/></ClusterItem
			>
			<ClusterItem
				><Staff
					id="analogtan"
					img={pictStaff03}
					name="サチコ"
					role="実行委員"
					org="カラビナテクノロジー株式会社"
					snsX="analogtan"
				/></ClusterItem
			>
			<ClusterItem
				><Staff
					id="take2webservice"
					img={pictStaff04}
					name="いせきさん"
					role="実行委員"
					org="フリーランス"
					snsX="take2webservice"
				/></ClusterItem
			>
			<ClusterItem
				><Staff
					id="taketada323"
					img={pictStaff05}
					name="夛田 武広"
					role="実行委員"
					org="株式会社Fusic"
					snsX="taketada323"
					snsGH="TakehiroTada1"
				/></ClusterItem
			>
		</ClusterContainer>

		<Heading level={3} id="office">運営事務局</Heading>
		<TextBody fit>
			<p><a href="https://www.d-zero.co.jp">株式会社ディーゼロ</a></p>
		</TextBody>

		<Heading level={3} id="staff-recruitment">ボランティアスタッフ募集</Heading>
		<TextBody>
			<p><del>以下のボランティアスタッフを募集します。</del></p>
			<ul>
				<li><del>現地・前日準備スタッフ</del></li>
				<li><del>現地・当日運営スタッフ</del></li>
				<li><del>オンライン・UDトーク（ライブ字幕）編集スタッフ</del></li>
			</ul>
			<p>
				<strong>募集はすべて終了いたしました。</strong><em
					>ご参加・ご協力ありがとうございました。<em></em></em
				>
			</p>
		</TextBody>
	</Section>

	<Section width="narrow">
		<Heading level={2} id="contact">お問い合わせ</Heading>
		<TextBody fit>
			<p>
				<a class="mail" href="mailto:fukuokaa11yconf@googlegroups.com"
					>fukuokaa11yconf@googlegroups.com</a
				>
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

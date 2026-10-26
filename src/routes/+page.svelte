<script>
	import ClusterContainer from '$lib/components/cluster-container.svelte';
	import ClusterItem from '$lib/components/cluster-item.svelte';
	import GridContainer from '$lib/components/grid-container.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Main from '$lib/components/main.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import Section from '$lib/components/section.svelte';
	import Speaker from '$lib/components/speaker.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';
	import Staff from '$lib/components/staff.svelte';
	import TextBody from '$lib/components/text-body.svelte';

	import pictFujita from '$lib/img/pict-speaker-fujita.webp';
	import pictIzuizu from '$lib/img/pict-speaker-izuizu.webp';
	import pictKawashima from '$lib/img/pict-speaker-kawashima.webp';
	import pictKitamura from '$lib/img/pict-speaker-kitamura.webp';
	import pictZhang from '$lib/img/pict-speaker-zhang.webp';

	import pictStaff01 from '$lib/img/pict-staff-cloud10designs.jpg';
	import pictStaff02 from '$lib/img/pict-staff-posi0202.webp';
	import pictStaff03 from '$lib/img/pict-staff-analogtan.jpg';
	import pictStaff04 from '$lib/img/pict-staff-taketada323.png';
	import pictStaff06 from '$lib/img/pict-staff-tantans.webp';
	import pictStaff07 from '$lib/img/pict-staff-mizuno.webp';

	const connpassURL = 'https://fukuoka-a11yconf.connpass.com/event/404619/';
	const reportFormURL = 'https://forms.gle/cNEtaGDmznWGaVts6';
	const sponsorDeckURL =
		'https://docs.google.com/presentation/d/1EA_s42YNMXHGV6mA2yAZfTTmUrzFpaxLOVMR1g5bDVs/edit?slide=id.g36882c15362_0_5#slide=id.g36882c15362_0_5';
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
		<Heading level={2} id="theme">2026年テーマ</Heading>
		<p class="theme">ワクワクをともに</p>
		<TextBody>
			<p>
				2023年からの3年間、私たちは福岡からアクセシビリティの可能性を発信し続けてきました。<br
				/>2026年に私たちが目指すのは、誰もが心地よく、そして何より未来にワクワクするカンファレンスです。
			</p>
			<p>
				「ワクワクをともに」を合言葉に、正しさだけでなく、楽しさを。<br
				/>一人ひとりの「知りたい」「作りたい」「変えたい」という純粋な熱量やときめきを持ち寄り、ともに学び、響き合う。
			</p>
			<p>
				皆さんの参加やご支援が、このカンファレンスを、そして未来をさらに輝かせるエネルギーになります。
			</p>
		</TextBody>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="summary">開催概要</Heading>
		<dl>
			<div>
				<dt>日時</dt>
				<dd>2026年11月21日(土曜日) 13:00〜18:00（12:30開場）<br />懇親会 18:30〜19:30</dd>
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
		<p class="note">登壇者などの詳細は、続報をお待ちください。</p>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="speakers">登壇者</Heading>

		<GridContainer --col={2} --gap="4rem">
			<Speaker
				subgrid
				id="izuizu"
				name="山本 和泉"
				img={pictIzuizu}
				alt="写真: 山本 和泉"
				level={3}
			>
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
				<p class="session" slot="session">
					<span>セッション1</span>
					<a href="/schedule#session1"
						><em
							>それ、アクセシビリティのせいかも？数字に表れない『届かなさ』と、これからの『あたりまえ』の話</em
						></a
					>
				</p>
			</Speaker>
			<Speaker
				subgrid
				id="zhang"
				name="張 彦芳（ジャン エンファン）"
				img={pictZhang}
				alt="写真: 張 彦芳"
				level={3}
			>
				<p>九州大学大学院芸術工学研究院 准教授</p>
				<p>
					専門はユニバーサルデザイン、ソサエタルデザイン。企業でのデザイン実務を経て、現在は「No one
					will be left
					behind（誰一人取り残さない）」を理念に、多様な立場や価値観を強みに変える共創の仕組みと社会実装を研究・実践している。国内外の産学官と連携したプロジェクトやワークショップを多数実施。これまでに、福岡市立こども病院の環境デザイン、博多駅新幹線サインシステム、福岡銀行のユニバーサルデザインなどに携わる。
				</p>
				<p class="session" slot="session">
					<span>セッション2</span>
					<a href="/schedule#session2"
						><em>移動に、もっとワクワクを。― 多様な人から考える公共交通のデザイン</em></a
					>
				</p>
			</Speaker>
			<Speaker
				subgrid
				id="kawashima"
				name="川島 歩美"
				img={pictKawashima}
				alt="写真: 川島 歩美"
				level={3}
			>
				<p>
					2019年にFFG入社。法人向けサービスのUX/UIデザインやFFGデザインガイドラインの策定を担当。<br
					/>2023年のアクセシビリティカンファレンスで「うちは大丈夫か？」と不安を感じたことをきっかけに、FFG社内でアクセシビリティ推進活動を開始。草の根活動を続けながら、ブランド領域のデザインガイドライン策定にも携わる。<br
					/>藤田とチームメンバーとともに、アクセシビリティのさらなる推進を目指す。
				</p>
				<p class="session" slot="session">
					<span>セッション3</span>
					<a href="/schedule#session3"><em>小さな実践から、組織の当たり前へ。</em></a>
				</p>
			</Speaker>
			<Speaker
				subgrid
				id="fujita"
				name="藤田 正訓"
				img={pictFujita}
				alt="写真: 藤田 正訓"
				level={3}
			>
				<p>
					2025年にFFG入社。法人向けプロダクト「BIZSHIP」の開発者。前々職の時にD-ZEROのゆうてんさんに教わりながらアクセシビリティに取り組んだ経験をもとに、部署内の開発チームに考え方や技術を伝道中。川島と仲間たちと一緒に、誰もが銀行サービスをスムーズに使える地平を目指す。
				</p>
				<p class="session" slot="session">
					<span>セッション3</span>
					<a href="/schedule#session3"><em>小さな実践から、組織の当たり前へ。</em></a>
				</p>
			</Speaker>
			<Speaker
				subgrid
				id="kitamura"
				name="北村 直也"
				img={pictKitamura}
				alt="写真: 北村 直也"
				level={3}
			>
				<p>eスポーツプレイヤー</p>
				<p>
					全盲のeスポーツプレイヤー、声優・ナレーター。『ストリートファイター6』でマスターランクに到達し、EVO
					Japanなどの大会にも出場。ゲームアクセシビリティを「できない」を「できる」にするだけでなく、その先の挑戦や楽しさを広げるものと捉え、当事者としての発信や検証、イベント登壇などに取り組む。
				</p>
				<p>株式会社ePARA所属 / 一般社団法人日本ゲームアクセシビリティ協会　理事</p>
				<p class="session" slot="session">
					<span>セッション4</span>
					<a href="/schedule#session4"
						><em>「できる」の先へ――アクセシビリティが生み出すワクワク</em></a
					>
				</p>
			</Speaker>
		</GridContainer>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="sponsors">スポンサー</Heading>
		<Heading level={3} id="sponsors-platinum">プラチナスポンサー</Heading>
		<ClusterContainer --col={2}>
			<ClusterItem>
				<Sponsor
					href="https://www.lycorp.co.jp/"
					name="LINEヤフー株式会社"
					img="/img/logo-sponsor-lycorp.svg"
					width="775"
					height="330"
				/>
			</ClusterItem>
		</ClusterContainer>
		<Heading level={3} id="sponsors-gold">ゴールドスポンサー</Heading>
		<ClusterContainer --col={4}>
			<ClusterItem>
				<Sponsor
					href="https://www.d-zero.co.jp"
					name="株式会社ディーゼロ"
					img="/img/logo-sponsor-d-zero-2026.svg"
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
			<ClusterItem>
				<Sponsor
					href="https://www.fukuoka-fg.com/recruit_career/digital/"
					name="株式会社ふくおかフィナンシャルグループ"
					img="/img/logo-sponsor-ffg-2026.png"
					width="500"
					height="440"
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
			<ClusterItem>
				<Sponsor
					href="https://www.un-t.com/"
					name="アンティー・ファクトリー"
					img="/img/logo-sponsor-unt.svg"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://turucame.jp/"
					name="株式会社ツルカメ"
					img="/img/logo-sponsor-turucame.svg"
				/>
			</ClusterItem>
			<ClusterItem>
				<Sponsor
					href="https://www.sixtant.co.jp/"
					name="株式会社シックスタント"
					img="/img/logo-sponsor-sixtant.svg"
				/>
			</ClusterItem>
		</ClusterContainer>
		<Heading level={3} id="sponsors-snack">おやつスポンサー</Heading>
		<ClusterContainer --col={2}>
			<ClusterItem>
				<Sponsor
					href="https://www.tokyu.co.jp/"
					name="東急株式会社"
					img="/img/logo-sponsor-tokyu.svg"
				/>
			</ClusterItem>
		</ClusterContainer>
	</Section>
	<Section width="narrow">
		<Heading level={2} id="sponsors-looking">スポンサー募集</Heading>
		<TextBody fit>
			<p>開催にあたり、ご協賛いただけるスポンサー様を募集しております。</p>
			<p>
				当カンファレンスにご協賛いただく企業・団体様や提供サービスに触れる機会の創出に貢献できるよう運営して参ります。
			</p>
			<p>詳しくは、スポンサー向け企画概要資料（Googleスライド）をご確認ください。</p>
		</TextBody>
		<div class="apply">
			<a href={sponsorDeckURL} target="_blank">資料はこちら</a>
		</div>
	</Section>
	<Section>
		<Heading level={2} id="staff">運営スタッフ</Heading>
		<ClusterContainer --col={6} --align="start">
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
					snsGH="TakehiroTada"
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
					id="mizuno"
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
				<a href={reportFormURL} target="_blank">通報フォーム</a>までご連絡ください。
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

	.apply a:hover {
		background-color: var(--color-link-hover-bg);
	}

	.note {
		margin-block-start: 2rem;
		font-size: 1.2rem;
		line-height: 1.8;
		text-align: center;
	}

	.theme {
		margin-block: 1rem 2rem;
		font-size: clamp(2rem, 6vw, 3.5rem);
		font-weight: bold;
		line-height: 1.4;
		text-align: center;
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

	.mail {
		word-break: break-all;
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

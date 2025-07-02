<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>タイムテーブル | アクセシビリティカンファレンス福岡2025</title>
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
					<dd>開会式</dd>
				</div>
				<div class="break">
					<dt>13:20</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>13:30</dt>
					<dd id="session1">
						<p class="sub"><em>セッション1</em></p>
						<p class="title">
							<em>障害は乗り越えられるべき課題なのか？</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-tanaka">田中みゆき</a></em></p>
						<p>
							障害は個人ではなく社会の側にあると考えると、社会のバリアを取り除いていくことが
							社会全体で進めていくべきことであるのは間違いありません。
							一方で、あらゆるバリアを取り除き、障害をまるでないもののように扱うのが
							わたしたちの社会が目指すべき未来なのでしょうか？
							テクノロジーは、しばしば優生思想やエイブリズムと結びついて発展してきました。
							今回は、アクセシビリティを高めることだけでは解決できないこと、
							アクセシビリティが達成されても残る問題について、みなさんと考えたいと思っています。
						</p>
					</dd>
				</div>
				<div class="break">
					<dt>14:10</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>14:20</dt>
					<dd id="session2">
						<p class="sub"><em>セッション2</em></p>
						<p class="title">
							<em>アクセシビリティをあたりまえにするまで</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-sakamaki">坂巻舞羽</a></em></p>
						<p>
							SmartHRでアクセシビリティをリードする組織が誕生してから丸3年が経ちます。私たちはこの間、どのように多様なユーザーの「使える」に向き合い、何を成し遂げてきたのか。そして、今後挑むべき課題とは何か。
							プロダクトの品質向上による信頼の確立と、社内啓蒙による文化の醸成、そしてやさしい日本語を活用する新たなアプローチなど、私たちの多角的な取り組みの紹介を交えてお話しします。
						</p>
					</dd>
				</div>
				<div class="break">
					<dt>15:00</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>15:10</dt>
					<dd>
						<p class="sub"><em>スポンサーセッション プラチナスポンサー 株式会社ディーゼロ</em></p>
						<p class="title">
							<em>アクセシビリティをあたりまえに</em>
						</p>
						<p class="speaker sponsor"><em>吉田和生</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>15:20</dt>
					<dd>
						<p>休憩（30分）</p>
					</dd>
				</div>
				<div>
					<dt>15:50</dt>
					<dd id="session3">
						<p class="sub"><em>セッション3</em></p>
						<p class="title">
							<em>手話CG KIKIが繰り広げるインクルーシブ社会の実現</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-koyano">小谷野崇司</a></em></p>
						<p>
							NHKエンタープライズとNHKグローバルメディアサービスは、誰もが等しく情報を得られるインクルーシブな社会を目指し、手話が得意なデジタルヒューマン「KIKI」を開発しました。
							KIKIは、手話に関心のない人々の注目を集めることにも重点を置き、2025年に東京で開催されるデフリンピックの公式アンバサダーにも選ばれ、健常者とろう者の世界をつなぐシンボリックなキャラクターとして活躍しています。
							本講演ではKIKIの開発の経緯をや制作手法や活用法などKIKIを多角的に紹介します。
						</p>
					</dd>
				</div>
				<div class="break">
					<dt>16:30</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>16:35</dt>
					<dd>
						<p class="sub"><em>スポンサーセッション プラチナスポンサー LINEヤフー株式会社</em></p>
						<p class="title">
							<em>LINEギフトのアクセシビリティ〜ネクストアクション〜</em>
						</p>
						<p class="speaker sponsor"><em>富田 梓 / 慶島亜門</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>16:45</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>16:50</dt>
					<dd id="session4">
						<p class="sub"><em>セッション4</em></p>
						<p class="title">
							<em>選挙のアクセシビリティ</em>
						</p>
						<p class="speaker"><em><a href="/#speaker-noda">野田純生</a></em></p>
						<p>
							今年は東京都知事選、衆院選、アメリカ大統領選挙など選挙と選挙にまつわる話題に事欠かない1年でした。そんな中、SNSなどで選挙にまつわるいくつかの障害者の発言(不平等、困りごと)を目にしたことから今回のテーマを思いつきました。
							調査を進めていくと、色々な課題が見えてきました。
							投票のアクセシビリティ、選挙公報、政見放送、選挙報道のアクセシビリティといった観点から見えてきた問題について紹介します。
						</p>
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
					<dd>閉会式</dd>
				</div>
				<div class="break">
					<dt>18:00</dt>
					<dd>
						<p>懇親会準備</p>
					</dd>
				</div>
				<div>
					<dt>18:10</dt>
					<dd>懇親会</dd>
				</div>
				<div>
					<dt>19:45</dt>
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
		border-block-end: 1px solid var(--color-border-primary);
		border-inline-start: 1px solid var(--color-border-primary);
		border-block-end: none;
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

	.q::before {
		content: '｢';
		font-weight: normal;
	}

	.q::after {
		content: '｣';
		font-weight: normal;
	}

	.speaker {
		text-align: right;
		opacity: 0.8;
		font-size: 1.1em;
		margin-block-end: calc(1em / 1.1);
	}

	dd > p > strong {
		color: darkred;
		margin-block: 0.5em;
		display: block;
	}

	dd > strong span {
		display: inline-block;
		margin-inline-end: 0.5em;
	}
</style>

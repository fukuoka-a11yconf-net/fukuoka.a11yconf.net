<script>
	import Header from '$lib/2023/components/header.svelte';
	import Heading from '$lib/2023/components/heading.svelte';
	import Main from '$lib/2023/components/main.svelte';
	import Section from '$lib/2023/components/section.svelte';
	import TextBody from '$lib/2023/components/text-body.svelte';
</script>

<svelte:head>
	<title>タイムテーブル | アクセシビリティカンファレンス福岡2023</title>
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
							<em><span class="q">伝わる</span>を拡張するアクセシビリティ</em>
						</p>
						<p class="speaker"><em><a href="/2023/#speaker-majima">間嶋沙知</a></em></p>
						<p>
							アクセシビリティが気になっているけど、何をすればいいかわからなかったり、ハードルが高く感じられたりしていないでしょうか。アクセシビリティは情報やサービスをより多くの人に届けるための視点を与えてくれるものです。このセッションでは身近なデザインの具体例を交えながら、明日から取り組めるアクセシビリティのポイントをお伝えします。
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
							<em>ウェブアクセシビリティ社内教育のすゝめ</em>
							〜品質か、営業か〜
						</p>
						<p class="speaker">
							<em
								><a href="/2023/#speaker-shibata">柴田宏仙</a> ✕
								<a href="/2023/#speaker-ihara">伊原力也</a></em
							>
						</p>
						<p>
							社内のデザイナーやエンジニア向けにウェブアクセシビリティを教育していく際の課題点や、社内全体で取り組むための2大ルート「品質ルート」と「営業ルート」についてトークするセッション。自信を持って社内にウェブアクセシビリティを広める為のヒントをご紹介。
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
						<p class="sub"><em>スポンサーセッション プラチナスポンサー</em></p>
						<p class="title">
							<em>ヌーラボのウェブサイト課におけるアクセシビリティ関連の取組み</em>
						</p>
						<p class="speaker sponsor"><em>松永知典</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>15:30</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>15:40</dt>
					<dd>
						<p class="sub"><em>スポンサーセッション 会場提供スポンサー</em></p>
						<p class="title">
							<em>LINEヤフーにおけるこれからのアクセシビリティ</em>
						</p>
						<p class="speaker sponsor"><em>岡崎晶彦</em>･<em>富田梓</em></p>
					</dd>
				</div>
				<div class="break">
					<dt>16:00</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>16:10</dt>
					<dd id="session3">
						<p class="sub"><em>セッション3</em></p>
						<p class="title">
							<em><span class="q">違う人生を生きる人と一緒に働く</span>ということ</em>
						</p>
						<p class="speaker"><em><a href="/2023/#speaker-katayama">方山れいこ</a></em></p>
						<p>
							私が代表を務める株式会社方角は、2021年に設立した小さな会社です。ダイバーシティ・インクルージョン系の仕事が舞い込むことが多い弊社には現在10人のメンバーがおり、そのうちの7人が聴覚障害者・1人が盲ろう者です。
						</p>
						<p>
							本セッションでは2年前まで障害者と呼ばれる人たちと関わったことすらなかった私が、マネジメントについて、そして組織をどのように作っているかについてをご紹介します。
						</p>
						<p>
							人手不足の昨今ですが、「意識」さえ変えることができれば、どんな会社も受け入れる人の選択肢が増えるはずと信じています。ぜひ一緒に、これからの働き方について考えてみませんか。
						</p>
					</dd>
				</div>
				<div class="break">
					<dt>16:50</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>17:00</dt>
					<dd id="session4">
						<p class="sub"><em>セッション4</em></p>
						<p class="title">
							<em>デジタル庁でのアクセシビリティへの取り組み</em>
							―<span class="q">誰一人取り残されない、人にやさしいデジタル化を</span>の実現に向けて―
						</p>
						<p class="speaker"><em><a href="/2023/#speaker-ishiki">伊敷政英</a></em></p>
						<p>2023年9月、デジタル庁は発足から丸2年を迎え、3年目に突入しました。</p>
						<p>
							発足当初から我々は「誰一人取り残されない、人にやさしいデジタル化を」をミッションに掲げ、生活者視点、ユーザー視点でのサービスデザインによるアプリやサービスの開発を進めています。
						</p>
						<p>
							アクセシビリティチームでも、デジタル庁ウェブサイトやマイナポータルなど、デジタル庁所管のアプリやサービスのアクセシビリティ改善を行ってきました。
						</p>
						<p>
							本セッションでは、これまで私たちが行ってきたアクセシビリティ改善の取り組みをご紹介します。
						</p>
						<p>
							<strong
								><span role="img" aria-label="注意">&#x26a0;&#xfe0f;</span
								>YouTubeで生配信はされますが、アーカイブに残らないセッションです。</strong
							>
						</p>
					</dd>
				</div>
				<div class="break">
					<dt>17:40</dt>
					<dd>
						<p>転換・準備</p>
					</dd>
				</div>
				<div>
					<dt>17:50</dt>
					<dd>閉会式</dd>
				</div>
				<div class="break">
					<dt>18:00</dt>
					<dd>
						<p>懇親会準備</p>
					</dd>
				</div>
				<div>
					<dt>18:20</dt>
					<dd>懇親会</dd>
				</div>
				<div>
					<dt>20:00</dt>
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

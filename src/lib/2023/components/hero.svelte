<header>
	<div class="box">
		<div class="body">
			<div class="title">
				<h1>
					<img
						src="/2023/img/logo.svg"
						alt="アクセシビリティカンファレンス福岡"
						width="340"
						height="87"
					/>
				</h1>
				<p>2023年11月11日(土曜日)</p>
				<p>LY Communications + YouTube</p>
			</div>
			<hr />
			<div class="text">
				<p class="em"><em>ここにいる。</em></p>
				<p>
					<span
						>アクセシビリティにかぎった話ではありませんが、あらゆる活動は多くのエネルギーを必要とします。</span
					>
					<span
						>小さな地域での取り組みは、ときどき「仲間は近くにいるのだろうか」と不安が頭をよぎることがあります。</span
					>
					<span
						>しかし、確かに仲間は存在し、その取り組みは組織を超え、地域を超えて広がっています。</span
					>
					<span
						>本来は場所に縛られない活動ではあるのですが、その実感を得るために、今回あえて福岡での開催を選びました。</span
					>
				</p>
				<p>
					<span
						>「わたしたちは、ここにいて、そして安心して取り組めるんだ」と、このイベントを通して証明します。</span
					>
				</p>
				<div class="end">
					<p>イベントは終了しました。多くのご参加ありがとうございました。</p>
				</div>
				<div class="archive">
					<a
						href="https://www.youtube.com/playlist?list=PLw4pRH4ilpwzq1V5CvGWeCOMaJkD6emAN"
						target="_blank">配信アーカイブ</a
					>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		background-color: var(--color-bg-base);
		padding: 2rem;
		background: url('/2023/img/bg-pattern.png') repeat;
		background-size: 8rem;
	}

	.box {
		background: var(--color-bg-base);
		border-radius: 3rem;
	}

	.body {
		display: grid;
		grid-template-columns: 1fr 1px 1fr;
		gap: 4rem;
		max-width: 120rem;
		padding-block: 8rem;
		padding-inline: 4rem;
		margin-inline: auto;
	}

	@media (max-width: 80rem) {
		header {
			padding: 5vw;
		}

		.body {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1px auto;
			padding-block: 10vw;
			padding-inline: 10vw;
			gap: 10vw;
		}
	}

	.title {
		flex: 0 0 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		line-height: 1;
		container: hero-header / inline-size;
	}

	h1 {
		align-self: stretch;
		margin: 0;
	}

	h1 img {
		display: block;
		width: 100%;
		height: auto;
	}

	.title p {
		margin: 0;
		font-size: 4rem;
		font-weight: bold;
	}

	@container hero-header (min-width: 0px) {
		.title p {
			font-size: 7.3cqw;
			font-family: var(--font-family-condensed);
		}
	}

	hr {
		flex: 0 0 1px;
		border: none;
		background-color: var(--color-border-primary);
		width: 1px;
		height: 100%;
		align-self: stretch;
		margin: 0;
	}

	.text {
		flex: 0 0 auto;
		container: hero-text / inline-size;
	}

	.text .em {
		line-height: inherit;
		font-size: 4rem;
		font-weight: 600;
		opacity: 0.9;
		margin-block: 0 2rem;
		line-height: 1;
	}

	@container hero-text (min-width: 0px) {
		.text .em {
			font-size: max(2rem, 12cqw);
		}
	}

	.text .em em {
		font-style: normal;
	}

	.text p {
		margin-block: 1rem;
		font-size: 1.5rem;
		line-height: 1.8;
	}

	@media (max-width: 40rem) {
		.text p {
			font-size: 1rem;
		}
	}

	.end,
	.archive {
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-block: 2rem 0;
	}

	.end {
		font-size: 1.5rem;
		line-height: 1;
		padding-inline: 1em;
		background-color: var(--color-bg-base);
		border: 1px dashed var(--color-border-primary);
	}

	.archive a {
		display: block;
		padding-block: 1em;
		padding-inline: 1.5em;
		color: inherit;
		font-size: 1.5rem;
		line-height: 1;
		background-color: var(--color-bg-base);
		border: 3px solid var(--color-border-primary);
		border-radius: 10rem;
	}

	.archive a:link {
		text-decoration: underline dashed;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.4em;
		padding-block: 1em 1.25em;
	}

	@media (max-width: 40rem) {
		.archive a {
			font-size: 1rem;
		}
	}

	.archive a:link:hover {
		background-color: var(--color-link-hover-bg);
	}
</style>

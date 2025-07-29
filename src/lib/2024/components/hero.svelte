<header>
	<div class="box">
		<div class="body">
			<div class="title">
				<h1>
					<img
						src="/img/logo.svg"
						alt="アクセシビリティカンファレンス福岡"
						width="340"
						height="87"
					/>
				</h1>
				<p>2024年11月30日(土曜日)</p>
				<p>警固神社社務所ビル + YouTube</p>
			</div>
			<hr />
			<div class="text">
				<p class="em"><em>つぎはどうする</em></p>
				<p>
					<span
					>この一年で、わたしたちは仲間とともにアクセシビリティに向き合い、取り組み始めていることを確認できました。</span
					>
				</p>
				<p>
					<span>さて、そうしたら、つぎは周りを見渡すのではなく、前を見たくなります。</span>
					<span>取り組み始めた実感をもとに、もっと価値を、結果を、掴みに行きたくなります。</span>
				</p>
				<p>
					<span
					>今のままじゃいられない。どう動けばいいだろう、何をするべきだろう、どんな方法があるだろう。</span
					>
				</p>
				<p>
					<span
					>「つぎはどうする」という問いは、わたしたち全員にとっての挑戦です。福岡から、未来への橋をかけます。</span
					>
				</p>
				<div class="end">
					<p>イベントは終了しました。多くのご参加ありがとうございました。</p>
				</div>
				<div class="archive">
					<a
						href="https://www.youtube.com/playlist?list=PLw4pRH4ilpwy2E2ZA7rwk7u2SbVP0uwvh"
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

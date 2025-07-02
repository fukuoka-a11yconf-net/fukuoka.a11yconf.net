<script lang="ts">
	export let connpassURL: string;
</script>

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
				<p>2025年12月6日(土曜日)</p>
				<p>警固神社社務所ビル + YouTube</p>
			</div>
			<div class="text">
				<p class="em"><em>つながるせかい</em></p>
				<p>
					<span>3年目を迎えるアクセシビリティカンファレンス福岡。</span>
				</p>
				<p>
					<span
						>「ここにいる。」と声をあげ、「つぎはどうする」と自らに問いかけ、前を向いて動き出したわたしたち。</span
					>
					<span>今、分野や立場を越えてつながることで、より豊かな未来を描こうとしています。</span>
				</p>
				<p>
					<span
						>アクセシビリティは一人で担うものではなく、共に考え、動き続けることで広がっていくもの。</span
					>
				</p>
				<p>
					<span
						>様々な想いを持つ人々が出会い、学び合い、つながり、未来をつくる場に、という願いを込めて。</span
					>
					<span>今年も、あなたと「つながるせかい」でお待ちしています。</span>
				</p>
				<!--				<div class="apply">-->
				<!--					<a href={connpassURL} target="_blank">connpassで参加登録</a>-->
				<!--				</div>-->
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
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: 8rem;
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
			padding-block: 10vw;
			padding-inline: 10vw;
			gap: 10vw;
		}
	}

	.title {
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		line-height: 1;
		container: hero-header / inline-size;
		width: 100%;
		max-width: 80rem;
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
			font-size: 6cqw;
			font-family: var(--font-family-condensed);
		}
	}

	.text {
		justify-self: center;
		align-self: center;
		flex: 0 0 auto;
		container: hero-text / inline-size;
		width: 100%;
		max-width: 50rem;
	}

	.text .em {
		text-align: center;
		line-height: inherit;
		font-size: 4rem;
		font-weight: 600;
		opacity: 0.9;
		margin-block: 0 2rem;
		margin-inline-start: -0.4em;
		line-height: 1;
	}

	@container hero-text (min-width: 0px) {
		.text .em {
			font-size: max(2rem, 15cqw);
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

	@media (max-width: 40rem) {
		.apply a {
			font-size: 1rem;
		}
	}

	.apply a:hover {
		background-color: var(--color-link-hover-bg);
	}
</style>

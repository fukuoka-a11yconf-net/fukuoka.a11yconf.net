<div class="footer">
	<div class="logo">
		<a href="/">
			<img
				src="/img/logo-dark.svg"
				width="340"
				height="87"
				alt="アクセシビリティカンファレンス福岡"
				loading="lazy"
			/></a
		>
	</div>
	<div class="sns">
		<ul>
			<li>
				<a class="sns-x" href="https://x.com/FukuokaA11yconf" target="_blank"
					><img src="/img/icon-x.svg" width="24" height="24" alt="X" loading="lazy" /></a
				>
			</li>
			<li>
				<a
					class="sns-youtube"
					href="https://www.youtube.com/channel/UCWOjmrFPaaBowsur5VMHaew"
					target="_blank"
					><img
						class="inline-icon"
						src="/img/logo-sns-youtube.svg"
						width="492"
						height="110"
						alt="YouTube"
						loading="lazy"
					/></a
				>
			</li>
		</ul>
	</div>
	<div class="past">
		<ul>
			<li><a href="/2024">2024年</a></li>
			<li><a href="/2023">2023年</a></li>
		</ul>
	</div>
	<div class="copyright">
		<p>©︎2025 アクセシビリティカンファレンス福岡実行員会</p>
	</div>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-block: 4rem;
		padding-inline: 1rem;
		gap: 2rem;
		color: var(--color-font-deep);
		background-color: var(--color-bg-deep);
	}

	.logo img {
		display: block;
		max-width: 40rem;
		width: 100%;
	}

	.sns ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.sns li {
		display: flex;
		align-items: center;
	}

	.sns a {
		display: flex;
		align-items: center;
		color: inherit;
		text-decoration: none;
	}

	.sns img {
		display: block;
	}

	.sns-x {
		font-size: 2rem;
		font-family: Helvetica, Arial, sans-serif;
	}

	.sns-x img {
		--size: 2;
		display: inline-block;
		width: calc(1ex * var(--size));
		height: calc(1ex * var(--size));
		object-fit: contain;
	}

	.sns-youtube img {
		width: auto;
		height: 2rem;
	}

	.past ul {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 1rem;
	}

	.past li {
		display: block;
		margin: 0;
		padding: 0;
	}

	.past a {
		display: block;
		color: inherit;
	}

	.copyright {
		font-size: 0.8em;
	}

	.copyright p {
		margin: 0;
	}
</style>

<script lang="ts">
	export let isHome = false;
</script>

<nav>
	<ul>
		{#if isHome}<li><a href="/#summary">開催概要</a></li>{/if}
		<!--{#if isHome}<li><a href="/#speakers">登壇者</a></li>{/if}-->
		<!--{#if isHome}<li><a href="/#sponsors">スポンサー</a></li>{/if}-->
		{#if isHome}<li><a href="/#staff">運営スタッフ</a></li>{/if}
		{#if isHome}<li><a href="/#contact">お問い合わせ</a></li>{/if}
		{#if isHome}<li><a href="/#sponsors-looking">スポンサー募集</a></li>{/if}
		{#if !isHome}<li><a href="/">ホーム</a></li>{/if}
		<li><a href="/venue">会場・配信</a></li>
		<!--		<li><a href="/schedule">タイムテーブル</a></li>-->
		<!--		<li><a href="/sound-logo">サウンドロゴ</a></li>-->
		<li><a href="/coc">行動規範</a></li>
	</ul>
</nav>

<style>
	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 0;
		margin: 0;
		list-style: none;
		flex-wrap: wrap;
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
</style>

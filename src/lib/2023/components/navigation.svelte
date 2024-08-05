<script lang="ts">
	export let isHome = false;
</script>

<nav>
	<ul>
		{#if isHome}<li><a href="/2023/#summary">開催概要</a></li>{/if}
		{#if isHome}<li><a href="/2023/#speakers">登壇者</a></li>{/if}
		{#if isHome}<li><a href="/2023/#sponsors">スポンサー</a></li>{/if}
		{#if isHome}<li><a href="/2023/#staff">運営スタッフ</a></li>{/if}
		{#if isHome}<li><a href="/2023/#contact">お問い合わせ</a></li>{/if}
		{#if !isHome}<li><a href="/2023/">ホーム</a></li>{/if}
		<li><a href="/2023/venue">会場・配信</a></li>
		<li><a href="/2023/schedule">タイムテーブル</a></li>
		<li><a href="/2023/coc">行動規範</a></li>
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

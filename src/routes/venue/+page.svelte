<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>会場と配信について | アクセシビリティカンファレンス福岡2023</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>会場と配信について</Heading>
		<Heading level={2}>開催場所</Heading>
		<TextBody>
			<p>
				<em><a href="https://linefukuoka.co.jp/ja/">LINE Fukuoka株式会社</a> カフェスペース</em>
			</p>
			<p>
				〒812-0012 福岡県福岡市博多区博多駅中央街8-1 JRJP博多ビル12F (<a
					href="https://www.google.co.jp/maps/place/LINE+Fukuoka%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/@33.5881766,130.4167989,17z/data=!3m1!4b1!4m5!3m4!1s0x354191b85a54de59:0x8dd36b398d44a197!8m2!3d33.5881766!4d130.4189876?hl=ja"
					>Google Maps</a
				>)
			</p>
			<ul>
				<li>博多駅から徒歩5分</li>
				<li>地下通路「西23番出口」から徒歩1分</li>
			</ul>
			<p>
				JR博多駅のビル（<a href="https://www.jrhakatacity.com">JR博多シティ</a
				>）の地下通路もしくは2階デッキから、<a href="https://hakata.jp-kitte.jp/">KITTE博多</a
				>を経由して直通です。
			</p>
			<p>
				JRJP博多ビル内のエレベータは4基あります。地下1階にあるエレベータは12階へ行きませんので、1階のエレベータをご利用ください。
			</p>
			<p>
				ビル内通路に視覚障害者誘導用ブロック、エレベータに点字案内はありません。必要な方は係員を向かわせますので大変お手数ですが、参加登録の際にその旨の情報記載をお願い致します。
			</p>
			<p>当日はビル内1階で誘導員を数名配置する予定です。</p>
		</TextBody>
		<Heading level={2}>施設情報</Heading>
		<Heading level={3}>会場地図</Heading>
		<TextBody>
			<p>準備中です。しばらくお待ち下さい。</p>
		</TextBody>
		<Heading level={3}>お手洗い</Heading>
		<TextBody>
			<p>12階フロア内に男性用・女性用トイレがあります。</p>
			<p>
				多目的・バリアフリーのトイレは「だれでもトイレ」として女性用トイレと非常エレベータホールの間にあります。
			</p>
		</TextBody>
		<Heading level={3}>喫煙所</Heading>
		<TextBody>
			<p>館内禁煙となります。</p>
		</TextBody>
		<Heading level={2}>ライブ配信</Heading>
		<TextBody>
			<p>
				YouTube<a href="https://www.youtube.com/channel/UCWOjmrFPaaBowsur5VMHaew"
					>アクセシビリティカンファレンス福岡チャンネル</a
				>から以下の2つの配信を行います。
			</p>
			<ul>
				<li>通常版</li>
				<li>情報保障版</li>
			</ul>
			<p>
				アーカイブは予定していますが、なんらかのトラブルにより収録が失敗する場合があり、保証はできませんのでご了承ください。
			</p>
		</TextBody>
		<Heading level={3}>情報保障版とは</Heading>
		<TextBody>
			<p>通常版の映像に、以下の情報および映像を加えたものを配信します。</p>
			<ul>
				<li>ライブ字幕（<a href="https://udtalk.jp">UDトーク</a>）</li>
				<li>手話通訳</li>
			</ul>
			<p>
				字幕・手話映像が画面を大きく占めるため、セッションのスライドや映像が通常版よりも小さく表示されることになります。予めご了承ください。
			</p>
		</TextBody>
	</Section>
</Main>

<style>
	em {
		font-weight: bold;
		font-style: normal;
		font-size: 1.4em;
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

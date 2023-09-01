<script>
	import Header from '$lib/components/header.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Main from '$lib/components/main.svelte';
	import Section from '$lib/components/section.svelte';
	import TextBody from '$lib/components/text-body.svelte';
</script>

<svelte:head>
	<title>行動規範 | アクセシビリティカンファレンス福岡2023</title>
</svelte:head>

<Header />

<Main>
	<Section width="narrow">
		<Heading level={1}>行動規範</Heading>
		<TextBody>
			<p>
				すべての人が安心して参加できるイベントにするために、参加する方々にこの行動規範に従うことを求めます。
			</p>
		</TextBody>
		<Heading level={2}>尊重の精神</Heading>
		<TextBody>
			<p>
				すべての参加者は、他者の考えや意見、背景やアイデンティティを認識し、理解し、尊重することを心がけてください。私たちは多様な価値観や経験を持つ人々から成るコミュニティであり、その多様性は私たちの強みとして尊ばれるべきです。相違や違いを把握し、他者を尊重することで、より協力的で包括的な環境を築くことができます。
			</p>
		</TextBody>
		<Heading level={2}>禁止事項</Heading>
		<TextBody>
			<p>
				すべての参加者が不愉快な思いをせず気持ちよくイベントを楽しむために、以下の行為・言動・行動を禁止します。
			</p>
			<ul>
				<li>犯罪や迷惑行為</li>
				<li>暴力や誹謗中傷</li>
				<li>セッション・配信の妨害またはそれに相当する行為</li>
				<li>差別またはそれを助長する発言・行動</li>
				<li>ハラスメントや嫌がらせ</li>
				<li>アウティングや他者の情報を勝手に開示する行為</li>
				<li>著作権や肖像権の侵害</li>
				<li>宗教の勧誘</li>
				<li>行き過ぎた商談</li>
				<li>行き過ぎたリクルーティング</li>
			</ul>
			<p>
				特に、差別やハラスメントについては「相手がどう受け取るか」という点が非常に重要です。その意図がなくても相手によってはハラスメントと受け取ることがあります。もしそういったハラスメントをしてしまう不安があったり、判断に迷ったりした場合は発言や行動を控えてください。
			</p>
			<p>
				YouTubeのコメントやSNSでのハッシュタグでの投稿において、登壇者に向けた以下のような発言も控えてください。
			</p>
			<ul>
				<li>セッションの内容に関係のない容姿や属性、特徴、人格などに関する感想</li>
				<li>登壇者よりも先にセッションの内容・詳細について言及すること（いわゆるネタバレなど）</li>
			</ul>
			<p>たとえば容姿への言及や感想はセクシャルハラスメントと捉えるケースがありえます。</p>
			<p>また、次のような行為は本カンファレンスの趣旨に反するのでお控えください。</p>
			<ul>
				<li>アクセシビリティに取り組めていない組織や企業を吊るし上げる行為</li>
				<li>アクセシビリティに取り組めていない人を否定する行為</li>
				<li>アクセシビリティの知識を持たない人を否定する行為</li>
			</ul>
			<p>
				参加者はアクセシビリティを学ぶために、または現状の取り組みに新しい考えや方法を持ち込むために参加しています。ここからスタートする方々がいることをご理解ください。
			</p>
			<strong>
				<p>
					本カンファレンス主催者は、これら禁止事項を行う参加者に対して注意や警告を行います。警告に従わず繰り返す場合や、悪質なものに関しては、会場からの退場の指示を主催者の裁量で行います。YouTubeのコメントに関しても非表示などの処置をとります。
				</p>
			</strong>
		</TextBody>
		<Heading level={2}>報告窓口</Heading>
		<TextBody>
			<p>
				行動規範の禁止事項に該当する行為を受けたり、目撃したりした場合、次のいずれかの手段でご連絡ください。
			</p>
			<ul>
				<li>近くの<a href="/#staff">運営スタッフ</a>もしくはボランティアスタッフに声をかける</li>
				<li>
					SNSで<a href="/#staff">運営スタッフ</a>にメンションもしくはダイレクトメッセージを送る
				</li>
				<li>
					<a href="mailto:fukuokaa11yconf@googlegroups.com">fukuokaa11yconf@googlegroups.com</a
					>にメールを送る
				</li>
			</ul>
			<p>
				後から気づいたり、思い出したりした場合にもご連絡ください。登壇者、会場、スポンサーを含むイベントに関係したすべての方を守るためにもトラブルを放置したままにせず適切な対応を行います。閉会後も1週間はご連絡を受け付けます。
			</p>
		</TextBody>
	</Section>
</Main>

<style>
	a {
		color: inherit;
		text-decoration: underline dashed;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 1px;
		word-break: break-all;
	}

	a:link:hover {
		background-color: var(--color-link-hover-bg);
	}
</style>

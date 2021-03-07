<script>
</script>

<main class="home__content">
	<aside>//Side Bar</aside>
	<article>
		// Content Heading
		<section>// Content Area</section>
	</article>
</main>

<style>
	main {
		display: flex;
		text-align: center;
		justify-content: center;
		max-inline-size: 1440px;
		margin: auto;
		line-height: 19px;
		height: 100vh;
	}

	aside {
		width: 459px;
		float: left;
		background-color: #1e213a;
	}

	article {
		width: 981px;
		float: left;
		background-color: #100e1d;
	}

	@media screen and (max-width: 1024px) {
		.home__content {
			flex-direction: column;
		}

		aside {
			height: 810px;
			width: 100%;
		}

		article {
			height: 100%;
			width: 100%;
		}
	}
</style>

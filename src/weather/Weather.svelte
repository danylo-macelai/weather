<script>
	import { SideBar } from "./";
</script>

<main class="home__content">
	<SideBar />
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

	article {
		width: 981px;
		float: left;
		background-color: #100e1d;
	}

	@media screen and (max-width: 1024px) {
		.home__content {
			flex-direction: column;
		}

		article {
			height: 100%;
			width: 100%;
		}
	}
</style>

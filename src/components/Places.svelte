<script>
	import { createEventDispatcher } from "svelte";
	import { state, findPlaceByWoeid, getPlace } from "../store";

	const { place, places } = state;
	const dispatch = createEventDispatcher();
	let box, progress;

	const findByWoeid = async (place) => {
		await findPlaceByWoeid(place);
		dispatch("onToggleSidebar");
	};

	const scrollBox = () => {
		progress = Math.trunc(
			(box.scrollTop / (box.scrollHeight - box.offsetHeight)) * 100
		);
	};
</script>

<div class="places" bind:this={box} on:scroll={scrollBox}>
	<div class="progressBar" style="--progress-bar: {progress}%" />
	<div />
	<ul>
		{#each $places as item}
			<li
				style="--border-color: {item.woeid === $place.woeid
					? '#616475'
					: 'transparent'}"
				on:click={() => findByWoeid(item)}
			>
				<span>{item.title}</span>
				<span class="material-icons"> keyboard_arrow_right </span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.places {
		overflow: auto !important;
		scrollbar-width: none;
	}

	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	.places div {
		position: absolute;
		top: 0;
		right: 0;
		width: 6px;
		height: 100%;
		background: rgba(255, 255, 255, 0.05);
	}

	.progressBar {
		background: -webkit-linear-gradient(
			to top,
			#0052d4,
			#4364f7,
			#6fb1fc
		) !important;
		background: linear-gradient(
			to top,
			#0052d4,
			#4364f7,
			#6fb1fc
		) !important;
		opacity: var(--progress-bar) !important;
		height: var(--progress-bar) !important;
	}

	.places ul {
		padding: 0;
		margin: 60px 0;
	}

	.places ul span {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
	}

	.places ul li {
		display: flex;
		width: 367px;
		height: 64px;
		align-items: center;
		justify-content: space-between;
		padding: 0 12px;
		margin: 30px 0;
		box-sizing: border-box;
		border: 1px solid var(--border-color);
		list-style-type: none;
	}

	.places ul li:hover {
		border-color: #616475;
	}

	.places ul li span {
		font-family: Raleway;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #e7e7eb;
	}

	.places ul .material-icons {
		font-family: "Material Icons" !important;
		color: var(--border-color);
	}

	.places ul li:hover .material-icons {
		color: #e7e7eb;
	}

	@media screen and (max-width: 1024px) {
		.places ul {
			margin: 40px 0;
		}

		.places ul li {
			margin: 20px 0;
		}
	}
</style>

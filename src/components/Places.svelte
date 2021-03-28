<script>
	import { createEventDispatcher } from "svelte";
	import { state, findPlaceByWoeid, getPlace } from "../store";

	const { place, places } = state;
	const dispatch = createEventDispatcher();

	const findByWoeid = async (place) => {
		await findPlaceByWoeid(place);
		dispatch("onToggleSidebar");
	};
</script>

<ul class="places">
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

<style>
	.places {
		padding: 0;
	}

	.places span {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
	}

	.places li {
		display: flex;
		width: 367px;
		height: 64px;
		align-items: center;
		justify-content: space-between;
		padding: 0 12px;
		margin: 16px 0;
		box-sizing: border-box;
		border: 1px solid var(--border-color);
		list-style-type: none;
	}

	.places li:hover {
		border-color: #616475;
	}

	.places li span {
		font-family: Raleway;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		color: #e7e7eb;
	}

	.places .material-icons {
		font-family: "Material Icons" !important;
		color: var(--border-color);
	}
	
	.places li:hover .material-icons {
		color: #e7e7eb;
	}
</style>

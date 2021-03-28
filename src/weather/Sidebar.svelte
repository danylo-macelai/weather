<script>
	import { Query, Places } from "../components";

	export let open = false;

	const toggle = () => (open = !open);
</script>

<aside class:open>
	<div class="buttons">
		<button class:open on:click={toggle}>
			<span class="material-icons"> close </span>
		</button>
	</div>
	<Query />
	<Places on:onToggleSidebar={toggle} />
</aside>

<style>
	.buttons {
		justify-content: end;
	}

	.buttons button {
		background-color: transparent;
		box-shadow: none;
		padding: 10px 0 0 0;
	}

	.buttons .material-icons {
		font-size: 36px;
	}

	@media screen and (max-width: 1024px) {
		.buttons {
			margin: 18px 0;
		}
		.buttons button {
			margin: 0 11px;
		}
	}

	aside {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 459px;
		position: absolute;
		background-color: #1e213a;
		left: -100%;
		transition: left 0.2s ease-in-out;
		height: 100%;
	}

	.open {
		left: 0;
	}

	@media screen and (max-width: 1024px) {
		aside {
			height: 720px;
			width: 100%;
		}

		aside::after {
			top: 58px;
			background-size: cover;
			height: 308px;
		}
	}
</style>

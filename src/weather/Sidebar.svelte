<script>
	export let open = false;
</script>

<aside class:open>
	<div class="buttons">
		<button class:open on:click={() => (open = !open)}>
			<span class="material-icons"> close </span>
		</button>
	</div>
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

	.material-icons {
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

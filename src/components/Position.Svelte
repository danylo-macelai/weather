<script>
    import { state, getCurrentPosition } from "../store";

    const { position } = state;
</script>

<button
    class="position"
    disabled={$position.disabled}
    on:click={() => getCurrentPosition($position)}
    title={`latitude: ${$position.coords.latitude}, longitude: ${$position.coords.longitude}`}
>
    <span class="material-icons"> my_location </span>
</button>

<style>
    .position {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .material-icons {
        font-size: 22px;
    }

    @media screen and (max-width: 1024px) {
        .position {
            margin: 0 11px;
        }
    }
</style>

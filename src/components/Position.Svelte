<script>
    import { state, displayPositionInfo } from "../store";

    const { position } = state;
</script>

<button
    class="position"
    on:click={displayPositionInfo}
    title={`latitude: ${$position.latitude}, longitude: ${$position.longitude}`}
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

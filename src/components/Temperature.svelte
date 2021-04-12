<script>
    import { state } from "../store";

    const { measurement } = state;

    export let temperature;
    export let size = "big";

    $: temp = Math.round(
        $measurement === "F" ? (temperature * 9) / 5 + 32 : temperature
    );
</script>

<p class="temperature-{size}">
    {temp}<span class="measurement-{size}">°{$measurement}</span>
</p>

<style>
    .temperature-small,
    .measurement-small {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #e7e7eb;
    }

    .temperature-big {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 144px;
        line-height: 84px;
        color: #e7e7eb;
        margin: 4vmin 0 2vmin 0;
    }

    .measurement-big {
        font-weight: 100;
        font-size: 48px;
    }

    @media screen and (max-width: 1024px) {
        .temperature-big {
            margin: 16vmin 0 4vmin 0;
        }
    }
</style>

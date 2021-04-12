<script>
    export let temperature;
    export let measurement;

    $: temp = Math.round(measurement === "F" ? (temperature  * 9) / 5 + 32 : temperature);
</script>

<p class="temperature">
    {temp}<span class="measurement">°{measurement}</span>
</p>

<style>
    .temperature {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 144px;
        line-height: 84px;
        color: #e7e7eb;
        margin: 4vmin 0 2vmin 0;
    }

    .measurement {
        font-weight: 100;
        font-size: 48px;
    }

    @media screen and (max-width: 1024px) {
        .temperature {
            margin: 16vmin 0 4vmin 0;
        }
    }
</style>

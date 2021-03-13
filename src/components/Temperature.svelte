<script>
    export let temperature;
    export let measurement = "°C";

    $: temp = Math.round(temperature);
</script>

<p class="temperature">
    {temp}<span class="measurement">{measurement}</span>
</p>

<style>
    .temperature {
        position: absolute;
        top: 330px;
        font-style: normal;
        font-weight: 500;
        font-size: 144px;
        line-height: 169px;
        color: #e7e7eb;
        word-spacing: -20px;
    }
    .measurement {
        font-weight: 100;
        font-size: 48px;
    }
</style>

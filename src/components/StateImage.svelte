<script>
    export let image;
</script>

<img
    src={`assets/images/${image}.png`}
    alt="One or two letter abbreviation of the weather state"
    class="state"
/>

<style>
    .state {
        margin: 10vmin 0;
        width: 156px;
        height: 186px;
    }

    @media screen and (max-width: 1024px) {
        .state {
            width: 120px;
            height: 142px;
            margin: 20vmin 0 10vmin 0;
        }
    }
</style>

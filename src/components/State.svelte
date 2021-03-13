<script>
    export let image;
</script>

<img
    src={`../assets/images/${image}.png`}
    alt="One or two letter abbreviation of the weather state"
    class="state"
/>

<style>
    .state {
        position: absolute;
        width: 136px;
        height: 162px;
        top: 190px;
        padding: 8%;
    }

    @media screen and (max-width: 1024px) {
        .state {
            width: 104px;
            height: 124px;
            top: 134px;
        }
    }
</style>

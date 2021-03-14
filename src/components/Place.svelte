<script>
    export let place;
</script>

<div class="place">
    <span class="material-icons"> place </span>
    {place.title}
</div>

<style>
    .place {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #88869d;
    }

    
    @media screen and (max-width: 1024px) {
        .place {
            margin: 0 0 12vmin 0;
        }
    }
</style>

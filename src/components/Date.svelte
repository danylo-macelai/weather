<script>
    import moment from "moment";

    export let text = "";
    export let date;
    export let size = "big";
</script>

<div class="date date-{size}">
    {#if text.length > 0}
        <span>{text}</span>
    {/if}
    {#if text.length > 0 && date != null}
        <span>-</span>
    {/if}
    {#if date != null}
        <span>{moment(date).format("ddd, D MMM")} </span>
    {/if}
</div>

<style>
    .date {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #88869d;
    }

    .date-big {
        margin: 2vmin 0;
    }

    @media screen and (max-width: 1024px) {
        .date-big {
            margin: 4vmin 0 2vmin 0;
        }
    }
</style>

<script>
    import moment from "moment";

    export let text = "";
    export let date;
</script>

<div class="date">
    <span>{text}</span>
    <span>-</span>
    <span>{moment(date).format("ddd, D MMM")} </span>
</div>

<style>
    .date {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #88869d;
        margin: 2vmin 0;
    }

    @media screen and (max-width: 1024px) {
        .date {
            margin: 4vmin 0 2vmin 0;
        }
    }
</style>

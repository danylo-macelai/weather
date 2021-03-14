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
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 785px;
    }
    .date span {
        padding: 0 8px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

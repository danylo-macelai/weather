<script>
    export let title;
    export let value;
    export let type;
    export let height = 177;
</script>

<div class="hightlight" style="--height: {height}px">
    <p class="title">{title}</p>
    <p class="value">
        {value}<span>{type}</span>
    </p>
    <div>
        <slot />
    </div>
</div>

<style>
    .hightlight {
        min-height: var(--height);
        background: #1e213a;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        width: calc(50% - 20px);
        margin: 20px 0;
    }

    .hightlight p {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #e7e7eb;
        margin: 0;
    }

    .hightlight .value {
        font-size: 64px;
        line-height: 75px;
        color: #e7e7eb;
    }

    .hightlight .value span {
        font-weight: 100;
        font-size: 48px;
        margin: 0 0 0 10px;
    }

    .hightlight div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        .hightlight {
            width: 100%;
        }
    }
</style>

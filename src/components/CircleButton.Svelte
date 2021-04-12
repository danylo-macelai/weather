<script>
    export let disabled = false;
    export let title;
    export let icon;
    export let spanClass = "material-icons";
</script>

<button class="circle" {disabled} on:click {title}>
    <span class={spanClass}> {icon} </span>
</button>

<style>
    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #585676;
        cursor: pointer;
    }

    .circle:disabled {
        background: #e7e7eb !important;
        cursor: not-allowed;
    }
    
    .circle:disabled .span-class {
        color: #110e3c !important;
    }

    .material-icons {
        font-size: 22px;
    }

    .span-class {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #e7e7eb;
    }

    @media screen and (max-width: 1024px) {
        .circle {
            margin: 0 11px;
        }
    }
</style>

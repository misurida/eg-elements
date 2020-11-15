<style lang="scss">
    $loaderSize: 22px;
    $loaderBorder: 2px;
    .eg-loader {
        position: relative;
        display: inline-block;
        width: $loaderSize;
        height: $loaderSize;
        overflow: hidden;
        transition: .2s;
        max-width: $loaderSize;
        &.hidden {
            max-width: 0;
        }
        .eg-loader-inside {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            border: $loaderBorder solid rgba(#fff, .2);
            border-radius: 50%;
            border-top: $loaderBorder solid var(--color-primary, #CCC);
            width: $loaderSize - (2 * $loaderBorder);
            height: $loaderSize - (2 * $loaderBorder);
            animation: spin 1s linear infinite;
        }
    }

    @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
</style>

<template>
    <div class="loader-container"><div class="loader"><div class="loader-inside"></div></div></div>
</template>

<script>
    export default {}
</script>
<style lang="scss">
    $loaderSize: 20px;
    $loaderBorder: 2px;
    $red: #9C2727;
    .loader {
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
        .loader-inside {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            border: $loaderBorder solid rgba(#fff,.2);
            border-radius: 50%;
            border-top: $loaderBorder solid $llgray;
            width: $loaderSize;
            height: $loaderSize;
            animation: spin 1s linear infinite;
        }
    }
    .loader-container {
        text-align: center;
        margin: 20px 0;
        .loader-inside {
            border: $loaderBorder solid rgba(#fff,.2);
            border-top: $loaderBorder solid $red;
        }
    }
    @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
</style>

<template>
    <div class="loader-container">
        <div class="loader">
            <div class="loader-inside"></div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
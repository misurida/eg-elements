<style lang="scss" scoped>
    .input-shelf {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .eg-input {
            margin-right: 10px;
            margin-bottom: 10px;
            min-width: 100px;
        }
    }
    .custom-item {
        display: flex;
        span {
            flex: 5;
        }
        .num {
            opacity: 0.5;
            margin-right: 5px;
            flex: 1;
        }
    }
</style>

<template>
    <div>
        <h1>Number input</h1>
        <div class="pres-bloc">
            <h3>Basic input</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf">
                <number-input suffix="$" flex v-model="value" plus-minus></number-input>
                <number-input class="primary" placeholder="Select a number..." v-model="value" plus-minus :decimals="2"></number-input>
                <number-input class="success" placeholder="Select a number..." v-model="value" plus-minus :decimals="3" strong-decimals></number-input>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: null,
            }
        }
    }
</script>

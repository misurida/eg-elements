<style>

</style>

<template>
    <div class="tag" :class="{cross, clickable}" :tabindex="clickable?1:-1" @click="hClick">
        <slot></slot>
        <div class="cross-icon" v-if="cross" @mousedown.stop @click="$emit('cross')"><eg-icon icon="cross" clickable></eg-icon></div>
    </div>
</template>

<script>
    export default {
        props: {
            cross: {type: Boolean, default: false},
            clickable: {type: Boolean, default: false},
        },
        methods: {
            hClick() {
                if(this.clickable) {
                    this.$emit('click');
                }
            }
        }
    }
</script>
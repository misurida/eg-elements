<style lang="scss">
    $tt: .15s; // transition time

    .tag {
        display: inline-block;
        position: relative;
        outline: none;
        transition: background $tt, border $tt;
        &.clickable {
            cursor: pointer;
        }
        &.cross {
            padding-right: 2.5em!important;
            .eg-icon {
                svg {
                    vertical-align: baseline;
                }
            }
        }
        .cross-icon {
            position: absolute;
            right: 5px;
            bottom: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
        }
    }
</style>

<template>
    <div class="tag" :class="{cross, clickable}" :tabindex="clickable?1:-1" @click="hClick" @keyup="hKeyup">
        <slot></slot>
        <div class="cross-icon" v-if="cross" @mousedown.stop @click="$emit('cross')">
            <eg-icon svg icon="scross" height="12" width="12" clickable></eg-icon>
        </div>
    </div>
</template>

<script>
    import EgIcon from './EgIcon'

    export default {
        components: { EgIcon },
        props: {
            cross: {type: Boolean, default: false},
            clickable: {type: Boolean, default: false},
        },
        methods: {
            hClick(e) {
                if(this.clickable) {
                    this.$emit('click', e);
                }
            },
            hKeyup(e) {
                if(e.key === "Escape") {
                    this.$emit('escape', e);
                }
            }
        }
    }
</script>
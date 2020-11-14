<style lang="scss">
    $tt: .15s; // transition time

    .floating-menu {
        transition: color $tt, border $tt, box-shadow $tt;
        user-select: none;
        overflow-y: auto;
        position: absolute;
        z-index: 50;
        &:not(.reverse) {
            margin-bottom: 1em;
        }
        &.reverse {
            margin-top: 1em;
        }
        ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }
        .items-group {
            width: 100%;
            height: 100%;
            background-color: #FFF;
            &:first-child {
                .group-title {
                    padding-top: 10px;
                }
            }
        }
        .item {
            display: block;
            color: inherit;
            cursor: pointer;
            position: relative;
            min-height: 2.715em;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 0;
                transition: width $tt;
            }
        }
    }
</style>

<template>
    <div class="floating-menu" :class="{reverse}" :id="id" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            id: {type: String, default: null},
            menu: {type: String, default: "b"},
            over: {type: Boolean, default: false},
        },
        data() {
            return {
                h: 0
            }
        },
        methods: {
            computeParentHeight() {
                if(this.$el && this.$el.offsetParent) {
                    this.h = this.$el.offsetParent.offsetHeight -1; // -1 select quick fix
                }
            }
        },
        computed: {
            style() {
                let m = this.menu;
                let o = "";
                let s = this.h;
                let b = -1;
                if(this.over) {
                    s = -1;
                }
                if(m.length > 0) {
                    if(m === "n") { o += 'display: none;' }
                    else if(m === "tl") { o += `bottom:${s}px; left:${b}px;` }
                    else if(m === "tr") { o += `bottom:${s}px; right:${b}px;` }
                    else if(m === "t") { o += `bottom:${s}px; left:${b}px; right:${b}px;` }
                    else if(m === "br") { o += `top:${s}px; right:${b}px;` }
                    else if(m === "b") { o += `top:${s}px; left:${b}px; right:${b}px;` }
                    else { o += `top:${s}px; left:${b}px;` }
                }

                return o;
            },
            reverse() {
                let m = this.menu;
                return m == "tl" || m == "tr" || m == "t";
            }
        },
        updated() {
            this.computeParentHeight();
        },
        mounted() {
            this.computeParentHeight();
        }
    }
</script>
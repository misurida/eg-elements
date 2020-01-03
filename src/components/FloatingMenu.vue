<style lang="scss">
    .floating-menu {
        position: absolute;
        z-index: 1;
    }
</style>

<template>
    <div class="floating-menu" :id="id" :style="style" @mousedown="hMouseDown">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: String, default: null },
            menu: { type: String, default: "b" },
            over: { type: Boolean, default: false },
            domlevel: { type: Boolean, default: false },
            preventClosing: { type: Boolean, default: false },
        },
        data() {
            return {
                h: 0
            }
        },
        methods: {
            hMouseDown(e) {
                console.log('no prop');
                if(!this.preventClosing) {
                    e.stopPropagation();
                }
            },
            computeParentHeight() {
                if(this.$el && this.$el.offsetParent) {
                    this.h = this.$el.offsetParent.offsetHeight;
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
                    if(m === "tl") { o += `bottom:${s}px; left:${b}px;` }
                    else if(m === "tr") { o += `bottom:${s}px; right:${b}px;` }
                    else if(m === "t") { o += `bottom:${s}px; left:${b}px; right:${b}px;` }
                    else if(m === "br") { o += `top:${s}px; right:${b}px;` }
                    else if(m === "b") { o += `top:${s}px; left:${b}px; right:${b}px;` }
                    else { o += `top:${s}px; left:${b}px;` }
                }

                return o;
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
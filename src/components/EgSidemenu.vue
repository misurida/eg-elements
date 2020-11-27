<style lang="scss">
    .eg-sidemenu-wrapper {
        .shadow-zone {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            background-color: var(--sidemenu-shadow-bg);
            cursor: pointer;
            transition: opacity .2s;
            z-index: -1;
        }
        .touch-zone {
            position: absolute;
            cursor: pointer;
        }
        &.left, &.right {
            .touch-zone {
                top: 0;
                bottom: 0;
                width: 10px;
            }
        }
        &.top, &.bottom{
            .touch-zone {
                right: 0;
                left: 0;
                height: 10px;
            }
        }
    }
    // panel when the threshold is met
    .eg-sidemenu-wrapper.under-threshold {
        height: 0;
        .eg-sidemenu {
            z-index: 2;
            position: fixed;
            width: inherit;
            background-color: var(--sidemenu-bg);
            transition: transform .2s;
        }
        .touch-zone {
            z-index: 1;
        }
        &.left {
            .eg-sidemenu {
                min-height: 100vh;
                left: 0;
                top: 0;
                bottom: 0;
                transform: translateX(-100%);
            }
            .touch-zone {
                right: 0;
                transform: translateX(100%);
            }
        }
        &.right {
            .eg-sidemenu {
                min-height: 100vh;
                right: 0;
                top: 0;
                bottom: 0;
                transform: translateX(100%);
            }
            .touch-zone {
                left: 0;
                transform: translateX(-100%);
            }
        }
        &.top {
            .eg-sidemenu {
                min-width: 100vw;
                left: 0;
                right: 0;
                top: 0;
                height: 200px;
                transform: translateY(-100%);
            }
            .touch-zone {
                bottom: 0;
                transform: translateY(100%);
            }
        }
        &.bottom {
            .eg-sidemenu {
                min-width: 100vw;
                left: 0;
                right: 0;
                bottom: 0;
                height: 200px;
                transform: translateY(100%);
            }
            .touch-zone {
                top: 0;
                transform: translateY(-100%);
            }
        }
        &.deployed {
            .shadow-zone {
                opacity: 1;
            }
            .eg-sidemenu {
                transform: translateX(0) translateY(0);
                overflow-y: auto;
                overflow-x: hidden;
            }
        }
    }
</style>

<template>
    <div class="eg-sidemenu-wrapper" :class="theClass">
        <div class="eg-sidemenu">
            <slot></slot>
            <div class="touch-zone" v-if="enableClickDeploy" @click="touchClick"></div>
        </div>
        <div class="shadow-zone" @click="hShadowClick"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {default: false},
            threshold: {default: Infinity},
            disabled: {type: Boolean, default: false},
            orientation: {type: String, default: 'left'},
            enableClickDeploy: {type: Boolean, default: true},
            opacityMax: {type: Number, default: 0.5}
        },
        data() {
            return {
                w: 0,
                theId: null
            }
        },
        methods: {
            hShadowClick() {
                this.$emit('input', false);
            },
            touchClick() {
                if(this.enableClickDeploy) {
                    this.$emit('input', !this.deployed);
                }
            },
            handleResize() {
                this.w = this.computeW();
            },
            computeW() { return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) },
            setZIndex(val, target) {
                let e = this.$el.querySelector(target);
                if(e) {
                    e.style.zIndex = val;
                }
            }
        },
        computed: {
            underThreshold() {
                let t = this.threshold;
                if(typeof t === "string") {
                    if(t === "tiny") t = 300;
                    else if(t === "mini") t = 480;
                    else if(t === "smaller") t = 540;
                    else if(t === "small") t = 720;
                    else if(t === "classic") t = 900;
                    else if(t === "medium") t = 1080;
                    else if(t === "long") t = 1200;
                    else if(t === "big") t = 1440;
                    else if(t === "bigger") t = 1600;
                    else if(t === "large") t = 1920;
                    else t = 1000;
                }
                return this.w <= t;
            },
            deployed() {
                return this.underThreshold ? this.value : 0;
            },
            theClass() {
                return {
                    deployed: this.deployed,
                    'under-threshold': this.underThreshold,
                    right: this.orientation === 'right',
                    left: this.orientation === 'left',
                    top: this.orientation === 'top',
                    bottom: this.orientation === 'bottom',
                };
            }
        },
        watch: {
            deployed(d) {
                if(this.underThreshold) {
                    if(d) {
                        this.setZIndex(2, '.shadow-zone');
                        this.setZIndex(3, '.eg-sidemenu');
                    }
                    else {
                        setTimeout(() => {
                            this.setZIndex(-1, '.shadow-zone');
                        }, 200);
                    }
                }
            }
        },
        mounted() {
            this.handleResize();
            this.theId = String.rand();
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize)
        }
    }
</script>
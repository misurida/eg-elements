<style lang="scss">
    .eg-modal-mask {
        position: fixed;
        z-index: 94;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);
        display: table;
        transition: opacity .3s ease;
        .eg-modal-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .eg-modal-container {
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            // modal sizes
            max-width: 96vw;
            min-width: 300px;
            &.modal-tiny { width: 300px; }
            &.modal-mini { width: 480px; }
            &.modal-smaller { width: 540px; }
            &.modal-small { width: 720px; }
            &.modal-classic { width: 900px; }
            &.modal-medium { width: 1080px; }
            &.modal-long { width: 1200px; }
            &.modal-big { width: 1440px; }
            &.modal-bigger { width: 1600px; }
            &.modal-large { width: 1920px; }
            &.modal-narrow { width: 25vw; }
            &.modal-basic { width: 33vw; }
            &.modal-regular { width: 50vw; }
            &.modal-wide { width: 75vw; }
        }

        .eg-modal-content {
            display: flex;
            flex-direction: column;
            max-height: 90vh;
            width: 100%;
            height: 100%;
            background-color: #FFF;
            transition: all .3s ease;
            position: relative;
            text-align: left;
        }
        .eg-modal-header {
            font-size: 1.5rem;
            display: inline-block;
            text-align: left;
            padding: 1rem;
            h2, h3, h4, h5, h6 {
                margin: 0;
                margin: 0;
            }
        }
        .eg-modal-body {
            flex: 1;
            padding: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .eg-modal-footer-wrapper {
            display: flex;
        }
        .eg-modal-side-footer {
            padding: 1rem;
        }
        .eg-modal-footer {
            flex: 1;
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
            align-content: center;
            & > div {
                display: flex;
                align-items: center;
            }
        }
        .exit-cross {
            position: absolute;
            top: 0; right: 0;
            cursor: pointer;
            padding: 5px;
            text-align: center;
            z-index: 1;
            svg {
                height: 20px;
                width: 20px;
            }
        }
    }
</style>

<template>
    <transition :name="animation">
        <div class="eg-modal-mask" v-show="!!value" tabindex="2" @keyup.esc="hClose" @keyup.enter="hValidate">
            <div class="eg-modal-wrapper" @click.self="handleModalWrapperClick">
                <div class="eg-modal-container" :class="modalClass">
                    <div class="eg-modal-content">
                        <div v-if="showCross" class="exit-cross" @click="hCrossClick"><eg-icon type="cross"></eg-icon></div>
                        <template v-if="!noHeader">
                            <div class="eg-modal-header" v-if="$slots.header">
                                <slot name="header"></slot>
                            </div>
                            <div class="eg-modal-header" v-else-if="title">
                                <h2>{{title}}</h2>
                            </div>
                        </template>
                        <div class="eg-modal-body" v-if="$slots.default || $slots.content || $slots.body" @keyup.esc.stop>
                            <slot v-if="$slots.default" name="default"></slot>
                            <slot v-else-if="$slots.body" name="body"></slot>
                            <slot v-else-if="$slots.content" name="content"></slot>
                        </div>
                        <div class="eg-modal-body" v-else @keyup.esc.stop>
                            <p class="content-p" v-if="content" v-html="content"></p>
                        </div>
                        <div class="eg-modal-footer-wrapper">
                            <div class="eg-modal-side-footer" v-if="!!$slots.leftFooter">
                                <slot name="leftFooter"></slot>
                            </div>
                            <div class="eg-modal-footer" v-if="!noFooter">
                                <slot name="footer"></slot>
                                <eg-button v-if="back || b" @click="hClose">{{ b ? "Back" : back }}</eg-button>
                                <eg-button v-if="validate || v" primary @click="hValidate">{{ v ? "Validate" : validate }}</eg-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import EgIcon from './EgIcon'
    import EgButton from './EgButton'

    export default {
        components: { EgIcon, EgButton },
        props: {
            value: {default:null},
            animation: {type: String, default: 'smooth'},

            // sizes
            size: {type: String, default: null},

            regular: {type: Boolean, default: false},
            basic: {type: Boolean, default: false},
            narrow: {type: Boolean, default: false},
            wide: {type: Boolean, default: false},

            tiny: {type: Boolean, default: false},
            mini: {type: Boolean, default: false},
            smaller: {type: Boolean, default: false},
            small: {type: Boolean, default: false},
            classic: {type: Boolean, default: false},
            medium: {type: Boolean, default: false},
            long: {type: Boolean, default: false},
            big: {type: Boolean, default: false},
            bigger: {type: Boolean, default: false},
            large: {type: Boolean, default: false},

            // content
            title: {type: String, default: null},
            content: {type: String, default: null},
            back: {default: null},
            validate: {default: null},
            b: {type: Boolean, default: false},
            v: {type: Boolean, default: false},

            // flips
            noCross: {type: Boolean, default: null},
            noFocus: {type: Boolean, default: false},
            noShadowClose: {type: Boolean, default: false}
        },
        methods: {
            hCrossClick() {
                this.$emit('crossClick');
                this.hClose();
            },
            handleModalWrapperClick() {
                if(!this.noShadowClose) {
                    this.hClose();
                }
            },
            hClose() {
                if(this.value !== null) {
                    this.$emit('input', !this.value)
                }
                this.$emit('close');
            },
            hValidate() {
                if(!this.noFocus) {
                    this.$emit('validate');
                }
                this.$emit('close');
            },
            focus() {
                if(this.value !== null && this.$el && this.$el.focus && !this.noFocus) {
                    this.$nextTick(() => {
                        this.$el.focus();
                    });
                }
            }
        },
        watch: {
            value: {
                immediate: true,
                handler() {
                    this.focus();
                }
            }
        },
        computed: {
            noHeader() { return !this.$slots.header && !this.title },
            noFooter() { return !this.$slots.footer && !this.back && !this.b && !this.validate && !this.v },
            showCross() {
                return !this.noCross || (this.noHeader)
            },
            modalClass() {
                return {
                    "modal-tiny": this.tiny || this.size === "tiny",
                    "modal-mini": this.mini || this.size === "mini",
                    "modal-smaller": this.smaller || this.size === "smaller",
                    "modal-small": this.small || this.size === "small",
                    "modal-classic": this.classic || this.size === "classic",
                    "modal-medium": this.medium || this.size === "medium",
                    "modal-long": this.long || this.size === "long",
                    "modal-big": this.big || this.size === "big",
                    "modal-bigger": this.bigger || this.size === "bigger",
                    "modal-large": this.large || this.size === "large",
                    "modal-narrow": this.narrow || this.size === "narrow",
                    "modal-wide": this.wide || this.size === "wide",
                    "modal-basic": this.basic || this.size === "basic",
                    "modal-regular": this.regular || this.size === "regular",
                }
            }
        },
        mounted() {
            this.focus();
        }
    }
</script>
<style lang="scss">
    // border to split the header and footer
    $shadowColor: rgba(0, 0, 0, .5);
    $bc: #fff;
    $bs: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    $innerBorder: none;
    $border: none;

    // sizes
    $defaultW: 70%; // width
    $defaultMW: 800px; // max-width
    $smallW: 60%;
    $smallMW: 580px;
    $mediumW: 65%;
    $mediumMW: 800px;
    $bigW: calc(100vw - 10em);
    $bigMW: 1300px;

    .modal-mask {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $shadowColor;
        display: table;
        transition: opacity .3s ease;
        .modal-wrapper {
            display: table-cell;
            vertical-align: middle;
            font-size: 1em;
            .modal-container {
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                width: $defaultW;
                max-width: $defaultMW;
                margin: 0 auto;
                .modal-content {
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    width: 100%;
                    height: 100%;
                    background-color: $bc;
                    border-radius: 2px;
                    border: $border;
                    box-shadow: $bs;
                    transition: all .3s ease;
                    position: relative;
                    text-align: left;
                }
                &.small {
                    width: $smallW;
                    max-width: $smallMW;
                }
                &.medium {
                    width: $mediumW;
                    max-width: $mediumMW;
                }
                &.big {
                    width: $bigW;
                    max-width:$bigMW;
                }
            }
        }
        // modal sizes responsiveness
        @media screen and (max-width: 450px) {
            .modal-wrapper {
                .modal-container {
                    max-height: 100vh;
                    .modal-content {
                        max-height: 100vh;
                    }
                    &.small,
                    &.medium {
                        width: 95%;
                        display: flex;
                        flex-direction: column;
                        .modal-body {
                            flex: 1;
                        }
                    }
                    &,
                    &.big-on-small,
                    &.medium,
                    &.big {
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        .modal-body {
                            flex: 1;
                        }
                    }
                }
            }
        }
        &.clear {
            .exit-cross {
                color: transparent;
            }
            .modal-header {
                border-color: transparent;
            }
            .modal-footer {
                border-color: transparent;
            }
            .modal-container {
                height: 100vh;
            }
        }
        p {
            margin: 0 0 10px 0;
        }
        .exit-cross {
            position: absolute;
            top: 0; right: 0;
            cursor: pointer;
            padding: 8px;
            text-align: center;
            z-index: 1;
            color: #adadad;
            svg {
                height: 20px;
                width: 20px;
                path {
                    stroke: #adadad;
                    fill: #adadad;
                }
            }
            &:hover {
                color: #000;
                svg {
                    path {
                        stroke: #000;
                    }
                }
            }
        }
    }
    .modal-header {
        font-size: 24px;
        display: inline-block;
        text-align: left;
        color: rgba(0,0,0,.9);
        padding: 15px 30px 0 30px;
        border-bottom: $innerBorder;
        @media all and (max-width: 960px) {
            padding: 15px 15px 0 15px;
        }
        h2 {
            margin-bottom: 0;
            font-size: 1.2em;
            padding: 0;
            @media all and (max-width: 960px) {
                font-size: 1em;
            }
        }
    }
    .modal-body {
        flex: 1;
        padding: 10px 30px;
        @media all and (max-width: 960px) {
            padding: 15px;
        }
        overflow: auto;
        &.nopad {
            padding-left: 0;
            padding-right: 0;
            overflow-x: hidden;
        }
        .content-p {
            margin: 0;
        }
    }
    .modal-footer {
        border-top: $innerBorder;
        padding: 10px 15px 10px;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        margin-top: 10px;
        .eg-button {
            margin: 0 0 0 5px;
        }
        & > div {
            display: flex;
        }
        &.no-header {
            margin-top: 0;
        }
    }

    // animations
    .fade-enter,
    .direct-enter,
    .smooth-enter {
        opacity: 0;
    }
    .direct-enter {
        opacity: 1;
    }
    .fade-leave-active,
    .direct-leave-active,
    .smooth-leave-active {
        opacity: 0;
    }
    .smooth-enter .modal-container .modal-content,
    .smooth-leave-active .modal-container .modal-content {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
</style>

<template>
    <transition :name="animation">
        <div class="modal-mask" v-show="value||value===null" tabindex="2" @keyup.esc="handleClose" @keyup.enter="handleValidate">
            <div class="modal-wrapper" @click.self="handleClose">
                <div class="modal-container" :class="{big,medium,small}">
                    <div class="modal-content">
                        <div v-if="!hideCross" class="exit-cross" @click="handleClose"><eg-icon type="cross"></eg-icon></div>
                        <template v-if="!noHeader">
                            <div class="modal-header" v-if="$slots.header">
                                <slot name="header"></slot>
                            </div>
                            <div class="modal-header" v-else-if="title">
                                <h2>{{title}}</h2>
                            </div>
                        </template>
                        <div class="modal-body" v-if="$slots.content || $slots.body" :class="{nopad:noPad}" @keyup.esc.stop>
                            <slot v-if="$slots.body" name="body"></slot>
                            <slot v-else-if="$slots.content" name="content"></slot>
                        </div>
                        <div class="modal-body" v-else-if="content" :class="{nopad:noPad}" @keyup.esc.stop>
                            <p class="content-p">{{content}}</p>
                        </div>
                        <div class="modal-footer" v-if="!noFooter" :class="{'no-header':noHeader}">
                            <slot name="footer"></slot>
                            <eg-btn v-if="back||b" @click="handleClose">{{b?backLab:back}}</eg-btn>
                            <eg-btn v-if="validate||v" pri @click="handleValidate">{{v?valLab:validate}}</eg-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            value: {default:null},
            animation: {type: String, default:'smooth'},

            // sizes
            big: {type:Boolean, default:false},
            medium: {type:Boolean, default:false},
            small: {type:Boolean, default:false},
            noPad: {type:Boolean, default:false},

            // content
            title: {type: String, default: null},
            content: {type: String, default: null},
            back: {type: String, default: null},
            b: {type: Boolean, default: false},
            validate: {type: String, default: null},
            v: {type: Boolean, default: false},
            valLab: {type: String, default: 'Validate'},
            backLab: {type: String, default: 'Back'},

            // uses a percentage width instead of a threshold
            hideCross: {type:Boolean, default:false},
        },
        methods: {
            handleClose() {
                this.value === null ? this.$emit('close') : this.$emit('input', !this.value);
            },
            handleValidate() {
                this.$emit('validate');
            }
        },
        watch: {
            value: {
                immediate: true,
                handler() {
                    this.$nextTick(() => {
                        if(this.value !== null && this.value && this.$el) {
                            this.$el.focus();
                        }
                    });
                }
            }
        },
        computed: {
            noHeader() { return !this.$slots.header && !this.title },
            noFooter() { return !this.$slots.footer && !this.back && !this.b && !this.validate && !this.v },
        },
        mounted() {
            if(this.value !== null && this.$el) {
                this.$el.focus();
            }
        }
    }
</script>
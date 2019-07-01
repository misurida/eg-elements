<style lang="scss">
    $arrowSize: 5px;
    .popover-wrapper {
        position: absolute;
        transition: bottom .2s;
        background: transparent;
        opacity: 1;
        z-index: 999;
        .popover-content {
            text-align: center;
            font-size: 0.8rem;
            line-height: 0.8rem;
            padding: 6px 12px;
            color: #222;
            border-radius: 3px;
            box-shadow: 0 0 3px 2px rgba(0,0,0,.05);
            background-color: #fff;
            border: 1px solid #ccc;
            position: relative;
            display: inline-block;
            z-index: 1;
            opacity: 1;
            &.no-pad {
                padding: 0;
            }
            .popover-arrow {
                content: "";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
                display: inline-block;
                border: $arrowSize solid rgba(255, 255, 255, 0);
            }
        }
        &.no-pad {
            padding: 0;
        }
        .popover-text {
            margin: 0;
            padding: 10px 12px;
        }
        .popover-footer {
            display: flex;
            padding: 2px;
            .eg-button {
                text-align: center;
                flex: 1;
                padding: 2px;
                font-size: 0.7rem;
                border-radius: 2px;
                justify-content: center;
                &:not(:last-child) {
                    margin-right: 2px;
                }
            }
        }
    }
</style>

<template>
    <div class="popover-wrapper" @click.stop v-show="value" :id="theId">
        <div class="popover-content" :class="{'no-pad':nopad}" :id="theId+'-content'">
            <span class="popover-arrow" :id="theId+'-arrow'"></span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            arrowDistFromBorder: { default: 12 },
            arrowSize: { default: 6 },
            panelDist: { default: 20 },
            bg: { default: "#fff" },
            nopad: { type: Boolean, default: false },

            // positioning
            display: { default: "hover" },
            d: { default: null },
            position: { default: "c" },
            p: { default: null },
            side: { default: "top" },
            s: { default: null },
            width: { default: null },
            w: { default: null },
            height: { default: null },
            h: { default: null },

            // structural
            value: { default: false }, // the show / hide boolean
            id: { default: null }, // randomly generated if not specified
            targetId: { default: null }, // to target to inject the content into. The parent by default
            triggerId: { default: null }, // The target whose click will trigger the popover. The parent by default
        },
        data() {
            return {
                el: null,
                content: null,
                wrapper: null,
                arrow: null,
                // computed values
                panelShift: null,
            }
        },
        methods: {
            randomId() {
                let randLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randInt = Math.floor(Math.random() * 999);
                return randLetter1 + (Date.now() * randInt) + randLetter2;
            },
            closePopover() {
                document.removeEventListener('click', this.closePopover);
                this.el.addEventListener('click', this.handleTargetClick);
                this.$emit('input', false);
            },
            handleTargetClick(e) {
                e.stopPropagation();
                document.addEventListener('click', this.closePopover);
                this.el.removeEventListener('click', this.handleTargetClick);
                this.$emit('input', !this.value);
            },
            computePosition() {
                // base values
                this.panelShift = '-'+ (this.wrapper.offsetHeight/2) +'px';

                // WRAPPER
                if(this.maxWidth) this.wrapper.style.width = this.maxWidth;
                if(this.maxHeight) this.wrapper.style.height = this.maxHeight;
                if(this.theSide == "b" || this.theSide == "bottom" || this.theSide == "t" || this.theSide == "top") {
                    // side
                    if(this.theSide == "b" || this.theSide == "bottom") {
                        this.wrapper.style.top = (this.el.offsetHeight + this.panelDist) + 'px';
                    }
                    else {
                        this.wrapper.style.bottom = (this.el.offsetHeight + this.panelDist) + 'px';
                    }
                    // position
                    if(this.thePosition == 'r') {
                        this.wrapper.style.right = this.panelShift;
                    }
                    else if(this.thePosition == 'l') {
                        this.wrapper.style.left = this.panelShift;
                    }
                    else {
                        this.wrapper.style.left = '50%';
                        this.wrapper.style.transform = 'translateX(-50%)';
                    }
                }
                // left or right
                else if(this.theSide == "l" || this.theSide == "left" || this.theSide == "r" || this.theSide == "right") {
                    if(this.theSide == "r" || this.theSide == "right") {
                        this.wrapper.style.left = (this.el.offsetWidth + this.panelDist) + 'px';
                        this.wrapper.style.textAlign = "left";
                    }
                    else {
                        this.wrapper.style.right = (this.el.offsetWidth + this.panelDist) + 'px';
                        this.wrapper.style.textAlign = "right";
                    }
                    if(this.thePosition == 't') {
                        this.wrapper.style.top = this.panelShift;
                    }
                    else if(this.thePosition == 'b') {
                        this.wrapper.style.bottom = this.panelShift;
                    }
                    else {
                        this.wrapper.style.top = '50%';
                        this.wrapper.style.transform = 'translateY(-50%)';
                    }
                }

                // ARROW
                // top or bottom
                if(this.theSide == "b" || this.theSide == "bottom" || this.theSide == "t" || this.theSide == "top") {
                    // side
                    if(this.theSide == "b" || this.theSide == "bottom") {
                        this.arrow.style.bottom = '100%';
                        this.arrow.style.borderBottomColor = this.bg;
                    }
                    else {
                        this.arrow.style.top = '100%';
                        this.arrow.style.borderTopColor = this.bg;
                    }
                    // position
                    if(this.thePosition == 'r') this.arrow.style.right = this.arrowDistFromBorder+'px';
                    else if(this.thePosition == 'l') this.arrow.style.left = this.arrowDistFromBorder+'px';
                    else {
                        this.arrow.style.left = '50%';
                        this.arrow.style.marginLeft = "-"+this.arrowSize+'px';
                    }
                }
                // left or right
                else if(this.theSide == "l" || this.theSide == "left" || this.theSide == "r" || this.theSide == "right") {
                    // side
                    if(this.theSide == "r" || this.theSide == "right") {
                        this.arrow.style.right = '100%';
                        this.arrow.style.borderRightColor = this.bg;
                    }
                    else {
                        this.arrow.style.left = '100%';
                        this.arrow.style.borderLeftColor = this.bg;
                    }
                    // position
                    if(this.thePosition == 't') this.arrow.style.top = this.arrowDistFromBorder+'px';
                    else if(this.thePosition == 'b') this.arrow.style.bottom = this.arrowDistFromBorder+'px';
                    else {
                        this.arrow.style.top = '50%';
                        this.arrow.style.marginTop = "-"+this.arrowSize+'px';
                    }
                }

                // element style
                this.el.style.position = 'relative';
                this.el.style.opacity = '1';
            }
        },
        computed: {
            theId() { return this.id ? this.id : this.randomId(); },
            maxHeight() { return this.height ? this.height : this.h ? this.h : null; },
            maxWidth() { return this.width ? this.width : this.w ? this.w : null; },
            thePosition() { return this.position ? this.position : this.p ? this.p : "c"; },
            theSide() { return this.side ? this.side : this.s ? this.s : "top"; },
        },
        mounted() {
            this.$nextTick(() => {
                // we get the wrapper and the content
                this.wrapper = document.getElementById(this.theId);
                this.content = document.getElementById(this.theId+'-content');
                this.arrow = document.getElementById(this.theId+'-arrow');
                this.el = this.targetId ? document.getElementById(this.targetId) : this.$el.parentElement;
                if(this.el.style.position == "") this.$el.parentElement.style.position = "relative";

                this.computePosition();

                if(this.targetId && this.el) {
                    if(this.el.style.position == "") this.el.style.position = "relative";
                    this.el.appendChild(this.wrapper);
                }

                // we set the event listeners
                if(this.triggerId) {
                    let el = document.getElementById(this.triggerId);
                    if(el) el.addEventListener('click', this.handleTargetClick);
                }
                else {
                    this.el.addEventListener('click', this.handleTargetClick);
                }
            });
        },
        destroyed() {
            if(this.triggerId) {
                let el = document.getElementById(this.triggerId);
                if(el) el.addEventListener('click', this.handleTargetClick);
            }
            else if(this.el) {
                this.el.removeEventListener('click', this.handleTargetClick);
            }
        }
    }
</script>
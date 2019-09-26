<style lang="scss">
    .popover-wrapper {
        position: absolute;
        transition: bottom .2s;
        background: transparent;
        opacity: 1;
        z-index: 999;
        .popover-content {
            text-align: center;
            font-size: var(--popover-font-size);
            line-height: var(--popover-line-height);
            color: var(--popover-color);
            border-radius: 3px;
            box-shadow: var(--popover-shadow);
            background-color: var(--popover-bg);
            border: 1px solid #ccc;
            position: relative;
            display: inline-block;
            z-index: 1;
            opacity: 1;
            &.pad {
                padding: 6px 12px;
            }
            &.spad {
                padding: 5px;
            }
            .popover-arrow {
                content: "";
                height: 0;
                width: 0;
                position: absolute;
                pointer-events: none;
                display: inline-block;
                border: var(--popover-arrow-size) solid var(--popover-bg);
            }
            .popover-inner {
                overflow: auto;
                &::-webkit-scrollbar {
                    width: 3px;
                    height: 3px;
                }
                &::-webkit-scrollbar-track {
                    background: #f5f5f5;
                }
                &::-webkit-scrollbar-thumb {
                    background: #ccc;
                    cursor: pointer;
                }
            }
        }
        &.dom-level {
            .popover-content {
                //height: 100%;
                //width: 100%;
                .popover-inner {
                    //height: 100%;
                    //width: 100%;
                }
            }
        }
        &.vertical {
            .popover-content {
                display: block;
            }
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
    <div class="popover-wrapper" :class="{'dom-level':domLevel, horizontal, vertical}" @click.stop v-show="show" :id="theId">
        <div class="popover-content" :class="{pad, spad}" :id="theId+'-content'">
            <span class="popover-arrow" :id="theId+'-arrow'"></span>
            <div class="popover-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            arrowDistFromBorder: { default: 12 },
            arrowSize: { default: 6 },
            panelDist: { default: 10 },
            pad: { type: Boolean, default: false },
            spad: { type: Boolean, default: false },
            domLevel: { type: Boolean, default: false },
            domParentId: { type: String, default: "app" },

            // positioning
            // display: { default: "click" },
            // d: { default: null },
            //position: { default: "c" },
            //p: { default: null },
            side: { default: "top" },
            s: { default: null },
            width: { default: null },
            w: { default: null },
            //height: { default: null },
            //h: { default: null },

            // structural
            value: { default: null }, // the show / hide boolean
            id: { default: null }, // randomly generated if not specified
            targetId: { default: null }, // to target to inject the content into. The parent by default
            triggerId: { default: null }, // The target whose click will trigger the popover. The parent by default
            target: { default: null }, // both target and trigger shorthand
        },
        data() {
            return {
                show: false,
                el: null,
                content: null,
                wrapper: null,
                arrow: null,
                // computed values
                panelShift: null,

                // domLevel variables
                parentHeight: null,
                parentWidth: null,
                parentTop: null,
                parentLeft: null,
                scrollLength: 0
            }
        },
        methods: {
            // @scroll event listener to update the select menu position
            fetchPositionDataDelayed(e) {
                this.scrollLength = e.target.scrollTop;
                this.computePosition();
            },
            randomId() {
                let randLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randInt = Math.floor(Math.random() * 999);
                return randLetter1 + (Date.now() * randInt) + randLetter2;
            },
            closePopover() {
                if(this.el) {
                    document.removeEventListener('click', this.closePopover);
                    this.el.addEventListener('click', this.handleTargetClick);
                    this.value !== null ? this.$emit('input', false) : this.show = false;
                }
            },
            handleTargetClick(e) {
                e.stopPropagation();
                document.addEventListener('click', this.closePopover);
                this.el.removeEventListener('click', this.handleTargetClick);
                this.value !== null ? this.$emit('input', !this.show) : this.show = !this.show;
            },
            // get the element position on the DOM and set the positioning variables for the floating menu (domLevel)
            fetchPositionData() {
                let $el = this.el;
                if($el) {
                    this.parentHeight = $el.clientHeight;
                    this.parentWidth = $el.clientWidth;
                    let b = $el.getBoundingClientRect();
                    this.parentTop = b.y;
                    this.parentLeft = b.x;
                }
            },
            computePosition() {
                if(this.domLevel) {
                    this.fetchPositionData();
                }
                // base values
                this.panelShift = '-'+ (this.wrapper.offsetHeight/2) +'px';

                // WRAPPER
                if(this.maxWidth) this.wrapper.style.width = this.maxWidth;
                if(this.maxHeight) this.wrapper.style.height = this.maxHeight;
                if(this.theSide == "b" || this.theSide == "bottom" || this.theSide == "t" || this.theSide == "top") {
                    if(this.domLevel) {
                        // side
                        if(this.theSide == "b" || this.theSide == "bottom") {
                            let top = this.parentTop + this.parentHeight - this.scrollLength + this.panelDist;
                            this.wrapper.style.top = top + "px";
                        }
                        else {
                            let top = this.parentTop - parseInt(this.height) - this.scrollLength - this.panelDist;
                            this.wrapper.style.top = top + "px";
                        }
                        // position
                        let left = this.parentLeft;
                        if(this.thePosition == 'r') {
                            left -= parseInt(this.width) - this.parentWidth - this.panelDist/4;
                        }
                        else if(this.thePosition == 'c') {
                            left -= parseInt(this.width)/2 - this.parentWidth/2 - this.panelDist/4;
                        }
                        this.wrapper.style.left = left + "px";
                    }
                    else {
                        // side
                        if(this.theSide == "b" || this.theSide == "bottom") {
                            this.wrapper.style.top = (this.el.offsetHeight + this.panelDist) + 'px';
                        }
                        else {
                            this.wrapper.style.bottom = (this.el.offsetHeight + this.panelDist) + 'px';
                        }
                        // position
                        if(this.thePosition == 'r') {
                            this.wrapper.style.right = 0;
                        }
                        else if(this.thePosition == 'l') {
                            this.wrapper.style.left = 0;
                        }
                        else {
                            this.wrapper.style.left = '50%';
                            this.wrapper.style.transform = 'translateX(-50%)';
                        }
                    }
                }
                // left or right
                else if(this.theSide == "l" || this.theSide == "left" || this.theSide == "r" || this.theSide == "right") {
                    if(this.domLevel) {
                        // side
                        if(this.theSide == "r" || this.theSide == "right") {
                            let left = this.parentLeft + this.parentWidth + this.panelDist;
                            this.wrapper.style.left = left + "px";
                        }
                        else {
                            let left = this.parentLeft - parseInt(this.width) - this.panelDist;
                            this.wrapper.style.left = left + "px";
                        }
                        // position
                        let top = this.parentTop - this.scrollLength;
                        if(this.thePosition == 'b') {
                            top -= parseInt(this.height) - this.parentHeight - this.panelDist/4;
                        }
                        else if(this.thePosition == 'c') {
                            top -= parseInt(this.height)/2 - this.parentHeight/2 - this.panelDist/4;
                        }
                        this.wrapper.style.top = top + "px";
                    }
                    else {
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
                }

                // ARROW
                // top or bottom
                if(this.theSide == "b" || this.theSide == "bottom" || this.theSide == "t" || this.theSide == "top") {
                    // side
                    if(this.theSide == "b" || this.theSide == "bottom") {
                        this.arrow.style.bottom = '100%';
                        this.arrow.style.borderBottomColor = "var(--popover-bg)";
                    }
                    else {
                        this.arrow.style.top = '100%';
                        this.arrow.style.borderTopColor = "var(--popover-bg)";
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
                        this.arrow.style.borderRightColor = "var(--popover-bg)";
                    }
                    else {
                        this.arrow.style.left = '100%';
                        this.arrow.style.borderLeftColor = "var(--popover-bg)";
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
                this.el.style.opacity = '1';
            }
        },
        watch: {
            value: {
                immediate: true,
                handler() {
                    if(this.value !== null) {
                        this.show = this.value;
                        if(this.wrapper) {
                            this.computePosition();
                        }
                        else if(!this.value) {
                            this.$nextTick(() => {
                                let el = document.getElementById(this.theTargetId);
                                if(el) el.focus();
                            });
                        }
                    }
                }
            }
        },
        computed: {
            theId() { return this.id ? this.id : this.randomId(); },
            maxHeight() { return (this.height ? this.height : this.h ? this.h : null) + "px"; },
            maxWidth() { return (this.width ? this.width : this.w ? this.w : null) + "px"; },
            thePosition() { return this.position ? this.position : this.p ? this.p : "c"; },
            theSide() { return this.side ? this.side : this.s ? this.s : "top"; },
            theTriggerId() { return this.target ? this.target : this.triggerId },
            theTargetId() { return this.target ? this.target : this.targetId },
            horizontal() { return this.theSide === "left" || this.theSide === "right" },
            vertical() { return this.theSide === "top" || this.theSide === "bottom" },
        },
        mounted() {
            this.$nextTick(() => {
                // we get the wrapper and the content
                this.wrapper = document.getElementById(this.theId);
                this.content = document.getElementById(this.theId+'-content');
                this.arrow = document.getElementById(this.theId+'-arrow');
                this.el = this.theTargetId ? document.getElementById(this.theTargetId) : this.$el.parentElement;
                this.computePosition();

                if(this.theTargetId && this.el) {
                    if(this.el.style.position == "") this.el.style.position = "relative";
                    this.el.appendChild(this.wrapper);
                }

                // we set the event listeners
                if(this.theTriggerId) {
                    let el = document.getElementById(this.theTriggerId);
                    if(el) el.addEventListener('click', this.handleTargetClick);
                }
                else {
                    this.el.addEventListener('click', this.handleTargetClick);
                }

                if(this.domLevel) {
                    let el = this.$el;
                    if(el) {
                        this.computePosition();
                        let parent = document.getElementById(this.domParentId);
                        if(parent) {
                            this.fetchPositionData();
                            parent.style.position = "relative";
                            parent.prepend(el);
                            // scroll listening
                            let go = true;
                            let maxLevel = 99;
                            let level = 0;
                            let p = document.getElementById(this.theTargetId);
                            while(go && level < maxLevel) {
                                go = !(!p || p.localName === "body");
                                if(go) {
                                    p.addEventListener('scroll', this.fetchPositionDataDelayed);
                                    p = p.parentElement;
                                    level++;
                                }
                            }
                        }
                    }
                }
            });
        },
        destroyed() {
            if(this.theTriggerId) {
                let el = document.getElementById(this.theTriggerId);
                if(el) el.addEventListener('click', this.handleTargetClick);
            }
            else if(this.el) {
                this.el.removeEventListener('click', this.handleTargetClick);
            }
            if(this.domLevel) {
                let el = this.$el;
                if(el) {
                    let parent = document.getElementById(this.domParentId);
                    if(parent) {
                        let go = true;
                        let p = this.$el.parentElement;
                        while(go) {
                            go = !(!p || p.localName === "body");
                            if(go) {
                                p.removeEventListener('scroll', this.fetchPositionDataDelayed);
                                p = p.parentElement;
                            }
                        }
                    }
                    el.remove();
                }
            }
        }
    }
</script>
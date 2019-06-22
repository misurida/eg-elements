<style>
    .popover-wrapper {
        position: absolute;
        transition: bottom .2s;
    }
    .popover-wrapper .ft-button {
        margin: 3px 0;
    }
</style>

<template v-if="value">
    <div class="popover-wrapper" :id="localId">
        <div class="popover-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            args: {default(){return {}}}, // the other arguments, based on v-tooltip
            w: { default: null }, // the max width of the wrapper (default: 120)
            value: { default: false }, // the show / hide boolean
            id: { default: null }, // randomly generated if not specified
            hideOnContentClick: { type: Boolean, default: true},
            canOpen: { type: Boolean, default: true}, // to lock the opening
        },
        data() {
            return {
                localId: null,
                togglePopover: null,
                clickPopover: null,
                clickedContent: null,
                attachClickOnParent: null,
            }
        },
        methods: {
            randomId() {
                let randLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                let randInt = Math.floor(Math.random() * 999);
                return randLetter1 + (Date.now() * randInt) + randLetter2;
            }
        },
        mounted() {
            // quick style
            let bg = '#fff';
            let color = '#222';
            let fontSize = '0.8rem';
            let bs = "0 0 3px 2px rgba(0,0,0,.05)";
            let border = "1px solid #ccc";

            // base values
            let args = this.args;
            let text = "";
            let position = "m";
            let maxWidth = this.w ? this.w : 120;

            // we set the values based on the arguments
            if(typeof args === 'string') {
                text = args;
            }
            else {
                text = args.t ? args.t : text;
                text = args.c ? args.c : text;
                position = args.p ? args.p : position;
            }

            // we set the id
            let localId = this.id;
            if(!this.id) {
                this.localId = this.randomId();
                localId = this.localId;
            }
            else {
                this.localId = this.id;
            }

            // we get the parent and force the relative position
            let parent = this.$el.parentElement;
            let pp = parent.style.position;
            if(pp == "") parent.style.position = "relative";

            // we get the wrapper and the content
            let content = this.$el.querySelector('.popover-content');
            let wrapper = this.$el;
            wrapper.style.display = 'none';

            // compute thw style of the wrapper and the content based on the parent's properties
            function evaluatePosition() {
                // wrapper styling
                wrapper.style.width = maxWidth + 'px';
                wrapper.style.bottom = (parent.offsetHeight + 12) + 'px';
                if(position == 'm') {
                    wrapper.style.left = '50%';
                    wrapper.style.textAlign = "center";
                    wrapper.style.transform = 'translateX(-50%)';
                }
                else if(position == 'r') {
                    wrapper.style.right = '-7px';
                    wrapper.style.textAlign = "right";
                }
                else if(position == 'l') {
                    wrapper.style.left = '-7px';
                    wrapper.style.textAlign = "left";
                }
                wrapper.style.background = 'rgba(255,255,255,0)';
                wrapper.style.opacity = '1';
                wrapper.style.zIndex = '999';
                wrapper.style.position = 'absolute';

                // content styling
                content.style.fontSize = fontSize;
                content.style.lineHeight = fontSize;
                content.style.padding = '6px 12px'; // custom
                content.style.color = color; // custom
                content.style.borderRadius = '3px'; // custom
                content.style.boxShadow = bs; // custom
                content.style.backgroundColor = bg; // custom
                content.style.border = border; // custom
                content.style.position = 'relative';
                content.style.display = 'inline-block';
                content.style.zIndex = '1';
                content.style.opacity = '1';
            }
            evaluatePosition();

            // we create the arrow
            let arrowSize = "5px";
            let arrow = document.createElement('span');
            arrow.style.top = '100%';
            if(position == 'm') arrow.style.left = '50%';
            else if(position == 'r') arrow.style.right = "12px";
            else if(position == 'l') arrow.style.left = "12px";
            arrow.style.border = "solid transparent";
            arrow.style.content = " ";
            arrow.style.height = "0";
            arrow.style.width = "0";
            arrow.style.position = "absolute";
            arrow.style.pointerEvents = "none";
            arrow.style.borderColor = "rgba(255, 255, 255, 0)";
            arrow.style.borderTopColor = bg;
            arrow.style.display = 'inline-block';
            arrow.style.borderWidth = arrowSize;
            arrow.style.marginLeft = "-"+arrowSize;
            content.appendChild(arrow);

            // we set the event listeners
            let s = this;
            this.togglePopover = (e) => {
                if(this.value && (!e.path || (e.path && !this.clickPopover(e.path.splice(0,8))))) {
                    document.removeEventListener('click', this.togglePopover);
                    parent.addEventListener('click', this.attachClickOnParent);
                    s.$emit('input', false);
                }
            };
            this.clickPopover = (path) => {
                let test = false;
                if(!s.hideOnContentClick) {
                    path.forEach(p => {
                        if(p.id == localId) {
                            test = true;
                        }
                    });
                }
                return test;
            };
            this.clickedContent = (path) => {
                let test = false;
                path.forEach(p => {
                    if(p && p.classList && p.classList.contains('popover-content')) {
                        test = true;
                    }
                });
                return test;
            };
            this.attachClickOnParent = (e) => {
                if(s.canOpen && (e.path && !this.clickedContent(e.path.splice(0,8)))) {
                    e.stopPropagation();
                    wrapper.style.display = "inline-block";
                    if (!s.open) {
                        document.addEventListener('click', this.togglePopover);
                        parent.removeEventListener('click', this.attachClickOnParent);
                        s.$emit('input', true);
                        setTimeout(() => {
                            evaluatePosition();
                        }, 100);
                    }
                }
            };
            parent.addEventListener('click', this.attachClickOnParent);
        },
        destroyed() {
            let parent = this.$el.parentElement;
            if(parent) parent.removeEventListener('click', this.attachClickOnParent);
        }
    }
</script>
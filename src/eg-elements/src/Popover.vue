<style>
    .popover-wrapper {
        position: absolute;
        transition: bottom .2s;
    }
    .popover-wrapper .ft-button {
        margin: 3px 0;
    }
</style>

<template>
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
            hideOnContentClick: { type: Boolean, default: false},
            canOpen: { type: Boolean, default: true}, // to lock the opening
        },
        data() {
            return {
                localId: null
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
            let args = this.args;
            let text = "";
            let position = "c";
            if(typeof args === 'string') {
                text = args;
            }
            else {
                text = args.t ? args.t : text;
                text = args.c ? args.c : text;
                position = args.p ? args.p : position;
            }
            let maxWidth = this.w ? this.w : 120;

            let localId = this.id;
            if(!this.id) {
                this.localId = this.randomId();
                localId = this.localId;
            }
            else {
                this.localId = this.id;
            }

            let parent = this.$el.parentElement;
            let pp = parent.style.position;
            if(pp == "")
                parent.style.position = "relative";


            function evaluatePosition() {
                wrapper.style.width = maxWidth + 'px';
                wrapper.style.bottom = (parent.offsetHeight + 12) + 'px';
                if(position == 'c') {
                    wrapper.style.left = '50%';
                    wrapper.style.textAlign = "center";
                    wrapper.style.transform = 'translateX(-50%)';
                }
                else if(position == 'l') {
                    wrapper.style.right = '-7px';
                    wrapper.style.textAlign = "right";
                }
                else if(position == 'r') {
                    wrapper.style.left = '-7px';
                    wrapper.style.textAlign = "left";
                }
                wrapper.style.background = 'rgba(255,255,255,0)';
                wrapper.style.opacity = '1';
                wrapper.style.zIndex = '999';
                wrapper.style.position = 'absolute';

                content.style.position = 'relative';
                content.style.padding = '4px 8px';
                content.style.display = 'inline-block';
                content.style.borderRadius = '2px';
                content.style.fontSize = '14px';
                content.style.lineHeight = '14px';
                content.style.backgroundColor = '#fff';
                content.style.color = '#333333';
                content.style.zIndex = '1';
                content.style.opacity = '1';
                content.style.boxShadow = "5px 5px 5px 0px rgba(0,0,0,.1)";
            }

            let wrapper = this.$el;

            wrapper.style.display = 'none';
            let content = this.$el.querySelector('.popover-content');
            evaluatePosition();

            let arrow = document.createElement('span');
            arrow.style.top = '100%';
            if(position == 'c') {
                arrow.style.left = '50%';
            }
            else if(position == 'l') {
                arrow.style.right = '10px';
            }
            else if(position == 'r') {
                arrow.style.left = '10px';
            }

            arrow.style.border = "solid transparent";
            arrow.style.content = " ";
            arrow.style.height = "0";
            arrow.style.width = "0";
            arrow.style.position = "absolute";
            arrow.style.pointerEvents = "none";
            arrow.style.borderColor = "rgba(255, 255, 255, 0)";
            arrow.style.borderTopColor = "#ffffff";
            arrow.style.display = 'inline-block';
            arrow.style.borderWidth = "10px";
            arrow.style.marginLeft = "-10px";
            content.appendChild(arrow);

            let s = this;
            function togglePopover(e) {
                if(this.open && (!e.path || (e.path && !clickPopover(e.path.splice(0,8))))) {
                    wrapper.style.display = "none";
                    document.removeEventListener('click', togglePopover);
                    parent.addEventListener('click', attachClickOnParent);
                    s.$emit('input', false);
                }
            }

            function clickPopover(path) {
                let test = false;
                if(!s.hideOnContentClick) {
                    path.forEach(p => {
                        if(p.id == localId) {
                            test = true;
                        }
                    });
                }
                return test;
            }

            function clickedContent(path) {
                let test = false;
                path.forEach(p => {
                    if(p.classList.contains('popover-content')) {
                        test = true;
                    }
                });
                return test;
            }

            function attachClickOnParent(e) {
                if(s.canOpen && (e.path && !clickedContent(e.path.splice(0,8)))) {
                    e.stopPropagation();
                    wrapper.style.display = "inline-block";
                    if (!s.open) {
                        document.addEventListener('click', togglePopover);
                        parent.removeEventListener('click', attachClickOnParent);
                        s.$emit('input', true);
                        setTimeout(() => {
                            evaluatePosition();
                        }, 100);
                    }
                }
            }

            parent.addEventListener('click', attachClickOnParent);
        }
    }
</script>

// Vuejs v-tooltip directive
export default {
    inserted: function (el, bindings) {
        // quick style
        let bg = 'var(--tooltip-bg, #111)';
        let color = 'var(--tooltip-color, #CCC)';
        let fontSize = 'var(--tooltip-font-size, 0.8rem)';
        let lineHeight = 'var(--tooltip-line-height, 1rem)';
        let bs = "var(--tooltip-shadow, 0 0 5px 5px rgba(0,0,0,.0))";
        let border = "var(--tooltip-border, 1px solid #000)";
        let arrowDistFromBorder = 12;
        let arrowSize = 5;
        let panelDist = 10;

        // we create the tooltip elements
        el.wrapper = document.createElement('span');
        el.content = document.createElement('span');
        el.arrow = document.createElement('span');
        el.display = "furtive";

        // update function
        el.doUpdate = (el) => {
            // base values
            let text = "";
            let position = "c";
            let side = "t";
            let textAlign = "center";
            let maxWidth = null;
            let maxHeight = null;
            let panelShift = '-'+ (el.offsetHeight/2) +'px';

            // we set the values based on the argument
            let args = bindings.value;
            if(typeof args === 'string') {
                text = args;
            }
            else if(args !== undefined) {
                // text
                if(args.t) text = args.t;
                if(args.text) text = args.text;
                // width
                if(args.w) maxWidth = args.w;
                if(args.width) maxWidth = args.width;
                // height
                if(args.h) maxHeight = args.h;
                if(args.height) maxHeight = args.height;
                // position
                if(args.position) position = args.position;
                if(args.p) position = args.p;
                // side
                if(args.s) side = args.s;
                if(args.side) side = args.side;
                // text-align
                if(args.ta) textAlign = args.ta;
                if(args.textAlign) textAlign = args.textAlign;
                // display
                if(args.d) el.display = args.d;
                if(args.display) el.display = args.display;
            }

            // the check the modifiers
            let mod = bindings.modifiers;
            if(mod) {
                // position
                if(mod.l) position = "l";
                if(mod.c) position = "c";
                if(mod.r) position = "r";
                if(mod.t) position = "t";
                if(mod.b) position = "b";
                // side
                if(mod.top) side = "t";
                if(mod.right) side = "r";
                if(mod.bottom) side = "b";
                if(mod.left) side = "l";
                // display
                if(mod.furtive) el.display = "furtive";
                if(mod.hover) el.display = "hover";
                if(mod.click) el.display = "click";
                if(mod.clickout) el.display = "clickout";
            }

            // dynArg overwrite
            let dynArg = bindings.arg;
            if(dynArg) {
                // text
                if(dynArg.t) text = dynArg.t;
                if(dynArg.text) text = dynArg.text;
                // width
                if(dynArg.w) maxWidth = dynArg.w;
                if(dynArg.width) maxWidth = dynArg.width;
                // height
                if(dynArg.h) maxHeight = dynArg.h;
                if(dynArg.height) maxHeight = dynArg.height;
                // position
                if(dynArg.position) position = dynArg.position;
                if(dynArg.p) position = dynArg.p;
                // side
                if(dynArg.s) side = dynArg.s;
                if(dynArg.side) side = dynArg.side;
                // text-align
                if(dynArg.ta) textAlign = dynArg.ta;
                if(dynArg.textAlign) textAlign = dynArg.textAlign;
                // display
                if(dynArg.d) el.display = dynArg.d;
                if(dynArg.display) el.display = dynArg.display;
            }

            // WRAPPER
            el.wrapper.className = "tt-wrapper";
            if(parseInt(maxWidth)>0) el.wrapper.style.width = maxWidth;
            if(parseInt(maxHeight)>0) el.wrapper.style.height = maxHeight;
            el.wrapper.style.position = 'absolute';
            el.wrapper.style.background = 'rgba(255,255,255,0)';
            el.wrapper.style.opacity = '1';
            el.wrapper.style.zIndex = '999';
            el.wrapper.style.display = 'none'; // initially hidden
            // css reset
            el.wrapper.style.top = "";
            el.wrapper.style.bottom = "";
            el.wrapper.style.right = "";
            el.wrapper.style.left = "";
            el.wrapper.style.transform = "";
            el.wrapper.style.textAlign = "";

            // top or bottom
            if(side == "b" || side == "bottom" || side == "t" || side == "top") {
                // side
                if(side == "b" || side == "bottom") {
                    el.wrapper.style.top = (el.offsetHeight + panelDist) + 'px';
                }
                else {
                    el.wrapper.style.bottom = (el.offsetHeight + panelDist) + 'px';
                }
                // position
                if(position == 'r') {
                    el.wrapper.style.right = panelShift;
                }
                else if(position == 'l') {
                    el.wrapper.style.left = panelShift;
                }
                else {
                    el.wrapper.style.left = '50%';
                    el.wrapper.style.transform = 'translateX(-50%)';
                }
            }
            // left or right
            else if(side == "l" || side == "left" || side == "r" || side == "right") {
                if(side == "r" || side == "right") {
                    el.wrapper.style.left = (el.offsetWidth + panelDist) + 'px';
                    el.wrapper.style.textAlign = "left";
                }
                else {
                    el.wrapper.style.right = (el.offsetWidth + panelDist) + 'px';
                    el.wrapper.style.textAlign = "right";
                }
                if(position == 't') {
                    el.wrapper.style.top = panelShift;
                }
                else if(position == 'b') {
                    el.wrapper.style.bottom = panelShift;
                }
                else {
                    el.wrapper.style.top = '50%';
                    el.wrapper.style.transform = 'translateY(-50%)';
                }
            }

            // CONTENT
            el.content.style.fontSize = fontSize;
            el.content.style.lineHeight = lineHeight;
            el.content.style.padding = '6px 12px'; // custom
            el.content.style.color = color; // custom
            el.content.style.borderRadius = '3px'; // custom
            el.content.style.boxShadow = bs; // custom
            el.content.style.backgroundColor = bg; // custom
            el.content.style.border = border; // custom
            el.content.style.position = 'relative';
            el.content.style.display = 'flex';
            el.content.style.zIndex = '1';
            el.content.style.opacity = '1';
            el.content.className = "tt-content";
            el.content.style.textAlign = textAlign;
            el.content.innerHTML = text;
            // css reset
            el.content.style.height = "";
            el.content.style.width = "";
            // fixed height or width
            if(side == "b" || side == "bottom" || side == "t" || side == "top") {
                if(parseInt(maxHeight) > 0) {
                    el.content.style.height = maxHeight;
                }
            }
            else if(side == "l" || side == "left" || side == "r" || side == "right") {
                if(parseInt(maxWidth) > 0) { el.content.style.width = maxWidth; }
            }

            // ARROW
            el.arrow.style.border = "solid transparent";
            el.arrow.style.content = " ";
            el.arrow.style.height = "0";
            el.arrow.style.width = "0";
            el.arrow.style.position = "absolute";
            el.arrow.style.pointerEvents = "none";
            el.arrow.style.display = 'flex';
            el.arrow.style.borderWidth = arrowSize+'px';
            el.arrow.style.borderColor = "rgba(255, 255, 255, 0)";
            // css reset
            el.arrow.style.bottom = "";
            el.arrow.style.borderBottomColor = "transparent";
            el.arrow.style.top = "";
            el.arrow.style.borderTopColor = "transparent";
            el.arrow.style.right = "";
            el.arrow.style.left = "";
            el.arrow.style.marginLeft = "";
            el.arrow.style.borderRightColor = "transparent";
            el.arrow.style.borderLeftColor = "transparent";
            el.arrow.style.marginTop = "";

            // top or bottom
            if(side == "b" || side == "bottom" || side == "t" || side == "top") {
                // side
                if(side == "b" || side == "bottom") {
                    el.arrow.style.bottom = '100%';
                    el.arrow.style.borderBottomColor = bg;
                }
                else {
                    el.arrow.style.top = '100%';
                    el.arrow.style.borderTopColor = bg;
                }
                // position
                if(position == 'r') el.arrow.style.right = arrowDistFromBorder+'px';
                else if(position == 'l') el.arrow.style.left = arrowDistFromBorder+'px';
                else {
                    el.arrow.style.left = '50%';
                    el.arrow.style.marginLeft = "-"+arrowSize+'px';
                }
            }
            // left or right
            else if(side == "l" || side == "left" || side == "r" || side == "right") {
                // side
                if(side == "r" || side == "right") {
                    el.arrow.style.right = '100%';
                    el.arrow.style.borderRightColor = bg;
                }
                else {
                    el.arrow.style.left = '100%';
                    el.arrow.style.borderLeftColor = bg;
                }
                // position
                if(position == 't') el.arrow.style.top = arrowDistFromBorder+'px';
                else if(position == 'b') el.arrow.style.bottom = arrowDistFromBorder+'px';
                else {
                    el.arrow.style.top = '50%';
                    el.arrow.style.marginTop = "-"+arrowSize+'px';
                }
            }

            // element style
            el.style.position = 'relative';
            el.style.opacity = '1';
            el.content.appendChild(el.arrow);
        };

        // events attachment function
        el.attachEventsHandlers = (el) => {
            // display events
            if(el.display == "click" || el.display == "clickout") {
                // events handlers functions definitions
                el.handleWrapperClick = (e) => {
                    el.wrapper.style.display = "flex";
                    setTimeout(() => {
                        document.addEventListener('click', el.handleBodyClick);
                        el.removeEventListener('click', el.handleWrapperClick);
                    },200)
                };
                el.handleBodyClick = (e) => {
                    el.wrapper.style.display = "none";
                    setTimeout(() => {
                        document.removeEventListener('click', el.handleBodyClick);
                        el.addEventListener('click', el.handleWrapperClick);
                    },200)
                };
                el.handleWrapperClickout = (e) => {
                    e.stopPropagation();
                };
                // event listener attachment
                el.addEventListener('click', el.handleWrapperClick);
                if(el.display == "clickout") {
                    el.wrapper.addEventListener('click', el.handleWrapperClickout);
                }
            }
            // we expect here the display to be 'hover'
            else {
                // we set the event listeners and their timeouts
                let timeoutIn;
                let timeoutOut;
                let enterTime = 100;
                let exitTime = 100;
                // events handlers functions definitions
                el.wrapperEnter = () => {
                    let wrapper = el.querySelector('.tt-wrapper');
                    timeoutIn = setTimeout(() => { wrapper.style.display = "flex"; }, enterTime);
                };
                el.wrapperLeave = () => {
                    clearTimeout(timeoutIn);
                    timeoutIn = null;
                    timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, exitTime);
                };
                el.contentEnter = () => {
                    if(el.display !== "furtive") {
                        clearTimeout(timeoutOut);
                    }
                };
                el.contentLeave = () => {
                    timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, exitTime);
                };
                el.contentClick = (e) => {
                    e.stopPropagation();
                };
                // event listener attachment
                el.addEventListener('mouseenter', el.wrapperEnter);
                el.addEventListener('mouseleave', el.wrapperLeave);
                el.content.addEventListener('mouseenter', el.contentEnter);
                el.content.addEventListener('mouseleave', el.contentLeave);
                el.content.addEventListener('click', el.contentClick);
            }
        };

        // events detachment function
        el.detachEventsHandlers = (el) => {
            el.removeEventListener('click', el.handleWrapperClick);
            el.wrapper.removeEventListener('click', el.handleWrapperClickout);
            el.removeEventListener('mouseenter', el.wrapperEnter);
            el.removeEventListener('mouseleave', el.wrapperLeave);
            el.content.removeEventListener('mouseenter', el.contentEnter);
            el.content.removeEventListener('mouseleave', el.contentLeave);
            el.content.removeEventListener('click', el.contentClick);
        };

        // we wrap the elements together and into the target
        el.doUpdate(el);
        el.wrapper.appendChild(el.content);
        el.appendChild(el.wrapper);
        el.attachEventsHandlers(el);

        /*
        // scroll overflow position update handling (prototype)
        el.overflow = {t:0, r:0, b:0, l:0};
        el.noAction = true;
        setTimeout(() => { el.noAction = false });
        el.handleScroll = (e) => {
            if(!el.noAction) {
                let y0 = window.scrollY;
                let y1 = el.offsetTop;
                let h = el.wrapper.offsetHeight;
                el.overflow = {t:0, r:0, b:0, l:0};
                if(y1-h-panelDist < y0) {
                    el.overflow.t = y0-y1+h+panelDist;
                }
            }
        };
        document.addEventListener('scroll', el.handleScroll);
        */
    },
    componentUpdated(el) {
        el.doUpdate(el);
        el.detachEventsHandlers(el);
        el.attachEventsHandlers(el);
    },
    unbind(el) {
        el.attachEventsHandlers(el);
    }
}
// Import vue component
import Input from './src/elements/EgInput';
import Btn from './src/elements/EgButton';

// Declare install function executed by Vue.use()
export default function install(Vue) {
    // init
    if (install.installed) return;
    install.installed = true;

    // components registration
    Vue.component('my-input', Input);
    Vue.component('btn', Btn);

    // v-tooltip
    Vue.directive('tooltip', {
        // arguments:
        // t : the text to display in the bubble
        // c : alias for text (means content), higher priority
        // d : display (on hover: h, on click: c)
        // p : the position (left: l, center: c, right: r)
        // w : the maximum size of the tooltip wrapper
        inserted: function (el, bindings) {
            let args = bindings.value;
            let text = "";
            let position = "c";
            let maxWidth = 200;
            if(typeof args === 'string') {
                text = args;
            }
            else {
                text = args.t ? args.t : text;
                text = args.c ? args.c : text;
                maxWidth = args.w ? args.w : maxWidth;
                position = args.p ? args.p : position;
            }

            let wrapper = document.createElement('span');
            wrapper.className = "tt-wrapper";
            wrapper.style.width = maxWidth + 'px';
            wrapper.style.position = 'absolute';
            wrapper.style.bottom = (el.offsetHeight + 12) + 'px';
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
            // initially hidden
            wrapper.style.display = 'none';

            let content = document.createElement('span');
            content.className = "tt-content";
            content.innerHTML = text;
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
            wrapper.appendChild(content);
            el.appendChild(wrapper);
            el.style.position = 'relative';
            el.style.opacity = '1';

            let timeoutIn;
            let timeoutOut;
            el.addEventListener('mouseenter', (e) => {
                let wrapper = el.querySelector('.tt-wrapper');
                timeoutIn = setTimeout(() => { wrapper.style.display = "inline-block"; }, 600);
            });
            el.addEventListener('mouseleave', (e) => {
                clearTimeout(timeoutIn);
                timeoutIn = null;
                timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, 200);
            });

            content.addEventListener('mouseenter', (e) => {
                clearTimeout(timeoutOut);
            });
            content.addEventListener('mouseleave', (e) => {
                clearTimeout(timeoutIn);
                timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, 200);
            });
            content.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    });
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export { Input, Btn };
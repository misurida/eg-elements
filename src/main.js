import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;

// we import the global components components
import EgButton from './elements/EgButton'
import EgInput from './elements/EgInput'
import Popover from './elements/Popover'
import SvgIcon from './elements/toolbox/SvgIcon'
Vue.component('btn', EgButton);
Vue.component('eg-input', EgInput);
Vue.component('eg-popover', Popover);
Vue.component('svg-icon', SvgIcon);

// v-tooltip
Vue.directive('tooltip', {
    // arguments:
    // t : the text to display in the bubble
    // c : alias for text (means content), higher priority
    // d : display (on hover: h, on click: c)
    // p : the position (left: l, center: c, right: r)
    // w : the maximum size of the tooltip wrapper
    inserted: function (el, bindings) {
        // quick style
        let bg = '#fff';
        let color = '#222';
        let fontSize = '0.8rem';
        let bs = "0 0 3px 2px rgba(0,0,0,.05)";
        let border = "1px solid #ccc";

        // base values
        let args = bindings.value;
        let mod = bindings.modifiers;
        let text = "";
        let display = "h";
        let position = "m";
        let maxWidth = 200;

        // we set the values based on the arguments
        if(typeof args === 'string') {
            text = args;
        }
        else {
            text = args.t ? args.t : text;
            text = args.c ? args.c : text;
            maxWidth = args.w ? args.w : maxWidth;
            position = args.p ? args.p : position;
        }
        if(mod.r) position = "r";
        else if(mod.m) position = "m";
        else if(mod.l) position = "l";
        if(mod.c) display = "c";
        if(mod.h) display = "h";

        // we create the wrapper
        let wrapper = document.createElement('span');
        wrapper.className = "tt-wrapper";
        wrapper.style.width = maxWidth + 'px';
        wrapper.style.position = 'absolute';
        wrapper.style.bottom = (el.offsetHeight + 12) + 'px';
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
        wrapper.style.display = 'none'; // initially hidden

        // we create the content
        let content = document.createElement('span');
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
        content.className = "tt-content";
        content.innerHTML = text;

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

        // we wrap the elements together and into the target
        content.appendChild(arrow);
        wrapper.appendChild(content);
        el.appendChild(wrapper);
        el.style.position = 'relative';
        el.style.opacity = '1';

        // we set the event listeners and their timeouts
        let timeoutIn;
        let timeoutOut;
        let enterTime = 100;
        let exitTime = 100;
        el.addEventListener('mouseenter', (e) => {
            let wrapper = el.querySelector('.tt-wrapper');
            timeoutIn = setTimeout(() => { wrapper.style.display = "inline-block"; }, enterTime);
        });
        el.addEventListener('mouseleave', (e) => {
            clearTimeout(timeoutIn);
            timeoutIn = null;
            timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, exitTime);
        });

        content.addEventListener('mouseenter', (e) => {
            clearTimeout(timeoutOut);
        });
        content.addEventListener('mouseleave', (e) => {
            clearTimeout(timeoutIn);
            timeoutOut = setTimeout(() => { el.querySelector('.tt-wrapper').style.display = "none"; }, exitTime);
        });
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

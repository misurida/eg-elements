// Import vue component
import TextInput from './src/components/TextInput'
import Button from './src/components/Button'
import Select from './src/components/Select'
import FloatingMenu from './src/components/FloatingMenu'
import Tag from './src/components/Tag'


import Popover from './src/elements/popover/Popover'
import EgIcon from './src/elements/toolbox/SvgIcon'
import Sidemenu from './src/elements/sidemenu/Sidemenu'
import Modal from './src/elements/modal/Modal'
import ActionMessages from './src/elements/messages/ActionMessages'
import TooltipDirective from './src/elements/tooltip/tooltip'

// Declare install function executed by Vue.use()
export default function install(Vue, options) {
    // init
    if (install.installed) return;
    install.installed = true;

    // new installations
    Vue.component('eg-input', TextInput);
    Vue.component('eg-button', Button);
    Vue.component('eg-select', Select);
    Vue.component('floating-menu', FloatingMenu);
    Vue.component('tag', Tag);

    // we install all the components globally
    Vue.component('eg-icon', EgIcon);
    Vue.component('popover', Popover);
    Vue.component('modal', Modal);
    Vue.component('sidemenu', Sidemenu);
    Vue.component('action-messages', ActionMessages);

    // v-tooltip directive
    Vue.directive('tooltip', TooltipDirective);

    // We inject the polyfills
    require('./src/elements/toolbox/removeDiacritics');

    // CSS method unefficient and JS Mixins errors...
    /*
    if(!!options) {
        if(!!options.props) {
            // seems not to work...
            Vue.mixin({ props: {placeholder: { default: "Test" }} });
        }
        if(!!options.css) {
            let c = options.css;
            let s = document.documentElement.style;
            if(c.rgbPrimary) s.setProperty('--rgb-primary', c.rgbPrimary);
        }
    }
    */
}

// Create module definition for Vue.use()
const plugin = {
    install
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
export {
    TextInput,
    Button,
    Select,
    FloatingMenu,

    Popover,
    Modal,
    Sidemenu,
    ActionMessages
};
// Import vue component
import EgButton from './src/elements/button/EgButton'
import EgInput from './src/elements/input/EgInput'
import Popover from './src/elements/popover/Popover'
import EgIcon from './src/elements/toolbox/SvgIcon'
import Sidemenu from './src/elements/sidemenu/Sidemenu'
import Modal from './src/elements/modal/Modal'
import TooltipDirective from './src/elements/tooltip/tooltip'

// Declare install function executed by Vue.use()
export default function install(Vue) {
    // init
    if (install.installed) return;
    install.installed = true;

    // we install all the components globally
    Vue.component('eg-btn', EgButton);
    Vue.component('eg-input', EgInput);
    Vue.component('eg-icon', EgIcon);
    Vue.component('popover', Popover);
    Vue.component('modal', Modal);
    Vue.component('sidemenu', Sidemenu);

    // v-tooltip directive
    Vue.directive('tooltip', TooltipDirective);

    // We inject the polyfills
    require('./src/elements/toolbox/removeDiacritics');
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
    EgButton,
    EgInput,
    EgIcon,
    Popover,
    Modal,
    Sidemenu
};
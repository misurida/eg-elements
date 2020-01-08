// Import vue component
import TextInput from './src/components/TextInput'
import Button from './src/components/Button'
import Select from './src/components/Select'
import Checkbox from './src/components/Checkbox'
import FloatingMenu from './src/components/FloatingMenu'
import Tag from './src/components/Tag'
import NumberInput from './src/components/NumberInput'


import Popover from './src/elements/popover/Popover'
import EgIcon from './src/elements/toolbox/SvgIcon'
import Sidemenu from './src/elements/sidemenu/Sidemenu'
import Modal from './src/elements/modal/Modal'
import ActionMessages from './src/elements/messages/ActionMessages'
import TooltipDirective from './src/elements/tooltip/tooltip'

// Declare install function executed by Vue.use()
export default function install(Vue) {
    // init
    if (install.installed) return;
    install.installed = true;

    // new installations
    Vue.component('eg-input', TextInput);
    Vue.component('eg-button', Button);
    Vue.component('eg-select', Select);
    Vue.component('eg-checkbox', Checkbox);
    Vue.component('number-input', NumberInput);
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
}

// Create module definition for Vue.use()
const plugin = {
    install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
}
else if (typeof global !== 'undefined') {
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
    Checkbox,
    NumberInput,

    Popover,
    Modal,
    Sidemenu,
    ActionMessages
};
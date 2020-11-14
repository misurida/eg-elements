// Import vue component
import EgInput from './src/components/EgInput'
import EgButton from './src/components/EgButton'
import EgSelect from './src/components/EgSelect'
import EgCheckbox from './src/components/EgCheckbox'
import EgNumberInput from './src/components/EgNumberInput'
import EgFloatingMenu from './src/components/EgFloatingMenu'
import EgTag from './src/components/EgTag'
import EgIcon from './src/components/EgIcon'
import EgActionMessages from './src/components/EgActionMessages'
import EgSidemenu from './src/components/EgSidemenu'

import Modal from './src/components/Modal'
import TooltipDirective from './src/components/tooltip'
import HelpIcon from './src/components/HelpIcon'
import CssLoader from './src/components/CssLoader'
import HamburgerIcon from './src/components/HamburgerIcon'


// Declare install function executed by Vue.use()
export default function install(Vue, args) {
    // parameters init
    if(!args) args = {};
    if(typeof args.icons === "string") args.icons = [args.icons];

    // installation init
    if (install.installed) return;
    install.installed = true;

    // icons theme
    args.icons = args.icons.reverse();
    for(let i=0; i<args.icons.length; i++) {
        require(`./fonts/fontello/${args.icons[i]}/css/fontello.css`);
    }

    // themes stylers
    if(!args.style) require('./src/themes/theme_default.scss')

    // new installations
    Vue.component('eg-input', EgInput);
    Vue.component('eg-button', EgButton);
    Vue.component('eg-select', EgSelect);
    Vue.component('eg-checkbox', EgCheckbox);
    Vue.component('eg-number-input', EgNumberInput);
    Vue.component('eg-floating-menu', EgFloatingMenu);
    Vue.component('eg-tag', EgTag);
    Vue.component('eg-icon', EgIcon);
    Vue.component('action-messages', EgActionMessages);
    Vue.component('eg-sidemenu', EgSidemenu);
    Vue.component('modal', Modal);
    Vue.component('help-icon', HelpIcon);
    Vue.component('css-loader', CssLoader);

    // v-tooltip directive
    Vue.directive('tooltip', TooltipDirective);

    // We inject polyfills
    require('./polyfills');
}

// Create module definition for Vue.use()
const plugin = {
    install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') GlobalVue = window.Vue;
else if (typeof global !== 'undefined') GlobalVue = global.Vue;
if (GlobalVue) GlobalVue.use(plugin);

// To allow use as module (npm/webpack/etc.) export component
export {
    EgInput,
    EgButton,
    EgIcon,
    EgSelect,
    EgNumberInput,
    EgCheckbox,
    Modal,
    EgFloatingMenu,
    HelpIcon,
    EgSidemenu,
    EgActionMessages,
    HamburgerIcon
};
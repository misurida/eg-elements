// Import vue component
import EgInput from './src/components/EgInput'
import EgButton from './src/components/EgButton'
import EgSelect from './src/components/EgSelect'
import EgCheckbox from './src/components/EgCheckbox'
import EgFloatingMenu from './src/components/EgFloatingMenu'
import EgTag from './src/components/EgTag'
import EgIcon from './src/components/EgIcon'
import EgActionMessages from './src/components/EgActionMessages'
import EgSidemenu from './src/components/EgSidemenu'

import Modal from './src/components/Modal'
import TooltipDirective from './src/components/tooltip'
import VisibleDirective from './src/components/visible'
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
    if(args.icons && args.icons.length > 0) {
        args.icons = args.icons.reverse();
        for(let i=0; i<args.icons.length; i++) {
            require(`./src/assets/fontello/${args.icons[i]}/css/fontello.css`);
        }
    }

    // themes styling
    //if(args.theme === "basic") require('./src/themes/theme_basic.scss');
    if(args.theme !== null) require('./src/themes/theme_basic.scss');

    // new installations
    if(args.input !== false) Vue.component('eg-input', EgInput);
    Vue.component('eg-button', EgButton);
    Vue.component('eg-select', EgSelect);
    Vue.component('eg-checkbox', EgCheckbox);
    Vue.component('eg-floating-menu', EgFloatingMenu);
    Vue.component('eg-tag', EgTag);
    Vue.component('eg-icon', EgIcon);
    Vue.component('action-messages', EgActionMessages);
    Vue.component('eg-sidemenu', EgSidemenu);
    Vue.component('modal', Modal);
    Vue.component('help-icon', HelpIcon);
    Vue.component('css-loader', CssLoader);
    Vue.component('hamburger-icon', HamburgerIcon);

    // directives
    Vue.directive('tooltip', TooltipDirective);
    Vue.directive('visible', VisibleDirective);

    // polyfills
    require('./src/polyfills');
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
    EgCheckbox,
    Modal,
    EgFloatingMenu,
    HelpIcon,
    EgSidemenu,
    EgActionMessages,
    HamburgerIcon
};
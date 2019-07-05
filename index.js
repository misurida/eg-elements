// Import vue component
import EgButton from './src/elements/button/EgButton'
import EgInput from './src/elements/input/EgInput'
import Popover from './src/elements/popover/Popover'
import EgIcon from './src/elements/toolbox/SvgIcon'
import Sidemenu from './src/elements/sidemenu/Sidemenu'
import Modal from './src/elements/modal/Modal'

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
    import tooltip from './src/elements/tooltip/tooltip'
    Vue.directive('tooltip', tooltip);
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
export {
    EgButton,
    EgInput,
    EgIcon,
    Popover,
    Modal,
    Sidemenu
};














const state = {
    user: {},
    lists: {
        items: []
    }
};

const getters = {
    user(state) { return state.user; },
};

const mutations = {
    SET_USER(state, pack) {
        state.user = pack.user;
    },
    SET_LISTS(state, pack) {
        state.lists = pack.lists;
    },
    ADD_ITEM(state, pack) {
        state.lists.items = pack;
    },
    REPLACE_ITEM(state, newItems) {
        // newItems is array containing objects having the attribute 'id' to merge with state.lists.items
        state.lists.items = state.lists.items.map(x => newItems.find(({ id }) => id === x.id) || x);
    }
};


const actions = {
    loadUser(context) {
        fetchApi('/api/user').then(
            (response) => { context.commit('SET_USER', response); },
            (error) => { console.error('User init fail', error) }
        );
    },
    loadLists({ getters, commit }) {
        fetchApi('/api/lists').then(
            (response) => { commit('SET_LISTS', response); },
            (error) => { commit.error('User init fail', error) }
        );
    },
    post(context, resource) {
        return new Promise((resolve, reject) => {
            fetchApi('/api/' + resource.target, {
                method: 'post',
                body: JSON.stringify(resource)
            }).then(
                (response) => {
                    if(!response.exception) {
                        // do an operation based on the target
                        switch(resource.target) {
                            case "item":
                                context.commit('ADD_ITEM', response);
                                break;
                        }
                        resolve(response)
                    }
                    else {
                        reject(response)
                    }
                },
                (error) => { reject(error) }
            );
        });
    },
    // special post function for the files
    postFormData(context, args) {
        return new Promise((resolve, reject) => {
            fetch('/api/' + args.target, {
                credentials: 'same-origin',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json',
                    //'Content-Type': 'multipart/form-data'
                },
                method: 'post',
                body: args.formData,
            }).then(
                (r) => {
                    r.json().then(
                        (response) => {
                            if(!response.exception) {
                                // context.commit('addFromFormData', response);
                                resolve(response)
                            }
                            else {
                                reject(response)
                            }
                        },
                        (error) => { reject(error); }
                    );
                },
                (error) => { reject(error) }
            );
        });

    },
    put(context, resource) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'put',
                body: JSON.stringify(resource)
            };
            let path = '/api/' + resource.target + '/';
            if(resource.id)
                path += resource.id;
            fetchApi(path, options).then(
                (response) => {
                    if(!response.exception) {
                        // do an operation based on the target
                        response.target = resource.target;
                        response.id = resource.id;
                        switch(resource.target) {
                            case "item":
                                context.commit('REPLACE_ITEM', response);
                                break;
                        }
                        resolve(response)
                    }
                    else {
                        reject(response)
                    }
                },
                (error) => { reject(error) }
            );
        });
    },
    delete(context, resource) {
        return new Promise((resolve, reject) => {
            let options = { method: 'delete' };
            let path = '/api/' + resource.target + '/';
            if(resource.id)
                path += resource.id;
            else
                options.body = JSON.stringify(resource);
            fetchApi(path, options).then(
                (response) => {
                    if(!response.exception) {
                        // do an operation based on the target
                        response.target = resource.target;
                        response.id = resource.id;
                        switch(resource.target) {
                            case "item":
                                context.commit('DELETE_ITEM', response);
                                break;
                        }
                        resolve(response)
                    }
                    else {
                        reject(response)
                    }
                    response.exception ? reject(response) : resolve(response)
                },
                (error) => { reject(error) }
            );
        });
    }
};

const store = new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions
});

export default store;
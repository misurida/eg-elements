<style lang="scss">
    .buttons-shelf {
        margin-top: 20px;
        .eg-button {
            margin-right: 10px;
            margin-bottom: 10px;
            text-transform: capitalize;
        }
        .w500 {
            max-width: 500px;
            .eg-button {
                margin-right: 0;
            }
        }
    }
</style>

<template>
    <div>
        <h1>Buttons</h1>
        <div class="pres-bloc">
            <h3>Default button</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf">
                <eg-input placeholder="Enter text..." v-model="value" search></eg-input>
                <eg-button @click="flip=!flip" :loading="flip" icon="caret">Caret</eg-button>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Default button</h3>
            <code>value: {{ value }}</code>
            <div class="buttons-shelf">
                <div>
                    <eg-button>Default</eg-button>
                    <eg-button class="active">Active</eg-button>
                    <eg-button class="focus">Focus</eg-button>
                    <eg-button @click="flip=!flip" :loading="flip">Load on click</eg-button>
                </div>
                <div>
                    <eg-button icon="check">Icon</eg-button>
                    <eg-button fa="check">Fontawesome</eg-button>
                    <eg-button ma="check">Google icons</eg-button>
                    <eg-button fas="balance-scale" :loading="flip"></eg-button>
                </div>
                <div>
                    <eg-button error>Error</eg-button>
                    <eg-button warning>Warning</eg-button>
                    <eg-button success type="error">Success</eg-button>
                </div>
                <div class="w500">
                    <eg-button fr>Float right</eg-button>
                    <eg-button wide>Wide</eg-button>
                    <eg-button fl>Float left</eg-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Calendar from '../elements/calendar/Calendar'

    export default {
        data() {
            return {
                value: "",
                flip: false,
                lorem: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
            }
        },
        methods: {
            ipsum() {
                let tab = this.lorem.split(' ');
                let i = Math.floor(Math.random() * tab.length);
                return tab[i];
            }
        }
    }
</script>

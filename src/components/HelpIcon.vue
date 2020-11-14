<style lang="scss">
    .help-icon {
        display: inline-block;
        cursor: pointer;
        .eg-icon {
            transition: all .2s;
            vertical-align: middle;
        }
        &:hover {
            .eg-icon {
                opacity: 0.5;
            }
        }
    }
</style>

<template>
    <div class="help-icon" @click.stop v-if="show" v-tooltip:[argsToUse]><eg-icon i="svg:help"></eg-icon></div>
</template>

<script>
    import EgIcon from './EgIcon'

    export default {
        components: { EgIcon },
        props: {
            text: {type: String, default: null},
            help: {default: null},
            args: {type: Object, default() { return { display: 'hover' }}}
        },
        computed: {
            show() { return this.text || this.help !== null },
            argsToUse() {
                let text = this.text;
                let a = this.args;
                let h = this.help;
                if(typeof h === "string") {
                    return {...a, text: h};
                }
                return this.help !== null ? this.help : {...a, text};
            }
        }
    }
</script>
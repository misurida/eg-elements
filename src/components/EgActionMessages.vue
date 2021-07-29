<style lang="scss">
    .eg-action-messages {
        position: fixed;
        right: 20px;
        bottom: 10px;
        z-index: 95;
        .eg-action-message {
            &.has-meta-text {
                .text {
                    display: block;
                }
            }
        }
        .list-enter-active {
            transition: opacity .3s, transform .2s;
        }
        .list-leave-active {
            transition: opacity .2s, transform 0s;
        }
        .list-enter {
            opacity: 0;
            transform: translateY(10px);
        }
        .list-leave-to {
            opacity: 0;
        }
        .list-move {
            transition: all .2s;
        }
    }
</style>

<template>
    <div class="eg-action-messages">
        <transition-group name="list">
            <div class="eg-action-message" :class="{'has-meta-text':(m.subtext||m.suptext)}" v-for="m in actionsMessages" :key="m.guid">
                <span v-if="m.suptext" class="suptext" v-html="m.suptext"></span>
                <span class="text" v-html="m.text"></span>
                <span v-if="m.subtext" class="subtext" v-html="m.subtext"></span>
                <ul v-if="m.list">
                    <li v-for="mm in m.list" :key="mm">{{ mm }}</li>
                </ul>
                <ul v-else-if="m.objectList">
                    <template v-for="(mm) in m.objectList">
                        <li :key="mm.join(', ')">{{ mm.join(', ') }}</li>
                    </template>
                </ul>
                <ul v-else-if="m.errors">
                    <template v-for="(mm, prop) in m.errors">
                        <li :key="prop">
                            <span>{{ mm.join(', ') }}</span>
                            <span> ({{ prop }})</span>
                        </li>
                    </template>
                </ul>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        computed: {
            actionsMessages() { return this.$store.getters.actionMessages }
        }
    }
</script>
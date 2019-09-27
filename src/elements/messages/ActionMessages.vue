<style lang="scss">
    @import "../variables";

    .eg-action-messages {
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 95;
        .eg-action-message {
            background-color: var(--action-message-bg);
            padding: var(--action-message-padding);
            color: var(--action-message-color);
            box-shadow: var(--action-message-shadow);
            margin: 5px;
            border-radius: 3px;
            .subtext {
                opacity: .5;
                font-weight: 400;
            }
            &.has-subtext {
                .text {
                    display: block;
                    font-size: 1.2rem;
                }
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
</style>

<template>
    <div class="eg-action-messages">
        <transition-group name="list">
            <div class="eg-action-message" :class="{'has-subtext':!!m.subtext}" v-for="m in actionsMessages" :key="m.guid">
                <span class="text">{{ m.text }}</span>
                <span class="subtext">{{ m.subtext }}</span>
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
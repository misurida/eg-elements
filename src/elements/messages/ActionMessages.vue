<style lang="scss">
    .eg-action-messages {
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 95;
        .eg-action-message {
            background-color: rgba(0,0,0,0.8);
            margin: 5px;
            padding: 10px 15px;
            color: #f5f5f5;
            border-radius: 3px;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
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
        props: {

        },
        computed: {
            actionsMessages() { return this.$store.getters.actionMessages }
        }
    }
</script>
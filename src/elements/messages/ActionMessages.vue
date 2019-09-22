<style lang="scss">
    .eg-action-messages {
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        .eg-action-message {

        }
    }
</style>

<template>
    <div class="eg-action-messages">
        <div class="eg-action-message" v-for="m in actionsMessages">
            {{ m.text }}
        </div>
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
<template>
    <transition name="modal">
        <div class="modal-mask" tabindex="2" @keyup.esc="$emit('close')">
            <div class="modal-wrapper" @click.self="$emit('close')">
                <div class="modal-container" :class="{big,lowmed,medium,small,flexible}">
                    <div class="modal-content">
                        <div class="exit-cross" @click="$emit('close')">&#10005;</div>
                        <div class="modal-header">
                            <slot name="header">

                            </slot>
                        </div>
                        <div class="modal-body" :class="{nopad:noPad}" @keyup.esc.stop>
                            <slot name="body">

                            </slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            big: {type:Boolean, default:false},
            lowmed: {type:Boolean, default:false},
            medium: {type:Boolean, default:false},
            small: {type:Boolean, default:false},
            noPad: {type:Boolean, default:false},
            flexible: {type:Boolean, default:false},
        },
        mounted() {
            this.$el.focus();
        }
    }
</script>
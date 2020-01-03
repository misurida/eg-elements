<style lang="scss">@import "../style/components_style.scss";</style>

<template>
    <div
            class="eg-button button-shell"
            :class="{
                primary:_primary,secondary:_secondary,tertiary:_tertiary,
                error:_error,warning:_warning,success:_success,
                fl,fr,wide,icon:noText}"
            @click="$emit('click',$event)"
            tabindex="0">
        <div class="button-inner" :class="{rshift:loading}">
            <div class="btn-right-icons" v-if="hasLeftIcon || lIcons.length > 0">
                <template v-if="lIcons.length > 0">
                    <icon v-for="i in lIcons" :key="i" :icon="i"></icon>
                </template>
                <template v-if="hasLeftIcon">
                    <icon :icon="lIcon" :fa="lfa" :fas="lfas" :far="lfar" :fal="lfal" :ma="lma"></icon>
                </template>
            </div>
            <slot name="default"></slot>
            <div class="btn-right-icons" v-if="hasRightIcon || icons.length > 0">
                <template v-if="icons.length > 0">
                    <icon v-for="i in icons" :key="i" :icon="i"></icon>
                </template>
                <template v-if="hasRightIcon">
                    <icon :icon="icon" :fa="fa" :fas="fas" :far="far" :fal="fal" :ma="ma"></icon>
                </template>
            </div>
            <div class="eg-loader-wrapper" v-if="loading !== null">
                <div class="eg-loader" :class="{white:primary||secondary||tertiary}"><div class="eg-loader-inside"></div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        components: {
            Icon
        },
        props: {
            loading: { type: Boolean, default: null },
            type: { type: String, default: null },

            error: { type: Boolean, default: false },
            warning: { type: Boolean, default: false },
            success: { type: Boolean, default: false },

            // quick css
            fr: { type: Boolean, default: false },
            fl: { type: Boolean, default: false },
            wide: { type: Boolean, default: false },

            // right icons
            icon: {type: String, default: null},
            icons: {type: Array, default() { return [] }},
            fa: {type: String, default: null},
            fas: {type: String, default: null},
            far: {type: String, default: null},
            fal: {type: String, default: null},
            ma: {type: String, default: null},

            // left icons
            lIcon: {type: String, default: null},
            lIcons: {type: Array, default() { return [] }},
            lfa: {type: String, default: null},
            lfas: {type: String, default: null},
            lfar: {type: String, default: null},
            lfal: {type: String, default: null},
            lma: {type: String, default: null},

            primary: { type: Boolean, default: false },
            secondary: { type: Boolean, default: false },
            tertiary: { type: Boolean, default: false },
        },
        computed: {
            hasRightIcon() { return this.icon || this.fa || this.fas || this.far || this.fal || this.ma; },
            hasLeftIcon() { return this.lIcon || this.lfa || this.lfas || this.lfar || this.lfal || this.lma; },
            noText() { return !this.$slots.default },
            _primary() { return this.primary || this.type === "primary" },
            _secondary() { return this.secondary || this.type === "secondary" },
            _tertiary() { return this.tertiary || this.type === "tertiary" },
            _error() { return this.error || this.type === "error" },
            _warning() { return this.warning || this.type === "warning" },
            _success() { return this.success || this.type === "success" },
        }
    }
</script>
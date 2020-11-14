<style lang="scss">
    $tt: .15s; // transition time

    .eg-button {
        font-size: inherit;
        .button-inner {
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: baseline;
            user-select: none;
            transition: all $tt;
            font-size: inherit;
            font-weight: inherit;
            &.rshift {
                position: relative;
                transform: translateX(-37px);
            }
        }
        .btn-left-icons,
        .btn-right-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center; // buttonStyle select caret
        }
        .btn-left-icons {
            //margin-right: 10px;
            margin-right: 0.75em;
            .eg-icon {
                &:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }
        .btn-right-icons {
            //margin-left: 10px;
            margin-left: 0.75em;
            .eg-icon {
                &:not(:first-child) {
                    margin-left: 5px;
                }
            }
        }
        .eg-icon {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .eg-hidden-icon-wrapper {
            margin-left: 10px;
            position: absolute;
            right: -40px;
        }
        .eg-loader-wrapper {
            display: relative;
            align-items: center;
        }
        .eg-loader-inside {
            border: 2px solid rgba(245,245,245,0.5);
            border-top: 2px solid currentColor;
        }
        &.hidden {
            overflow: hidden;
            .eg-loader-wrapper {
                display: flex;
            }
        }
        &.loadable {
            overflow-x: hidden;
        }

        // quick css
        &.fr, &.float-right { float: right }
        &.fl, &.float-left { float: left }
        &.wide {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .button-inner {
                text-align: center;
            }
        }
    }

    // default button
    .button-shell {
        display: inline-block;
        font-size: 1em;
        position: relative;
        cursor: pointer;
        outline: none;
        transition: background $tt, border $tt;
        vertical-align: bottom;
        border: none;
        &.disabled {
            cursor: default;
        }
    }

    // link mode
    .tag.clickable.link,
    .link .button-shell,
    .button-shell.link {
        border: none;
        background-color: transparent;
        padding: 0;
        text-decoration: underline;
    }
</style>

<template>
    <button v-if="simpleButton"
            class="eg-button button-shell"
            :class="{
                hidden: loading,
                big, small,
                loadable,
                primary:_primary, secondary:_secondary, tertiary:_tertiary,
                transparent:_transparent, dark:_dark, light:_light, link:_link,
                error:_error, warning:_warning, success:_success,
                disabled,fl,fr,wide,icon:noText}"
            @click="hClick"
            @keyup.enter="hClick"
            @keyup.escape="$emit('escape', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @mousedown="$emit('mousedown', $event)"
            @mouseup="$emit('mouseup', $event)"
            :disabled="disabled"><slot name="default"></slot></button>
    <div
            v-else
            class="eg-button button-shell"
            :class="{
                hidden: loading,
                big, small,
                loadable,
                primary:_primary, secondary:_secondary, tertiary:_tertiary,
                transparent:_transparent, dark:_dark, light:_light, link:_link,
                error:_error, warning:_warning, success:_success,
                disabled,fl,fr,wide,icon:noText}"
            @click="hClick"
            @keyup.enter="hClick"
            @keyup.escape="$emit('escape', $event)"
            @focus="$emit('focus', $event)"
            @blur="$emit('blur', $event)"
            @mousedown="$emit('mousedown', $event)"
            @mouseup="$emit('mouseup', $event)"
            :disabled="disabled"
            :tabindex="disabled?-1:0">
        <div class="button-inner" :class="{rshift:loading}">
            <div class="btn-left-icons" v-if="hasLeftIcon || lIcons.length > 0">
                <template v-if="lIcons.length > 0">
                    <eg-icon v-for="i in lIcons" :key="i" :icon="i"></eg-icon>
                </template>
                <template v-if="hasLeftIcon">
                    <eg-icon :icon="lIcon"></eg-icon>
                </template>
            </div>
            <slot name="default"></slot>
            <div class="btn-right-icons" v-if="hasRightIcon || icons.length > 0 || help !== null">
                <template v-if="icons.length > 0">
                    <eg-icon v-for="i in icons" :key="i" :icon="i"></eg-icon>
                </template>
                <template v-if="hasRightIcon || help">
                    <eg-icon v-if="hasRightIcon" :icon="icon" @click="$emit('iconClick', icon)"></eg-icon>
                    <help-icon v-else :help="help"></help-icon>
                </template>
            </div>
            <div class="eg-hidden-icon-wrapper">
                <div class="eg-loader-wrapper" v-if="loading">
                    <div class="eg-loader"><div class="eg-loader-inside"></div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EgIcon from './EgIcon'

    export default {
        components: { EgIcon },
        props: {
            type: {type: String, default: null},

            // status
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
            loading: {type: Boolean, default: null},

            // quick css
            fr: {type: Boolean, default: false},
            fl: {type: Boolean, default: false},
            wide: {type: Boolean, default: false},
            big: {type: Boolean, default: false},
            small: {type: Boolean, default: false},

            // icons
            help: {default: null},
            icon: {type: String, default: null},
            icons: {type: Array, default() {return []}},
            lIcon: {type: String, default: null},
            lIcons: {type: Array, default() {return []}},

            // themes
            primary: {type: Boolean, default: false},
            secondary: {type: Boolean, default: false},
            tertiary: {type: Boolean, default: false},
            transparent: {type: Boolean, default: false},
            dark: {type: Boolean, default: false},
            light: {type: Boolean, default: false},
            link: {type: Boolean, default: false},
        },
        methods: {
            hClick(e) {
                if(!this.disabled) {
                    this.$emit('click', e);
                }
            }
        },
        computed: {
            hasRightIcon() { return this.icon },
            hasLeftIcon() { return this.lIcon },
            noText() { return !this.$slots.default },
            _primary() { return this.primary || this.type === "primary" },
            _secondary() { return this.secondary || this.type === "secondary" },
            _tertiary() { return this.tertiary || this.type === "tertiary" },
            _transparent() { return this.transparent || this.type === "transparent" },
            _dark() { return this.dark || this.type === "dark" },
            _light() { return this.light || this.type === "light" },
            _link() { return this.link || this.type === "link" },
            _error() { return this.error || this.type === "error" },
            _warning() { return this.warning || this.type === "warning" },
            _success() { return this.success || this.type === "success" },
            loadable() { return this.loading !== null },
            simpleButton() { return !this.hasRightIcon && !this.hasLeftIcon && !this.loadable }
        }
    }
</script>
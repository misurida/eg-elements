<style lang="scss">
    $tt: .15s; // transition time

    .eg-button {
        font-size: inherit;
        box-sizing: border-box;
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
            position: relative;
            &.rshift {
                transform: translateX(-37px);
            }
        }
        .btn-inner-label {
            display: inline-block;
            height: 100%;
            align-self: center;
        }

        // icons
        .btn-l-slide-icons,
        .btn-slide-icons,
        .btn-left-icons,
        .btn-right-icons {
            min-width: 1em;
            min-height: 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center; // buttonStyle select caret
        }
        .btn-l-slide-icons,
        .btn-slide-icons {
            max-height: 1em;
        }
        .eg-icon {
            display: flex;
            align-items: center;
            align-self: center;
            justify-content: center;
            svg {
                height: 1em;
            }
        }

        // loader icon
        .eg-hidden-icon-wrapper {
            margin-left: 10px;
            position: absolute;
            right: -40px;
        }
        .eg-loader-wrapper {
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

        // slide icons
        &.slideable,
        &.loadable {
            overflow-x: hidden;
            overflow-y: visible;
        }

        .slide-icon,
        .l-slide-icon {
            max-width: 0;
            position: relative;
            overflow-x: hidden;
            transition: max-width $tt * 1.5, transform $tt  * 5;
        }
        &.slideable {
            .button-inner {
                white-space: nowrap;
            }
            &.button-shell.link {
                height: 1.3em;
                overflow-y: visible;
            }
        }
        &:hover {
            .slide-icon,
            .l-slide-icon {
                max-width: 50px;
                transition: max-width $tt, transform $tt;
            }
            .slide-icon {
                transform: translateX(5px);
            }
            .l-slide-icon {
                transform: translateX(-5px);
            }
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
                width: 100%;
            }
            .btn-inner-label {
                flex: 1;
            }
        }
    }

    // default button
    .button-shell {
        line-height: 1;
        display: inline-block;
        font-size: 1em;
        position: relative;
        cursor: pointer;
        outline: none;
        transition: background $tt, border $tt;
        vertical-align: bottom;
        border: none;
        box-sizing: border-box;
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
    <div v-else
         class="eg-button button-shell"
         :class="{
                'icon-button': isIconBtn,
                hidden: loading,
                big, small,
                loadable,
                slideable: slideIcon || lSlideIcon,
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
            <!-- Left icons -->
            <div class="btn-left-icons" v-if="hasLeftIcon || lIcons.length > 0 || wide">
                <template v-if="lIcons.length > 0">
                    <eg-icon v-for="i in lIcons" :key="i" :icon="i"></eg-icon>
                </template>
                <template v-if="hasLeftIcon">
                    <eg-icon :icon="lIcon"></eg-icon>
                </template>
            </div>
            <div class="btn-l-slide-icons" v-if="lSlideIcon">
                <eg-icon class="l-slide-icon" :icon="lSlideIcon"></eg-icon>
            </div>

            <!-- Label -->
            <span class="btn-inner-label"><slot name="default"></slot></span>

            <!-- Right icons -->
            <div class="btn-right-icons" v-if="hasRightIcon || icons.length > 0 || help !== null || wide">
                <template v-if="icons.length > 0">
                    <eg-icon v-for="i in icons" :key="i" :icon="i"></eg-icon>
                </template>
                <template v-if="hasRightIcon || help">
                    <eg-icon v-if="hasRightIcon" :icon="icon" @click="$emit('iconClick', icon)"></eg-icon>
                    <help-icon v-else :help="help"></help-icon>
                </template>
            </div>
            <div class="btn-slide-icons" v-if="slideIcon">
                <eg-icon class="slide-icon" :icon="slideIcon"></eg-icon>
            </div>
            <!-- Loader icon -->
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

            slideIcon: {type: String, default: null},
            lSlideIcon: {type: String, default: null},

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
            hasRightIcon() { return !!this.icon },
            hasLeftIcon() { return !!this.lIcon },
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
            simpleButton() { return !this.hasAnyIcon && !this.loadable && !this.help },
            loadable() { return this.loading !== null },
            isIconBtn() { return this.hasAnyIcon && !this.$slots.default },
            hasAnyIcon() {
                return this.hasRightIcon ||
                    this.hasLeftIcon ||
                    this.slideIcon ||
                    this.lSlideIcon ||
                    this.icons.length > 0 ||
                    this.lIcons.length > 0
            }
        }
    }
</script>

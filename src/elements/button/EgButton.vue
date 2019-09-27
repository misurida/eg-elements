<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import "../variables";

    .eg-button {
        // properties
        position: relative;
        cursor: pointer;
        font-size: var(--btn-default-font-size);
        line-height: var(--btn-default-font-size);
        padding: var(--btn-default-padding);
        background-color: var(--btn-default-bg);
        border: var(--btn-default-border);
        border-radius: 5px;
        color: var(--btn-default-color);
        font-family: 'Lato', sans-serif;
        &:not(.disabled):not(:disabled) {
            &.active, &:hover, &.hover {
                outline: none;
                box-shadow: var(--btn-default-shadow);
            }
            &:focus, &.focus {
                outline: none;
                box-shadow: var(--btn-default-shadow);
            }
        }
        .loader .loader-inside {
            @extend .dark-loader;
        }
        .svg-icon svg path {
            fill: var(--color-gray-2);
        }

        // content
        .eg-btn-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        // loader properties
        $loaderSize: 20px;
        $loaderBorder: 2px;
        @keyframes eg-button-spin {
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
        }
        .loader {
            display: inline-block;
            width: $loaderSize;
            height: $loaderSize;
            overflow: hidden;
            transition: .2s;
            max-width: $loaderSize;
            position: relative;
            left: 10px;
            &.hidden {
                max-width: 0;
            }
            .loader-inside {
                position: relative;
                top: 0;
                left: 0;
                display: block;
                border: $loaderBorder solid transparent;
                border-top: $loaderBorder solid var(--btn-default-color);
                border-radius: 50%;
                width: $loaderSize - 5px;
                height: $loaderSize - 5px;
                animation: eg-button-spin 1s linear infinite;
            }
        }
        .white-loader {
            border: $loaderBorder solid rgba(0,0,0,.05);
            border-top: $loaderBorder solid var(--color-white);
        }
        .gray-loader {
            border: $loaderBorder solid rgba(255,255,255,.5);
            border-top: $loaderBorder solid var(--color-gray-5);
        }
        .dark-loader {
            border: $loaderBorder solid rgba(0,0,0,.05);
            border-top: $loaderBorder solid var(--color-gray-3);
        }


        // icons tweak
        .svg-icon {
            justify-content: center;
            .material-icons {
                font-size: 1.4rem;
            }
        }
        &.ri {
            padding-right: 3em;
            &.no-content {
                padding-right: 2em;
                .svg-icon {
                    right: 11px;
                }
            }
        }
        &.li {
            padding-left: 3em;
            &.no-content {
                padding-left: 2em;
            }
        }
        &.li.ri.no-content {
            padding-right: 3.3em;
        }
        &:not(.li):not(.ri) {
            &.no-content {
                padding-left: 0.5em;
                padding-right: 0.5em;
            }
        }

        // >>> Style

        &.primary {
            color: var(--btn-primary-color);
            background-color: var(--btn-primary-bg);
            border: var(--btn-primary-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-primary-border-hover);
                    box-shadow: var(--btn-primary-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-primary-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .white-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-primary-color);
            }
        }
        &.secondary {
            color: var(--btn-secondary-color);
            background-color: var(--btn-secondary-bg);
            border: var(--btn-secondary-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-secondary-border-hover);
                    box-shadow: var(--btn-secondary-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-secondary-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .white-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-secondary-color);
            }
        }
        &.ternary {
            color: var(--btn-ternary-color);
            background-color: var(--btn-ternary-bg);
            border: var(--btn-ternary-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-ternary-border-hover);
                    box-shadow: var(--btn-ternary-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-ternary-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .white-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-ternary-color);
            }
        }
        &.light {
            color: var(--btn-light-color);
            background-color: var(--btn-light-bg);
            border: var(--btn-light-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-light-border-hover);
                    box-shadow: var(--btn-light-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-light-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .gray-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-light-color);
            }
        }
        &.dark {
            color: var(--btn-dark-color);
            background-color: var(--btn-dark-bg);
            border: var(--btn-dark-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-dark-border-hover);
                    box-shadow: var(--btn-dark-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-dark-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .white-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-dark-color);
            }
        }
        &.transparent {
            color: var(--btn-transparent-color);
            background-color: var(--btn-transparent-bg);
            border: var(--btn-transparent-border);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-transparent-border-hover);
                    box-shadow: var(--btn-transparent-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-transparent-border-focus);
                }
            }
            .loader .loader-inside {
                @extend .gray-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-transparent-color);
            }
        }
        &.thick {
            color: var(--btn-thick-color);
            background-color: var(--btn-thick-bg);
            border: var(--btn-thick-border);
            .loader .loader-inside {
                @extend .dark-loader;
            }
            .svg-icon svg path {
                fill: var(--btn-thick-color);
            }
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-thick-border-hover);
                    box-shadow: var(--btn-thick-shadow);
                }
                &:focus, &.focus {
                    outline: none;
                    border: var(--btn-thick-border-focus);
                }
                &.valid, &.warning, &.error {
                    border-width: 2px;
                    background-color: transparent;
                    &:not(.disabled):not(:disabled) {
                        &.active, &:hover, &.hover {
                            box-shadow: none;
                            border: none;
                        }
                    }
                }
                &.warning,
                &.warning:not(.disabled):not(:disabled):hover {
                    border: 2px solid var(--color-warning);
                    color: var(--color-warning);
                }
                &.valid,
                &.valid:not(.disabled):not(:disabled):hover {
                    border: 2px solid var(--color-valid);
                    color: var(--color-valid);
                }
                &.error,
                &.error:not(.disabled):not(:disabled):hover {
                    border: 2px solid var(--color-error);
                    color: var(--color-error);
                }
                &:not(.disabled):not(:disabled):hover {
                    opacity: 0.8;
                }
            }
        }
        &.link {
            background-color: transparent;
            border: none;
            text-decoration: underline;
            padding: 0;
            &:not(.disabled).focus,
            &:not(.disabled).active,
            &:not(.disabled):hover,
            &:not(.disabled):focus {
                opacity: 0.6;
                outline: none;
                box-shadow: none;
            }
            &.valid, &.warning, &.error {
                background-color: transparent;
                border: none;

                &:not(.disabled):not(:disabled) {
                    &.active, &:hover, &.hover {
                        box-shadow: none;
                        border: none;
                    }
                }
            }
            &.warning {
                color: var(--color-warning);
            }
            &.valid {
                color: var(--color-valid);
            }
            &.error {
                color: var(--color-error);
            }
            .svg-icon {
                position: inherit;
            }
            .loader .loader-inside {
                @extend .dark-loader;
            }
        }
        &.yoga {
            $dotSize: 8px;
            background-color: transparent;
            padding-top: 1.5em;
            color: var(--color-black);
            border: none;
            box-shadow: none;
            .svg-icon svg path {
                fill: var(--color-gray-3);
            }
            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 50%;
                width: $dotSize;
                height: $dotSize;
                background-color: rgba(var(--rgb-primary), 0.1);
                border-radius: 50%;
                transform: translateX(-50%);
            }
            &:not(.disabled):not(:disabled).active {
                outline: none;
                box-shadow: none;
            }
            &:not(.disabled):not(:disabled):focus,
            &:not(.disabled):not(:disabled).focus {
                outline: none;
                box-shadow: none;
            }
            &:not(.disabled):not(:disabled):hover,
            &:not(.disabled):not(:disabled).hover {
                opacity: 0.6;
                outline: none;
                box-shadow: none;
            }
            &.active {
                box-shadow: none;
                &::before {
                    background-color: var(--color-primary);
                }
            }
            &.error {
                color: var(--color-error);
                &::before {
                    background-color: var(--color-error);
                }
            }
            &.warning {
                color: var(--color-warning);
                &::before {
                    background-color: var(--color-warning);
                }
            }
            &.valid {
                color: var(--color-valid);
                &::before {
                    background-color: var(--color-valid);
                }
            }
            &.small::before {
                width: $dotSize/1.5;
                height: $dotSize/1.5;
            }
            &.big::before {
                width: $dotSize*1.5;
                height: $dotSize*1.5;
                top: 0;
            }
            &.thin::before {
                top: -5px;
            }
            &.fat::before {
                top: 5px;
            }
            &.valid, &.warning, &.error {
                border: none;
                background-color: transparent;
                &:not(.disabled):not(:disabled) {
                    &.active, &:hover, &.hover, &:focus {
                        box-shadow: none;
                        border: none;
                    }
                }
            }
            .loader .loader-inside {
                @extend .dark-loader;
            }
        }

        // states
        &.valid {
            background-color: var(--color-valid);
            border: 1px solid var(--color-valid);
            color: var(--btn-valid-color);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-valid-border-hover);
                    box-shadow: var(--btn-valid-shadow);
                }
            }
        }
        &.warning {
            background-color: var(--color-warning);
            border: 1px solid var(--color-warning);
            color: var(--btn-warning-color);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover {
                    outline: none;
                    border: var(--btn-warning-border-hover);
                    box-shadow: var(--btn-warning-shadow);
                }
            }
        }
        &.error {
            background-color: var(--color-error);
            border: 1px solid var(--color-error);
            color: var(--btn-error-color);
            &:not(.disabled):not(:disabled) {
                &.active, &:hover, &.hover, &:focus, &.focus {
                    outline: none;
                    border: var(--btn-error-border-hover);
                    box-shadow: var(--btn-error-shadow);
                }
            }
        }
        &:disabled,
        .disabled {
            opacity: 0.8;
            cursor: default;
        }
        
        // types
        &.small {
            height: 32px;
            font-size: var(--btn-small-font-size);
            line-height: var(--btn-small-font-size);
            &:not(.link) {
                padding: var(--btn-small-padding);
            }
            .svg-icon {
                width: 1em;
            }
            &.ri {
                padding-right: 2.5em;
            }
            &.li {
                padding-left: 2.5em;
            }
            &.no-content {
                padding-left: var(--btn-small-padding-h);
                padding-right: var(--btn-small-padding-h);
            }
        }
        &.big {
            padding: var(--btn-big-padding);
            font-size: var(--btn-big-font-size);
            line-height: var(--btn-big-font-size);
        }
        &.thin {
            padding: var(--btn-thin-padding);
        }
        &.fat {
            padding: var(--btn-fat-padding);
        }
        &.square {
            border-radius: 0;
        }
        &.round {
            border-radius: var(--btn-round-radius);
        }
        &.wide {
            width: 100%;
            justify-content: center;
        }

        // icons
        .svg-icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            bottom: 0;
            width: var(--icon-width);
            &.r-icon {
                right: 10px;
            }
            &.l-icon {
                left: 10px;
            }
            svg {
                height: var(--icon-width);
                width: var(--icon-width);
                path {
                    fill: rgba(var(--btn-default-color),0.75);
                }
            }
            &.inline-icon {
                margin: 0 5px;
                position: relative;
                width: auto;
            }
        }

        // no-content (icon only) corrections
        &.no-content {
            .svg-icon {
                left: 0;
                right: 0;
                justify-content: center;
                width: 100%;
            }
            padding: var(--btn-empty-padding);
        }

        // helpers
        &.fr {
            float: right;
        }
        &.fl {
            float: left;
        }
        &.la {
            text-align: left;
        }
        &.ra {
            text-align: right;
        }

    }

    .eg-buttons-container {
        text-align: right;
        .eg-button:not(:first-child) {
            margin-left: 5px;
        }
        &.flexed {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    }
</style>

<template>
    <button
            :disabled="disabled"
            class="eg-button"
            :class="computeClass"
            @keyup="$emit('keyup',$event)"
            @click="$emit('click',$event)"
            @dblclick="$emit('dblclick',$event)"
            @click.ctrl.stop="$emit('ctrlClick',$event)"
            @click.alt.stop="$emit('altClick',$event)">
        <span class="span eg-btn-content" :title="title">
            <eg-icon class="l-icon" v-if="li||leftIcon||!!lfa||!!lfas||!!lfal||!!lfar||!!lma" :type="_li" :fas="lfas" :fal="lfal" :far="lfar" :ma="lma"></eg-icon>
            <template v-if="leftIcons.length>0" v-for="i in leftIcons">
                <eg-icon class="inline-icon inline-left" :type="i"></eg-icon>
            </template>
            <span>
                <slot></slot>
            </span>
            <template v-if="icons.length>0" v-for="i in icons">
                <eg-icon class="inline-icon" :type="i"></eg-icon>
            </template>
            <eg-icon class="r-icon" v-if="!!ri||!!i||!!icon||!!fa||!!fas||!!fal||!!far||!!ma" :type="_ri" :fa="fa" :fas="fas" :fal="fal" :far="far" :ma="ma"></eg-icon>
            <span class="loader" :class="{hidden:!loading}">
                <span class="loader-inside"></span>
            </span>
        </span>
    </button>
</template>

<script>
    export default {
        props: {
            // main
            type: { type: String, default: null },
            title: { type: String, default: null },
            sty: { type: String, default: null },

            // styles
            primary: {type: Boolean, default: false},
            pri: {type: Boolean, default: false},
            secondary: {type: Boolean, default: false},
            sec: {type: Boolean, default: false},
            ternary: {type: Boolean, default: false},
            ter: {type: Boolean, default: false},
            link: {type: Boolean, default: false},
            thick: {type: Boolean, default: false},
            transparent: {type: Boolean, default: false},
            tra: {type: Boolean, default: false},
            light: {type: Boolean, default: false},
            dark: {type: Boolean, default: false},
            yoga: {type: Boolean, default: false},

            // types
            small: {type: Boolean, default: false},
            big: {type: Boolean, default: false},
            wide: {type: Boolean, default: false},
            floatLeft: {type: Boolean, default: false},
            fl: {type: Boolean, default: false},
            floatRight: {type: Boolean, default: false},
            fr: {type: Boolean, default: false},
            leftAlign: {type: Boolean, default: false},
            la: {type: Boolean, default: false},
            rightAlign: {type: Boolean, default: false},
            ra: {type: Boolean, default: false},
            square: {type: Boolean, default: false},
            round: {type: Boolean, default: false},
            thin: {type: Boolean, default: false},
            fat: {type: Boolean, default: false},

            // states
            disabled: {type: Boolean, default: false},
            loading: {type: Boolean, default: false},
            active: {type: Boolean, default: false},
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            valid: {type: Boolean, default: false},
            icon: {type: String, default: null},
            ri: {type: String, default: null},
            i: {type: String, default: null},
            leftIcon: {type: String, default: null},
            li: {type: String, default: null},
            icons: {type: Array, default(){return[]}},
            leftIcons: {type: Array, default(){return[]}},
            fa: {type: String, default: null},
            fas: {type: String, default: null},
            far: {type: String, default: null},
            fal: {type: String, default: null},
            ma: {type: String, default: null},
            lfa: {type: String, default: null},
            lfas: {type: String, default: null},
            lfar: {type: String, default: null},
            lfal: {type: String, default: null},
            lma: {type: String, default: null},
        },
        computed: {
            computeClass() {
                let o = [];
                if(this.type) o.push(this.type);
                if(!this.hasContent) o.push("no-content");

                // styles
                if(this.primary || this.pri) o.push("primary");
                else if(this.secondary || this.sec) o.push("secondary");
                else if(this.ternary || this.ter) o.push("ternary");
                else if(this.link) o.push("link");
                else if(this.light) o.push("light");
                else if(this.dark) o.push("dark");
                else if(this.yoga) o.push("yoga");
                else if(this.transparent || this.tra) o.push("transparent");
                else if(this.sty) o.push(this.sty);

                // types
                if(this.small) o.push("small");
                if(this.big) o.push("big");
                if(this.wide) o.push("wide");
                if(this.fat) o.push("fat");
                if(this.thin) o.push("thin");
                if(this.thick) o.push("thick");
                if(this.floatLeft || this.fl) o.push("fl");
                if(this.floatRight || this.fr) o.push("fr");
                if(this.leftAlign || this.la) o.push("la");
                if(this.rightAlign || this.ra) o.push("ra");
                if(this.square) o.push("square");
                if(this.round) o.push("round");

                // states
                if(this.disabled) o.push("disabled");
                if(this.loading) o.push("loading");
                if(this.active) o.push("active");
                if(this.error) o.push("error");
                if(this.warning) o.push("warning");
                if(this.valid) o.push("valid");
                if(this.icon || this.ri || this.i || this.fa || this.fas || this.fal || this.far || this.ma) o.push("ri");
                if(this.leftIcon || this.li || this.lfa || this.lfas || this.lfal || this.lfar || this.lma) o.push("li");

                return o;
            },
            _ri() {
                if(this.i) return this.i;
                if(this.ri) return this.ri;
                if(this.icon) return this.icon;
                return null;
            },
            _li() {
                if(this.li) return this.li;
                if(this.leftIcon) return this.leftIcon;
                return null;
            },
            hasContent() {
                let s = this.$slots;
                if(Object.keys(s).length > 0) {
                    let def = s.default;
                    if(def && def.length > 0) {
                        return !!def[0].text;
                    }
                }
                return false;
            }
        }
    }
</script>
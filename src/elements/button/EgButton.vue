<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

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

        // transition
        transition: var(--anim-1);

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
                border: $loaderBorder solid rgba(var(--btn-default-color),.1);
                border-top: $loaderBorder solid var(--btn-default-color);
                border-radius: 50%;
                width: $loaderSize - 5px;
                height: $loaderSize - 5px;
                animation: eg-button-spin 1s linear infinite;
            }
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

        // >>> Style !!!

        // Default
        &.active:not(.yoga):not(.link):not(.disabled),
        &.hover:not(.yoga):not(.link):not(.disabled),
        &:hover:not(.yoga):not(.link):not(.disabled) {
            outline: none;
            box-shadow: var(--btn-default-shadow);
            border: var(--btn-default-border-hover);
            &.primary {
                border: var(--btn-primary-border-hover);
                box-shadow: var(--btn-primary-shadow);
            }
            &.secondary {
                border: var(--btn-secondary-border-hover);
                box-shadow: var(--btn-secondary-shadow);
            }
            &.ternary {
                border: var(--btn-ternary-border-hover);
                box-shadow: var(--btn-ternary-shadow);
            }
            &.light {
                border: var(--btn-light-border-hover);
                box-shadow: var(--btn-light-shadow);
            }
            &.dark {
                border: var(--btn-dark-border-hover);
                box-shadow: var(--btn-dark-shadow);
            }
            &.thick {
                border: var(--btn-thick-border-hover);
                box-shadow: var(--btn-thick-shadow);
                background-color: transparent;
            }
            &.error {
                box-shadow: 0 0 0 .2rem rgba(var(--color-error), 0.3);
            }
            &.warning {
                box-shadow: 0 0 0 .2rem rgba(var(--color-warning), 0.3);
            }
            &.valid {
                box-shadow: 0 0 0 .2rem rgba(var(--color-valid), 0.3);
            }
        }
        &.focus:not(.yoga):not(.link):not(.disabled),
        &:focus:not(.yoga):not(.link):not(.disabled) {
            outline: none;
            box-shadow: var(--btn-default-shadow);
            border: var(--btn-default-border-focus);
            &.primary {
                border: var(--btn-primary-border-focus);
            }
            &.seconday {
                border: var(--btn-secondary-border-focus);
            }
            &.ternary {
                border: var(--btn-ternary-border-focus);
            }
            &.light {
                border: var(--btn-light-border-focus);
            }
            &.dark {
                border: var(--btn-dark-border-focus);
            }
            &.thick {
                border: var(--btn-thick-border-focus);
            }
        }

        &.primary {
            color: var(--color-primary-t);
            background-color: var(--btn-primary-bg);
            border: var(--btn-primary-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-primary-t),.1);
                border-top: $loaderBorder solid var(--color-primary-t);
            }
            .svg-icon svg path {
                fill: rgba(var(--color-primary-t), 0.9);
            }
            &.warning {
                background-color: var(--color-warning);
            }
            &.valid {
                background-color: var(--color-valid);
            }
        }
        &.secondary {
            color: var(--color-secondary-t);
            background-color: var(--btn-secondary-bg);
            border: var(--btn-secondary-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-secondary-t),.1);
                border-top: $loaderBorder solid var(--color-secondary-t);
            }
            .svg-icon svg path {
                fill: rgba(var(--color-secondary-t), 0.9);
            }
        }
        &.ternary {
            color: var(--color-ternary-t);
            background-color: var(--btn-ternary-bg);
            border: var(--btn-ternary-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-ternary-t),.1);
                border-top: $loaderBorder solid var(--color-ternary-t);
            }
            .svg-icon svg path {
                fill: rgba(var(--color-ternary-t), 0.9);
            }
        }
        &.light {
            color: var(--color-light-t);
            background-color: var(--btn-light-bg);
            border: var(--btn-light-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-light-t),.1);
                border-top: $loaderBorder solid var(--color-light-t);
            }
            .svg-icon {
                opacity: 0.5;
                &,
                i {
                    color: rgba(var(--color-light-t), 0.9);
                }
                svg path {
                    fill: rgba(var(--color-light-t), 0.9);
                }
            }
        }
        &.dark {
            color: var(--color-dark-t);
            background-color: var(--btn-dark-bg);
            border: var(--btn-dark-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-dark-t),.1);
                border-top: $loaderBorder solid var(--color-dark-t);
            }
            .svg-icon {
                &,
                i {
                    color: rgba(var(--color-dark-t), 0.9);
                }
                svg path {
                    fill: rgba(var(--color-dark-t), 0.9);
                }
            }
        }
        &.link {
            background-color: transparent;
            text-decoration: underline;
            padding: 0;
            transition: opacity .15s;
            &:not(.disabled).focus,
            &:not(.disabled).active,
            &:not(.disabled):hover,
            &:not(.disabled):focus {
                opacity: 0.6;
                outline: none;
            }
        }
        &.transparent {
            background-color: transparent;
        }




        // error, warning and valid
        &.error {
            color: var(--color-error);
        }
        &.warning {
            color: var(--color-warning);
        }
        &.valid {
            color: var(--color-valid);
        }
        &.primary,
        &.secondary,
        &.ternary,
        &.dark {
            &.error {
                color: var(--color-gray-6);
                background-color: var(--color-error);
            }
            &.warning {
                color: var(--color-gray-6);
                background-color: var(--color-warning);
            }
            &.valid {
                color: var(--color-gray-6);
                background-color: var(--color-valid);
            }
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
        $iconWidth: 2em;
        .svg-icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            bottom: 0;
            width: $iconWidth;
            &.r-icon {
                right: 10px;
            }
            &.l-icon {
                left: 10px;
            }
            svg {
                height: $iconWidth;
                width: $iconWidth;
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

        // states
        &:disabled,
        .disabled {
            opacity: 0.8;
            color: rgba(var(--btn-default-color), 0.5);
            cursor: default;
            &.dark,
            &.primary,
            &.secondary,
            &.ternary {
                color: rgba(var(--color-primary-t), 0.5);
            }
        }

        // special styles
        &.thick {
            color: var(--btn-thick-color);
            background-color: var(--btn-thick-bg);
            border: var(--btn-thick-border);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--btn-thick-color),.1);
                border-top: $loaderBorder solid var(--btn-thick-color);
            }
            .svg-icon svg path {
                fill: rgba(var(--btn-thick-color), 0.9);
            }
            &.error {
                border-color: var(--color-error);
                color: var(--color-error);
            }
            &.warning {
                border-color: var(--color-warning);
                color: var(--color-warning);
            }
            &.valid {
                border-color: var(--color-valid);
                color: var(--color-valid);
            }
        }
        &.yoga {
            $dotSize: 8px;
            background-color: transparent;
            padding-top: 1.5em;
            color: var(--color-black);
            .loader .loader-inside {
                border: $loaderBorder solid rgba(var(--color-black),.1);
                border-top: $loaderBorder solid var(--color-black);
            }
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
                background-color: rgba(var(--color-primary), 0.2);
                border-radius: 50%;
                transform: translateX(-50%);
            }
            transition: opacity .15s;
            &:not(.disabled).focus,
            &:not(.disabled):hover,
            &:not(.disabled):focus {
                opacity: 0.6;
                outline: none;
            }
            &.active {
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
            }
        }

        // no-content corrections
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
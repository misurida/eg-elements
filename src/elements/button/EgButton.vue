<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    // Colors
    $black: #121212;
    $dgray: #3B3B3B;
    $mgray: #e5e5e5;
    $lgray: #f2f2f2;
    $white: #f5f5f5;
    $errorRed: #e02b2b;
    $warningOrange: #c69e33;
    $validGreen: #338633;

    $primary: #9C2727;
    $cPrimary: $white;
    $secondary: #3F2E5E;
    $cSecondary: $white;
    $ternary: #696996;
    $cTernary: $white;
    $light: $lgray;
    $cLight: $black;
    $dark: $dgray;
    $cDark: $white;

    // animations
    $t1: border .2s, box-shadow .1s, background .2s;

    // > Styles
    // default
    $cDefault: $black; // color
    $bgDefault: $mgray; // background-color
    $bDefault: 1px solid transparent; // border
    $bsDefault: 0 0 0 .2rem rgba($bgDefault, 0.3); // box shadow
    $hbDefault: 1px solid rgba($cDefault, 0.1); // hover border
    $fbDefault: 1px solid rgba($cDefault, 0.2); // focus border
    // primary
    $cPrimary: $cPrimary;
    $bgPrimary: $primary;
    $bPrimary: 1px solid transparent;
    $bsPrimary: 0 0 0 .2rem rgba($primary, 0.3);
    $hbPrimary: 1px solid rgba($cPrimary, 0.1);
    $fbPrimary: 1px solid rgba($cPrimary, 0.2);
    // secondary
    $cSecondary: $cSecondary;
    $bgSecondary: $secondary;
    $bSecondary: 1px solid transparent;
    $bsSecondary: 0 0 0 .2rem rgba($secondary, 0.3);
    $hbSecondary: 1px solid rgba($cSecondary, 0.1);
    $fbSecondary: 1px solid rgba($cSecondary, 0.2);
    // ternary
    $cTernary: $cTernary;
    $bgTernary: $ternary;
    $bTernary: 1px solid transparent;
    $bsTernary: 0 0 0 .2rem rgba($ternary, 0.3);
    $hbTernary: 1px solid rgba($cTernary, 0.1);
    $fbTernary: 1px solid rgba($cTernary, 0.2);
    // light
    $cLight: $cLight;
    $bgLight: $light;
    $bLight: 1px solid transparent;
    $bsLight: 0 0 0 .2rem rgba($light, 0.3);
    $hbLight: 1px solid rgba($cLight, 0.1);
    $fbLight: 1px solid rgba($cLight, 0.2);
    // dark
    $cDark: $cDark;
    $bgDark: $dark;
    $bDark: 1px solid transparent;
    $bsDark: 0 0 0 .2rem rgba($dark, 0.3);
    $hbDark: 1px solid rgba($cDark, 0.1);
    $fbDark: 1px solid rgba($cDark, 0.2);
    // thick
    $cThick: $black;
    $bgThick: $lgray;
    $bThick: 2px solid lighten($black, 60%);
    $bsThick: 0 0 0 .2rem rgba(lighten($black, 60%), 0.3);
    $hbThick: $bThick;
    $fbThick: $bThick;

    // > Types
    $pDefault: 0.625em 1.4em;
    $fsDefault: 1rem;
    // small
    $pSmallV: 0.417em;
    $pSmallH: 1.4em;
    $pSmall: $pSmallV $pSmallH;
    $fsSmall: 0.75rem;
    // big
    $pBig: 0.675em 1.5em;
    $fsBig: 1.3rem;
    // thin
    $pThin: 0.3em 0.7em;
    // fat
    $pFat: 1em 2.5em;
    // round
    $roundRadius: 20px;
    // empty
    $pEmpty: 0.334em;

    .eg-button {
        // properties
        position: relative;
        cursor: pointer;
        font-size: $fsDefault;
        line-height: $fsDefault;
        padding: $pDefault;
        background-color: $bgDefault;
        border: $bDefault;
        border-radius: 5px;
        color: $cDefault;
        font-family: 'Lato', sans-serif;

        // transition
        transition: $t1;

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
                border: $loaderBorder solid rgba($cDefault,.1);
                border-top: $loaderBorder solid $cDefault;
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
            box-shadow: $bsDefault;
            border: $hbDefault;
            &.primary {
                border: $hbPrimary;
                box-shadow: $bsPrimary;
            }
            &.secondary {
                border: $hbSecondary;
                box-shadow: $bsSecondary;
            }
            &.ternary {
                border: $hbTernary;
                box-shadow: $bsTernary;
            }
            &.light {
                border: $hbLight;
                box-shadow: $bsLight;
            }
            &.dark {
                border: $hbDark;
                box-shadow: $bsDark;
            }
            &.thick {
                border: $bThick;
                box-shadow: $bsThick;
                background-color: transparent;
            }
            &.error {
                box-shadow: 0 0 0 .2rem rgba($errorRed, 0.3);
            }
            &.warning {
                box-shadow: 0 0 0 .2rem rgba($warningOrange, 0.3);
            }
            &.valid {
                box-shadow: 0 0 0 .2rem rgba($validGreen, 0.3);
            }
        }
        &.focus:not(.yoga):not(.link):not(.disabled),
        &:focus:not(.yoga):not(.link):not(.disabled) {
            outline: none;
            box-shadow: $bsDefault;
            border: $fbDefault;
            &.primary {
                border: $fbPrimary;
            }
            &.seconday {
                border: $fbSecondary;
            }
            &.ternary {
                border: $fbTernary;
            }
            &.light {
                border: $fbDark;
            }
            &.dark {
                border: $fbDark;
            }
            &.thick {
                border: $bThick;
            }
        }

        &.primary {
            color: $cPrimary;
            background-color: $bgPrimary;
            border: $bPrimary;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cPrimary,.1);
                border-top: $loaderBorder solid $cPrimary;
            }
            .svg-icon svg path {
                fill: rgba($cPrimary, 0.9);
            }
            &.warning {
                background-color: $warningOrange;
            }
            &.valid {
                background-color: $validGreen;
            }
        }
        &.secondary {
            color: $cSecondary;
            background-color: $bgSecondary;
            border: $bSecondary;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cSecondary,.1);
                border-top: $loaderBorder solid $cSecondary;
            }
            .svg-icon svg path {
                fill: rgba($cSecondary, 0.9);
            }
        }
        &.ternary {
            color: $cTernary;
            background-color: $bgTernary;
            border: $bTernary;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cTernary,.1);
                border-top: $loaderBorder solid $cTernary;
            }
            .svg-icon svg path {
                fill: rgba($cTernary, 0.9);
            }
        }
        &.light {
            color: $cLight;
            background-color: $bgLight;
            border: $bLight;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cLight,.1);
                border-top: $loaderBorder solid $cLight;
            }
            .svg-icon {
                opacity: 0.5;
                &,
                i {
                    color: rgba($cLight, 0.9);
                }
                svg path {
                    fill: rgba($cLight, 0.9);
                }
            }
        }
        &.dark {
            color: $cDark;
            background-color: $bgDark;
            border: $bDark;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cDark,.1);
                border-top: $loaderBorder solid $cDark;
            }
            .svg-icon {
                &,
                i {
                    color: rgba($cDark, 0.9);
                }
                svg path {
                    fill: rgba($cDark, 0.9);
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
            color: $errorRed;
        }
        &.warning {
            color: $warningOrange;
        }
        &.valid {
            color: $validGreen;
        }
        &.primary,
        &.secondary,
        &.ternary,
        &.dark {
            &.error {
                color: $lgray;
                background-color: $errorRed;
            }
            &.warning {
                color: $lgray;
                background-color: $warningOrange;
            }
            &.valid {
                color: $lgray;
                background-color: $validGreen;
            }
        }

        // types
        &.small {
            height: 32px;
            font-size: $fsSmall;
            line-height: $fsSmall;
            &:not(.link) {
                padding: $pSmall;
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
                padding-left: $pSmallH;
                padding-right: $pSmallH;
            }
        }
        &.big {
            padding: $pBig;
            font-size: $fsBig;
            line-height: $fsBig;
        }
        &.thin {
            padding: $pThin;
        }
        &.fat {
            padding: $pFat;
        }
        &.square {
            border-radius: 0;
        }
        &.round {
            border-radius: $roundRadius;
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
                    fill: rgba($cDefault,0.75);
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
            color: rgba($cDefault, 0.5);
            cursor: default;
            &.dark,
            &.primary,
            &.secondary,
            &.ternary {
                color: rgba($cPrimary, 0.5);
            }
        }

        // special styles
        &.thick {
            color: $cThick;
            background-color: $bgThick;
            border: $bThick;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($cThick,.1);
                border-top: $loaderBorder solid $cThick;
            }
            .svg-icon svg path {
                fill: rgba($cThick, 0.9);
            }
            &.error {
                border-color: $errorRed;
                color: $errorRed;
            }
            &.warning {
                border-color: $warningOrange;
                color: $warningOrange;
            }
            &.valid {
                border-color: $validGreen;
                color: $validGreen;
            }
        }
        &.yoga {
            $dotSize: 8px;
            background-color: transparent;
            padding-top: 1.5em;
            color: $black;
            .loader .loader-inside {
                border: $loaderBorder solid rgba($black,.1);
                border-top: $loaderBorder solid $black;
            }
            .svg-icon svg path {
                fill: darken($mgray, 40%);
            }
            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 50%;
                width: $dotSize;
                height: $dotSize;
                background-color: rgba($primary, 0.2);
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
                    background-color: $primary;
                }
            }
            &.error {
                color: $errorRed;
                &::before {
                    background-color: $errorRed;
                }
            }
            &.warning {
                color: $warningOrange;
                &::before {
                    background-color: $warningOrange;
                }
            }
            &.valid {
                color: $validGreen;
                &::before {
                    background-color: $validGreen;
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
            padding: $pEmpty;
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
<style lang="scss">
    //--- Color variables ---
    $lmgray: #E3E3E3;
    $lgray: #C4C4C4;
    $red: #9C2727;
    $red2: #812323;
    $mgray: #A8A8A8;
    $dgray: #6d6d6d;
    $llgray: #f2f2f2;
    $black: #2A2A2A;

    //--- Style variables ---
    // (C for Color, BC for Background Color, BS for Box Shadow,
    // B for Border, FS for Font Size, P for Padding)
    // default
    $defBorder: none;
    $defBorderRadius: none;
    $defPadding: 0.5rem 1.2rem;
    $defFontSize: 1rem;
    $defBC: $llgray;
    // default hover
    $defBS: 0 0 0 .2rem rgba(0,0,0,0.05);
    // transparent
    $transparentC: $mgray;
    $transparentBC: transparent;
    $transparentBS: 0 0 0 .2rem transparent;
    // transparent hover
    $transparentHoverC: $black;
    $transparentHoverBC: transparent;
    $transparentHoverBS: none;
    // thin
    $thinC: $mgray;
    $thinBC: transparent;
    $thinB: 1px solid rgba($thinC, .5);
    // red
    $redC: $llgray!important;
    $redBC: $red!important;
    $redBS: 0 0 0 .2rem transparent;
    // red hover
    $redHoverBC: $red2;
    $redHoverBS: 0 0 0 .2rem rgba(220,43,85,.25);
    // small
    $smallFS: 0.8em;
    $smallP: 4px 15px;
    // gray
    $grayBC: $lmgray;
    // gray hover
    $grayHoverBC: transparent;
    $grayHoverBS: none;
    // yoga
    $yogaC: $lgray;
    $yogaBC: transparent;
    $yogaBS: none;
    $yogaP: 20px 5px 0 5px;
    $yogaDotC: $llgray;
    // yoga hover
    $yogaHoverC: $dgray;
    $yogaHoverBC: transparent;
    $yogaHoverBS: none;
    $yogaHoverDotC: $lgray;
    $yogaSelectedC: $red;

    //--- Loader variables ---
    $loaderSize: 20px;
    $loaderBorder: 2px;
    @keyframes eg-button-spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }

    .eg-button {
        // loader properties
        .loader {
            position: relative;
            display: inline-block;
            width: $loaderSize;
            height: $loaderSize;
            overflow: hidden;
            transition: .2s;
            max-width: $loaderSize;
            left: 10px;
            &.hidden {
                max-width: 0;
            }
            .loader-inside {
                position: relative;
                top: 0;
                left: 0;
                display: block;
                border: $loaderBorder solid rgba(#fff,.2);
                border-radius: 50%;
                border-top: $loaderBorder solid $dgray;
                width: $loaderSize;
                height: $loaderSize;
                animation: eg-button-spin 1s linear infinite;
            }
        }

        // button properties
        border: $defBorder;
        border-radius: $defBorderRadius;
        cursor: pointer;
        transition: color .2s;
        position: relative;
        color: $black;
        box-sizing: border-box;
        font-family: inherit;
        display: flex;
        align-items: center;
        padding: $defPadding;
        font-size: $defFontSize;
        line-height: 1.6;
        background-color: $defBC;
        user-select: none;
        &:hover:not(.disabled),
        &:focus:not(.disabled) {
            outline: none;
            background-color: $llgray;
            box-shadow: $defBS;
        }
        svg {
            &:not(.caret-right) {
                left: 15px;
            }
            &.caret-right {
                right: 15px;
            }
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            &.reverse {
                transform: translateY(-50%) rotate(180deg);
            }
        }
        path {
            fill: $dgray;
        }
        &.transparent {
            color: $transparentC;
            background-color: $transparentBC;
            box-shadow: $transparentBS;
            path {
                fill: $mgray;
                transition: all .2s;
            }
            &:hover,
            &:focus {
                color: $transparentHoverC;
                background-color: $transparentHoverBC;
                box-shadow: $transparentHoverBS;
                path {
                    fill: $transparentHoverC;
                }
            }
        }
        &.thin {
            border: $thinB;
            color: $thinC;
            background-color: $thinBC;
            path {
                fill: $thinC;
            }
        }
        &.red {
            color: $redC;
            background-color: $redBC;
            path {
                fill: $redC;
            }
            &:focus,
            &:hover {
                background-color: $red2;
                box-shadow: $redHoverBS;
            }
        }
        &.wide {
            width: 100%;
            justify-content: center;
            &.all-width {
                margin-top: 5px;
            }
        }
        &.has-caret {
            &:not(.caret-right) {
                padding-left: 40px;
            }
            &.caret-right {
                padding-right: 40px;
                justify-content: right;
            }
            justify-content: left;
        }
        &.small {
            font-size: $smallFS;
            padding: $smallP;
            &.rc {
                margin-top: 10px;
            }
            .loader {
                left: 5px;
                width: 15px;
                height: 15px;
                .loader-inside {
                    border: 2px solid rgba(#fff,.2);
                    border-top: 2px solid $dgray;
                    width: 15px;
                    height: 15px;
                }
            }
        }
        &.left {
            float: left!important;
        }
        &.right {
            float: right!important;
            margin-left: 5px;
        }
        &.star {
            padding-left: 20px;
        }
        &.flex {
            flex: 1;
        }
        &.disabled {
            opacity: .5;
            cursor: default;
            &:focus,
            &:hover {
                background-color: inherit;
                opacity: .5;
                box-shadow: 0 0 0 .2rem transparent;
            }
        }
        &.square {
            border-radius: 0;
            width: calc(100% - 10px);
            margin: 5px;
        }
        &.tall {
            padding-top: 20px;
            padding-bottom: 20px;
            margin-top: 20px;
        }
        &.link {
            padding: 0;
            margin: 0 10px;
            text-decoration: underline;
            background-color: transparent;
            &.small {
                font-size: 1em;
            }
            &:hover {
                background-color: transparent;
                box-shadow: none;
                color: $black;
            }
            &:focus {
                background-color: transparent;
                box-shadow: none;
                opacity: .5;
            }
        }
        &.gray {
            background-color: $grayBC;
            &:hover {
                background-color: $grayHoverBC;
                box-shadow: $grayHoverBS;
            }
        }
        &.yoga {
            color: $yogaC;
            background-color: $yogaBC;
            padding: $yogaP;
            box-shadow: $yogaBS;
            position: relative;
            justify-content: center;
            transition: color .2s;
            &::before {
                content: '';
                height: 6px;
                width: 6px;
                position: absolute;
                top: 5px;
                left: 50%;
                transform: translateX(-50%);
                background-color: $yogaDotC;
                border-radius: 50%;
                transition: all .2s;
            }
            &:hover,
            &:focus {
                box-shadow: $yogaHoverBS;
                background-color: $yogaHoverBC;
                color: $yogaHoverC;
                &::before {
                    background-color: $yogaHoverDotC;
                }
            }
            &.selected {
                color: $yogaSelectedC;
                &::before {
                    background-color: $yogaSelectedC;
                }
            }
        }
    }
</style>

<template>
    <button :disabled="disabled" class="eg-button" :class="{'has-caret':caret||caretReverse||caretRight, transparent, red, wide, small, left, right, thin, star, selected, yoga, disabled, square, tall, link, gray, 'caret-right':caretRight}" @click="$emit('click')">
        <svg v-if="caret || caretReverse" :class="{reverse:caretReverse}" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7L0.499999 13.9282L0.5 0.0717963L14 7Z"/>
        </svg>
        <span>
            <span v-if="star&&selected">&#9733;</span>
            <span v-else-if="star">&#10032;</span>
            <slot></slot>
        </span>
        <div class="loader" :class="{hidden:!loading}">
            <div class="loader-inside"></div>
        </div>
        <svg class="caret-right" v-if="caretRight" :class="{reverse:caretReverse}" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7L0.499999 13.9282L0.5 0.0717963L14 7Z"/>
        </svg>
    </button>
</template>

<script>
    export default {
        props: {
            // main
            loading: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
            // secondary
            caret: {type: Boolean, default: false},
            caretReverse: {type: Boolean, default: false},
            caretRight: {type: Boolean, default: false},
            selected: {type: Boolean, default: false},
            star: {type: Boolean, default: false},
            // style
            transparent: {type: Boolean, default: false},
            gray: {type: Boolean, default: false},
            red: {type: Boolean, default: false},
            thin: {type: Boolean, default: false},
            link: {type: Boolean, default: false},
            yoga: {type: Boolean, default: false},
            // size and position
            wide: {type: Boolean, default: false},
            small: {type: Boolean, default: false},
            left: {type: Boolean, default: false},
            right: {type: Boolean, default: false},
            square: {type: Boolean, default: false},
            tall: {type: Boolean, default: false},
        }
    }
</script>
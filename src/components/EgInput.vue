<style lang="scss">
    $tt: .15s; // transition time

    .eg-input {
        display: inline-block;
        font-size: 1em;
        vertical-align: top;
        border-radius: .25em;
        &.wide {
            width: 100%;
        }

        .eg-input-container {
            height: 100%;
        }

        &.button-style {
            position: relative;
        }

        .label-container {
            display: flex;
            align-items: center;
            label {
                flex: 1;
            }
        }

        // inner flex content
        .egi-inner {
            font-size: 1em;
            display: flex;
            align-items: stretch;
            border-radius: inherit;
            cursor: text;
            flex: 1;
            width: 100%;
            &.no-edit {
                cursor: pointer;
            }
            & > div {
                display: flex;
                align-items: center;
                position: relative;
                overflow: hidden;
            }
        }
        .fake-wrapper {
            flex: 1;
            &.smallest {
                //width: 1em;
            }
        }
        .custom-fake-inner {
            .custom-item {
                overflow: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                scrollbar-width: none;
                ::-webkit-scrollbar {
                    display: none;
                }
            }
        }
        .fake-input,
        textarea,
        input {
            font-size: 1em;
            flex: 1;
            width: inherit;
            line-height: 1.2;
            z-index: 0;
            box-sizing: content-box;
            &:hover,
            &:active,
            &:focus {
                outline: none;
            }
            &.invisible {
                width: 0;
            }
            &::-webkit-input-placeholder { /* Edge */
                transition: color $tt;
            }
            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                transition: color $tt;
            }
            &::placeholder {
                transition: color $tt;
            }
        }
        .fake-input {
            opacity: 0;
            width: 100%;
            cursor: pointer;
        }
        .fake-value {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 5px;
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            align-items: center;
            &.empty {
                width: 1em;
                opacity: 0;
            }
        }
        .fake-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            line-height: 1;
            height: 100%;
            padding: 5px;
            display: flex;
            align-items: center;
            user-select: none;
            box-sizing: border-box;
        }

        // input icons
        .eg-icon {
            height: 1em;
            display: flex;
            align-items: center;
            color: currentColor;
            transition: opacity .3s, transform .2s;
            transform: scale(1);
            svg {
                vertical-align: middle;
                height: 1em;

            }
        }
        .egi-cross-icon {
            opacity: 0;
            width: 0;
            cursor: text;
            transition: all .3s;
            &.active {
                opacity: 1;
                pointer-events: all;
                cursor: pointer;
            }
        }
        .egi-icons-list {
            display: flex;
            height: 100%;
            align-items: center;
        }
        .egi-left-icon-slot,
        .egi-main-icon-slot {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 16px;
            height: 100%;
            .concealed {
                opacity: 0;
                transform: scale(0.8);
            }
        }
        .egi-main-icon {
            cursor: pointer;
        }

        // color
        &.color {
            input {
                cursor: pointer;
            }
        }

        // textarea transformations
        &.textarea {
            .egi-icons-right-list,
            .egi-icons-left-list {
                position: absolute;
                top: 0;
                bottom: 0;
            }
            .egi-cross-icon {
                position: absolute;
                left: 0;
                top: 12px;
                &+.eg-icon {
                    margin: 0;
                    padding: 0;
                }
            }
            .egi-icons-right-list {
                right: 0;
            }
            .egi-icons-left-list {
                left: 0;
            }
        }

        .egi-messages {
            li {
                line-height: 1;
            }
            &.state-messages {
                padding: 0;
                li {
                    margin: 0;
                    flex: 1;
                }
            }
        }

        .floating-menu {
            max-height: 50vh;
        }

        // element states
        &:hover:not(.disabled) {
            .egi-inner:not(.empty) {
                .egi-icons-right-list {
                    .egi-cross-icon {
                        opacity: 1;
                        width: auto;
                    }
                    &:not(.crossless) {
                        .egi-main-icon {
                            width: 0;
                            opacity: 0;
                        }
                    }
                }
            }
        }

        .egi-ghost-text {
            position: absolute;
            z-index: -1;
            opacity: 0;
            font-size: 1.05em;
        }

        .egi-messages {
            transition: color $tt;
            li {
                margin: 0;
            }
            &.state-messages {
                list-style-type: none;
                padding: 0;
                opacity: 1;
                li {
                    display: flex;
                    align-items: baseline;
                    span:not(.eg-icon) {
                        flex: 1;
                    }
                }
                .eg-icon {
                    display: flex;
                    align-items: center;
                    align-self: center;
                    svg {
                        position: relative;
                    }
                }
            }
        }

        .egi-counter {
            float: right;
            transition: color $tt, opacity $tt;
        }

        // border and focus wrapper
        .input-shell {
            display: flex;
            position: relative;
            border: none;
            transition: color $tt, border $tt, box-shadow $tt;
            cursor: pointer;
        }

        &.multiple {
            .egi-inner:not(.empty) {
                width: 30px;
            }
            .fake-input {
                flex: 1;
                padding-left: 0;
                padding-right: 0;
                width: 100%;
            }
        }

        // STATES
        &.disabled {
            .input-shell {
                cursor: default;
                & > * {
                    pointer-events: none;
                }
                input {
                    &::-webkit-input-placeholder { color: rgba(0,0,0,.2); } /* Edge */
                    &:-ms-input-placeholder { color: rgba(0,0,0,.2); } /* Internet Explorer 10-11 */
                    &::placeholder { color: rgba(0,0,0,.2); }
                }
            }
            &:hover {
                .egi-inner {
                    .egi-icons-left-list,
                    .egi-icons-right-list {
                        .concealable {
                            opacity: 1;
                            transform: none;
                        }
                    }
                }
            }
        }

        // modifyers
        &.wide {
            display: inline-block;
            width: 100%;
        }
    }
    .eg-message {
        transition: color $tt;
    }
    .egi-label {
        margin: 0;
    }
    .egi-label-wrapper {
        display: flex;
        align-items: center;
        label {
            margin: 0;
        }
    }
</style>

<template>
    <div
            class="eg-input-container"
            :class="{
                'eg-input':inputClass,
                focus,
                disabled,
                wide,
                primary,
                error:_error,
                warning:_warning,
                success:_success,
                wide,
                slim,
                textarea:isTextarea,
                color:isColor
            }"
            :id="_id+'-wrapper'">
        <slot name="above"></slot>
        <div class="label-container" v-if="label">
            <div class="egi-label-wrapper">
                <label :for="_id" class="egi-label">{{ label }}</label>
                <help-icon :text="helpText"></help-icon>
            </div>
            <slot name="after-label"></slot>
        </div>
        <div class="egi-ghost-text" v-if="flex">{{ value || placeholder }}</div>
        <div :class="{focus, 'input-shell':!buttonStyle}" @mousedown="hMouseDown">
            <div v-if="buttonStyle" class="eg-input-button-wrapper" @mousedown.stop="hBtnMouseDown">
                <eg-button
                           :primary="primary"
                           :id="_id"
                           :active="focus"
                           @click.prevent="hBtnClick"
                           @mousedown.prevent.stop
                           @keyup="hKeyup"
                           @escape="hEscape"
                           @enter="hEnter"
                           icon="svg:caret"
                           @focus="hFocus"
                           @blur="hBlur">
                    <template v-if="value">{{ value }}</template>
                    <slot name="default" v-else-if="!!$slots.default"></slot>
                    <slot name="default" v-else>{{ placeholder }}</slot>
                </eg-button>
            </div>
            <template v-else>
                <slot name="taglist"></slot>
                <div class="egi-inner" :class="{'no-edit':!editable, empty:_empty&&!emptyCross}" @click="hClick">

                    <!-- Left side -->
                    <div class="egi-icons-left-list" :class="{crossless:!cross}" v-if="showLeftIcon">
                        <div class="egi-icons-list" v-if="lIcons.length > 0">
                            <eg-icon v-for="i in lIcons" :icon="i" :key="i" :clickable="clickableIcon" :flip="flipIcon" @click="hIconsClick($event,i)"></eg-icon>
                        </div>
                        <div class="egi-left-icon-slot" v-if="(lIcon)">
                            <eg-icon :flip="flipIcon" :icon="lIcon" :clickable="clickableIcon" @click="hCross" stop></eg-icon>
                        </div>
                    </div>
                    <div class="egi-prefix" :class="{'has-left-icon':showLeftIcon}" v-if="hasPrefix" @click="hClick($event)">
                        <span v-if="prefix" v-html="prefix"></span>
                        <slot v-if="!!$slots.prefix"></slot>
                    </div>

                    <!-- Custom input -->
                    <template v-if="!!$slots.input">
                        <slot name="input"></slot>
                    </template>

                    <!-- Regular input -->
                    <template v-else>
                        <textarea
                                v-if="isTextarea"
                                :id="_id"
                                @change="hChange"
                                @click.stop="hClick"
                                @input="hInput"
                                @focus="hFocus"
                                @focusout="hBlur"
                                @keyup="hKeyup"
                                @keydown="hKeydown"
                                @mousedown.stop
                                :tabindex="tabindex"
                                :placeholder="placeholder"
                                :value="value"
                                :disabled="disabled"
                                :class="{'has-left-icon':showLeftIcon, 'has-right-icon':showRightIcon}"
                                :cols="cols"
                                :rows="rows">
                    </textarea>
                        <input
                                v-else-if="editable"
                                @change="hChange"
                                @click.stop="hClick"
                                @input="hInput"
                                @focus="hFocus"
                                @focusout="hBlur"
                                @keyup="hKeyup"
                                @keydown="hKeydown"
                                @mousedown.stop
                                :tabindex="tabindex"
                                :id="_id"
                                :style="inputStyle"
                                :placeholder="_placeholder"
                                :value="value"
                                :disabled="disabled"
                                :type="type"
                                :min="min"
                                :max="max"
                                :step="step"
                                :class="{'has-left-icon':showLeftIcon, 'has-right-icon':showRightIcon}"
                                autocomplete="new-password">
                        <div v-else class="fake-wrapper">
                            <div class="custom-fake-inner" @click="hFakeClick" v-if="!!$slots.display">
                                <input :id="_id" :style="inputStyle" type="text" class="fake-input" @focusout="hBlur" @focus="hFocus" @keyup="hKeyup">
                                <slot name="display"></slot>
                            </div>
                            <div class="custom-fake-inner" @click="hFakeClick" v-else>
                                <input :id="_id" :style="inputStyle" type="text" class="fake-input" @focusout="hBlur" @focus="hFocus" @keyup="hKeyup" :tabindex="tabindex">
                                <span @click="hFakeClick" v-if="value" class="fake-value" :class="{empty:_empty}">{{ value }}</span>
                                <span @click="hFakeClick" v-else class="fake-placeholder" v-html="placeholder"></span>
                            </div>
                        </div>
                    </template>

                    <!-- Right side -->
                    <div class="egi-suffix" :class="{'has-right-icon':showRightIcon}" v-if="hasSuffix">
                        <span v-if="suffix" v-html="suffix"></span>
                        <slot v-if="!!$slots.suffix"></slot>
                    </div>
                    <div class="egi-icons-right-list" @click="hFakeClick" :class="{crossless:!cross}" v-if="showRightIcon">
                        <div class="egi-main-icon-slot" v-if="(cross||hasRightIcon)">
                            <eg-icon v-if="hasRightIcon" class="egi-main-icon" :class="{'default-caret':icon==='svg:caret'}" :clickable="clickableIcon" :flip="flipIcon" :icon="icon" @click="hIconsClick($event)"></eg-icon>
                            <eg-icon v-if="(!_empty||emptyCross)&&cross" class="egi-cross-icon" :flip="flipIcon" svg icon="scross" clickable @click="hCross" stop></eg-icon>
                        </div>
                        <div class="egi-icons-list" v-if="icons.length > 0">
                            <eg-icon v-for="i in icons" :icon="i" :key="i" :clickable="clickableIcon" :flip="flipIcon" @click="hIconsClick($event,i)"></eg-icon>
                        </div>
                        <div v-if="plusMinus" class="plus-minus-wrapper">
                            <div class="button-shell" @mousedown="hUpClick" @click="hRelease" @mouseleave="hRelease" :class="{active:keyUpDown}">+</div>
                            <div class="button-shell" @mousedown="hDownClick" @click="hRelease" @mouseleave="hRelease" :class="{active:keyDownDown}">-</div>
                        </div>
                    </div>
                </div>
            </template>
            <slot name="menu"></slot>
        </div>
        <span class="egi-counter" v-if="counter && !counterHide">{{ computeCounterValue() }} <span v-if="counterMax">/ {{ counterMax }}</span></span>
        <div class="egi-message" v-if="message">{{ message }}</div>
        <div class="egi-message error" v-if="errorMsg">{{ errorMsg }}</div>
        <ul class="egi-messages" v-if="messages.length>0">
            <li v-for="m in messages" :key="m">{{ m }}</li>
        </ul>
        <ul class="egi-messages state-messages" :class="{error:!_warning&&!_success, warning:_warning, success:_success}" v-if="(_error||_warning||_success)&&(errors.length>0||errorMessages.length>0)">
            <template v-if="errors.length > 0">
                <li v-for="m in errors" :key="m">
                    <eg-icon svg icon="error"></eg-icon>
                    <span>{{ m }}</span>
                </li>
            </template>
            <template v-else>
                <li v-for="m in errorMessages" :key="m.message">
                    <eg-icon v-if="m.state === 'success'" icon="success"></eg-icon>
                    <eg-icon v-else-if="m.state === 'warning'" icon="warning"></eg-icon>
                    <eg-icon v-else icon="error"></eg-icon>
                    <span>{{ m.message }}</span>
                </li>
            </template>
        </ul>
        <slot name="below"></slot>
    </div>
</template>

<script>
    import EgIcon from './EgIcon'
    import EgButton from './EgButton'

    export default {
        components: { EgIcon, EgButton },
        props: {
            // main
            value: {default: null},
            type: {
                type: String,
                default: "text",
                validator: (prop) => [
                    'textarea',
                    'color',
                    'date',
                    'datetime-local',
                    'file',
                    'month',
                    'number',
                    'password',
                    'range',
                    'search',
                    'tel',
                    'text',
                    'time',
                    'url',
                    'email',
                    'week'
                ].indexOf(prop) >= 0
            },
            id: { type: String, default: null},
            label: {type: String, default: null},
            placeholder: {type: String, default: null},
            disabled: {type: Boolean, default: false},

            // text helpers
            prefix: {type: String, default: null},
            suffix: {type: String, default: null},
            message: {type: String, default: null},
            messages: {type: Array, default() {return []}},
            helpText: {type: String, default: null},

            //// state related text helpers
            errorMsg: {type: String, default: null},
            errors: {type: Array, default() {return []}},

            //// counter related text helpers
            counter: {type: Boolean, default: false},
            counterMax: {type: Number, default: 0},
            counterLock: {type: Boolean, default: false},
            countWords: {type: Boolean, default: false},
            counterWarn: {type: Boolean, default: true},
            counterHide: {type: Boolean, default: false},
            countWordsSeparator: {type: String, default: " "},

            // styles
            buttonStyle: {type: Boolean, default: false},
            primary: {type: Boolean, default: false},
            slim: {type: Boolean, default: false},

            // state
            loading: {type: Boolean, default: false},
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},

            // icons
            icon: {type: String, default: null},
            lIcon: {type: String, default: null},
            icons: {type: Array, default() {return []}},
            lIcons: {type: Array, default() {return []}},
            clickableIcon: {type: Boolean, default: false},

            //// special icons
            flipIcon: {type: Boolean, default: false},
            plusMinus: {type: Boolean, default: false},

            // validation
            regexList: {type: Array, default() {return []}},

            // helpers
            //// interactivity
            autoFocus: {type: Boolean, default: false},
            editable: {type: Boolean, default: true},
            cross: {type: Boolean, default: true},
            emptyCross: {type: Boolean, default: false},

            //// scaffolding
            inputClass: {type: Boolean, default: true},
            empty: {default: undefined},
            emptyValue: {default: null},
            tabindex: {default: null},

            //// sizing
            wide: {type: Boolean, default: false},
            flex: {type: Boolean, default: false},
            baseMin: {type: Number, default: 50},
            baseMax: {type: Number, default: 500},

            // textarea specific
            rows: {default: 2},
            cols: {default: null},
            minHeight: {type: Number, default: 40},
            newLineShiftOnly: {type: Boolean, default: false},

            // range type specifics
            min: {default: null},
            max: {default: null},
            step: {default: null},

        },
        data() {
            return {
                focus: false, // if the field is in focus state
                textWidth: 0, // to current input string width updated when the value changes
                localBaseWidth: 0, // the base width computed from the placeholder to use instead if greater than the one provided
                preventBlur: false, // flip to prevent the blur to loose focus when clicking on another field element
                errorMessages: [], // for the validation
                messagesTrash: [], // for the validation (fading messages)
                errorFadeTimer: null,
                keyUpDown: false,
                keyDownDown: false,
                clickRepeatTimer1: null,
                clickRepeatTimer2: null,
                lock: false
            }
        },
        methods: {
            // handlers
            hBtnMouseDown(e) {
                this.hMouseDown(e);
                if(this.focus) {
                    this.hBlur(e);
                }
            },
            hBtnClick(e) {
                this.hClick(e);
            },
            hFakeClick(e) {
                this.$emit('fakeClick',e);
            },
            hIconsClick(e,i) {
                if(!i) {
                    if(this.icon) e.icon = this.icon;
                }
                else {
                    e.icon = i;
                }
                this.$emit('iconClick', e);
            },
            hChange(e) {
                this.$emit('change', e);
            },
            hInput(e) {
                let v = e.target.value;
                this.errorMessages = [];

                // validation
                if(this.regexList.length > 0 && v) {
                    for(let i=0; i<this.regexList.length; i++) {
                        let r = this.regexList[i];
                        if(r.regex instanceof RegExp && !r.regex.test(v)) {
                            if(r.strong) {
                                if(r.message) {
                                    this.errorMessages.push(r);
                                    this.messagesTrash.push(r.message);
                                }
                                this.lock = true;
                            }
                            else {
                                this.errorMessages.push(r);
                            }

                        }
                    }
                    // strong validation messages are faded
                    if(this.errorFadeTimer === null) {
                        this.errorFadeTimer = setTimeout(() => {
                            this.errorMessages = this.errorMessages.filter(m => this.messagesTrash.indexOf(m.message) < 0 )
                            this.errorFadeTimer = null;
                            this.messagesTrash = [];
                        }, 2200);
                    }
                }

                // counter validation
                if(v && this.counter && this.counterLock && this.computeCounterValue(v) > this.counterMax) {
                    // the user can remove characters
                    if(v.length > this.value.length) this.lock = true;
                }

                // emitting the new value
                if(!this.lock) this.$emit('input', v);
            },
            hFocus(e) {
                if(!this.disabled) {
                    if(!this.focus)
                        this.$emit('focus', e);
                    this.focus = true;
                    this.doFocus();
                }
            },
            hBlur(e) {
                if(this.preventBlur) {
                    setTimeout(() => {
                        this.preventBlur = false;
                        this.focus = true;
                        this.doFocus();
                    },0);
                }
                else {
                    this.focus = false;
                    this.$emit('blur', e);
                }
            },
            doFocus() {
                let e = document.getElementById(this._id);
                if(e) e.focus();
            },
            hMouseDown(e) {
                this.preventBlur = true;
                this.$emit('mousedown', e);
                if(document.activeElement.id !== this._id) {
                    setTimeout(() => {
                        this.preventBlur = false;
                        this.doFocus();
                    }, 0);
                }
            },
            hClick(e) {
                if(!this.disabled) {
                    if(this.buttonStyle) {
                        this.doFocus()
                    }
                    else {
                        this.$emit('click', e);
                        this.resetKeyMarkers();
                    }
                }
            },
            hCross(e) {
                if(!this.disabled) {
                    this.errorMessages = [];
                    this.$emit('cross', this.value);
                    this.$emit('input', this.emptyValue);
                    this.hFocus(e);
                    if(this.isTextarea) {
                        this.$nextTick(() => {
                            this.handleAutoResize({
                                target: document.getElementById(this._id)
                            });
                        });
                    }
                    this.$nextTick(() => {
                        // blur to hide the select floating menu
                        document.activeElement.blur();
                    });
                }
            },
            hEscape(e) {
                if(this.cross) {
                    this.hCross();
                }
                this.$emit('escape', e);
            },
            hEnter(e) {
                this.$emit('enter', e);
            },
            hDownClick(e) {
                this.$emit('down', e);
                this.clickRepeatTimer1 = setTimeout(() => {
                    this.clickRepeatTimer2 = setInterval(() => {
                        this.$emit('down', e);
                    }, 50);
                }, 500);
            },
            hUpClick(e) {
                this.$emit('up', e);
                this.clickRepeatTimer1 = setTimeout(() => {
                    this.clickRepeatTimer2 = setInterval(() => {
                        this.$emit('up', e);
                    }, 50);
                }, 500);
            },
            hRelease() {
                clearTimeout(this.clickRepeatTimer1);
                clearInterval(this.clickRepeatTimer2);
                this.clickRepeatTimer1 = null;
                this.clickRepeatTimer2 = null;
            },
            hKeydown(e) {
                // special case for the newLineShiftOnly prevention
                this.lock = this.newLineShiftOnly && (e.keyCode === 1 || e.key === "Enter") && !e.shiftKey;

                if((e.keyCode === 38 || e.key === "ArrowUp")) {
                    this.keyUpDown = true;
                    this.$emit('up', e);
                }
                else if((e.keyCode === 40 || e.key === "ArrowDown")) {
                    this.keyDownDown = true;
                    this.$emit('down', e);
                }
                this.$emit('keydown', e);
            },
            hKeyup(e) {
                if(e.keyCode === 27) {
                    this.hEscape(e);
                }
                else if(e.keyCode === 13) {
                    this.hEnter(e);
                }
                else {
                    this.$emit('keyup', e);
                }
                this.resetKeyMarkers();
            },

            // functions
            computeCounterValue(val) {
                let v = val || this.value;
                if(v) {
                    if(this.countWords) {
                        let sep = this.countWordsSeparator;
                        let cleanString = v.split(sep).filter(Boolean).join(sep);
                        return cleanString.split(this.countWordsSeparator).length;
                    }
                    else {
                        return this.countWords ? v.trim().length : v.length;
                    }
                }
                return 0;
            },
            resetKeyMarkers() {
                this.keyUpDown = false;
                this.keyDownDown = false;
            },

            // textarea functions
            handleAutoResize(e) {
                let el = document.getElementById(this._id);
                let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                if(el) {
                    let min = this.minHeight;
                    let computedMin = (parseInt(style) * parseInt(this.rows) * 2);
                    if(computedMin > min) min = computedMin;
                    e.target.style.height = 'auto';
                    let h = e.target.scrollHeight + (el.offsetHeight - el.clientHeight);
                    if(h < min) h = min;
                    if(!this.value) h = min;
                    h = h + 'px';
                    e.target.style.height = h;
                }
            },
            runAutoSize() {
                if(this.isTextarea) {
                    this.$nextTick(() => {
                        let el = document.getElementById(this._id);
                        if(el) {
                            el.style.boxSizing = 'border-box';
                            el.addEventListener('input', this.handleAutoResize);
                            this.handleAutoResize({target:el});
                        }
                    });
                }
            },
            runAutoFocus() {
                if(this.autoFocus) {
                    this.$nextTick(() => {
                        this.doFocus();
                    });
                }
            },

            // tools
            rid() { return Math.random().toString(36).substr(2, 9) },
            safeString: (s) => s ? s.toLowerCase().replace(/\W+(?!$)/g, '-').replace(/\W$/, '') : ""
        },
        watch: {
            value: {
                immediate: true,
                handler() {
                    // auto-width flex
                    if(this.flex) {
                        this.$nextTick(() => {
                            let ghost = this.$el.querySelector('.egi-ghost-text');
                            if(ghost) this.textWidth = ghost.offsetWidth + 10;
                            // setting the localBaseWidth
                            if(this.placeholder && !this.value) {
                                this.localBaseWidth = this.textWidth;
                            }
                        });
                    }
                }
            },
            autoFocus: {
                immediate: true,
                handler() {
                    this.runAutoFocus();
                }
            }
        },
        computed: {
            _id() { return this.id ? this.id : (this.label ? this.safeString(this.label)+'-'+this.rid() : "input-"+this.rid()) },
            _baseMin() { return this.localBaseWidth || this.baseMin },
            _error() { return this.error || this.hasError || this.counterError },
            _warning() { return this.warning || this.hasWarning || (this.counterWarning && this.counterWarn) },
            _success() { return this.success || this.hasSuccess },
            _empty() {
                if(this.empty !== undefined) return this.empty;
                let v = this.value;
                let x = !isNaN(v) && ((Array.isArray(v) && v.length <= 0) || (!Array.isArray(v) && !v) || (Object.keys(v).length === 0 && v.constructor === Object));
                return x;
            },
            _placeholder() { return this.value ? "" : this.placeholder },
            isTextarea() { return this.type === "textarea" },
            isColor() { return this.type === "color" },
            hasPrefix() { return !!this.prefix || !!this.$slots.prefix },
            hasSuffix() { return !!this.suffix || !!this.$slots.suffix },
            hasRightIcon() { return this.icon },
            hasLeftIcon() { return this.lIcon },
            showRightIcon() { return this.icons.length > 0 || this.hasRightIcon || this.cross || this.search || this.plusMinus; },
            showLeftIcon() { return this.lIcons.length > 0 || this.hasLeftIcon },
            hasError() { return this.errorMessages.filter(e => e.state === "error" || e.state === undefined).length > 0 || this.errorMsg || this.errors.length > 0 },
            hasWarning() { return this.errorMessages.filter(e => e.state === "warning").length > 0 },
            hasSuccess() { return this.errorMessages.filter(e => e.state === "success").length > 0 },
            counterError() { return this.counterMax && this.computeCounterValue() > this.counterMax; },
            counterWarning() { return this.counterMax && this.computeCounterValue() === this.counterMax; },
            inputStyle() {
                if(this.flex) {
                    let width = this._baseMin;
                    if(this.textWidth > this._baseMin) width = this.textWidth;
                    width += 15;
                    if(width > this.baseMax) width = this.baseMax;
                    return `width:${width}px;`;
                }
                return "";
            }
        },

        // for textarea only
        mounted() {
            this.runAutoSize();
            this.runAutoFocus();
        },
        updated() {
            this.runAutoSize();
        },
        destroyed() {
            if(this.isTextarea) {
                let el = document.getElementById(this._id);
                if(el) el.removeEventListener('input', this.handleAutoResize);
            }
        }
    }
</script>
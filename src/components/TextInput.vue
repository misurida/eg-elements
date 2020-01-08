<style lang="scss">@import "../style/components_style.scss";</style>

<template>
    <div :class="{'eg-input':inputClass, focus, disabled, error:_error, warning:_warning, success:_success, wide}" :id="_id+'-wrapper'">
        <label v-if="label" :for="_id" class="egi-label">{{ label }}</label>
        <div class="egi-ghost-text" v-if="flex">{{ value || placeholder }}</div>
        <div class="input-shell" :class="{focus}" @mousedown="hMouseDown">
            <slot name="taglist"></slot>
            <div class="egi-inner" :class="{'no-edit':!editable}" @click="hClick">
                <div class="egi-icons-left-list" v-if="showLeftIcon">
                    <div class="egi-icons-list" v-if="leftIcons.length > 0">
                        <icon v-for="i in leftIcons" :icon="i" :key="i" clickable :reversed="flipIcon" @click="$emit('iconsClick',i)"></icon>
                    </div>
                    <div class="egi-main-icon-slot" v-if="reverseIcon&&(cross||hasRightIcon)">
                        <icon v-if="hasRightIcon" class="egi-main-icon" clickable :reversed="flipIcon" :class="{concealed:focus&&value&&cross, concealable:value&&cross}" :icon="icon" :fa="fa" :fas="fas" :far="far" :fal="fal" :ma="ma" @click="$emit('iconClick',$event)"></icon>
                        <icon v-if="value&&cross&&reverseIcon" :reversed="flipIcon" class="egi-cross-icon revealable" :class="{active:focus&&value}" icon="scross" clickable @click="hCross"></icon>
                    </div>
                </div>
                <div class="egi-prefix" :class="{'has-left-icon':showLeftIcon}" v-if="hasPrefix" @click="hClick($event)">
                    <span v-if="prefix" v-html="prefix"></span>
                    <slot v-if="!!$slots.prefix"></slot>
                </div>
                <input
                        v-if="editable"
                        @change="hChange"
                        @click.stop="hClick"
                        @input="hInput"
                        @focus="hFocus"
                        @blur="hBlur"
                        @keyup="hKeyup"
                        @keydown="hKeydown"
                        @mousedown.stop
                        :id="_id"
                        :style="inputStyle"
                        :placeholder="placeholder"
                        :value="value"
                        :disabled="disabled"
                        :type="type"
                        :class="{'has-left-icon':showLeftIcon||$slots.taglist, 'has-right-icon':showRightIcon}"
                        autocomplete="new-password">
                <div v-else class="fake-wrapper">
                    <input :id="_id" :style="inputStyle" type="text" class="fake-input" @blur="hBlur" @focus="hFocus" @keyup="hKeyup">
                    <span class="fake-value">{{ value }}</span>
                    <span class="fake-placeholder" v-if="placeholder && (!value)" v-html="placeholder"></span>
                </div>
                <div class="egi-suffix" :class="{'has-right-icon':showRightIcon}" v-if="hasSuffix">
                    <span v-if="suffix" v-html="suffix"></span>
                    <slot v-if="!!$slots.suffix"></slot>
                </div>
                <div class="egi-icons-right-list" v-if="showRightIcon">
                    <div class="egi-main-icon-slot" v-if="(cross||hasRightIcon)&&!reverseIcon">
                        <icon v-if="hasRightIcon" class="egi-main-icon" clickable :reversed="flipIcon" :class="{concealed:focus&&value&&cross, concealable:value&&cross}" :icon="icon" :fa="fa" :fas="fas" :far="far" :fal="fal" :ma="ma" @click="$emit('iconClick',$event)"></icon>
                        <icon v-if="value&&cross&&!reverseIcon" class="egi-cross-icon revealable" :reversed="flipIcon" :class="{active:focus&&value}" icon="scross" clickable @click="hCross"></icon>
                    </div>
                    <div class="egi-icons-list" v-if="icons.length > 0">
                        <icon v-for="i in icons" :icon="i" :key="i" clickable :reversed="flipIcon" @click="$emit('iconsClick',i)"></icon>
                    </div>
                    <div v-if="plusMinus" class="plus-minus-wrapper">
                        <div class="button-shell" @mousedown="hUpClick" :class="{active:keyUpDown}">+</div>
                        <div class="button-shell" @mousedown="hDownClick" :class="{active:keyDownDown}">-</div>
                    </div>
                </div>
            </div>
            <div>
                <slot name="menu"></slot>
            </div>
        </div>
        <span class="egi-counter" v-if="counter && !counterHide">{{ computeCounterValue() }} <span v-if="counterMax">/ {{ counterMax }}</span></span>
        <div class="egi-message" v-if="message">{{ message }}</div>
        <ul class="egi-messages" v-if="messages.length>0">
            <li v-for="m in messages" :key="m">{{ m }}</li>
        </ul>
        <ul class="egi-messages state-messages" :class="{error:_error, warning:_warning, success:_success}" v-if="_error||_warning||_success">
            <li v-for="m in errorMessages" :key="m.message">
                <icon v-if="m.state === 'success'" icon="success"></icon>
                <icon v-else-if="m.state === 'warning'" icon="warning"></icon>
                <icon v-else icon="error"></icon>
                <span>{{ m.message }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        components: {
            Icon
        },
        props: {
            value: { default: null },
            type: { type: String, default: "text" },
            inputClass: { type: Boolean, default: true },

            // containers
            baseMin: { type: Number, default: 50 },
            baseMax: { type: Number, default: 500 },

            // basics
            id: { type: String, default: null},
            label: {type: String, default: null},
            placeholder: {type: String, default: null},
            prefix: {type: String, default: null},
            suffix: {type: String, default: null},

            // state
            disabled: {type: Boolean, default: false},
            editable: {type: Boolean, default: true},
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},
            cross: {type: Boolean, default: true},
            flex: {type: Boolean, default: false},
            wide: {type: Boolean, default: false},

            // validation and formatting
            regexList: {type: Array, default(){ return [] }},

            // message
            message: {type: String, default: null},
            messages: {type: Array, default(){ return [] }},

            // counter
            counter: {type: Boolean, default: false},
            counterMax: {type: Number, default: 0},
            counterLock: {type: Boolean, default: false},
            countWords: {type: Boolean, default: false},
            counterWarn: {type: Boolean, default: true},
            counterHide: {type: Boolean, default: false},
            countWordsSeparator: {type: String, default: " "},

            // right icons
            icon: {type: String, default: null},
            icons: {type: Array, default() { return [] }},
            fa: {type: String, default: null},
            fas: {type: String, default: null},
            far: {type: String, default: null},
            fal: {type: String, default: null},
            ma: {type: String, default: null},
            leftIcons: {type: Array, default() { return [] }},
            reverseIcon: {type: Boolean, default: false},
            flipIcon: {type: Boolean, default: false},
            plusMinus: {type: Boolean, default: false},
        },
        data() {
            return {
                focus: false, // if the field is in focus state
                textWidth: 0, // to current input string width updated when the value changes
                localBaseWidth: 0, // the base width computed from the placeholder to use instead if greater than the one provided
                preventBlur: false, // flip to prevent the blur to loose focus when clicking on another field element
                errorMessages: [], // for the validation
                messagesTrash: [], // for the validation fading messages
                errorFadeTimer: null,
                keyUpDown: false,
                keyDownDown: false,
            }
        },
        methods: {
            // handlers
            hChange(e) {
                this.$emit('change', e);
            },
            hInput(e) {
                let lock = false;
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
                                lock = true;
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
                    if(v.length > this.value.length) lock = true;
                }

                // emitting the new value
                if(!lock) this.$emit('input', v);
            },
            hFocus(e) {
                if(!this.disabled) {
                    if(!this.focus)
                        this.$emit('focus', e);
                    this.focus = true;
                    let input = document.getElementById(this._id);
                    if(input) input.focus();
                }
            },
            hBlur(e) {
                if(this.preventBlur) {
                    this.hFocus(e);
                    this.preventBlur = false;
                }
                else {
                    this.focus = false;
                    this.$emit('blur', e);
                }
            },
            hMouseDown(e) {
                this.preventBlur = true;
                this.$emit('mousedown', e);
                if(document.activeElement.id !== this._id)
                    this.hFocus(e);
            },
            hClick(e) {
                this.$emit('click', e);
                this.resetKeyMarkers();
            },
            hCross() {
                if(!this.disabled) {
                    this.errorMessages = [];
                    this.$emit('input', null);
                    this.$emit('cross');
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
            },
            hUpClick(e) {
                this.$emit('up', e);
            },
            hKeydown(e) {
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
            }
        },
        computed: {
            _id() { return this.id ? this.id : (this.label ? this.safeString(this.label) : "input-"+this.rid()) },
            _baseMin() { return this.localBaseWidth || this.baseMin },
            _error() { return this.error || this.hasError || this.counterError },
            _warning() { return this.warning || this.hasWarning || (this.counterWarning && this.counterWarn) },
            _success() { return this.success || this.hasSuccess },
            hasPrefix() { return !!this.prefix || !!this.$slots.prefix },
            hasSuffix() { return !!this.suffix || !!this.$slots.suffix },
            hasRightIcon() { return this.icon || this.fa || this.fas || this.far || this.fal || this.ma; },
            hasLeftIcon() { return this.lIcon || this.lfa || this.lfas || this.lfar || this.lfal || this.lma; },
            showRightIcon() { return this.icons.length > 0 || this.hasRightIcon || this.cross || this.search || this.plusMinus; },
            showLeftIcon() { return this.leftIcons.length > 0 || this.hasLeftIcon || this.reverseIcon },
            hasError() { return this.errorMessages.filter(e => e.state === "error" || e.state === undefined).length > 0 },
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
    }
</script>
<style lang="scss">
    .eg-input {

    }
</style>

<template>
    <div class="number-input" :class="{disabled, 'eg-input':inputClass}">
        <eg-input
                :type="type"
                :inputClass="false"
                :baseMin="baseMin"
                :baseMax="baseMax"
                :id="_id"
                :label="label"
                :placeholder="placeholder"
                :prefix="prefix"
                :suffix="suffix"
                :disabled="disabled"
                :editable="editable"
                :error="error"
                :warning="warning"
                :success="success"
                :cross="cross"
                :flex="flex"
                :wide="wide"
                :regexList="_regexList"
                :message="message"
                :messages="messages"
                :counter="counter"
                :counterMax="counterMax"
                :counterLock="counterLock"
                :countWords="countWords"
                :counterWarn="counterWarn"
                :counterHide="counterHide"
                :countWordsSeparator="countWordsSeparator"
                :icon="icon"
                :icons="icons"
                :fa="fa"
                :fas="fas"
                :far="far"
                :fal="fal"
                :ma="ma"
                :leftIcons="leftIcons"
                :reverseIcon="reverseIcon"
                :flipIcon="flipIcon"
                :plusMinus="plusMinus"

                @change="hChange"
                @click="$emit('click')"
                @mousedown="$emit('mousedown')"
                @keyup="hKeyup"
                @keydown="hKeydown"
                @up="hUp"
                @down="hDown"
                @escape="hEscape"
                @enter="hEnter"
                @focus="hFocus"
                @blur="hBlur"
                @cross="hCross"
                v-model="localValue"
                @input="hInput">
        </eg-input>
    </div>
</template>

<script>
    export default {
        props: {
            decimals: {type: Number, default: null},
            increment: {type: Number, default: 1},
            smallInc: {type: Number, default: 0.1},
            bigInc: {type: Number, default: 10},
            min: {type: Number, default: null},
            max: {type: Number, default: null},
            plusMinus: {type: Boolean, default: true},
            strongDecimals: {type: Boolean, default: false},

            /*
            Basic text input props
            **********************************************************/
            value: {default: null},
            type: {type: String, default: "text"},
            inputClass: {type: Boolean, default: true},

            // containers
            baseMin: {type: Number, default: 10},
            baseMax: {type: Number, default: 500},

            // basics
            id: {type: String, default: null},
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
            cross: {type: Boolean, default: false},
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
        },
        data() {
            return {
                localValue: null
            }
        },
        methods: {
            hKeyup(e) {
                this.$emit('keyup', e);
            },
            hUp(e) {
                let v = Number(this.localValue);
                if(e.altKey) v += this.bigInc;
                else if(e.ctrlKey) v += this.smallInc;
                else v += this.increment;
                this.localValue = this.getValidatedValue(v);
            },
            hDown(e) {
                let v = Number(this.localValue);
                if(e.altKey) v -= this.bigInc;
                else if(e.ctrlKey) v -= this.smallInc;
                else v -= this.increment;
                this.localValue = this.getValidatedValue(v);
            },
            hKeydown(e) {
                this.$emit('keydown', e);
            },
            hEscape(e) {
                this.$emit('escape', e);
            },
            hEnter(e) {
                this.$emit('enter', e);
            },
            hFocus(e) {
                this.$emit('focus', e);
            },
            hBlur(e) {
                this.$emit('blur', e);
                if(this.localValue !== this.value) {
                    this.hChange(e);
                }
            },
            hCross(e) {
                this.$emit('cross', e);
            },
            hChange(e) {
                this.$emit('change', e);
                let v = this.getValidatedValue(this.localValue);
                this.localValue = v;
                this.$emit('input', v);
            },
            hInput(e) {
                this.localValue = e;
            },

            getValidatedValue(v) {
                if(isNaN(v) || !v) {
                    v = this.min ? this.min : 0;
                }
                v = parseFloat(v);
                if(this.decimals > 0) {
                    v = parseFloat(v).toFixed(this.decimals);
                    if(!this.strongDecimals) {
                        v = parseFloat(v);
                    }
                }

                // min-max
                if((this.min || this. min === 0) && v < this.min) {
                    v = this.min;
                }
                if((this.max || this.max === 0) && v > this.max) {
                    v = this.max;
                }
                return v;
            },

            // tools
            rid: () => Math.random().toString(36).substr(2, 9),
            safeString: (s) => s ? s.toLowerCase().replace(/\W+(?!$)/g, '-').replace(/\W$/, '') : "",
            norm: (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        },
        watch: {
            value: {
                immediate: true,
                handler(v) {
                    this.localValue = this.getValidatedValue(v);
                }
            }
        },
        computed: {
            _id() { return this.id ? this.id : (this.label ? this.safeString(this.label) : "input-"+this.rid()) },
            _regexList() {
                return [...this.regexList, { regex: /^([0-9.]*)$/, strong: true }]
            }
        }
    }
</script>
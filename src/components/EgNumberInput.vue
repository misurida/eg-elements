<style lang="scss">
    .plus-minus-wrapper {
        opacity: 0.7;
        display: grid;
        grid-template-rows: 1fr 1fr;
        height: 100%;
        width: 35px;
        .button-shell {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8em;
            font-weight: 600;
            height: inherit;
            line-height: 0;
        }
    }
</style>

<template>
    <div class="number-input" :class="{disabled, 'eg-input':inputClass}">
        <eg-input
                :value="value"
                :type="type"
                :id="_id"
                :label="label"
                :placeholder="placeholder"
                :disabled="disabled"
                :prefix="prefix"
                :suffix="suffix"
                :message="message"
                :messages="messages"
                :helpText="helpText"
                :errorMsg="errorMsg"
                :errors="errors"
                :counter="counter"
                :counterMax="counterMax"
                :counterLock="counterLock"
                :countWords="countWords"
                :counterWarn="counterWarn"
                :counterHide="counterHide"
                :countWordsSeparator="countWordsSeparator"
                :buttonStyle="buttonStyle"
                :primary="primary"
                :slim="slim"
                :loading="loading"
                :error="error"
                :warning="warning"
                :success="success"
                :icon="icon"
                :fa="fa"
                :fas="fas"
                :far="far"
                :fal="fal"
                :ma="ma"
                :icons="icons"
                :leftIcons="leftIcons"
                :clickableIcon="clickableIcon"
                :flipIcon="flipIcon"
                :plusMinus="plusMinus"
                :regexList="_regexList"
                :autoFocus="autoFocus"
                :editable="editable"
                :cross="cross"
                :emptyCross="emptyCross"
                :inputClass="false"
                :empty="empty"
                :emptyValue="emptyValue||min||0"
                :tabindex="tabindex"
                :wide="wide"
                :flex="flex"
                :baseMin="baseMin"
                :baseMax="baseMax"

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
                @iconClick="$emit('iconClick',$event)"
                v-model="localValue"
                @input="hInput">
        </eg-input>
    </div>
</template>

<script>
    export default {
        props: {
            decimals: {type: Number, default: null},
            step: {type: Number, default: 1},
            stepSmall: {type: Number, default: 0.5},
            stepBig: {type: Number, default: 10},
            min: {type: Number, default: null},
            max: {type: Number, default: null},
            plusMinus: {type: Boolean, default: true},
            strongDecimals: {type: Boolean, default: false},

            /* Text input attributes */

            // main
            value: {default: null},
            type: {type: String, default: "text"},
            id: {type: String, default: null},
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
            fa: {type: String, default: null},
            fas: {type: String, default: null},
            far: {type: String, default: null},
            fal: {type: String, default: null},
            ma: {type: String, default: null},
            icons: {type: Array, default() {return []}},
            leftIcons: {type: Array, default() {return []}},
            clickableIcon: {type: Boolean, default: false},

            //// special icons
            flipIcon: {type: Boolean, default: false},

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
                if(e.altKey) v += this.stepBig;
                else if(e.ctrlKey) v += this.stepSmall;
                else v += this.step;
                this.localValue = this.getValidatedValue(v);
                this.$emit('input', this.localValue);
                this.$emit('up');
            },
            hDown(e) {
                let v = Number(this.localValue);
                if(e.altKey) v -= this.stepBig;
                else if(e.ctrlKey) v -= this.stepSmall;
                else v -= this.step;
                this.localValue = this.getValidatedValue(v);
                this.$emit('input', this.localValue);
                this.$emit('down');
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
            _id() { return this.id ? this.id : (this.label ? this.safeString(this.label)+'-'+this.rid() : "input-"+this.rid()) },
            _regexList() {
                return [...this.regexList, { regex: /^([0-9.]*)$/, strong: true }]
            }
        }
    }
</script>
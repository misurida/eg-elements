<style lang="scss">
.checkbox-input {
    margin-right: 10px;
    .check-box,
    .radio-box {
        height: 14px;
        min-width: 14px;
        position: relative;
        cursor: pointer;
        border: none;
        margin-right: 5px;
        background-color: transparent;
        box-shadow: none;
        &.solo {
            margin: 0;
        }
        &.invisible {
            display: none;
        }
        svg {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            color: currentColor;
            path {
                stroke: currentColor;
            }
            &:hover,
            &:focus {
                outline-width: 0;
            }
        }
    }
    .check-box {
        svg {
            path {
                transition: stroke-dashoffset .1s;
                &.arrow {
                    stroke-dasharray: 50px;
                    stroke-dashoffset: 52px;
                }
                &.dash {
                    stroke-dasharray: 60px;
                    stroke-dashoffset: 70px;
                }
                &.box {
                    fill: #E3E3E3;
                }
            }
        }
        &.selected {
            path {
                &.arrow {
                    stroke-dashoffset: 0;
                }
            }
        }
        &.undefined {
            path {
                &.dash {
                    stroke-dashoffset: 0;
                }
            }
        }
    }
    input {
        margin: 0 5px 0 0;
        height: 14px;
        min-width: 14px;
        cursor: pointer;
        &.invisible {
            display: none;
        }
    }
    .checkbox-group {
        display: flex;
        align-items: center;
    }
    .checkbox-label {
        margin-bottom: 0;
        cursor: pointer;
        user-select: none;
        align-self: flex-end;
        color: currentColor;
        line-height: 1.3;
    }
    .checkbox-inner {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 5px;
    }
    .checkbox-group {
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
    .radio-box {
        border-radius: 50%;
        svg {
            path {
                transition: transform .2s;
                transform-origin: center;
                &.dot {
                    fill: rgb(67, 67, 67);
                    transform: scale(0);
                }
                &.box {
                    fill: #E3E3E3;
                }
            }
        }
        &.selected {
            path {
                &.dot {
                    transform: scale(1);
                }
            }
        }
    }

    $dotSize: 25px;
    &.switch {
        .label-container {
            padding: 0;
        }
        .checkbox-inner {
            margin-top: 0.25em;
        }
        .eg-label {
            margin-bottom: 5px;
        }
        .switch-wrapper {
            display: flex;
            cursor: pointer;
            position: relative;
            & > span {
                line-height: 1;
            }
            .slider-dot {
                height: 25px;
                width: 25px;
                display: inline-block;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                z-index: 1; // the line goes on top otherwise
                outline-width: 0;
                cursor: pointer;
                transition: left 100ms ease-out, background 100ms ease-out;
                &.positive {
                    left: $dotSize;
                }
            }
            & > *:not(.switch-bloc) {
                display: flex;
                align-items: center;
                font-size: 0.8em;
                user-select: none;
                &:first-child {
                    margin-right: 15px;
                    justify-content: flex-end;
                }
                &:last-child {
                    margin-left: 15px;
                }
            }
            .switch-bloc {
                position: relative;
                height: $dotSize;
                width: 2 * $dotSize;
            }
            .switch-line {
                height: 10px;
                width: 100%;
                top: 50%;
                position: absolute;
                transform: translateY(-50%);
            }
            &.inner-labels {
                position: relative;
                margin: 0;
                height: $dotSize;
                border-radius: $dotSize * 0.5;
                padding: 0 $dotSize;
                .slider-dot {
                    left: 0;
                    right: auto;
                    margin: 0;
                    &.positive {
                        left: calc(100% - #{$dotSize});
                    }
                }
                .switch-ghost-label {
                    visibility: hidden;
                    opacity: 0;
                    user-select: none;
                    margin: 0;
                }
                .floating-label {
                    transition: opacity .2s;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: 0;
                    width: 50%;
                    line-height: 1;
                    justify-content: center;
                    &.left {
                        left: 30px;
                    }
                    &.right {
                        left: $dotSize * 0.666;
                        opacity: 0;
                    }
                }
                &.positif {
                    .floating-label {
                        &.left {
                            opacity: 0;
                        }
                        &.right {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div class="checkbox-input" :class="{'eg-input':inputClass, switch:isSwitch, disabled, error, warning, success}">
        <div class="label-container" v-if="(options.length > 0 || isSwitch) && label">
            <span class="eg-label">{{ label }}</span>
        </div>
        <div class="checkbox-inner">
            <div class="checkbox-group" v-for="(item,label) in _elements" :key="label" @click="$emit('click')">
                <template v-if="type ==='radio'">
                    <!-- Radio legacy -->
                    <input
                        v-if="native"
                        :id="getId(label)"
                        type="radio"
                        :checked="isSelected(item)"
                        :undeterminate="isUndefinedState(item)"
                        @keyup.enter="hInput(item)"
                        @click="hInput(item)"
                        :disabled="disabled">
                    <!-- Radio svg -->
                    <div
                        v-else
                        tabindex="0"
                        :id="getId(label)"
                        class="radio-box"
                        @keyup.enter="hInput(item)"
                        @click="hInput(item)"
                        :class="{selected:isSelected(item), undefined:isUndefinedState(item), solo:!label}">
                        <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path class="box" d="m25 0.84135c-13.325 0-24.159 10.834-24.159 24.159s10.834 24.159 24.159 24.159 24.159-10.834 24.159-24.159-10.834-24.159-24.159-24.159zm0 2.899c11.758 0 21.26 9.5011 21.26 21.26s-9.5011 21.26-21.26 21.26-21.26-9.5011-21.26-21.26 9.5011-21.26 21.26-21.26z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stroke-width=".96635" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                            <path class="dot" d="m37.5 25a12.5 12.5 0 0 1-12.5 12.5 12.5 12.5 0 0 1-12.5-12.5 12.5 12.5 0 0 1 12.5-12.5 12.5 12.5 0 0 1 12.5 12.5z"/>
                        </svg>
                    </div>
                </template>
                <template v-else>
                    <div v-if="isSwitch" class="switch-wrapper" :class="{positif:isSelected(item), 'inner-labels':innerLabels}" @click="toggleSwitch(item)">
                        <template v-if="innerLabels">
                            <span v-if="longestLabel" class="switch-ghost-label">{{ longestLabel }}</span>
                            <button class="slider-dot" :disabled="disabled" :class="{positive:isSelected(item)}"></button>
                            <span class="floating-label left" v-if="offLabel">{{ offLabel }}</span>
                            <span class="floating-label right" v-if="onLabel">{{ onLabel }}</span>
                        </template>
                        <template v-else>
                            <span v-if="offLabel">{{ offLabel }}</span>
                            <div class="switch-bloc">
                                <button class="slider-dot" :disabled="disabled" :class="{positive:isSelected(item)}"></button>
                                <div class="switch-line" :class="{positive:isSelected(item)}"></div>
                            </div>
                            <span v-if="onLabel">{{ onLabel }}</span>
                        </template>
                    </div>
                    <!-- Checkbox legacy -->
                    <input
                        v-if="native"
                        :id="getId(label)"
                        type="checkbox"
                        :checked="isSelected(item)"
                        :undeterminate="isUndefinedState(item)"
                        @keyup.enter="hInput(item)"
                        @click="hInput(item)"
                        :disabled="disabled">
                    <!-- Checkbox svg -->
                    <div
                        v-else
                        tabindex="0"
                        :id="getId(label)"
                        class="check-box"
                        @keyup.enter="hInput(item)"
                        @click="hInput(item)"
                        :class="{invisible:isSwitch, selected:isSelected(item), undefined:isUndefinedState(item), solo:!label}">
                        <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path class="arrow" d="m10.54 27.806s4.2098 1.4275 11.649 9.1491c7.198-13.981 17.284-25.977 17.284-25.977" fill="none" stroke="#000" stroke-linecap="round" stroke-width="6"/>
                            <path class="box" d="m0 0v50h50v-50zm3 3h44v44h-44z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                            <path class="dash" d="m10.419 25h29.162" fill="none" stroke="#000" stroke-linecap="round" stroke-width="5.8258"/>
                        </svg>
                    </div>
                </template>
                <!-- Label -->
                <label class="eg-label checkbox-label" :for="getId(label)" @click="labelClick(item)" v-if="label && !isSwitch">{{ label }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {default: null},
        inputClass: {type: Boolean, default: true},
        native: {type: Boolean, default: false},
        type: {type: String, default: null},
        //positive: {default: true}, // value to return when checked (for flip checkboxes)
        //negative: {default: false}, // value to return when unchecked (for flip checkboxes)

        // switch
        onLabel: {type: String, default: null},
        offLabel: {type: String, default: null},
        innerLabels: {type: Boolean, default: false},

        // basics
        id: {type: String, default: null},
        label: {type: String, default: null},
        oLabel: {type: String, default: "name"},
        nullValue: { default: false },
        useUndefined: {type: Boolean, default: false},
        multiple: {type: Boolean, default: false},

        // state
        disabled: {type: Boolean, default: false},
        error: {type: Boolean, default: false},
        warning: {type: Boolean, default: false},
        success: {type: Boolean, default: false},

        options: {type: Array, default() {return []}},
        elements: {type: Object, default() {return {}}},
    },
    methods: {
        toggleSwitch(i) {
            this.hInput(i);
        },
        labelClick(i) {
            this.hInput(i);
        },
        hInput(i,n) {
            if(n && this.native) {
                return false;
            }
            if(this._multiple) {
                let value = this.value;
                if(this.isSelected(i)) {
                    if(!this.value || this.value.length === 1) {
                        value = [];
                    }
                    else {
                        value = value.filter(e => this.getLabel(e) !== this.getLabel(i));
                    }
                }
                else if(value) {
                    value.push(i);
                }
                else {
                    value = [i];
                }
                this.$emit('input', value);
            }
            else if(this.isSelected(i)) {
                if(this.type !== 'radio') {
                    this.$emit('input', this.nullValue);
                }
            }
            else if(this.isBoolean) {
                if((i === undefined || i === null) && this.value) {
                    this.$emit('input', i);
                }
                else {
                    this.$emit('input', !this.value);
                }
            }
            else {
                this.$emit('input', i);
            }
        },
        isSelected(item) {
            if(this.isBoolean) {
                return item && !this.isUndefinedState(item);
            }
            else if(this._multiple) {
                if(this.value) {
                    for(let i=0; i<this.value.length; i++) {
                        let v = this.value[i];
                        if(this.getLabel(v) === this.getLabel(item)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            else {
                return this.getLabel(item) === this.getLabel(this.value);
            }
        },
        getLabel(i) {
            if(typeof i === "object" && i && this.oLabel && i[this.oLabel]) {
                return i[this.oLabel];
            }
            return i;
        },
        isUndefinedState(i) {
            if(this.useUndefined) {
                if(this.isBoolean && (i === undefined || i === null)) {
                    return true;
                }
                else if(i === undefined) {
                    return true;
                }
            }
            return false;
        },
        getId(i) {
            return this.options.length <= 1 && this.size(this.elements) <= 1 ? this._id : this._id + '-' + i;
        },

        // tools
        rid() { return Math.random().toString(36).substr(2, 9) },
        safeString: (s) => s ? s.toLowerCase().replace(/\W+(?!$)/g, '-').replace(/\W$/, '') : "",
        size: (o) => Object.entries(o).length
    },
    computed: {
        _id() { return this.id ? this.id : (this.label ? this.safeString(this.label) : "input-"+this.rid()) },
        isBoolean() { return this.options.length === 0 && this.size(this.elements) === 0 },
        _multiple() { return Array.isArray(this.value) || this.multiple },
        isSwitch() { return this.type === 'switch' },
        longestLabel() {
            let a = this.onLabel ? this.onLabel.length : 0;
            let b = this.offLabel ? this.offLabel.length : 0;
            return b > a ? this.offLabel : this.onLabel;
        },
        _elements() {
            if(this.options.length > 0) {
                if(typeof this.options[0] === "object") {
                    let obj = {};
                    for(let i=0; i<this.options.length; i++) {
                        let o = this.options[i];
                        if(o && o[this.oLabel]) {
                            obj[o[this.oLabel]] = o;
                        }
                    }
                    return obj;
                }
                else {
                    let obj = {};
                    for(let i=0; i<this.options.length; i++) {
                        let o = this.options[i];
                        obj[o] = o;
                    }
                    return obj;
                }
            }
            if(this.size(this.elements) > 0) {
                return this.elements;
            }
            if(this.label) {
                let o = {};
                o[this.label] = this.value;
                return o;
            }
            return {"": this.value};
        }
    }
}
</script>

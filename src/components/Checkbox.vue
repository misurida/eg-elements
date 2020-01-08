<style lang="scss">
    .checkbox-input {
        .check-box {
            height: 14px;
            min-width: 14px;
            position: relative;
            cursor: pointer;
            border: none;
            margin-right: 5px;
            background-color: transparent;
            box-shadow: none;
            svg {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                path {
                    stroke: var(--color-gray);
                    transition: stroke-dashoffset .1s;
                    &.arrow {
                        stroke-dasharray: 50px;
                        stroke-dashoffset: 50px;
                    }
                    &.dash {
                        stroke-dasharray: 70px;
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
            &:hover,
            &:focus {
                box-shadow: var(--box-shadow);
                outline-width: 0;
            }
        }
        input {
            margin: 0 5px 0 0;
            height: 14px;
            min-width: 14px;
            cursor: pointer;
        }
        .checkbox-group {
            display: flex;
            align-items: center;
        }
        .egi-label.checkbox-label {
            margin-bottom: 0;
            line-height: 1;
            cursor: pointer;
            user-select: none;
        }
        .checkbox-inner {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        .checkbox-group {
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
        .radio-box {
            height: 14px;
            min-width: 14px;
            position: relative;
            cursor: pointer;
            border: none;
            margin-right: 5px;
            background-color: transparent;
            box-shadow: none;
            border-radius: 50%;
            svg {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                path {
                    stroke: var(--color-gray);
                    transition: transform .2s;
                    transform-origin: center;
                    &.dot {
                        fill: var(--color-gray-2);
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
            &:hover,
            &:focus {
                box-shadow: var(--box-shadow);
                outline-width: 0;
                border-radius: 50%;
            }
        }
    }
</style>

<template>
    <div class="checkbox-input" :class="{'eg-input':inputClass}">
        <div class="checkbox-inner">
            <div class="checkbox-group" v-for="(item,label) in _elements" :key="label">
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
                            :class="{selected:isSelected(item), undefined:isUndefinedState(item)}">
                        <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path class="box" d="m25 0c-13.789 0-25 11.211-25 25s11.211 25 25 25 25-11.211 25-25-11.211-25-25-25zm0 3c12.168 0 22 9.832 22 22s-9.832 22-22 22-22-9.832-22-22 9.832-22 22-22z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                            <path class="dot" d="m37.5 25a12.5 12.5 0 0 1-12.5 12.5 12.5 12.5 0 0 1-12.5-12.5 12.5 12.5 0 0 1 12.5-12.5 12.5 12.5 0 0 1 12.5 12.5z"/>
                        </svg>
                    </div>
                </template>
                <template v-else>
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
                            :class="{selected:isSelected(item), undefined:isUndefinedState(item)}">
                        <svg version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path class="arrow" d="m10.54 27.806s4.2098 1.4275 11.649 9.1491c7.198-13.981 17.284-25.977 17.284-25.977" fill="none" stroke="#000" stroke-linecap="round" stroke-width="6"/>
                            <path class="box" d="m0 0v50h50v-50zm3 3h44v44h-44z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
                            <path class="dash" d="m10.419 25h29.162" fill="none" stroke="#000" stroke-linecap="round" stroke-width="5.8258"/>
                        </svg>
                    </div>
                </template>
                <!-- Label -->
                <label class="egi-label checkbox-label" :for="getId(label)" v-if="label && native">{{ label }}</label>
                <label class="egi-label checkbox-label" :for="getId(label)" @click="labelClick(item)" v-else-if="label">{{ label }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: { default: null },
            inputClass: { type: Boolean, default: true },
            native: { type: Boolean, default: false },
            type: { type: String, default: null },

            // basics
            id: { type: String, default: null},
            label: {type: String, default: null},
            oLabel: {type: String, default: "name"},
            nullValue: { default: null },

            // state
            disabled: {type: Boolean, default: false},
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},

            options: {type: Array, default(){ return [] }},
            elements: {type: Object, default(){ return {} }},
        },
        methods: {
            labelClick(i) {
                this.hInput(i);
            },
            hInput(i,n) {
                if(n && this.native) {
                    return false;
                }
                if(this.multiple) {
                    let value = this.value;
                    if(this.isSelected(i)) {
                        if(this.value.length === 1) {
                            value = [];
                        }
                        else {
                            value = value.filter(e => this.getLabel(e) !== this.getLabel(i));
                        }
                    }
                    else {
                        value.push(i);
                    }
                    this.$emit('input', value);
                }
                else if(this.isBoolean) {
                    if((i === undefined || i === null) && this.value) {
                        this.$emit('input', i);
                    }
                    else {
                        this.$emit('input', !this.value);
                    }
                }
                else if(this.isSelected(i)) {
                    if(this.type !== 'radio') {
                        this.$emit('input', this.nullValue);
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
                else if(this.multiple) {
                    for(let i=0; i<this.value.length; i++) {
                        let v = this.value[i];
                        if(this.getLabel(v) === this.getLabel(item)) {
                            return true;
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
                if(this.isBoolean && (i === undefined || i === null)) {
                    return true;
                }
                else if(i === undefined) {
                    return true;
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
            multiple() { return Array.isArray(this.value) },
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
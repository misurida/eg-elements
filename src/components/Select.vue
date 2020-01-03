<style lang="scss">
    .eg-input {
        &.multiple {
            .fake-input {
                flex: 1;
                padding-left: 0;
                padding-right: 0;
                width: 100%;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: opacity 300ms, transform 150ms;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 100ms, transform 50s;
    }
</style>

<template>
    <div class="eg-input" :class="{multiple,disabled}">
        <eg-input
                :id="_id"
                :icon="icon"
                :value="localValue"
                :flipIcon="focus"
                :cross="cross"
                :editable="search"
                :placeholder="placeholder"
                :flex="flex"
                :inputClass="false"
                :disabled="disabled"
                :blur-lock="false"
                @mousedown="hMouseDown"
                @keyup="hKeyup"
                @escape="hEscape"
                @enter="hEnter"
                @focus="hFocus"
                @blur="hBlur"
                @cross="hCross"
                v-model="localValue"
                @input="hInput">
            <div slot="taglist" class="egi-tags-list" v-if="multiple && value.length > 0">
                <tag cross v-for="(v,i) in value" :key="getItemId(v)" @cross="popTag(i)">{{ getItemLabel(v) }}</tag>
            </div>
            <template slot="menu" v-if="!menuEmpty && focus">
                <!--<transition>-->
                    <floating-menu :id="_id+'-menu'" v-if="focus" :menu="menu" :over="over" :prevent-closing="false">
                        <div class="items-group" v-for="group in items" :key="getGroupLabel(group)">
                            <span class="group-title" v-if="getGroupLabel(group) && hasOptions(group)">{{ getGroupLabel(group) }}</span>
                            <ul>
                                <li
                                        class="item"
                                        :class="{active:isActive(item), selected:isSelected(item), grouped:getGroupLabel(group)}"
                                        v-for="item in group.options"
                                        :key="getItemId(item)"
                                        @mousedown="itemClick(item,$event)">
                                    <span>{{ getItemLabel(item) }}</span>
                                </li>
                            </ul>
                        </div>
                    </floating-menu>
                <!--</transition>-->
            </template>
        </eg-input>
    </div>
</template>

<script>
    export default {
        props: {
            /*
            bl: bottom left
            br: bottom right
            blr: top parent width
            tl: top: left
            tr: top right
            tlr: top parent width
            */
            menu: {type: String, default: "b"},
            over: {type: Boolean, default: false},
            search: {type: Boolean, default: false},
            multiple: {type: Boolean, default: false},
            freeInput: {type: Boolean, default: false},

            options: {type: Array, default(){return[]}},
            optGroups: {type: Object, default(){return{}}},
            groupBy: {type: String, default: null},
            sort: {type: String, default: null},
            sortGroups: {type: String, default: null},

            gLabel: {default: 0},
            gOptions: {default: "options"},
            oLabel: {default: 0},
            oId: {default: 0},

            /*
            Basic text input props
            **********************************************************/
            value: { default: null },
            type: { type: String, default: "text" },
            inputClass: { type: Boolean, default: true },

            // containers
            baseMin: { type: Number, default: 100 },
            baseMax: { type: Number, default: 500 },

            // basics
            id: { type: String, default: null},
            label: {type: String, default: null},
            placeholder: {type: String, default: null},
            prefix: {type: String, default: null},
            suffix: {type: String, default: null},

            // state
            disabled: {type: Boolean, default: false},
            error: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},
            cross: {type: Boolean, default: false},
            reverseIcon: {type: Boolean, default: false},
            flex: {type: Boolean, default: false},
            block: {type: Boolean, default: false},

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
            icon: {type: String, default: "caret"},
            icons: {type: Array, default() { return [] }},
            fa: {type: String, default: null},
            fas: {type: String, default: null},
            far: {type: String, default: null},
            fal: {type: String, default: null},
            ma: {type: String, default: null},
            leftIcons: {type: Array, default() { return [] }},
        },
        data() {
            return {
                focus: false,
                localValue: null,
                focusTriggered: false,
                selectedItem: null,
                confirmPopTag: false,
                blurLock: false
            }
        },
        methods: {
            popTag(i) {
                let v = this.value;
                if(i === 0) v.shift();
                else if(i === v.length-1) v.pop();
                else v.length > 0 ? v.splice(1,i) : v = [];
                this.$emit('input', v);
            },
            itemClick(i,e) {
                if(this.multiple) {
                    let v = Array.isArray(this.value) ? this.value : [];
                    if(this.isActive(i)) {
                        v = v.filter(e => this.getItemId(e) !== this.getItemId(i));
                    }
                    else {
                        v.push(i);
                    }
                    this.$emit('input', v);
                }
                else {
                    this.$emit('input', i);
                    this.looseFocus();
                }
            },
            selectNextItem() {
                let done = false;
                for(let i=0; i<this.items.length && !done; i++) {
                    let g = this.items[i];
                    if(g[this.gOptions] && g[this.gOptions].length > 0) {
                        for(let j=0; j<g[this.gOptions].length && !done; j++) {
                            let item = g[this.gOptions][j];
                            // we found the selected one
                            if(this.compare(item, this.selectedItem)) {
                                // there is one after in this group
                                if(j < g[this.gOptions].length - 1) {
                                    this.selectedItem = g[this.gOptions][j+1];
                                    done = true;
                                }
                                // we have to crawl the remaining groups (if at least one)
                                else if(i < this.items.length -1) {
                                    for(let k=i+1; k<this.items.length && !done; k++) {
                                        let g2 = this.items[k];
                                        if(g2[this.gOptions] && g2[this.gOptions].length > 0) {
                                            this.selectedItem = g2[this.gOptions][0];
                                            done = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            selectPreviousItem() {
                let done = false;
                for(let i=0; i<this.items.length && !done; i++) {
                    let g = this.items[i];
                    if(g[this.gOptions] && g[this.gOptions].length > 0) {
                        for(let j=0; j<g[this.gOptions].length && !done; j++) {
                            let item = g[this.gOptions][j];
                            // we found the selected one
                            if(this.compare(item, this.selectedItem)) {
                                // there is one before in this group
                                if(j > 0) {
                                    this.selectedItem = g[this.gOptions][j-1];
                                    done = true;
                                }
                                // we have to crawl the first groups (if at least one)
                                else if(i > 0) {
                                    for(let k=i-1; k>=0 && !done; k--) {
                                        let g2 = this.items[k];
                                        if(g2[this.gOptions] && g2[this.gOptions].length > 0) {
                                            this.selectedItem = g2[this.gOptions][g2[this.gOptions].length-1];
                                            done = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            getFirstItem() {
                for(let i=0; i<this.items.length; i++) {
                    let g = this.items[i];
                    if(g[this.gOptions] && g[this.gOptions].length > 0) {
                        return g[this.gOptions][0];
                    }
                }
            },
            getItemId(i) {
                if(typeof i === "object") {
                    if(this.oId) {
                        return i[this.oId];
                    }
                    else if(!this.isEmpty(i)) {
                        return i[Object.keys(i)[0]];
                    }
                }
                return i;
            },
            getItemLabel(i) {
                if(typeof i === "object") {
                    if(this.oLabel) {
                        return i[this.oLabel];
                    }
                    else if(!this.isEmpty(i)) {
                        return i[Object.keys(i)[0]];
                    }
                }
                return i;
            },
            getGroupLabel(g) {
                if(this.gLabel) {
                    return g[this.gLabel];
                }
                else if(Object.entries(g).length > 1) {
                    return g[Object.keys(g)[0]];
                }
                return 0;
            },
            looseFocus() {
                console.log('loose');
                document.activeElement.blur();
            },
            compare(a, b) {
                return this.getItemId(a) === this.getItemId(b);
            },
            isActive(l) {
                if(this.multiple) {
                    for(let i=0; i<this.value.length; i++) {
                        let v = this.value[i];
                        if(this.getItemId(v) === this.getItemId(l)) {
                            return true;
                        }
                    }
                    return false;
                }
                return this.compare(this.value, l);
            },
            isSelected(l) {
                return this.compare(this.selectedItem, l);
            },
            hasOptions(g) {
                return g[this.gOptions] && g[this.gOptions].length > 0;
            },

            // handlers
            hCross() {
                if(!this.search || !this.localValue) {
                    this.$emit('input', this.multiple ? [] : null);
                }
            },
            hEnter() {
                if(this.selectedItem) {
                    this.itemClick(this.selectedItem);
                }
                else if(!this.multiple) {
                    this.itemClick(this.getFirstItem());
                }
                else if(this.freeInput && this.localValue) {
                    let v = Array.isArray(this.value) ? this.value : [];
                    if(typeof this.getFirstItem() === "object") {
                        let o = {};
                        o[this.oLabel] = this.localValue;
                        v.push(o);
                    }
                    else {
                        v.push(this.localValue);
                    }
                    this.localValue = "";
                }
            },
            hEscape() {
                if(this.multiple) {
                    this.$emit('input', []);
                }
                else {
                    this.$emit('input', []);
                }
                if(!this.localValue) {
                    this.looseFocus();
                }
            },
            hKeyup(e) {
                if((e.keyCode === 37 || e.key === "ArrowLeft") || (e.keyCode === 38 || e.key === "ArrowTop")) {
                    // select the previous one
                    if(this.selectedItem) {
                        this.selectPreviousItem();
                    }
                }
                else if((e.keyCode === 39 || e.key === "ArrowRight") || (e.keyCode === 40 || e.key === "ArrowDown")) {
                    // select the next one
                    if(!this.selectedItem) {
                        this.selectedItem = this.getFirstItem();
                    }
                    else {
                        this.selectNextItem();
                    }
                }
                if((e.key === "Backspace" || e.keyCode === 8) && this.multiple && this.search && this.value.length > 0 && !this.localValue) {
                   if(this.confirmPopTag) {
                       this.popTag(this.value.length-1);
                       this.confirmPopTag = false;
                   }
                   else {
                       this.confirmPopTag = true;
                   }
                }
            },
            hMouseDown() {
                this.looseFocus();
            },
            hInput() {
                //this.$emit('input', e);
            },
            hFocus() {
                this.focus = true;
            },
            hBlur() {
                this.selectedItem = null;
                let aid = document.activeElement.id;
                if(aid !== this._id) this.focus = false;
            },

            // tools
            isEmpty: (o) => !o || Object.entries(o).length === 0 && o.constructor === Object,
            rid: () => Math.random().toString(36).substr(2, 9),
            safeString: (s) => s ? s.toLowerCase().replace(/\W+(?!$)/g, '-').replace(/\W$/, '') : "",
            norm: (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        },
        watch: {
            value: {
                immediate: true,
                handler(v) {
                    if(!Array.isArray(v)) {
                        this.localValue = this.getItemLabel(v);
                    }
                    else {
                        this.localValue = "";
                        this.selectedItem = null;
                    }
                }
            }
        },
        computed: {
            _id() { return this.id ? this.id : (this.label ? this.safeString(this.label) : "input-"+this.rid()) },
            menuEmpty() {
                let o = true;
                for(let i=0; i<this._groups.length; i++) {
                    let g = this._groups[i];
                    if(g[this.gOptions] && g[this.gOptions].length > 0) {
                        o = false;
                    }
                }
                return o;
            },
            _groups() {
                if(this.options.length > 0) {
                    if(this.groupBy === null) {
                        if(this.options[0][this.gOptions]) {
                            return this.options;
                        }
                        let o = [{}];
                        o[0][this.gOptions] = this.options;
                        return o;
                    }
                    else {
                        let groups = [];
                        let stack = [];
                        for(let i=0; i<this.options.length; i++) {
                            let o = this.options[i];
                            let g = o[this.groupBy];
                            if(g && groups.indexOf(g) < 0) {
                                groups.push(g);
                                let e = {label: g};
                                e[this.gOptions] = [o];
                                stack.push(e);
                            }
                            else {
                                stack[groups.indexOf(g)][this.gOptions].push(o);
                            }
                        }
                        return stack;
                    }
                }
                else if(!this.isEmpty(this.optGroups)) {
                    let o = [];
                    for(let p in this.optGroups) {
                        let e = {label: p};
                        e[this.gOptions] = this.optGroups[p];
                        o.push(e);
                    }
                    return o;
                }
                let o = {};
                o[this.gOptions] = [];
                return o;
            },
            items() {
                let groups = this._groups;
                // groups sorting
                if(this.sortGroups) {
                    groups.sort((a,b) => {
                        if (this.getGroupLabel(a) < this.getGroupLabel(b)) return -1;
                        if (this.getGroupLabel(a) > this.getGroupLabel(b)) return 1;
                        return 0;
                    });
                }

                let o = [];
                let q = this.localValue ? this.norm(this.localValue) : "";
                for(let i=0; i<groups.length; i++) {
                    let g = JSON.parse(JSON.stringify(groups[i]));
                    if(this.sort && g[this.gOptions]) {
                        g[this.gOptions].sort((a,b) => {
                            if (this.getItemLabel(a) < this.getItemLabel(b)) return -1;
                            if (this.getItemLabel(a) > this.getItemLabel(b)) return 1;
                            return 0;
                        });
                    }
                    if(this.search && q && g[this.gOptions]) {
                        g[this.gOptions] = g[this.gOptions].filter(e => this.norm(this.getItemLabel(e)).indexOf(q) >= 0);
                    }
                    o.push(g);
                }

                return o;
            }
        }
    }
</script>
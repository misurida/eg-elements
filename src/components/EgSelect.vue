<template>
    <eg-input
            :class="{'eg-input':inputClass,'button-style':buttonStyle,_multiple,disabled,wide}"
            :value="_localValue"
            :type="type"
            :id="_id"
            :label="label"
            :placeholder="_placeholder"
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
            :icon="_icon"
            :lIcon="lIcon"
            :icons="icons"
            :lIcons="lIcons"
            :clickableIcon="clickableIcon"
            :flipIcon="flipIcon"
            :plusMinus="plusMinus"
            :regexList="regexList"
            :autoFocus="autoFocus"
            :editable="editable"
            :cross="cross"
            :emptyCross="emptyCross"
            :inputClass="false"
            :empty="_empty"
            :emptyValue="emptyValue"
            :tabindex="_tabindex"
            :wide="wide"
            :flex="flex"
            :baseMin="baseMin"
            :baseMax="baseMax"
            @mousedown="$emit('mousedown')"
            @iconClick="hIconClick"
            @click="hClick"
            @keyup="hKeyup"
            @escape="hEscape"
            @enter="hEnter"
            @focus="hFocus"
            @blur="hBlur"
            @cross="hCross"
            @fakeClick="hFakeClick"
            @input="hInput">
        <template slot="above"><slot name="above"></slot></template>
        <template slot="after-label"><slot name="after-label"></slot></template>
        <template slot="below"><slot name="below"></slot></template>
        <div slot="taglist" class="eg-tags-list" v-if="hasTags()">
            <eg-tag
                    :clickable="clickable"
                    cross
                    v-for="(v,i) in value"
                    :key="getItemId(v)"
                    @cross="popTag(i)"
                    @escape="popTag(i)"
                    tabindex="1"
                    :class="{focus:i==isArray&&value.length-1&&confirmPopTag}">
                {{ tagPrefix }}{{ getItemLabel(v) }}{{ tagSuffix }}
            </eg-tag>
        </div>
        <template slot="display">
            <slot name="display"></slot>
        </template>

        <!-- Native select -->
        <template v-if="native">
            <select slot="input"
                    :value="_localValue"
                    :id="_id"
                    :disabled="disabled"
                    :tabindex="tabindex"
                    @mousedown="$emit('mousedown')"
                    @iconClick="hIconClick"
                    @click="hClick"
                    @keyup="hKeyup"
                    @escape="hEscape"
                    @enter="hEnter"
                    @focus="hFocus"
                    @blur="hBlur"
                    @cross="hCross"
                    @change="hChange"
                    @fakeClick="hFakeClick"
                    @input="hInput">
                <template v-if="!menuEmpty">
                    <option v-if="_placeholder" class="fake-placeholder" :value="null">{{ _placeholder }}</option>
                    <template v-if="!items || items.length === 1">
                        <option class="item" v-for="(item) in items[0][gOptions]" :key="getItemId(item)" :selected="isSelected(item)">{{ getItemLabel(item) }}</option>
                    </template>
                    <template v-else>
                        <optgroup class="items-group" v-for="group in items" :key="getGroupLabel(group)" :label="getGroupLabel(group)">
                            <option class="item" v-for="(item) in group[gOptions]" :key="getItemId(item)" :selected="isSelected(item)">{{ getItemLabel(item) }}</option>
                        </optgroup>
                    </template>
                </template>
            </select>
        </template>

        <!-- Select options -->
        <template slot="menu" v-else-if="focus">
            <!--<transition>-->
            <eg-floating-menu :id="_id+'-menu'" v-if="focus" :menu="menu" :over="over" :prevent-closing="false">
                <template v-if="!menuEmpty && items[0][gOptions].length > 0">
                    <div class="items-group" v-for="group in items" :key="getGroupLabel(group)">
                        <span class="group-title" v-if="getGroupLabel(group) && hasOptions(group)">{{ getGroupLabel(group) }}</span>
                        <ul>
                            <li
                                    class="item"
                                    :class="{active:isActive(item), selected:isSelected(item), grouped:getGroupLabel(group)}"
                                    v-for="(item,i) in group[gOptions]"
                                    @click="itemClick(item, $event)"
                                    :key="getItemId(item)">
                                <slot v-if="$scopedSlots.item" :e="{value:item, i}" name="item"></slot>
                                <span v-else>{{ getItemLabel(item) }}</span>
                            </li>
                        </ul>
                    </div>
                </template>
                <div class="empty-menu-placeholder" v-else>
                    <template v-if="localValue">
                        <span v-if="searchType === 'start'">No items found (starting with: <i>{{ localValue }}</i>)</span>
                        <span v-else>No items found (matching: <i>{{ localValue }}</i>)</span>
                    </template>

                    <span v-else>No items</span>
                </div>
            </eg-floating-menu>
            <!--</transition>-->
        </template>
    </eg-input>
</template>

<script>
    export default {
        props: {
            // main
            menu: {type: String, default: "b"},
            native: {type: Boolean, default: false},
            //emptyLabel: {type: String, default: ""},

            // options
            options: {type: Array, default() {return[]}},
            oLabel: {default: 0},
            oId: {default: 0},
            oMap: {default: null},

            // Grouped options
            optGroups: {type: Object, default() {return{}}},
            gLabel: {default: 0},
            gOptions: {default: "options"},
            groupBy: {type: String, default: null},

            // sort
            sort: {type: String, default: null},
            sortGroups: {type: Boolean, default: false},

            // search and filter
            editable: {type: Boolean, default: false},
            noFilter: {type: Boolean, default: false},
            searchType: {type: String, default: "start"},
            freeInput: {type: Boolean, default: false},

            // multiple
            multiple: {type: Boolean, default: false}, // forces an array as payload
            tagPrefix: {type: String, default: ""},
            tagSuffix: {type: String, default: ""},
            clickable: {type: Boolean, default: false},

            // style
            over: {type: Boolean, default: false},


            /* Text input attributes */

            // main
            value: {default: null},
            type: {type: String, default: "text"},
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
            icon: {type: String, default: "svg:caret"},
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
            cross: {type: Boolean, default: false},
            emptyCross: {type: Boolean, default: false},

            //// scaffolding
            inputClass: {type: Boolean, default: true},
            empty: {default: undefined},
            emptyValue: {default: null},
            tabindex: {default: 1},

            //// sizing
            wide: {type: Boolean, default: false},
            flex: {type: Boolean, default: false},
            baseMin: {type: Number, default: 50},
            baseMax: {type: Number, default: 500},
        },
        data() {
            return {
                focus: false,
                localValue: null,
                focusTriggered: false,
                selectedItem: undefined,
                confirmPopTag: false,
                blurLock: false,
                noPlaceholder: false
            }
        },
        methods: {
            hChange(e) {
                // used by the native select
                this.$emit('input', e.target.value);
            },
            popTag(i) {
                let v = this.value;
                let item = this.value[i];
                if(i === 0) v.shift();
                else if(i === v.length-1) v.pop();
                else v.length > 0 ? v.splice(1,i) : v = [];
                this.$emit('input', v);
                this.$emit('itemClick', item);
                this.doFocus();
            },
            itemClick(i, e) {
                if(this._multiple) {
                    let v = Array.isArray(this.value) ? this.value : [];
                    if(this.isActive(i)) {
                        v = v.filter(e => this.getItemId(e) !== this.getItemId(i));
                    }
                    else if(this.oMap) {
                        v.push(i[this.oMap]);
                    }
                    else {
                        v.push(i);
                    }
                    this.$emit('input', v);
                    this.$emit('change', v);
                    if(!e.ctrlKey) {
                        this.looseFocus();
                    }
                }
                else {
                    let payload = i
                    if(this.oMap) {
                        payload = i[this.oMap];
                    }
                    if(this.emptyLabel && payload === this.emptyLabel) {
                        payload = this.emptyValue;
                    }
                    this.$emit('input', payload);
                    this.$emit('change', payload);
                    this.looseFocus();
                }
                e.value = i;
                this.$emit('itemClick', e);
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
                    if(this.oId && i) {
                        return i[this.oId];
                    }
                    else if(this.oMap && i) {
                        return i[this.oMap];
                    }
                    else if(!this.isEmpty(i)) {
                        return i[Object.keys(i)[0]];
                    }
                }
                return i;
            },
            getItemLabel(i,sortable) {
                // the item is an object
                if(typeof i === "object" && i) {
                    if(sortable && this._sort) {
                        return i[this._sort];
                    }
                    else if(this.oLabel) {
                        return i[this.oLabel];
                    }
                    else if(!this.isEmpty(i)) {
                        return i[Object.keys(i)[0]];
                    }
                }
                // the item is an id
                if(!isNaN(i) && i) {
                    let o = this.itemsList.find(e => e && e[this.oMap] == i);
                    if(sortable && this._sort && o[this._sort]) {
                        return o[this._sort];
                    }
                    else if(o && o[this.oLabel]) {
                        return o[this.oLabel];
                    }
                }
                // if there is a mapping, we can get the label for the options
                else if(this.oMap && i) {
                    if(this.optGroups && Object.keys(this.optGroups).length > 0) {
                        for(let p in this.optGroups) {
                            let o = Array.isArray(this.optGroups[p]) ? this.optGroups[p].find(e => e[this.oMap] === i) : false;
                            if(o && o[this.oMap]) {
                                return this.getItemLabel(o);
                            }
                        }
                    }
                    else {
                        let o = this.options.find(e => e[this.oMap] === i);
                        if(o && o[this.oMap]) {
                            return this.getItemLabel(o);
                        }
                    }

                }/*
                if(!i && this.emptyLabel) {
                    return this.emptyLabel;
                }*/
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
                document.activeElement.blur();
            },
            compare(a, b) {
                return this.getItemId(a) === this.getItemId(b);
            },
            isActive(l) {
                if(this._multiple && this.isArray) {
                    for(let i=0; i<this.value.length; i++) {
                        let v = this.value[i];
                        if(!v && this.getItemId(l) === this.emptyValue)
                            return true;
                        if(this.compare(v,l)) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    if(!this.selectedItem && this.getItemId(l) === this.emptyValue)
                        return true;
                    return this.compare(this.value, l);
                }
            },
            isSelected(l) {
                return this.compare(this.selectedItem, l);
            },
            hasOptions(g) {
                return g[this.gOptions] && g[this.gOptions].length > 0;
            },
            setFromValue(v) {
                if(!Array.isArray(v)) {
                    let found = false
                    if(this.oMap && this.items) {
                        for(let i=0; i<this.items.length; i++) {
                            let itemPack = this.items[i];
                            if(itemPack.options) {
                                for(let j=0; j<itemPack.options.length; j++) {
                                    let item = itemPack.options[j];
                                    if(this.getItemId(item) === v) {
                                        found = true;
                                        this.localValue = this.getItemLabel(item);
                                    }
                                }
                            }
                        }
                    }
                    if(!found) {
                        this.localValue = this.getItemLabel(v);
                    }
                    this.noPlaceholder = this.hasTags();
                }
                else {
                    this.localValue = "";
                    this.selectedItem = undefined;
                }
            },

            // handlers
            hIconClick(e) {
                this.$emit('iconClick', e);
                if(this.focus && !this.clickFlip) {
                    this.looseFocus();
                }
            },
            hClick() {
                this.clickFlip = false;
            },
            hFakeClick() {
                if(this.focus && !this.clickFlip) {
                    this.looseFocus();
                }
            },
            hCross(e) {
                if(this.editable && !!this.localValue && !this.freeInput) {
                    this.setFromValue(this.value);
                }
                else if(!this.editable || !this.localValue) {
                    this.$emit('input', this._multiple ? [] : this.emptyValue);
                }
                this.$emit('cross', e);
            },
            hEnter(e) {
                if(this.selectedItem) {
                    this.itemClick(this.selectedItem, e);
                }
                else if(!this._multiple) {
                    if(this.editable) {
                        this.$emit('input', this.localValue);
                        this.$emit('change', this.localValue);
                    }
                    this.itemClick(this.getFirstItem(), e);
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
                if(!this.localValue) {
                    this.looseFocus();
                }
            },
            hKeyup(e) {
                if((e.keyCode === 37 || e.key === "ArrowLeft") || (e.keyCode === 38 || e.key === "ArrowUp")) {
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
                if((e.key === "Backspace" || e.keyCode === 8) && this._multiple  && this.isArray && this.value.length > 0 && !this.localValue) {
                    if(this.confirmPopTag) {
                        this.popTag(this.value.length-1);
                        this.confirmPopTag = false;
                    }
                    else {
                        this.confirmPopTag = true;
                    }
                }
            },
            hInput(e) {
                if(this.freeInput && !this._multiple) {
                    this.$emit('input', e);
                }
                else {
                    this.localValue = e;
                }
                if(this.freeInput && this.editable) {
                    let found = false;
                    if(this.oMap) {
                        for(let i=0; i<this.items.length; i++) {
                            let itemPack = this.items[i];
                            for(let j=0; j<itemPack.options.length; j++) {
                                let item = itemPack.options[j];
                                if(this.getItemLabel(item) === e) {
                                    found = true;
                                    this.$emit('input', this.getItemId(item));
                                }
                            }
                        }
                    }
                    if(!found) {
                        this.localValue = e;
                    }
                }
            },
            doFocus() {
                let e = document.getElementById(this._id);
                if(e) e.focus();
            },
            hFocus(e) {
                if(!this.disabled) {
                    if(!this.focus) {
                        this.clickFlip = true;
                    }
                    this.focus = true;
                    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                        e = document.getElementById(this._id);
                    }
                    this.$emit('focus',e);
                }
            },
            hBlur() {
                this.selectedItem = undefined;
                let aid = document.activeElement.id;
                if(aid !== this._id) this.focus = false;
            },
            hasTags() { return this._multiple && this.isArray && this.value.length > 0 },

            // tools
            isEmpty: (o) => !o || Object.entries(o).length === 0 && o.constructor === Object,
            rid: () => Math.random().toString(36).substr(2, 9),
            safeString: (s) => s ? s.toLowerCase().replace(/\W+(?!$)/g, '-').replace(/\W$/, '') : "",
            norm: (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        },
        watch: {
            value: {
                immediate: true,
                handler(v) {
                    this.setFromValue(v);
                }
            }
        },
        computed: {
            _id() {
                if(!this.id) {
                    if(this.oMap)
                        return this.oMap+'-'+this.rid();
                    else if(this.label)
                        return this.safeString(this.label)+'-'+this.rid();
                    else
                        return "input-"+this.rid()
                }
                return this.id;
            },
            _empty() {
                if(this.empty === undefined || this.empty === "undefined") return undefined;
                let v = this.value;
                return (Array.isArray(v) && v.length <= 0) || (!Array.isArray(v) && !v) || (Object.keys(v).length === 0 && v.constructor === Object)
            },
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
                    if(this.options.length > 0 && Array.isArray(this.options[0][this.gOptions])) {
                        return this.options;
                    }
                    else if(this.groupBy === null) {
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
            order() {
                if(this.sort && this.sort.length > 0) return this.sort.charAt(0) === "-" ? -1 : 1;
                return 1;
            },
            _sort() {
                if(this.sort === "1" || this.sort === "true") return this.oLabel;
                return this.order < 0 ? this.sort.slice(1) : this.sort;
            },
            items() {
                let groups = this._groups;
                // groups sorting
                if(this.sortGroups) {
                    groups.sort((a,b) => {
                        if (this.getGroupLabel(a) < this.getGroupLabel(b)) return this.order *-1;
                        if (this.getGroupLabel(a) > this.getGroupLabel(b)) return this.order;
                        return 0;
                    });
                }
                // groups creation
                let o = [];
                let full = [];
                let queryMatching = false;
                let q = this.localValue ? this.norm(this.localValue) : ""; // query
                for(let i=0; i<groups.length; i++) {
                    let g = JSON.parse(JSON.stringify(groups[i]));
                    // items sorting (in groups)
                    if(this.sort && g[this.gOptions]) {
                        g[this.gOptions].sort((a,b) => {
                            if (this.getItemLabel(a,1) < this.getItemLabel(b,1)) return this.order *-1;
                            if (this.getItemLabel(a,1) > this.getItemLabel(b,1)) return this.order;
                            return 0;
                        });
                    }
                    // filtering
                    if(this.editable) {
                        full.push(JSON.parse(JSON.stringify(g)));
                    }
                    if(this.editable && q && g[this.gOptions] && !this.noFilter) {
                        g[this.gOptions] = g[this.gOptions].filter(e => {
                            if(this.searchType === "start")
                                return this.norm(this.getItemLabel(e,1)).indexOf(q) === 0;
                            else
                                return this.norm(this.getItemLabel(e,1)).indexOf(q) >= 0;
                        });
                        // we check in the group if the value matches the query
                        for(let j=0; j<g[this.gOptions].length; j++) {
                            let item = g[this.gOptions][j];
                            if(this.getItemLabel(item) === this.localValue) {
                                queryMatching = true;
                            }
                        }
                    }/*
                    if(this.emptyLabel) {
                        g[this.gOptions] = g[this.gOptions].map(e => !!e ? e : this.emptyLabel);
                    }*/
                    o.push(g);
                }

                if(queryMatching) {
                    return full;
                }
                return o;
            },
            itemsList() {
                let o = [];
                if(!this.menuEmpty) {
                    for(let i=0; i<this.items.length; i++) {
                        let options = this.items[i][this.gOptions]
                        if(options && options.length > 0)
                            o = [...o, ...options];
                    }
                }
                return o;
            },
            isArray() { return Array.isArray(this.value) },
            _multiple() { return this.isArray || this.multiple },
            _placeholder() {
                if(this._multiple && this.isArray && this.value.length > 0) {
                    return null;
                }
                if(!this._multiple && (!this.isEmpty(this.value) || !!this.value)) {
                    return null;
                }
                return this.placeholder;
            },
            _cross() {
                return this.cross || (this.editable && this.cross !== false)
            },
            _localValue() {
                if(this.buttonStyle) {
                    if(!this.localValue && this.placeholder) {
                        return this.placeholder;
                    }
                }
                return this.localValue;
            },
            _icon() { return this.native && this.icon === "svg:caret" ? null : this.icon },
            _tabindex() { return this.tabindex  }
        }
    }
</script>
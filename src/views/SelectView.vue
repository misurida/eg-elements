<style lang="scss" scoped>
    .input-shelf {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .eg-input {
            margin-right: 10px;
            margin-bottom: 10px;
            min-width: 100px;
        }
    }
    .custom-item {
        display: flex;
        span {
            flex: 5;
        }
        .num {
            opacity: 0.5;
            margin-right: 5px;
            flex: 1;
        }
    }
</style>

<template>
    <div>
        <h1>Select</h1>
        <div class="pres-bloc">
            <h3>Basic select</h3>
            <div class="input-shelf">
                <eg-select placeholder="Basic select" v-model="value4" :options="items"></eg-select>
                <eg-select disabled v-model="value4" :options="items" cross></eg-select>
            </div>

            <p>Different types of select inputs:</p>
            <code>value: {{ value4 }}</code>
            <div class="input-shelf">
                <eg-select v-model="value4" placeholder="Strings array" :options="items"></eg-select>
                <eg-select v-model="value4" placeholder="Groups object" :optGroups="itemGroups" cross></eg-select>
                <eg-select v-model="value4" placeholder="Grouped items" :options="itemsG" groupBy="type" cross></eg-select>
                <eg-select v-model="value4" placeholder="Already formatted list" :options="readyItems" gLabel="name" cross></eg-select>
                <eg-select v-model="value4" placeholder="Empty list" :options="[]" gLabel="name" cross></eg-select>
            </div>

            <p>Without and with the deleting cross (an option have to be select for the cross to appear):</p>
            <div class="input-shelf">
                <eg-select placeholder="Without the cross" v-model="value4" :options="items"></eg-select>
                <eg-select placeholder="With the cross" v-model="value4" :options="items" cross></eg-select>
            </div>

            <p>Sorting the options with <code>sort</code> and the groups with <code>sortGroups</code>:</p>
            <div class="input-shelf">
                <eg-select v-model="value4" placeholder="Items sorted" sort="1" :optGroups="itemGroups"></eg-select>
                <eg-select v-model="value4" placeholder="Groups sorted" sortGroups="1" :optGroups="itemGroups"></eg-select>
                <eg-select v-model="value4" placeholder="Items and groups sorted" sort="1" sortGroups="1" :optGroups="itemGroups"></eg-select>
            </div>

            <p>Searchable without and with the cross:</p>
            <div class="input-shelf">
                <eg-select v-model="value4" :options="items" search></eg-select>
                <eg-select v-model="value4" sortGroups="1" search :optGroups="itemGroups"></eg-select>
                <eg-select v-model="value4" :options="items" search cross></eg-select>
            </div>

            <code>value: {{ value }}</code>
            <p>Searchable free input:</p>
            <div class="input-shelf">
                <eg-select v-model="value" :options="items" cross search free-input></eg-select>
            </div>

            <h3>Multiple</h3>
            <p>Using an array with <code>v-model</code> and the <code>multiple</code> attribute:</p>
            <code>Value: {{ vArray }}</code>
            <div class="input-shelf">
                <eg-select flex placeholder="Multiple are available here" v-model="vArray" multiple :options="items"></eg-select>
                <eg-select flex placeholder=" " menu="bl" v-model="vArray" multiple :options="itemsG" groupBy="type"></eg-select>
                <eg-select v-model="vArray" sortGroups="1" multiple search :optGroups="itemGroups"></eg-select>
            </div>

            <p>Multiple searchable:</p>
            <div class="input-shelf">
                <eg-select flex search placeholder="Multiple are available here" v-model="vArray" multiple :options="items"></eg-select>
                <eg-select flex search placeholder=" " v-model="vArray" multiple :options="itemsG" groupBy="type"></eg-select>
            </div>

            <p>Free input:</p>
            <div class="input-shelf">
                <eg-select search v-model="vArray" multiple free-input :options="items"></eg-select>
                <eg-select search v-model="vArray" multiple free-input :options="itemsG"></eg-select>
            </div>

            <h3>Custom slot</h3>
            <p>Using vuejs <a href="https://fr.vuejs.org/v2/guide/components-slots.html#Slots-avec-portee">slot-scope</a>, you can customize the menu items:</p>
            <div class="input-shelf">
                <eg-select v-model="value" :options="items" cross>
                    <template v-slot:item="{e}">
                        <span class="custom-item">
                            <span class="num" v-html="`${String.fromCharCode(65 + e.i)}.`"></span>
                            <span v-html="e.value"></span>
                        </span>
                    </template>
                </eg-select>
            </div>
            <p>The example above is using <code>`${String.fromCharCode(65 + e.i)}.`</code> instead of <code>(e.i+1)</code> to lighten the text of the code below:</p>
<pre>&lt;eg-select v-model="value" :options="items" cross&gt;
    &lt;template v-slot:item="{e}"&gt;
        &lt;span class="custom-item"&gt;
            &lt;span class="num" v-html="e.i + 1"&gt;&lt;/span&gt;
            &lt;span v-html="e.value"&gt;&lt;/span&gt;
        &lt;/span&gt;
    &lt;/template&gt;
&lt;/eg-select&gt;</pre>

            <h3>Menu positionning</h3>
            <p>Menu positions:</p>
            <div class="input-shelf">
                <eg-select class="w200" v-model="value" :options="items" menu="tl"></eg-select>
                <eg-select v-model="value" :options="items" menu="tr"></eg-select>
                <eg-select class="w200" v-model="value" :options="items" menu="t"></eg-select>
                <eg-select v-model="value" :options="items" flex menu="bl"></eg-select>
                <eg-select v-model="value" :options="items" menu="br"></eg-select>
                <eg-select v-model="value" :options="items" menu="b"></eg-select>
            </div>

            <p>The <code>over</code> mode:</p>
            <div class="input-shelf">
                <eg-select v-model="value4" :options="items" over></eg-select>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: "",
                value2: "",
                value3: "",
                value4: "",
                value5: "",
                value6: "",
                value7: "",
                value8: "",
                vArray: [],
                items: ['Item 1', 'Item 2', 'Item 3'],
                itemGroups: {
                    "Fruits": ['Banana', 'Peach', 'Apricot'],
                    "Animals": ['Jaguar', 'Lion', 'Tiger']
                },
                itemsG: [{
                    name: "John",
                    type: "High level"
                },{
                    name: "Jane",
                    type: "Medium level"
                },{
                    name: "Marie",
                    type: "High level"
                },{
                    name: "Pierre",
                    type: "Low level"
                }],
                readyItems: [{
                    id: 1,
                    name: "First group",
                    options: ['Tasty', 'Snack', 'Now']
                },{
                    id: 2,
                    name: "Second group",
                    options: ['Sleep', 'Rest', 'Dive']
                }]
            }
        }
    }
</script>

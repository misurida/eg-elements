<style lang="scss">
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

            <p>Menu positions:</p>
            <div class="input-shelf">
                <eg-select class="w200" label="Select" v-model="value" :options="items" menu="tl"></eg-select>
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

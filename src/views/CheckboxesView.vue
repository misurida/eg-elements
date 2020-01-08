<style lang="scss" scoped>
    .input-shelf {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        &.centered {
            align-items: flex-end;
            p {
                margin: 0 20px 0 0;
            }
            .eg-input {
                margin-bottom: 0;
                .checkbox-group {
                    margin-bottom: 0!important;
                }
            }
        }
        .eg-input {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

<style lang="scss">
    .no-bottom-margin {
        .input-shelf {
            margin-top: 10px;
            .eg-input {
                margin-bottom: 0;
            }
            .checkbox-group {
                min-width: 100px;
                margin-bottom: 0;
            }
        }
    }
</style>

<template>
    <div>
        <h1>Checkboxes</h1>
        <div class="pres-bloc">
            <h3>Boolean usage</h3>
            <p>You can use the chackbox as a boolean switch with (or without) a label. If you simply use <code>v-model</code> with a boolean to set it on of off (<code>undefined</code> can also be used for an undetermined state):</p>
            <code>value: {{ boolean === undefined || boolean === null ? 'undefined' : boolean }}</code>
            <p>Alone:</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="boolean"></eg-checkbox>
            </div>
            <p>With a label:</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="boolean" label="This text is definitely a label"></eg-checkbox>
            </div>

            <h3>Object options</h3>
            <p>If you want to provide custom values, you can pass an object containing as key the label to display and as value the value to return or to compare.</p>
            <code>value: {{ value }}</code>
            <p>With String or Number:</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="value" :elements="elements"></eg-checkbox>
            </div>
            <p>With Object (using <code>oLabel</code> to know which item is selected):</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="value" oLabel="name" :elements="complexElements"></eg-checkbox>
            </div>

            <h3>Array options</h3>
            <p>You can also use an array of options to display as checkboxes. The array can contain strings (that will be used as key and value) or objects (the label is specified with <code>oLabel</code></p>
            <code>value: {{ value }}</code>
            <p>Array of primitives:</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="value" :options="items"></eg-checkbox>
            </div>
            <p>Array of objects:</p>
            <div class="input-shelf">
                <eg-checkbox :type="type" :native="native" v-model="value" :options="itemsG" oLabel="name"></eg-checkbox>
            </div>

            <div class="no-bottom-margin">
                <h3>Using array as value</h3>
                <p>You can also use an array as value for multiple selections to be selected</p>
                <code>value: {{ vArray }}</code>
                <div class="input-shelf">
                    <eg-checkbox :type="type" :native="native" v-model="vArray" :elements="elements"></eg-checkbox>
                </div>
                <div class="input-shelf">
                    <eg-checkbox :type="type" :native="native" v-model="vArray" oLabel="name" :elements="complexElements"></eg-checkbox>
                </div>
                <div class="input-shelf">
                    <eg-checkbox :type="type" :native="native" v-model="vArray" :options="items"></eg-checkbox>
                </div>
                <div class="input-shelf">
                    <eg-checkbox :type="type" :native="native" v-model="vArray" :options="itemsG" oLabel="name"></eg-checkbox>
                </div>
            </div>

            <h3>Native</h3>
            <p>You can use the <code>native</code> boolean to use the native browser checkboxes instead</p>
            <div class="input-shelf centered">
                <p>Enable the native style: </p> <eg-checkbox :native="native" v-model="native"></eg-checkbox>
            </div>

            <h3>Radiobox</h3>
            <p>You can use the <code>type</code> radio to use radio inputs instead. The main difference is that a radio input cannot be unselected except if an array is used as value (but that situation is supposed to be handled by checkboxes).</p>
            <div class="input-shelf">
                <eg-checkbox type="radio" v-model="type" :elements="{Checkbox:'checkbox', Radio:'radio'}"></eg-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'checkbox',
                native: false,
                boolean: null,
                value: "",
                vArray: [],
                elements: {
                    "Number": 42,
                    "String": "String!",
                    "Null": null,
                    "Empty string": ""
                },
                complexElements: {
                    "John": {
                        name: "John",
                        type: "High level"
                    },
                    "Jane": {
                        name: "Jane",
                        type: "Medium level"
                    },
                    "Marie": {
                        name: "Marie",
                        type: "High level"
                    }
                },
                items: ['Item 1', 'Item 2', 'Item 3'],
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
                }]
            }
        }
    }
</script>

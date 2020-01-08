<style lang="scss" scoped>
    .input-shelf {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .eg-input {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
    .w200 {
        width: 200px;
    }
</style>

<template>
    <div>
        <h1>Text input</h1>
        <div class="pres-bloc">
            <h3>Basic text input</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf">
                <eg-input placeholder="Write something..." v-model="value"></eg-input>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Add information</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf top-shelf">
                <eg-input label="Instructional field" :messages="['You can put instructions', 'On multiple lines', 'And style .egi-messages']" v-model="value"></eg-input>
                <eg-input :left-icons="['error']" label="The label" message="Instructions just below the field" placeholder="A placeholder..." prefix="Prefix:" suffix="(suffix)" v-model="value" :base-min="5" search></eg-input>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Counter</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf top-shelf">
                <eg-input placeholder="Word length" counter v-model="value"></eg-input>
                <eg-input placeholder="Maximum 5 words" counter count-words :counter-max="5" v-model="value"></eg-input>
                <eg-input placeholder="Error at 5 words" counter count-words :counter-max="5" :counter-warn="false" v-model="value"></eg-input>
                <eg-input placeholder="Locked at 5 words" counter count-words counter-lock :counter-max="2" :counter-warn="false" v-model="value"></eg-input>
                <eg-input placeholder="Max at 15 characters" counter-hide counter counter-lock :counter-max="15" :counter-warn="false" v-model="value"></eg-input>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Width control</h3>
            <p>The field can be resized directly using CSS. You can also used the prop <code>flex</code> (boolean) and <code>base-width</code> (number) to allow the field to grow from the specified base width, based on the placeholder or the content.</p>
            <code>value: {{ value }}</code>
            <div class="input-shelf">
                <eg-input flex placeholder="I can grow!..." v-model="value"></eg-input>
                <eg-input wide placeholder="I'm a full-width 'block' input..." v-model="value"></eg-input>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Input states</h3>
            <code>value: {{ value }}</code>
            <div class="input-shelf">
                <eg-input label="Disabled" disabled placeholder="Enter text..." v-model="value" search></eg-input>
                <eg-input label="Error" error placeholder="Enter text..." v-model="value2"></eg-input>
                <eg-input label="Warning" warning placeholder="Enter text..." v-model="value3"></eg-input>
                <eg-input label="Success" success placeholder="Enter text..." v-model="value3"></eg-input>
            </div>
        </div>
        <div class="pres-bloc">
            <h3>Input icons</h3>
            <code>value: {{ value }}</code>
            <p>With and withous the <code>cross</code> property:</p>
            <div class="input-shelf">
                <eg-input placeholder="With..." v-model="value"></eg-input>
                <eg-input placeholder="Without..." v-model="value" :cross="false"></eg-input>
                <eg-input placeholder="With (and icon)..." v-model="value" icon="search"></eg-input>
                <eg-input placeholder="Without (and icon)..." v-model="value" icon="search" :cross="false"></eg-input>
            </div>
            <p>Place the icon on the left with <code>reverse-icon</code>:</p>
            <div class="input-shelf">
                <eg-input placeholder="Reversed icon..." v-model="value" icon="check" reverse-icon></eg-input>
                <eg-input placeholder="Reversed icon..." v-model="value" fas="glass-cheers" reverse-icon></eg-input>
            </div>
            <p>Multiple icons icon:</p>
            <div class="input-shelf">
                <eg-input placeholder="Google icons..." v-model="value" icon="search" :icons="['ma:accessible', 'ma:language']"></eg-input>
                <eg-input reverse-icon placeholder="Fontawesome..." v-model="value" icon="check" :icons="['fa:fas fa-biohazard']"></eg-input>
                <eg-input placeholder="Google icons..." v-model="value" ma="drafts" :leftIcons="['ma:work', 'ma:mic']"></eg-input>
                <eg-input :cross="false" placeholder="Enter text..." v-model="value" icon="search" :leftIcons="['fa:fas fa-child', 'fa:fas fa-cloud']"></eg-input>
                <eg-input placeholder="Enter text..." v-model="value" :icons="['search']"></eg-input>
            </div>
            <div class="pres-bloc">
                <h3>Validation</h3>
                <code>value: {{ value }}</code>
                <div class="input-shelf">
                    <eg-input placeholder="Numbers are forbidden..." v-model="value4" search :regex-list="errorRegexList"></eg-input>
                    <eg-input placeholder="Numbers are forbidden..." v-model="value5" search :regex-list="warningRegexList"></eg-input>
                    <eg-input placeholder="Numbers are forbidden..." v-model="value6" search :regex-list="successRegexList"></eg-input>
                    <eg-input placeholder="Numbers are forbidden..." v-model="value7" search :regex-list="lockRegexList"></eg-input>
                    <eg-input placeholder="Numbers are forbidden..." message="Invisible lock" v-model="value8" search :regex-list="lock2RegexList"></eg-input>
                </div>
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
                flip: false,
                errorRegexList: [{ regex: /^([^0-9]*)$/, message: "No numbers!" }],
                warningRegexList: [{ regex: /^([^0-9]*)$/, message: "You're not supposed to enter numbers here", state: "warning" }],
                successRegexList: [{ regex: /^([^0-9]*)$/, message: "Instructions successfully ignored", state: "success" }],
                lockRegexList: [{ regex: /^([^0-9]*)$/, message: "The numbers are locked", state: "warning", strong: true }],
                lock2RegexList: [{ regex: /^([^0-9]*)$/, strong: true }]
            }
        }
    }
</script>

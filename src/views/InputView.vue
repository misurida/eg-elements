<template>
    <div class="content-wrapper">
        <h1>Demo of &lt;EgInput&gt;</h1>
        <div v-if="false" class="demo-hero">

        </div>

        <div class="demo-zone" id="text-input-zone">
            <div class="title-bloc">
                <h2>Text input</h2>
                <span><span v-if="show.text">{{ text }} | {{ array }} | </span> <eg-btn link @click="show.text=!show.text">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            label="Simple input"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Simple input"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Full input"
                            message="Empty the field to see a search glass icon"
                            icon="glass"
                            :counter="50"
                            width="200px"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Full input"
        message="Empty the field to see a search glass icon"
        icon="glass"
        :counter="50"
        width="200px"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="AutoWidth input"
                            auto-width
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="AutoWidth input"
        auto-width
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Weak validation"
                            :regex="/^([^0-9]*)$/"
                            weak-regex
                            message="No numbers please!"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Weak validation"
        :regex="/^([^0-9]*)$/"
        weak-regex
        message="No numbers please!"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Simple validation"
                            :regex="/^([^0-9]*)$/"
                            message="No numbers please!"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Simple validation"
        :regex="/^([^0-9]*)$/"
        message="No numbers please!"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Strong validation"
                            :regex="/^([^0-9]*)$/"
                            strong-regex
                            message="No numbers please!"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Strong validation"
        :regex="/^([^0-9]*)$/"
        strong-regex
        message="No numbers please!"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Multiple rules"
                            :rules="[
                  [/^([^0-9]*)$/, 'No numbers please!'],
                  [/^[A-Z \d\W]+$/, 'Only uppercases!']
                  ]"
                            width="300px"
                            message="No numbers AND only uppercases!"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Multiple rules"
        :rules="[
                  [/^([^0-9]*)$/, 'No numbers please!'],
                  [/^[A-Z \d\W]+$/, 'Only uppercases!']
                  ]"
        width="300px"
        message="No numbers AND only uppercases!"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Multiple input"
                            multiple
                            :counter="3"
                            message="Type 'Enter' to add an item!"
                            width="100%"
                            auto-width
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Multiple input"
        multiple
        :counter="3"
        message="Type 'Enter' to add an item!"
        width="100%"
        auto-width
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Prefixed input"
                            prefix="Amount:"
                            suffix="%"
                            auto-width
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.text">
&lt;eg-input
        label="Prefixed input"
        prefix="Amount:"
        suffix="%"
        auto-width
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="textarea-input-zone">
            <div class="title-bloc">
                <h2>Textarea input</h2>
                <span><span v-if="show.textarea">{{ text }} | </span> <eg-btn link @click="show.textarea=!show.textarea">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="textarea"
                            label="Simple textarea"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.textarea">
&lt;eg-input
        type="textarea"
        label="Simple textarea"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="textarea"
                            label="Counter textarea"
                            :counter="40"
                            :rows="4"
                            message="We count the words here:"
                            counter-words
                            width="100%"
                            :autoResize="false"
                            v-model="bigText">
                    </eg-input>
                    <pre v-if="show.textarea">
&lt;eg-input
        type="textarea"
        label="Counter textarea"
        :counter="40"
        :rows="4"
        message="We count the words here:"
        counter-words
        width="100%"
        :autoResize="false"
        v-model="bigText"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="textarea"
                            label="Auto-resize textarea"
                            width="300px"
                            auto-resize
                            v-model="bigText">
                    </eg-input>
                    <pre v-if="show.textarea">
&lt;eg-input
        type="textarea"
        label="Auto-resize textarea"
        width="300px"
        auto-resize
        v-model="bigText"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="select-input-zone">
            <div class="title-bloc">
                <h2>Select input</h2>
                <span><span v-if="show.select">{{ text }} | {{ array }} | {{ object }} | </span> <eg-btn link @click="show.select=!show.select">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="select"
                            label="Simple select"
                            :list="[1,'Option',55.5]"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Simple select"
        :list="[1,'Option',55.5]"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Big select"
                            :list="bigArray"
                            width="100%"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Big select"
        :list="bigArray"
        width="100%"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Option groups"
                            :optGroups="{
                  'Numbers': [1,2,3,4,5],
                  'Words': ['I', 'am', 'selectable']
                  }"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Option groups"
        :optGroups="{
                  'Numbers': [1,2,3,4,5],
                  'Words': ['I', 'am', 'selectable']
                  }"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Searchable select"
                            editable
                            :list="['Opt1', 'Opt2', 'Opt3']"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Searchable select"
        editable
        :list="['Opt1', 'Opt2', 'Opt3']"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Object-based select"
                            oLabel="name"
                            placeholder="Choose options..."
                            :list="[{id:1, name:'test'}, {id:2, name:'test2'}]"
                            v-model="object">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Object-based select"
        oLabel="name"
        placeholder="Choose options..."
        :list="[{id:1, name:'test'}, {id:2, name:'test2'}]"
        v-model="object"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Multiple select"
                            multiple
                            placeholder="Choose options..."
                            :list="['Example', 'Opt2', 'Opt3']"
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Multiple select"
        multiple
        placeholder="Choose options..."
        :list="['Example', 'Opt2', 'Opt3']"
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Multiple editable select"
                            multiple
                            editable
                            message="No more than 2 options!"
                            :counter="2"
                            placeholder="Choose 2 options..."
                            :list="['Example', 'Opt2', 'Opt3']"
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Multiple editable select"
        multiple
        editable
        message="No more than 2 options!"
        :counter="2"
        placeholder="Choose 2 options..."
        :list="['Example', 'Opt2', 'Opt3']"
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Suggestions for free input"
                            multiple
                            editable
                            message="Type 'Enter' to add a custom option"
                            :restrictToOptions="false"
                            :list="['Example', 'Opt2', 'Opt3']"
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Suggestions for free input"
        multiple
        editable
        message="Type 'Enter' to add a custom option"
        :restrictToOptions="false"
        :list="['Example', 'Opt2', 'Opt3']"
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Simple select legacy"
                            legacy
                            :list="[1,'Option',55.5]"
                            placeholder=""
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Simple select legacy"
        legacy
        :list="[1,'Option',55.5]"
        placeholder=""
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Object select legacy"
                            legacy
                            :list="[{id:1, name:'Object 1'}, {id:2, name:'Object 2'}]"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Object select legacy"
        legacy
        :list="[{id:1, name:'Object 1'}, {id:2, name:'Object 2'}]"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="select"
                            label="Option groups legacy"
                            legacy
                            :optGroups="{
                  'Numbers': [1,2,3,4,5],
                  'Words': ['I', 'am', 'selectable']
                  }"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.select">
&lt;eg-input
        type="select"
        label="Option groups legacy"
        legacy
        :optGroups="{
                  'Numbers': [1,2,3,4,5],
                  'Words': ['I', 'am', 'selectable']
                  }"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="checkbox-input-zone">
            <div class="title-bloc">
                <h2>Checkbox, radio and Switch inputs</h2>
                <span><span v-if="show.checkbox">{{ boolean }} | {{ text }} | {{ array }} | </span> <eg-btn link @click="show.checkbox=!show.checkbox">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="checkbox"
                            label="Simple checkbox"
                            v-model="boolean">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="checkbox"
        label="Simple checkbox"
        v-model="boolean"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="checkbox"
                            legacy
                            label="Checkbox legacy"
                            v-model="boolean">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="checkbox"
        legacy
        label="Checkbox legacy"
        v-model="boolean"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="checkbox"
                            multiple
                            label="Multiple checkboxes"
                            :list="['Yes', 'No', 'Maybe', 'Example']"
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="checkbox"
        multiple
        label="Multiple checkboxes"
        :list="['Yes', 'No', 'Maybe', 'Example']"
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="checkbox"
                            multiple
                            legacy
                            label="Multiple legacy checkboxes"
                            :list="['Yes', 'No', 'Maybe', 'Example']"
                            v-model="array">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="checkbox"
        multiple
        label="Multiple checkboxes"
        :list="['Yes', 'No', 'Maybe', 'Example']"
        v-model="array"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="radio"
                            multiple
                            label="Simple radio"
                            :elements="{Now:false,After:true}"
                            v-model="boolean">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="radio"
        multiple
        label="Simple radio"
        :elements="{Now:false,After:true}"
        v-model="boolean"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="radio"
                            label="Text radio"
                            :elements="{Before:'Ok',Now:'Example text'}"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="radio"
        label="Text radio"
        :elements="{Before:'Ok',Now:'Example text'}"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="radio"
                            legacy
                            label="Text radio legacy"
                            :elements="{Before:'Ok',Now:'Example text'}"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="radio"
        legacy
        label="Text radio legacy"
        :elements="{Before:'Ok',Now:'Example text'}"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="switch"
                            label="Simple switch"
                            v-model="boolean">
                    </eg-input>
                    <pre v-if="show.checkbox">
&lt;eg-input
        type="switch"
        label="Simple switch"
        v-model="boolean"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="number-input-zone">
            <div class="title-bloc">
                <h2>Number input</h2>
                <span><span v-if="show.number">{{ number }} | </span> <eg-btn link @click="show.number=!show.number">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="number"
                            :min="0"
                            label="Simple number"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.number">
&lt;eg-input
        type="number"
        :min="0"
        label="Simple number"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="number"
                            label="Custom increment"
                            :increment="2.5"
                            no-input
                            :min="0"
                            :max="50"
                            message="Also noInput and limits"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.number">
&lt;eg-input
        type="number"
        label="Custom increment"
        :increment="2.5"
        no-input
        :min="0"
        :max="50"
        message="Also noInput and limits"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="number"
                            label="Number legacy"
                            legacy
                            no-buttons
                            :deleteCross="false"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.number">
&lt;eg-input
        type="number"
        label="Number legacy"
        legacy
        no-buttons
        :deleteCross="false"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="slider-input-zone">
            <div class="title-bloc">
                <h2>Slider input</h2>
                <span><span v-if="show.slider">{{ number }} | {{ text }} | </span> <eg-btn link @click="show.slider=!show.slider">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="slider"
                            label="Simple slider"
                            :min="0" :max="10"
                            width="100%"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.slider">
&lt;eg-input
        type="slider"
        label="Simple slider"
        :min="0" :max="10"
        width="100%"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="slider"
                            label="Detailed slider"
                            :min="0" :max="10"
                            :showLabelEach="1"
                            width="100%"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.slider">
&lt;eg-input
        type="slider"
        label="Detailed slider"
        :min="0" :max="10"
        :showLabelEach="1"
        width="100%"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="slider"
                            label="Fluid slider"
                            :min="1" :max="100"
                            stepless
                            :showStepLabels="false"
                            :showSteps="false"
                            suffix="%"
                            width="100%"
                            v-model="number">
                    </eg-input>
                    <pre v-if="show.slider">
&lt;eg-input
        type="slider"
        label="Fluid slider"
        :min="1" :max="100"
        stepless
        :showStepLabels="false"
        :showSteps="false"
        suffix="%"
        width="100%"
        v-model="number"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="slider"
                            label="Text selector"
                            :list="[
                  'Example 1', 'Example text',
                  'Example 3', 'Example 4'
                  ]"
                            width="300px"
                            v-model="text">
                    </eg-input>
                    <pre v-if="show.slider">
&lt;eg-input
        type="slider"
        label="Text selector"
        :list="[
                  'Example 1', 'Example text',
                  'Example 3', 'Example 4'
                  ]"
        width="300px"
        v-model="text"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="file-input-zone">
            <div class="title-bloc">
                <h2>File input</h2>
                <span><span v-if="show.file">{{ file }} | {{ files }} | </span> <eg-btn link @click="show.file=!show.file">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="file"
                            label="Simple file input"
                            oLabel="name"
                            oType="type"
                            @submit="handleSubmit"
                            :max-size="5000"
                            @delete="handleDelete"
                            placeholder="Click to add a file..."
                            :value="file">
                    </eg-input>
                    <pre v-if="show.file">
&lt;eg-input
        type="file"
        label="Simple file input"
        oLabel="name"
        oType="type"
        @submit="handleSubmit"
        :max-size="5000"
        @delete="handleDelete"
        placeholder="Click to add a file..."
        :value="file"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="file"
                            label="Multiple file input"
                            multiple
                            oLabel="name"
                            oType="type"
                            :extensions="['png', 'jpeg', 'jpg', 'gif']"
                            placeholder="Click or drop files..."
                            v-model="files">
                    </eg-input>
                    <pre v-if="show.file">
&lt;eg-input
        type="file"
        label="Multiple file input"
        multiple
        oLabel="name"
        oType="type"
        :extensions="['png', 'jpeg', 'jpg', 'gif']"
        placeholder="Click or drop files..."
        v-model="files"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="date-input-zone">
            <div class="title-bloc">
                <h2>Date and Time input</h2>
                <span><span v-if="show.date">{{ date }} | {{ date2 }} | {{ daterange }} | {{ time }} | </span> <eg-btn link @click="show.date=!show.date">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            label="Simple date"
                            type="date"
                            v-model="date">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Simple date"
        type="date"
        v-model="date"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Date format"
                            type="date"
                            format="DD/MM/YYYY"
                            editable
                            v-model="date2">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Date format"
        type="date"
        format="DD/MM/YYYY"
        editable
        v-model="date2"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Date range"
                            type="date-range"
                            width="250px"
                            v-model="daterange">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Date range"
        type="date-range"
        width="250px"
        v-model="daterange"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Date legacy"
                            type="date"
                            legacy
                            :delete-cross="false"
                            v-model="date">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Date legacy"
        type="date"
        legacy
        :delete-cross="false"
        v-model="date"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Simple time"
                            type="time"
                            v-model="time">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Simple time"
        type="time"
        v-model="time"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Time legacy"
                            type="time"
                            legacy
                            :delete-cross="false"
                            v-model="time">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Time legacy"
        type="time"
        legacy
        :delete-cross="false"
        v-model="time"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Time range"
                            type="time-range"
                            width="250px"
                            v-model="timerange">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Time range"
        type="time-range"
        width="250px"
        v-model="timerange"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Datetime"
                            type="datetime"
                            width="250px"
                            v-model="datetime">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Datetime"
        type="datetime"
        width="250px"
        v-model="datetime"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            label="Datetime range"
                            type="datetime-range"
                            v-model="datetimerange">
                    </eg-input>
                    <pre v-if="show.date">
&lt;eg-input
        label="Datetime range"
        type="datetime-range"
        v-model="datetimerange"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="star-input-zone" >
            <div class="title-bloc">
                <h2>Star input</h2>
                <span><span v-if="show.star">{{ number }} | {{ decnum }} | </span> Experimental | <eg-btn link @click="show.star=!show.star">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="star"
                            label="Simple star"
                            v-model="number"
                            :activeColor="color"
                            :darkGray="color2"
                            :count="5">
                    </eg-input>
                    <pre v-if="show.star">
&lt;eg-input
        type="star"
        label="Simple star"
        v-model="number"
        :activeColor="color"
        :darkGray="color2"
        :count="5"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div v-if="show.star&&false">
                    <eg-input
                            type="star"
                            label="Stepped star"
                            v-model="decnum"
                            :steps="2"
                            :count="5">
                    </eg-input>
                    <pre v-if="show.star">
&lt;eg-input
        type="star"
        label="Stepped star"
        v-model="number"
        :steps="2"
        :count="3"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div v-if="show.star&&false">
                    <eg-input
                            type="star"
                            label="Free star"
                            v-model="number"
                            :steps="2"
                            message="There are 1/2 steps but but not restricting"
                            free
                            :count="6">
                    </eg-input>
                    <pre v-if="show.star">
&lt;eg-input
        type="star"
        label="Free star"
        v-model="number"
        :steps="2"
        message="There are 1/2 steps but but not restricting"
        free
        :count="6"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
        <div class="demo-zone" id="native-input-zone">
            <div class="title-bloc">
                <h2>Native input</h2>
                <span><span v-if="show.native">{{ color }} | </span> <eg-btn link @click="show.native=!show.native">See code</eg-btn></span>
            </div>
            <div class="demo-grid">
                <div>
                    <eg-input
                            type="color"
                            label="Color input"
                            v-model="color">
                    </eg-input>
                    <pre v-if="show.native">
&lt;eg-input
        type="color"
        label="Color input"
        v-model="color"&gt;
&lt;/eg-input&gt;</pre>
                </div>
                <div>
                    <eg-input
                            type="color"
                            label="Darker color"
                            v-model="color2">
                    </eg-input>
                    <pre v-if="show.native">
&lt;eg-input
        type="color"
        label="Darker color"
        v-model="color2"&gt;
&lt;/eg-input&gt;</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Calendar from '../elements/calendar/Calendar'

    export default {
        components: {
            Calendar
        },
        data() {
            return {
                array: ['Example'],
                text: 'Example text',
                bigText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                object: {id:0,name:'Also an example'},
                bigArray: [],
                files: [],
                number: 4,
                decnum: 0.5,
                boolean: true,
                date: '25.10.1995',
                date2: '21/10/1993',
                time: '11:21:02',
                color: "#9f2f35",
                color2: "#75282e",
                daterange: ['25.10.1995', '28.10.1995'],
                datetime: ['25.10.1995', '11:21:02'],
                timerange: ['11:10:00', '11:21:02'],
                datetimerange: [['25.10.1995', '11:21:10'], ['28.10.1995', '08:25:00']],
                file: {
                    name: 'File name',
                    size: 500000,
                    type: 'text/plain',
                    file: {}
                },
                show: {
                    text: false,
                    textarea: false,
                    select: false,
                    checkbox: false,
                    number: false,
                    slider: false,
                    file: false,
                    date: false,
                    star: false,
                    native: false,
                }
            }
        },
        methods: {
            handleSubmit(file) {
                this.file = file[0];
            },
            handleDelete() {
                this.file = null;
            }
        },
        mounted() {
            for(let i=0; i<100; i++) {
                this.bigArray.push("Option " + (i+1));
            }
        }
    }
</script>

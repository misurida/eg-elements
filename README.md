# Eg-Elements

EgElements is a library of vuejs components for the experience or user interface. These elements are complete but simple, and are built to be modified with CSS to adapt to any design. These are basic elements (button, input, modal) that can be installed globally or imported individually.

## Installation

Using **npm**:

```
npm i eg-elements
```

To use the library globally and register all the components in your main js file:
```
import eg from "eg-elements"
Vue.use(eg)
```

You can alternatively use the components individually:

```
import { EgInput, EgBtn, EgIcon, Popover, Modal, Sidemenu } from 'eg-elements'
```

## [Demo](https://ege.erwan.ch) and Documentation

You can see the live demo [here](https://ege.erwan.ch), and the documentation just below!

## Elements

The EgElements are the following:
- [\<EgBtn\>](https://github.com/misurida/eg-elements/tree/newbranch/src/elements/button): A button with different style layers or state attributes
- [\<EgInput\>](https://github.com/misurida/eg-elements/tree/newbranch/src/elements/input): Any kind of input: text, textarea, select, checkbox, radio, switch, number, slider, file, date, time, star or color
- [\<Popover\>](https://github.com/misurida/eg-elements/tree/newbranch/src/elements/popover): and v-tooltip: A popover or tooltip directive to display text or actions quickly next to any element
- [\<Modal\>](https://github.com/misurida/eg-elements/tree/newbranch/src/elements/modal): A modal with attributes to display quick content or slot to insert any html
- [\<Sidemenu\>](https://github.com/misurida/eg-elements/tree/newbranch/src/elements/sidemenu): A menu that can be hidden next to viewport and based on its width. Pan and swipe events are available (thanks to [hammerjs](https://hammerjs.github.io/)) to display the menu

## Quick use

The elements are designed to be quickly usable:

### EgInputs basics

- The simplest way is to use the properties `v-model` for the value and `label` for the name. By default, `deleteCross` is *true* and display a cross to empty the field as field icon.
- The input *id* will be created from the label attribute, but you can fix it with `id` or set a unique random id using `idSeed` (also used if no label is provided).
- You can also display a message below the input using `message`, or a placeholder using `placeholder`.
- The `type` defines the input type: text (default), password, *number*, select, checkbox, radio, color, date (and related) and star.
- The input has mupltiple *state* attributes:
  - `error`: show the *error color* on the field and displays the `errorMessage`. It can be triggered automatically if you are doing validation (using `regex` by example).
  - `loading`: the input displays a loader as field icon.
  - `disabled`: the input can be disabled and will be grayed out.
  - `autoFocus`: if true, the input element will be set as *activeElement* (focus) when *mounted*.
- The default size of the input wrapper is *200px* (+ the button and borders width), but you can set it using `width` (ex: *"100%"*.
- You can display icons on the field:
  - on the right using `fas` or `ma`.
  - on the left using `lfas` or `lma`.
- Finally, you can set `legacy` to *true* to use a *native* input (but with the EgElement design). It can be used for the smartphone layouts.

### Text input basics

`<eg-input label="Name" v-model="value"></eg-input>`.

- You can use `autoWidth` to let the input change its size based on its content.
- You can count the number of words or characters entered using `counter`.
- You can use an array as *value* and set `multiple` to *true* to allow the user to enter multiple *strings*. The array elements will be dsplayed as *tags* inside the input in a convenient way.

### Textarea basics

`<eg-input type="textarea" label="Name" v-model="value"></eg-input>`.

- You can also `rows` to set the height of the input, or use `autoHeight` to let the input change its size based on its content.

### Select basics

`<eg-input type="textarea" label="Name" v-model="value"></eg-input>`.

This input allows different kind of options to pass to the field using the attributes `list` (if array) or `options` (if object):
- A simple *Array*: `["Options 1", "Options 2", ...]`. The attribute to use is `list`. The value is necessarily a string and the option name will be the same as the value.
- A simple *Object*: `{"Option 1": value1, "Option 2": value2, ...}`. The attribute to use is `options`. The value can be of any type and the option name will be the *key* related to the selected option (assed by `v-model`).
- An *Array* of *Objects*: `[{xlab: "Option 1", xval: value1}, ...]`. This method allows you to pass even unformatted object list as options throught `list`. The option name to display will be the attribute defined by `oLabel`, and the value to return must be desined by `oValue` (for selection purposes). If you want to retrieve the whole object of the option, you can set `xxx` to *true*.
- An *Object* containing *Arrays*: `{"Group 1": [item1: value1, ...], ...}`. This method allows you to display option groups, the group name being the *key* of the main object. The option must be passed to `options` and follow the same object rules than the *Array of Object* method.

The select has a floating panel to display the options, generally below the input field. Its height can be set by `maxHeight` and `resultsMinWidth` if needed. The floating panel is by default displayed *inside* the field, being anchored to the relative field position. If you need it to be in an `absolute` position, you can use the attribute `xxx` and the panel DOM element will be moved on the top of the document and positionned below the field, being now anchored to the relative *page* position.

- `multiple`. If *true*, the *value* must be an array, allowing the user to select multiple options that will be displayed as *tags* inside the input.
- `editable`. If *true*, a text input will be displayed on the field, allowing the user to filter the options based on a query string.

### Checkbox and Radio input basics

There is checkbox / radio input variations based mostly on the `v-model` type: *boolean*, any or a dynamic *Array*.

Checkbox: used as boolean switch. The `label` value will be the checkbox label:

`<eg-input type="checkbox" label="Name" v-model="boolean"></eg-input>`.

Radio options: to select *one among multiple*. The options must be an *Object* and must be passed through `options`. The text displayed will be the *key* and the value (used in `v-model`) will be the selected option.

`<eg-input type="radio" label="Name" :elements="{Before:'Ok',Now:'Example text'}" v-model="string"></eg-input>`.

Checkbox list: to select *one or multiple*. the `label` value will the field group name, displayed on the top of the set. The user can select multiple options since the *value* is an array, and the options can be passed using `list`:

`<eg-input type="checkbox" label="Name" :list="['Yes', 'No', 'Maybe']" v-model="array"></eg-input>`.


## Icons

You can display quickly an icon using the `<eg-icon>` wrapper:

```
<eg-icon i="cross"/>
```

**Attributes:**
- `i (icon, type)` (String, null): The name of the icon to display. You can also use the arguments `icon` or `type` instead of `i`.

### EG Icons

You can use any of the following icons:

### Material Icons

You can also use the [Google Material Icons](https://material.io/tools/icons). Then insert the following code in your `index.html` file:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
To use the icons, you have to prepend the attribute with **ma:**. Ex: *ma:alarm*.

### Font Awesome Icons

You can also use the [Font Awesome Icons](https://fontawesome.com/icons). You simply have to create an account and ask for a [kit](https://fontawesome.com/start). You will receive the `SECRET` code to insert into the `index.html` file:

```
<script src="https://kit.fontawesome.com/{{SECRET}}.js"></script>
```
To use the icons, you have to prepend the attribute with **fa:**. Ex: *fa:fas fa-arrow-up*. YOu can also use special attributes `fa`, `fas`, `far` ou `fal` to use just like `i` but prepending automatically *fa:fa fa-*, *fa:fas fa-*, *fa:far fa-* ou *fal:fa fa-*. You can then just use the icon name, such as *arrow-up*.

## SCSS

The components styles are written using `lang="scss"`, so you might need the [Webpack SASS pre-processor](https://vue-loader.vuejs.org/guide/pre-processors.html) if you want to tweak the elements files:

```
npm install -D sass-loader node-sass
```

Then, in the webpack config:

```
module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // plugin omitted
}
```
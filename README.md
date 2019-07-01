# Eg-Elements

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
import { Input, Btn } from 'eg-elements'
```

The components styles are written in `lang="scss"`, so you might need the [Webpack SASS pre-processor](https://vue-loader.vuejs.org/guide/pre-processors.html):

```
npm install -D sass-loader node-sass
```

In the webpack config:

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

## [Demo](https://ege.erwan.ch) and Documentation

You can see the live demo [here](https://ege.erwan.ch), and the documentation just below!



## \<EgIcon\>

You can display quickly an icon using the `<eg-icon>` wrapper:

```
<eg-icon i=cross/>
```

**Attributes**
- `primary (pri)` (Boolean, false): If *true*, the primary color style is applied. You can also use the shorthand `pri`.
- `secondary (sec)` (Boolean, false): If *true*, the secondary color style is applied. You can also use the shorthand `sec`.

```
<script src="https://kit.fontawesome.com/793c864fe7.js"></script>
```
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```


## \<EgBtn\>

The Btn element can be used to display a `<button>` tag quickly. It has multiples styles availables that can be set through the components attributes (*props*), and can display icons on the left or the right. You can set the button style, but also change its state to `loading` to display a loader, `disabled` to to lock it or `error` and `warning` to display a quick style layer on top of the regular style.

The `@click` event is transmitted, and you can insert the button text or any html code in the default slot (between the tags).
The attributes are described on the table below, and you can set only one *style* and one *type*, but multiple *state* attributes.

**Attributes**

The attributes are summarized in the table here, and are described in a list containing the name of the attribute, the type of value and the default value between parenthesis, and its description.

| N° | Styles            | Types           | States         |
|----|-------------------|-----------------|----------------|
| 1  | primary (pri)     | small           | disabled       |
| 2  | secondary (sec)   | big             | loading        |
| 3  | ternary (ter)     | wide            | active         |
| 4  | link              | floatLeft (fl)  | error          |
| 5  | thin              | floatRight (fr) | warning        |
| 6  | transparent (tra) | leftAlign (la)  | rightIcon (ri) |
| 7  | light             | rightAlign (ra) | leftIcon (li)  |
| 8  | dark              | square          |                |
| 9  | yoga              | round           |                |

**Styles:**

- `primary (pri)` (Boolean, false): If *true*, the primary color style is applied. You can also use the shorthand `pri`.
- `secondary (sec)` (Boolean, false): If *true*, the secondary color style is applied. You can also use the shorthand `sec`.
- `ternary (ter)` (Boolean, false): If *true*, the ternary color style is applied. You can also use the shorthand `ter`.
- `link` (Boolean, false): If *true*, the button is displayed in a link style: no background or border and underlined.
- `thin` (Boolean, false): If *true*, the button is displayed in a thin style: a light background and a dark border.
- `transparent (tra)` (Boolean, false): If *true*, the button is transparent: no background or border. You can also use the shorthand `tra`.
- `light` (Boolean, false): If *true*, the button is displayed in a light style: a light background and border.
- `dark` (Boolean, false): If *true*, the button is displayed in a dark style: a dark background and border.
- `yoga` (Boolean, false): If *true*, the button is displayed in yoga style: minimal with a dot on the top and a special color on `active`.

**Types:**

- `small` (Boolean, false): If *true*, the button is displayed in a smaller size.
- `big` (Boolean, false): If *true*, the button is displayed in a bigger size.
- `wide` (Boolean, false): If *true*, the button take 100% of the horizontal available space.
- `floatLeft (fl)` (Boolean, false): If *true*, the button is in `float:left`. You can also use the shorthand `fl`.
- `floatRight (fr)` (Boolean, false): If *true*, the button is in `float:right`. You can also use the shorthand `fr`.
- `leftAlign (la)` (Boolean, false): If *true* and `wide`, the button content is displayed on the left. You can also use the shorthand `la`.
- `rightAlign (ra)` (Boolean, false): If *true* and `wide`, the button content is displayed on the right You can also use the shorthand `rl`.
- `square` (Boolean, false): If *true*, the button borders are squared.
- `round` (Boolean, false): If *true*, the button borders are rounded.

**States:**

- `disabled` (Boolean, false): If *true*, the button is unactive and slightly transparent or grayed. It can not be used.
- `loading` (Boolean, false): If *true*, the button displays a loader.
- `active` (Boolean, false): Only useful for some styles. If *true*, the button is displayed in its *active* state.
- `error` (Boolean, false): If *true*, the button is displayed in the *error* state.
- `warning` (Boolean, false): If *true*, the button is displayed in its *warning* state.
- `rightIcon (ri)` (String, null): The name of the icon to display on the right. A *falsy* value means display nothing.
- `leftIcon (li)` (String, null): The name of the icon to display on the left. A *falsy* value means display nothing.








## \<EgInput\>

This element allows you to display different types of *inputs*, allowing the user to interact with the interface and enter content. It allows you to modify a value (usually a *string*) with the `v-model` (or simple `value`) attribute. This attribute can be used with most types. The `label` can displays quickly the name of the field and `message` can display some text below. `deleteCross` (*true* by default) allows you to display a cross in the field to clear the value.


**Global Attributes:**

- `type` (String, "text"): The type of the input. Can be any of the following values (being described below):
    - `text`: Regular input text,
    - `select`: Options selector,
    - `checkbox`: Checkbox to set a boolean value,
    - `radio`: A radio input to select an option among multiple,
    - `number`: Input for the numbers,
    - `file`: Input for one or multiple files,
- `value` (None, null): Value of the field linked with the *v-model*.
- `label` (String, null): The title of the field (displayed above).
- `id` (String, null): The string to use as `id` for the field and label. If not specified, the label will be used to create the `id`, or randomly generated if the label is not specified.
- `idSeed` (Boolean, false): If *true*, a random string is appended to the id.
- `autoFocus` (Boolean, false): If *true*, the field is directly focused after its render.
- `useHammer` (Boolean, false): If *true*, the *Hammerjs* library is use when needed.

States:

- `legacy` (Boolean, false): If *true*, the *native* field is displayed instead of the default one.
- `disabled` (Boolean, false): If *true*, the field is grayed out or slightly transparent and unusable.
- `error` (Boolean, false): If *true*, the field is in *error mode*: the text and border are red.
- `loading` (Boolean, false): If *true*, the field is in *loading mode* and a loader is displayed on the right of the field (instead of the icon).

Messages:

- `message` (String, null): Additional message to display below the field.
- `messages` (Array, []): Additional messages array (`message` has priority).
- `errorMessage` (String, null): Error message to display below the field in *error mode*,
- `errorMessages` (Array, []): Error messages array (`errorMessage` has priority).

Style:

- `width` (String, null): If specified, sets the size of the field. The unit must be specified (e.g: `200px`).
- `minWidth` (Number, 50): If specified, sets the *min-width* css attribute to the input and the content wrapper.
- `autoWidth` (Boolean, false): If *true*, the field will adjust its width based on the content size.
- `widthBasis` (Number, 30): To use with `autoWidth`. Size of the input when the field is empty.

Events:

- `eChange` (Boolean, false): If *true*, the `@change` event is triggered when the field value changes with the new value as an argument (instead of `@input` for the `v-model`).
- `eFocus` (Boolean, false): If *true*, the `@focus` event is emitted.
- `eBlur` (Boolean, false): If *true*, the `@blur` event is emitted.

**Translation texts**:

Text:

- `searchLabel` (String, "Recherche:"): String representing the text to display instead of the label when a query is active.
- `noItemLabel` (String, "Aucun elements..."): String representing the text to display when to item is available or has been found.
- `counterMessage` (String, 'The counter has been exceeded!'): Message to be displayed when `counter` is exceeded.

File:

- `filesMultipleLabel` (String, "fichiers"): String representing the text to display after the number in a multiple file input.
- `noValidFileMessage` (String, "fichiers"): String representing the error message to display when no file is valid after the selection.
- `dropLabel` (String, "Déposer ici"): String representing the text to display after the number in a multiple file input.
- `maxSizeError` (String, "Le fichier dépasse la taille maximale"): String representing the message to display if there is a size related error.
- `extensionError` (String, "L'extension du fichier n'est pas valide"): String representing the message to display if there is an extension related error.

Date:

- `daysShortNames` (Array, [...]): Array containing the short names (3 characters) of the days.
- `daysFullNames` (Array, [...]): Array containing the full names of the days.
- `monthsShortNames` (Array, [...]): Array containing the ahort names (3-4 characters) of the months.
- `monthsFullNames` (Array, [...]): Array containing the full names of the months.

Time:

- `hoursLabel` (String, "Heures"): String representing the text to display as label in the visual time selector (hours).
- `minutesLabel` (String, "Minutes"): String representing the text to display as label in the visual time selector (minutes).
- `secondsLabel` (String, "Secondes"): String representing the text to display as label in the visual time selector (seconds).
- `startingTimeLabel` (String, "Début"): String representing the text to display as label in the visual time selector (starting).
- `endingTimeLabel` (String, "Fin"): String representing the text to display as label in the visual time selector (ending).

### Text

A *text input* allows the user to enter any text on a line. You can pass with `label` a title which will be displayed above the field, an `icon` which will be displayed to the right of the field and a `placeholder`. Enabled by default, `delecteCross` displays a cross next to the field that allows you to quickly delete the content. You can also display a message under the field with `message`, put the field in *error mode* with `error` or display a loader (instead of the icon to indicate to the user an action in progress) with `loader`.

You can also restrict the text that the user can enter with the attribute `regex`. If the text entered does not match the conditions of `regex`, the user will not be able to continue editing the field. You can retrieve the value with the event only when it is correct by passing the attribute `changeEvent`, which will prevent the use of `@input` to the benefit of `@change`. You can pass several rules with `rules`, each displaying a message if the value is not valid.

You can also display a counter with `counter`, to count by default the number of characters, but you can also define a maximum number of words with `counterWords`. Finally, you can link an array to display, add or delete several elements with `multiple`. You can limit the number of elements with `counter`.

**Attributes**:

- `placeholder` (None, null): The string to display when the value is empty.
- `suffix` (Boolean, false): string to display before the field.
- `prefix` (Boolean, false): String to display after the field.
- `multiples` (Boolean, false): Expects an array as `value`. Allows the user to enter multiple values in the field. Can be limited with `counter`.

Validation :

- `regex` (None, null): A *regular expression* that forces the field value to be formatted. A formatted value is issued through the `@input` event (otherwise the user would be blocked), but not with `@change`. It is therefore preferable to use `@change` and `value` to ensure a compliant return value.
- `strongRegex` (Boolean, false): If *true*, an input value that is invalidated by `regex` cannot be entered.
- `weakRegex` (Boolean, false): If *true*, an input value that is invalidated by `regex` is still transmitted throught the `@change` event. If used with `multiple`, allows to add a new option when the user types *enter* in the field (even if there is an active error).
- `Rules` (Array, []): Indicates a list of rules. Each element of the array must be of type Array and must contain at index 0 a *regular expression* that indicates the rule and at index 1 a message to display if the rule is violated.

Icons :

- `icon` (String, null): The name of the icon to display in the field: 'glass' for a *search glass*, 'check' for a *checkmark* or 'cross' for a *cross*.
- `deleteCross` (Boolean, true): If *true*, clicking on the cross icon erases the input content.
- `emptyShowCross` (Boolean, true): To be used with `deleteCross`. If *true*, still displays the cross, even if there is no value in the field.

Counter :

- `counter` (None, null): Expects a number or a *string* representing a number as value. Maximum character limit before displaying the error defined by `counterMessage`. If `multiple` is *true*, represents the limit of elements in the `value` array.
- `counterLock` (Boolean, true): If *true*, the user cannot continue to edit a value that does not correspond to the counter limitation. If used with `multiple`, the user can only add the number of elements specified by `counter`. Does not prevent copying and pasting it.
- `counterWords` (Boolean, true): If *true*, the counter counts the number of words instead of the number of characters. The words are separated by `counterSeparator` (by default a space).
- `counterSeparator` (String, " "): Defines the character string to be used for word separation.


### Textarea

A *textarea input* allows the user to enter any text on several lines. This field is similar to the *text* type and can receive all the arguments of the latter. In addition, you can define the native attributes `rows` and `cols`, and `autoResize` which allows the field to automatically change its height according to the size of the text entered.

**Attributes**:

- The *validation*, *counter*, `placeholder` and `deleteCross` attributes of the *text* input.
- `rows` (None, 2): (Native) the number of columns to display.
- `cols` (None, null): (Native) the number of lines to display.
- `autoResize` (Boolean, false): If *true*, the field increases or decreases the number of lines (height) based on the size of the content.
- `showScrollbar` (Boolean, true): If *true*, the scrollbar is displayed when the container is scrollable.


### Select

A *select input* allows the user to select an option from a drop-down list. You can navigate between the options using the keyboard keys. The items in the list can be passed in three different ways. First, using an array of strings with `list`. Then, using an array of objects with `list` by defining the property of each object to be displayed with `oLabel`. Finally, you can pass option groups using `optGroups`, which is an Object that contains the group name as *key* and an option table for *value*.

You can link an array to display, add or delete multiple elements with `multiple`. You can also let the user enter text freely to filter the available options with the attribute `editable`. If the latter is used with `multiple`, you can let the user enter an option by typing *enter*. You can limit the number of elements with `counter`, and force the user to use an option (instead of the text entered) with `restrictToOptions`.

**Attributes**:

- The *validation*, *counter*, `placeholder` and `deleteCross` attributes of the *text* input and `showScrollbar` from the *textarea* input.
- `list` (Array, []): Array of options to display.
- `optGroups` (Object, {}): Object representing groups of options, containing the name of the group as *key* and an array as *value.*
- `multiple` (Boolean, false): If *true*, expects a value of type Array and allows to select several options. The field displays the options in *bubbles* inside the field.
- `editable` (Boolean, false): If *true*, a text field is displayed in the element to enter a query to filter the options.
- `restrictToOptions` (Boolean, true): Shortcuts for *Restricted to Options*, to be combined with `editable`. If *false*, the text entered for a search is directly emitted, even if no option has been selected. If combined in addition with `multiple`, typing *enter* in the text field adds the text entered in the value table.
- `oLabel` (String, `name'): If the options are of type *Object*, this option allows you to specify which attribute represents the name to be displayed.
- `maxHeight` (String, "400px"): Represents the maximum height of the list of displayed options.
- `resultsMinWidth` (String, "200px"): Represents the minimum width of the list of displayed options.
- `tabindex` (Boolean, false): If *true*, the options have the html tabindex attribute set to 1, allowing a tab navigation.

### Checkbox

A *radio input* allows the user to select an option. The option is by default a boolean, and the label is used as checkbox label after the checkbox (instead of input title). If using `multiple`, you can pass an array of checkboxes to display instead of one. The `label` will then define the title, and the emitted value is an array of selected options.

**Attributes**:

- `legacy` (Boolean, false): If *true*, display the original checkbox input instead of the svg.
- `multiple` (Boolean, false): If *true*, the `list` attribute is used to display multiple checkboxes.
- `list` (Object, {}): The elements to be displayed, the *key* being the text to be displayed and the *value* the value to be returned if the field is selected.

### Radio

A *radio input* allows the user to select an option from several options. The options are passed through `elements` as Object. The *value* of this Object is passed as the value when an option in the field is selected, and the *key* is displayed next to the option.

**Attributes**:

- `legacy` (Boolean, false): If *true*, display the original checkbox input instead of the svg.
- `elements` (Object, {}): The elements to be displayed, the *key* being the text to be displayed and the *value* the value to be returned if the field is selected.

### Switch

A *switch input* allows the user to activate or unactivate an option, represented by a boolean value. The switch is represented by a button sliding horizontally between two position.

### Number

A *number input* allows the user to select a number between `min` and `max`. Two buttons (plus and minus) are displayed on the right of the field, and a cross can be displayed to reset the value (to `min`) with `deleteCross` (enabled by default). The default increment when the user presses a button is 1, but can be defined with `increment`. The user may be forced to use the buttons with `noInput` and the buttons can be hidden with `noButtons`.

**Attributes**:

- All the attributes of the *text* input.
- `min` (Number, null): Minimum value that the field can contain.
- `max` (Number, null): Maximum value that the field can contain.
- `increment` (Number, 1): Defines how much the field value is incremented (or decremented) when the plus (or minus) button is clicked. Allows you to define steps.
- `noInput` (Boolean, false): If *true*, the user will only be able to change the value of the field with the plus or minus buttons.
- `noButton` (Boolean, false): If *true*, the user will only be able to change the value of the field with input.
- `startDelay` (Number, 300): Time in `ms` before the numbers start to change after pressing a button (plus or minus).
- `speed` (Number, 30): Time in `ms` to increment the value after the `startDelay`.

### File

A *file input* allows the user to view, download or delete a file. The user can also drag and drop files on the field. The `value` attribute must be an array that will be updated by the field. The array will be filled with objects as follows (the [*key*] are defined by the attributes of the same name, and you can omit a dynamic argument):
```
{
  [oLabel]: (b.e: "name"): String representing the name to be displayed.
  [oType]: (b.e: "ext"):  String representing the extension or MIME type of the file.
  [oUrl]: (b.e: "url"): Url representing the location of the resource.
  unvalid: Boolean true if there is an error
  errors: Array containing the error messages to be displayed
}
```
When a file is loaded in the field, two icons may appear: a cross icon if `deleteCross` is enabled, and a validation icon if the file is valid. Clicking on the validation icon triggers the `@submit` event which takes as parameter an array containing the validated file(s). Clicking on the cross triggers the event `@delete` which takes the same arguments.

A file is invalid if its size exceeds `maxSize`, its extension is not in `extensions` or its name does not respect one of the `rules` (from *text input*). In this case, the field is displayed in red and the validation icon is not displayed. The user can enter several files with `multiple`.

- `oSize` (String, null): The attribute representing the size of the file, for size validation.
- `oType` (String, "type"): The attribute representing the type of the file, to display the icon.
- `oUrl` (String, "url"): The attribute representing the url of the file, to display the image preview.
- `maxSize` (Number, null): The size maximal if the file in `bytes`. To convert: KB: x1024, MB: x1024x1024, GB: x1024x1024x1024x1024.
- `extensions` (Array, []): A list of granted extensions.
- `instant` (Boolean, false): If *true*, a file uploaded will be directly submitted if possible, or discarded otherwise.

### Date

A *date input* allows the user to enter a string representing a date. The format is specified by `format` and the field deploys a visual calendar to select a date. The latter allows quick month-to-month navigation, day/month/year selection on-the-fly and a visual selector for years and months. A change in the field will be reflected in the calendar, and it is possible to use `weakRegex` and `strongRegex`.

**Attributes**:

- All the attributes of the *text* input.
- `format` (String, null): Represents the format of the date and triggers the *error mode* if not respected. The value can be: 'DD.MM.YYYY', 'DD:MM:YYYY', 'DD-MMM-YYYY', 'DD/MM/YYYY', 'MM.DD.YYYY', 'MM:DD:YYYY', 'MM-DD-YYYY', 'MM/DD/YYYY', 'YYYY.MM.DD', 'YYYY:MM:DD', 'YYYY-MMM-DD' or 'YYYY/MM/DD'.

### Time

A *time input* allows the user to enter a character string representing hours, minutes or seconds. The format is specified by `format` and the field allows you to deploy a visual selector to select hours, minutes and seconds (in increments of 5 for the latter) using buttons. A change in the field will be reflected on the selector, and it is possible to use `weakRegex` and `strongRegex`.

**Attributes**:

- All the attributes of the *text* input.

### Datetime

A *datetime input* allows the user to enter two strings representing a date and time. The return value is a two-position table containing the date first and the time second. The field allows you to deploy a combined visual selector (calendar + hour selector).

**Attributes**:

- All the attributes of the *text* input.
- `sep` (String, ''): String to display and use as separator between the two fields.

### Date-range

A *date-range input* allows the user to enter two strings representing a starting and an ending date. The return value is a two-position table containing the starting date as first element and the ending date as second element. The field allows you to deploy a visual calendar to select te date range.

**Attributes**:

- All the attributes of the *text* input.

### Time-range

A *time-range input* allows the user to enter two strings representing a starting and an ending time. The return value is a two-position table containing the starting time as first element and the ending time as second element. The field allows you to deploy a visual selector to select hours, minutes and seconds (in increments of 5 for the latter) using buttons.

**Attributes**:

- All the attributes of the *text* input.
- `sep` (String, ''): String to display and use as separator between the two fields.


### Datetime-range

A *datetime-range input* allows the user to enter four strings: two pairs of date and time, representing a starting and ending moments. The return value is a two-position table containing two array representing the pairs. The field allows you to deploy a combined visual selector (calendar + hour selector).

**Attributes**:

- All the attributes of the *text* input.
- `sep` (String, ''): String to display and use as separator between the two fields.
- `startSep` (String, ''): String to display and use as separator between the starting date and time.
- `endSep` (String, ''): String to display and use as separator between the ending date and time.

### Slider

A *slider input* allows the user to select a number between `min` and `max` and move a cursor over an horizontal slider. The slider can move from step to step, and the base step number corresponds to the difference in `min` and `max`, but you can define a number with `steps` and set the number of decimals with `toFixed`. You can also let the slider navigate freely between steps with `stepless`. You can decide to display the field value above the cursor (default) with `showDotLabel` or next to the field with `displayNumber`. You can display (by default) the value of the steps with `showStepLabels`, and also pass custom values with `list`.

**Attributes**:

- `steps` (Number, false): The number of *steps* to be displayed. The user can only select a number that is on a step.
- `dotSize` (Number, false): The diameter in `px` of the slider selection button (cursor).
- `toFixed` (Number, false): Number of decimals to be used.
- `stepless` (Boolean, false): If *true*, the cursor does not necessarily stop at the steps.

Display :

- `displayNumber` (Boolean, false): If *true*, displays the value of the *slider* next to it.
- `ShowDotLabel` (Boolean, false): If *true*, displays the slider value above the cursor.
- `ShowSteps` (Boolean, false): If *true*, displays the steps on the slider
- `showStepLabels` (Boolean, false): If *true*, displays the value of the steps below them.
- `showStepLabelsOnHover` (Boolean, false): To be used with `showStepLabels`. If *true*, only displays the values of the steps if the user hovers over the slider.

Precision:

- `restricted` (Boolean, false): If *true*, the values displayed for the steps at the ends do not exceed the slider bar (for use with long text).
- `showLabelEach` (Number, false): Depending on the scale defined by `min` and `max`, only labels of labels are displayed at all `showLabelEach` steps.
- `minLabelWidth` (Number, false): Minimum size of the values displayed in the steps.
- `showLabelOffset` (Boolean, false): To be used with `showLabelEach`. Allows to shift the chosen label, while keeping the deviation specified by `showLabelEach` (generally, this attribute takes the value 1 or -1).
- `precision` (Boolean, false): Number of decimals used when rounding the cursor position. The higher this value, the more fluid the slider will be.
- `labelMaxWidth` (Number, 0): If specified, the maximum size in `px` of each label.

### Star

A *datetime-range input* allows the user to select a number by clicking on a picture, traditionally a star. The selected value is represented by an amount of *active* (here filled) stars. The number of star to display (and therefore the range starting from 1) is defined by `count`. You can also split the value in decmal ones by using `steps`. By example, a *steps* value of 2 means that you can select half values.

**Attributes**:

- `count` (Number, false): Number of stars to display.
- `noBorder` (Boolean, false): If *true*, the star strokes are not displayed.
- `lightGray` (String, '#CCC'): The hovering color.
- `activeColor` (String, '#CCC'): The active color.
- `darkGray` (String, '#CCC'): The hovering on active color.
- `noSteps` (Boolean, false): If *true*, no steps are visible when hovering the stars.
- `free` (Boolean, false): If *true*, the computed value is not based on the steps but on the cursor position.


## \<Popover\> and v-tooltip

### Directive v-tooltip

The *v-tooltip* is a [vuejs directive](https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments) that can be use on any html element and displays some text in an hovering bubble next to the target element. The directive can be used with two methods:

The *v-tooltip* argument (args) Object can have the following attributes:

- `text (t)`: A string representing the text to display in the tooltip. You can also use the shorthand `t`.
- `display (d)`: A string defining the display mode: 'hover' to reveal the tooltip on target hover, or 'click' to reveal the tooltip when the target is clicked. You can also use the shorthand `d`.
- `position (p)`: A character defining the display mode: 'l' to left align the tooltip, 'c' to center the tooltip or 'r' to right align the tooltip. You can also use the shorthand `p`.
- `side (s)`: A character defining the side to display: 't' for on top, 'r' for on the right, 'b' for below and 'l' for on the left. You can also use the shorthand `s`.
- `width (w)`: The maximum width of the tooltip wrapper. You can also use the shorthand `w`.
- `height (h)`: The maximum height of the tooltip wrapper. You can also use the shorthand `h`.

You can simply pass a string to use the default parameters: 'hover' (display), 't' (side) et 'c' (position). The maximum width will be the width of the target element.

```
<div v-tooltip="'Hello'"></div>
```

You can also use the binding value as args Object:

```
<div v-tooltip="{t:'Hello!', w:'120px'}"></div>
```

You can also use the *binding modifiers*: 'click' for the display, 'left', 'top', 'right' or 'bottom' for the side and 'l', 'c' or 'r', 't', b' for the position:

```
<div v-tooltip.r.bottom.click="'Hello'"></div>
```

You can also use the dynamic argument to change by example the text after the tooltip rendering:

```
<div v-tooltip:[args]></div>
```

then in the component:

```
data() {
    return {
        args: {
            text: 'Hello!',
            display: 'click',
            position: 'top',
            side: 'l',
            width: '200px'
        }
    }
}
```

If you want to display more complex content, you can use the default slot of the *my-popover* element:


```
<my-popover click exitOnDomClick>
    <div slot="content">
        <button class="sem-btn" @click="denySchool(s.sc_id)">Confirm</button>
    </div>
    <span slot="target" class="delete-button">&#10005;</span>
</my-popover>
```

arrowDistFromBorder: { default: 12 },
arrowSize: { default: 6 },
panelDist: { default: 20 },
bg: { default: "#fff" },
nopad: { type: Boolean, default: false },

// positioning
display: { default: "hover" },
d: { default: null },
position: { default: "c" },
p: { default: null },
side: { default: "top" },
s: { default: null },
width: { default: null },
w: { default: null },
height: { default: null },
h: { default: null },

// structural
value: { default: false }, // the show / hide boolean
id: { default: null }, // randomly generated if not specified
targetId: { default: null }, // to target to inject the content into. The parent by default
triggerId: { default: null }, // The target whose click will trigger the popover. The parent by default


## \<Modal\>

value: {default:null},
animation: {type: String, default:'smooth'},

// sizes
big: {type:Boolean, default:false},
medium: {type:Boolean, default:false},
small: {type:Boolean, default:false},
noPad: {type:Boolean, default:false},

// content
title: {type: String, default: null},
content: {type: String, default: null},
back: {type: String, default: null},
b: {type: Boolean, default: false},
validate: {type: String, default: null},
v: {type: Boolean, default: false},
valLab: {type: String, default: 'Validate'},
backLab: {type: String, default: 'Back'},

// uses a percentage width instead of a threshold
hideCross: {type:Boolean, default:false},

## \<Sidemenu\>

value: { default: 0 },
orientation: {type: String, default: 'left'},
show: {type: Number, default: 0},
width: {type: Number, default: 300},
height: {type: Number, default: 300},
touchWidth: {type: Number, default: 10},
enableTouch: {type: Boolean, default: true},
bounce: {type: Boolean, default: false},
shadowBackground: {type: String, default: '#222'},
touchBackground: {type: String, default: 'transparent'},
opacityMax: {type: Number, default: 0.5},
zIndexMult: {type: Number, default: 2.0},
shadowSpeed: {type: Number, default: 2},
showBigSize: {type: Boolean, default: false},
viewportResize: {type: Boolean, default: true},
invisible: {type: Boolean, default: false},
thinScroll: {type: Boolean, default: false},
background: {type: String, default: "#FFF"},
trigger: {type: Number, default: Infinity},
enableClickDeploy: {type: Boolean, default: false},
enablePan: {type: Boolean, default: false},
enableSwipe: {type: Boolean, default: true},
disabled: {type: Boolean, default: false}
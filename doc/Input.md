# Input

An input is a form component that allows the user to enter text on a line, more or less freely. Native types can also be used to specify a password field for example.

```html
<eg-input v-model="val"></eg-input>
```

Text inputs can be displayed using by default `<eg-input>`.

Text inputs have easy-to-use shortcuts to display text (label, placeholder, message) or icons into the field. You can also quickly set up validation, specific style and state or counter. Helper attributes are available as well to quickly make the component fit its interface.

## Attributes

### Main

- **value**: {default: null}: The value of the field. Given and updated using v-model. The initial value can be of any type, but a string will be emitted if the value is edited.
- **type**: {type: String, default: "text"}: The type is defining the input type (mostly the input tag's *type* native attribute). I can be:
    - A native type: 'color', 'date', 'datetime-local', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'email', 'week'.
    - Textarea
    - Number
- **id**: {type: String, default: null}: The id can be defined using a string. The component wrapper will have the "#{id}-wrapper" id, and the field will have the "#id" id. The field can be selected or deselected from any component using the native javascript method `focus()` or `blur()` on the element (fetched using `document.getElementById` for example). If no id is provided, a random one will be used.
- **label**: {type: String, default: null}: The given label will be displayed on top of the field between the <*label>* tags (see structure). Clicking on the label will select the field since the label tags have the *for* property defined and linked to the input tag.
- **placeholder**: {type: String, default: null}: The placeholder text will be displayed (lightly) inside the field when it's empty. This text will be hidden when a value is typed. It can be used to given information about the field to the users.
- **disabled**: {type: Boolean, default: false}: If true, the field aspect will change (grayed by default) and will be an no longer usable (no interaction will be possible and no events will be emitted).

### Text helpers

- **prefix**: {type: String, default: null}: The prefix is a text (generally short) displayed on the left of the value, inside of the field.
- **suffix**: {type: String, default: null}: The prefix is a text (generally short) displayed on the right of the value, inside of the field.
- **message**: {type: String, default: null}: A small message that can be displayed on one or multiple line below the field (outside of the field box).
- **messages**: {type: Array, default() {return []}}. Multiple messages can be given to be displayed below the field.
- **helpText**: {type: String, default: null}: If a value is provided, a HelpIcon will be visible on the right of the field label. The provided text will be displayed when the icon is hovered.

#### State related text helpers:

- **errorMsg**: {type: String, default: null}: An error message to display below the field (in the messages area). If an error message is displayed, the field will automatically have the error state as well.
- **errors**: {type: Array, default() {return []}}: If multiple errors should be displayed, "errors" can be used to provide an array of error messages. This attribute is particularly useful with APIs returned messages.

#### Counter related text helpers:

- **counter**: {type: Boolean, default: false}: If true, a counter (current count and maximum) will be displayed on the right of the message zone, below the field. By default, The counter displays the number of characters of the value.
- **counterMax**: {type: Number, default: 0}: A maximum can be specified for the counter. By default, The count can be greater than the maximum.
- **counterLock**: {type: Boolean, default: false}: If true, the field will not be usable if the count is greater than the maximum.
- **counterWarn**: {type: Boolean, default: true}: If true, the field will have the warning state if the count is greater than the maximum.
- **counterHide**: {type: Boolean, default: false}: If true, the counter will not be displayed (but "counterLock" will still be active).
- **countWords**: {type: Boolean, default: false}: If true, the word (separated by the '-' character) will be counted instead of the number of characters.
- **countWordsSeparator**: {type: String, default: " "}: Separator used for *counterWords* to replace the space character.

### Style

- **buttonStyle**: {type: Boolean, default: false}: If true, the input will have the button style (default or primary). The ".button-shell" class will be applied to the input box.
- **primary**: {type: Boolean, default: false}: If true, the field will have the primary style and color.
- **slim**: {type: Boolean, default: false}: If true, the field will have no padding and boxing. It will be displayed in a compact form.

### State

- **loading**: {type: Boolean, default: false}: If true, an animated loader will be displayed (as main icon) to indicate a loading state.
- **error**: {type: Boolean, default: false}: If true, the field will have the error state (error color).
- **warning**: {type: Boolean, default: false}: If true, the field will have the warning state (warning color).
- **success**: {type: Boolean, default: false}: If true, the field will have the success state (success color).

### Icons

More information on how to use the icons.

- **icon**: {type: String, default: null}: Main icon to display the icon name can be prefixed to use a specific library.
- **lIcon**: {type: String, default: null}: Main icon to display but on the left of the field (similar to "icon").
- **icons**: {type: Array, default() {return []}}: Display multiple icons providing an array of strings containing the icon names (similar to the attribute "icon").
- **lIcons**: {type: Array, default() {return []}}: Display multiple icons but on the left instead of the right (similar to "icons").
- **clickableIcon**: {type: Boolean, default: false}: If true, the icons can be clicked. When clicked, the event @iconClick will be emitted (with the icon name as payload).

#### Special icons attributes

- **flipIcon**: {type: Boolean, default: false}: If true, the icon is flipped horizontally (downward instead of upwards).
- **plusMinus**: {type: Boolean, default: false}: If true, a number-style plus (+) and minus (-) buttons stack will be displayed next to the main icon (generally instead of). Clicking on the icons will trigger the event @plus and @minus (containing the value as payload).

### Validation

- **regexList**: {type: Array, default() {return []}}: This attribute is used to provide a list of rules to apply to the value. The rules are defined by parameters objects containing the following keys and values:
    - **regex**: a regular expression defining what the input text must be (for example: `/^([\d]*)$/`).
    - **message**: a message to briefly display if the value doesn't match the regex.
    - **strong**: (boolean) if true, an invalid value cannot be entered in the field (the field will be locked).

### Composed

- **composed**: {default: null}: You can completely format the inside of the input using the composed property. This takes an object as a parameter that contains several attributes and allows you to display several input texts for each of the individual characters, or fixed text before, after or between them. A font with characters of similar size is preferable, but you can use resizeInputs otherwise.
    - **composition**: a formatting string representing each input or placeholder to display inside the input. By default, any characters in this string will represent a slot for an inside text or input. By default, the characters "_" will represent a text input and "#" a number input, restricting its content to numbers only. Anything else will be displayed as is.
    - **placeholders**: another formatting string to specify the potential individual input placeholder text (displayed when there is no value). The position of the character in the string is targeting the element at the same position in the "composition" string. if the targeted element is an input (text or number) will have the placeholder specified by the character in "placeholders".
    - **inputChar**: the character to indicate an input in "composition". "_" by default.
    - **numberChar**: the character to indicate a number input in "composition". "#" by default.
    - **resizeInputs**: if true, the individual input width will be computed based on its content (doesn't work for the placeholders).

### Helpers

#### Interactivity:

- **autoFocus**: {type: Boolean, default: false}: If true, the field will have the focus directly after being mounted (when the page loads). If multiple inputs have this attribute defined, the last one in the DOM will have the focus.
- **editable**: {type: Boolean, default: true}: If false, the value is displayed but cannot be modified (instead of *disabled*, the field will show no difference).
- **cross**: {type: Boolean, default: true}: If false, the erasing cross will not be displayed.
- **emptyCross**: {type: Boolean, default: false}: If false, the cross will only be visible when the value is not empty.

#### Scaffolding:

- **inputClass**: {type: Boolean, default: true}: If true, the ".eg-input-container" will have the ".eg-input" class (mainly used for components wrapped: only the parent container should have the *"*.eg-input" class).
- **emptyValue**: {default: null}: The default field value. Also set when the value is erased.
- **tabindex**: {default: null}: The custom field tabindex value.

#### Sizing

- **wide**: {type: Boolean, default: false}: If true, the field will take all the horizontal available space.
- **flex**: {type: Boolean, default: false}: If true, the field width will be defined by the value width.
- **baseMin**: {type: Number, default: 50}: Minimum witdh (in *px*) allowed for the "flex" field to expand.
- **baseMax**: {type: Number, default: 500}: Maximum witdh (in *px*) allowed for the "flex" field to expand.

## Events

- v-model (**@input**): any value can be passed to the field, but will be converted to a string. The input event is triggered when the keyboard key is released in the field.
- **@click**: triggered when the whole element is clicked (.egi-inner or *input* tag). Default event payload.
- **@fakeClick**: triggered when the value is clicked. ".fake-input" is the value wrapper class, which is displayed when the field is not *editable*). Default event payload.
- **@iconClick**: triggered when an icon is clicked. Payload: the event with the extra attribute "icon" containing the name of the icon clicked (prefixed name if an icon library is used).
- **@change**: triggered when the value of the field changes (after blur). Default event payload (containing "value" in "target").
- **@focus**: triggered when the field gets the focus. Default event payload.
- **@blur**: triggered when the field looses the focus. Default event payload.
- **@mousedown**: triggered when the mouse is pressed, before the release (on the box wrapper tag). Default event payload.
- **@cross**: triggered when the cross is clicked. Payload: the last value.

### Keyboard events

These event are triggered only if the field has focus.

- **@escape**: triggered when the escape key is pressed (default event payload).
- **@enter**: triggered when the enter key is pressed (default event payload).
- **@down**: triggered when the down arrow key is pressed (default event payload).
- **@up**: triggered when the up arrow key is pressed (default event payload).
- **@keydown**: triggered when a key is pressed, before the release of the key (default event payload).
- **@keyup**: triggered when a key is pressed, after the release of the key (default event payload).

## Slots

- **default**: Content to insert as button label (when "buttonStyle" is used).
- **prefix**: Content to insert before the value in the input box.
- **suffix**: Content to insert after the value in the input box.
- **above**: Content to display above the field label.
- **after-label**: Content to display next to the label.
- **taglist**: Content to display inside the input box on the left (after the prefix).
- **input**: Content to display inside of the input box. Will replace the inner input by its content.
- **display**: Content to display as fake value (text placeholder).
- **menu**; Content to display inside the input box, below everything. Used mainly for the Floting menu of the [Select](https://github.com/misurida/eg-elements/blob/master/doc/EgSelect.md) component.

## Structure

The Input (here with the id #my-field) has the following structure:

```jsx
<div id="my-field-wrapper" class="eg-input-container eg-input wide"> 
	<!-- Label -->
	<div class="label-container">
		<div class="egi-label-wrapper">
			<label for="my-field" class="egi-label">Label</label>
		</div> 
	</div>
	<!-- Input box -->
	<div class="input-shell"> 
		<div class="egi-inner empty">
			<!-- Input field -->
			<input id="my-field" type="text">
			<!-- Right icons -->
			<div class="egi-icons-right-list">
				<div class="egi-main-icon-slot"></div>
			</div>
		</div> 
	</div>
</div>
```

You can target the ".input-shell" class to change the input box and the "input" tag inside it to modify the text aspect, as well as the ".label-container" or the ".eg-input-container" to change the spacing.
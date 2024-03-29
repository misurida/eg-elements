# EgInput

Text inputs are UI elements used to allow the user to enter text. They can allow the user to write text on one or multiple lines, and have easy-to-use shortcuts to display text (label, placeholder, message) or icons in and next to the field. The native input types can also be specified to change the default text into a specific field (such as *password*).

## Usage

Text inputs can be displayed using `<eg-input>`.

## Events

- v-model (@input): any value can be passed to the field, but will be converted to a string. The input event is triggered when the keyboard key is released in the field.
- @click: triggered when the whole element is clicked (.egi-inner or *input* tag). Default event payload.
- @fakeClick: triggered when the value is clicked. ".fake-input" is the value wrapper class, which is displayed when the field is not *editable*). Default event payload.
- @iconClick: triggered when an icon is clicked. Payload: the event with the extra attribute *icon* containing the name of the icon clicked (prefixed name if an icon library is used).
- @change: triggered when the value of the field changes (after blur). Default event payload (containing *value* in *target*).
- @focus: triggered when the field gets the focus. Default event payload.
- @blur: triggered when the field looses the focus. Default event payload.
- @mousedown: triggered when the mouse is pressed, before the release (on the box wrapper tag). Default event payload.
- @cross: triggered when the cross is clicked. Payload: the last value.

### Keyboard event

These event are triggered only if the field has focus.

- @escape: triggered when the *escape* key is pressed (default event payload).
- @enter: triggered when the *enter* key is pressed (default event payload).
- @down: triggered when the *down arrow* key is pressed (default event payload).
- @up: triggered when the *up arrow* key is pressed (default event payload).
- @keydown: triggered when a key is pressed, before the release of the key (default event payload).
- @keyup: triggered when a key is pressed, after the release of the key (default event payload).

## Attributes

### Main

- **value**: {default: null}: The value of the field. Given and updated using *v-model*. The initial value can be of any type, but a string will be emitted if the value is edited.
- **type**: {type: String, default: "text"}: The type is defining the input type (mostly the input tag's *type* native attribute). I can be:
    - A native type: 'color', 'date', 'datetime-local', 'file', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'email', 'week'.
    - Textarea. A 'texarea' field allows the user to enter text on several lines. By default, the input height is higher than normal text. Its height will increase with the height of the value. A text box also has custom attributes.
- **id**: {type: String, default: null}: The id can be defined using a string. The component wrapper will have the #*{id}-wrapper* id, and the field will have the *#id* id. The field can be selected or deselected from any component using the native javascript method `focus()` or `blur()` on the element (fetched using `document.getElementById` for example). If no id is provided, a random one will be used.
- **label**: {type: String, default: null}: The given label will be displayed on top of the field between the <*label>* tags (see structure). Clicking on the label will select the field since the label tags have the *for* property defined and linked to the input tag.
- **placeholder**: {type: String, default: null}: The placeholder text will be displayed (lightly) inside the field when it's empty. This text will be hidden when a value is typed. It can be used to given information about the field to the users.
- **disabled**: {type: Boolean, default: false}: If *true*, the field aspect will change (grayed by default) and will be an no longer usable (no interaction will be possible and no events will be emitted).

### Text helpers

- **prefix**: {type: String, default: null}: The prefix is a text (generally short) displayed on the left of the value, inside of the field.
- **suffix**: {type: String, default: null}: The prefix is a text (generally short) displayed on the right of the value, inside of the field.
- **message**: {type: String, default: null}: A small message that can be displayed on one or multiple line below the field (outside of the field box).
- **messages**: {type: Array, default() {return []}}. Multiple messages can be given to be displayed below the field.
- **helpText**: {type: String, default: null}: If a value is provided, a *help icon* will be visible on the right of the field label. The provided text will be displayed when the icon is hovered.

#### State related text helpers:

- **errorMsg**: {type: String, default: null}: An error message to display below the field (in the messages area). If an error message is displayed, the field will automatically have the error state as well.
- **errors**: {type: Array, default() {return []}}: If multiple errors should be displayed, *errors* can be used to provide an array of error messages. This attribute is particularly useful with APIs returned messages.

#### Counter related text helpers:

- **counter**: {type: Boolean, default: false}: If true, a counter (current count and maximum) will be displayed on the right of the message zone, below the field. By default, The counter displays the number of characters of the value.
- **counterMax**: {type: Number, default: 0}: A maximum can be specified for the counter. By default, The count can be greater than the maximum.
- **counterLock**: {type: Boolean, default: false}: If true, the field will not be usable if the count is greater than the maximum.
- **counterWarn**: {type: Boolean, default: true}: If true, the field will have the warning state if the count is greater than the maximum.
- **counterHide**: {type: Boolean, default: false}: If true, the counter will not be displayed (but *counterLock* will still be active).
- **countWords**: {type: Boolean, default: false}: If true, the word (separated by the '-' character) will be counted instead of the number of characters.
- **countWordsSeparator**: {type: String, default: " "}: Separator used for *counterWords* to replace the space character.

### Style

- **buttonStyle**: {type: Boolean, default: false}: If true, the input will have the button style (default or primary). The *.button-shell* class will be applied to the input box.
- **primary**: {type: Boolean, default: false}: If true, the field will have the primary style and color.
- **slim**: {type: Boolean, default: false}: If true, the field will have no padding and boxing. It will be displayed in a compact form.

### State

- **loading**: {type: Boolean, default: false}: If true, an animated loader will be displayed (as main icon) to indicate a loading state.
- **error**: {type: Boolean, default: false}: If true, the field will have the error state (error color).
- **warning**: {type: Boolean, default: false}: If true, the field will have the warning state (warning color).
- **success**: {type: Boolean, default: false}: If true, the field will have the success state (success color).

### Icons

The icons attributes are respecting the same rules as [EgIcon](https://github.com/misurida/eg-elements/blob/master/doc/EgIcon.md).

- **icon**: {type: String, default: null}: Main icon to display the icon name can be prefixed to use a specific library.
- **lIcon**: {type: String, default: null}: Main icon to display but on the left of the field (similar to *icon*).
- **icons**: {type: Array, default() {return []}}: Display multiple icons providing an array of strings containing the icon names (similar to the attribute *icon*).
- **lIcons**: {type: Array, default() {return []}}: Display multiple icons but on the left instead of the right (similar to *icons*).
- **clickableIcon**: {type: Boolean, default: false}: If true, the icons can be clicked. When clicked, the event @iconClick will be emitted (with the icon name as payload).

#### Special icons attributes

- **flipIcon**: {type: Boolean, default: false}: If true, the icon is flipped horizontally (downward instead of upwards).
- **plusMinus**: {type: Boolean, default: false}: If true, a number-style plus (+) and minus (-) buttons stack will be displayed next to the main icon (generally instead of). Clicking on the icons will trigger the event @plus and @minus (containing the value as payload).

### Validation

- **regexList**: {type: Array, default() {return []}}: This attribute is used to provide a list of rules to apply to the value. The rules are defined by parameters objects containing the following keys and values:
    - *regex*: a regular expression defining what the input text must be (for example: `/^([\d]*)$/`).
    - *message*: a message to briefly display if the value doesn't match the regex.
    - *strong*: (boolean) if true, an invalid value cannot be entered in the field (the field will be locked).

### Helpers

#### Interactivity:

- **autoFocus**: {type: Boolean, default: false}: If true, the field will have the focus directly after being mounted (when the page loads). If multiple inputs have this attribute defined, the last one in the DOM will have the focus.
- **editable**: {type: Boolean, default: true}: If false, the value is displayed but cannot be modified (instead of *disabled*, the field will show no difference).
- **cross**: {type: Boolean, default: true}: If false, the erasing cross will not be displayed.
- **emptyCross**: {type: Boolean, default: false}: If false, the cross will only be visible when the value is not empty.

#### Scaffolding:

- **inputClass**: {type: Boolean, default: true}: If true, the *.eg-input-container* will have the *.eg-input* class (mainly used for components wrapped: only the parent container should have the *.eg-input* class).
- **emptyValue**: {default: null}: The default field value. Also set when the value is erased.
- **tabindex**: {default: null}: The custom field tabindex value.

#### Sizing

- **wide**: {type: Boolean, default: false}: If true, the field will take all the horizontal available space.
- **flex**: {type: Boolean, default: false}: If true, the field width will be defined by the value width.
- **baseMin**: {type: Number, default: 50}: Minimum witdh (in *px*) allowed for the *flex* field to expand.
- **baseMax**: {type: Number, default: 500}: Maximum witdh (in *px*) allowed for the *flex* field to expand.

### Textarea type specific attributes

- **rows**: {default: 2}: The native *rows* attribute value (defining the base height).
- **cols**: {default: null}: The native *cols* attribute (defining the base width).
- **minHeight**: {type: Number, default: 40}: The minimal field height (in *px).*
- **newLineShiftOnly**: {type: Boolean, default: false}: If true, pressing *enter* in a textarea field will emit the @enter event and won't do a new line, unless the shift button is pressed at the same time.

### Range type specific attributes

- **min**: {default: null}: The native *min* attribute value (used the defined the minimal boundary).
- **max**: {default: null}: The native *max* attribute value (used the defined the maximal boundary).
- **step**: {default: null}: The native *step* attribute value (used the defined the increment value).

## Slots

- **default**: Content to insert as button label when *buttonStyle* is used.
- **prefix**: Content to insert before the value in the input box.
- **suffix**: Content to insert after the value in the input box.
- **above**: Content to display above the field label.
- **after-label**: Content to display next to the label.
- **taglist**: Content to display inside the input box on the left (after the prefix).
- **input**: Content to display inside of the input box. Will replace the inner input by its content.
- **display**: Content to display as fake value (text placeholder).
- **menu**; Content to display inside the input box, below everything. Used mainly for the EgFloatingMenu needed for the [EgSelect](https://github.com/misurida/eg-elements/blob/master/doc/EgSelect.md).

## Structure

The EgInput (here with the id *#my-field*) has the following structure:

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
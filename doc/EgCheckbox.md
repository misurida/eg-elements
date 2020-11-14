# EgCheckbox

Checkboxes are elements of the user interface used to enable (and disable) or select (and deselect) an option. A box is displayed and can be checked by clicking on it. A check mark will be displayed inside the box to indicate that the option is selected.

## Usage

Checkbox(es) can be displayed using `<eg-checkbox>`.

## Events

- v-model (@input): can return a boolean value or a defined value.
- @click: when the whole element is clicked. No payload.

## Attributes

### Main

- **value**: {default: null}: The value (generally a boolean value).
- **id:** {type: String, default: null}: An id string can be given to the field. The component input tag will inherit the id.
- **label**: {type: String, default: null}: The given label will be displayed on the right of the field. Clicking on the label will select it (like clicking on the box).
- **disabled**: {type: Boolean, default: false}: If true, the field aspect will change (grayed by default) and will be an no longer usable (no interaction will be possible and no events will be emitted).
- **native**: {type: Boolean, default: false}: If true, the checkbox field will have the browser native style and behavior.
- **type**: {type: String, default: null}: The default type is a square box, but other styles can be applied:
    - *radio*: can be used to display radio buttons: round buttons with a dot inside indicating that the option is selected. A radio input cannot be deselected.
    - *switch*: display a switch button, generally used to select an option or another. Represented by a small slider with a dot inside. The dot's position is indicating which option selected. The switch field have custom attributes.

### Options

- **options**: {type: Array, default() {return []}}: Array containing the options. If the array contain a string or number, it will be displayed as label. If it contains object, an attribute can be defined as label using *oLabel*.
- **elements**: {type: Object, default(){ return {} }}: Object containing the value of the option as value and the label as key.
- **multiple**: {type: Boolean, default: false}: If true, the value is expected to an array. A list of options can be provided with the attributes *options* or *elements*. The value will containing the options selected.
- **oLabel**: {type: String, default: "name"}: If *options* are provided and contain objects, name of the attribute (of the array's objects) to use as option label.

### State

- **error**: {type: Boolean, default: false}: If true, the checkbox will have the error state (error color).
- **warning**: {type: Boolean, default: false}: If true, the checkbox will have the warning state (warning color).
- **success**: {type: Boolean, default: false}: If true, the checkbox will have the success state (success color).

### Helpers

- **inputClass**: {type: Boolean, default: true}: If true, the *.eg-input-container* will have the *.eg-input* class (mainly used for components wrapped since only the parent container should have the .eg-input class.
- **nullValue**: {default: null}: Value returned when the checkbox is unchecked.
- **useUndefined**: {type: Boolean, default: false}: If true, the checkbox can be in an undefined state (represented by an horizontal stroke by default).

### Switch specific options

- **onLabel**: {type: String, default: null}: The label if the value is positive (the option is checked).
- **offLabel**: {type: String, default: null}: The label if the value is negative (the option is not checked).
- **innerLabels**: {type: Boolean, default: false}: If true, the visual aspect changes. The label are inside the slider box and the dot is hiding the option which is not selected.

## Structure

The EgCheckbox components has the following structure:

```html
<div class="checkbox-input eg-input">
	<!-- Group label -->
	<div class="label-container" v-if="options.length > 0">
      <span class="egi-label">{{ label }}</span>
  </div>
	<div class="checkbox-inner">
		<div class="checkbox-group">
			<!-- Checkbox icon -->
			<div tabindex="0" id="check-me" class="check-box">
			<!-- Checkbox label -->
			<label for="check-me" class="egi-label checkbox-label">Check me</label>
		</div> 
	</div>
</div>
```
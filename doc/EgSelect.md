# EgSelect

Select inputs (or simply selects) are visually similar to the text inputs, but with a caret on the right. On focus, they display a floating menu (by default on the bottom of the field) containing options that can be selected.

## Usage

Selects can be displayed using `<eg-select>`.

This component is a EgInput wrapper. It has a similar same structure with specific slot content, and is using the same attributes than the EgInput (with others in addition to them). Only the arguments not already described in EgInput are documented here.

## Events

- v-model (@input): the value can be a string or an array. If *multiple i*s used, an array will always be returned.
- The TextInput events: @click, @fakeClick, @iconClick, @change, @focus, @blur, @mousedown, @cross, @escape, @enter, @down, @up, @keydown, @keyup.

## Attributes

### Main

- **menu**: {type: String, default: "b"}: The menu positioning can be defined by a string:
    - bl: bottom left,
    - br: bottom right,
    - blr: top parent width,
    - tl: top: left,
    - tr: top right,
    - tlr: top parent width
- **native**: {type: Boolean, default: false}: If true, the select menu displayed will be the browser native select.

### Options

- **options**: {type: Array, default() {return []}}: Array containing the options. If the array contains a string or a number, it will be used as label and value. If it contains object, one of the object's values can be defined as label using *oLabel* to specify the key.
- **oLabel**: {default: 0}: If the *options* array contains objects, defines the name of the attribute to use as option label.
- **oId**: {default: 0}: If the *options* array contains objects, defines the name of the attribute to use as option id.
- **oMap**: {default: null}:  If the *options* array contains objects, defines the name of the attribute to use for mapping. The *value* attribute is one (or contains if *value* is an array) of the objects values if *oMap* is used. For example, "id" can be set if you give the v-model an array containing only the ids of the selection. The options corresponding to the id of the oMap attributes will be selected and the label will be the first attribute or can be defined using *oLabel*.

### Grouped options

- **optGroups**: {type: Object, default() {return {}}}: Used to display grouped options. Object containing the options to display as value (must be an array) and the group name as key.
- **gOptions**: {default: "options"}: If the *options* array contains objects representing options groups and containing an array of option at some key, you can use *gOptions* to specify at which key is the group options array stored.
- **gLabel**: {default: 0}: If the options provided are objects representing options groups, you can use *gLabel* to specify the value of which attribute should be considered as group name and label.
- **groupBy**: {type: String, default: null}: If options are objects, create grouped options using the specified attribute.

### Sort

- **sort**: {type: String, default: null}:  If the *options* array contains objects, name of the attribute to base the sorting on. The objects will be sorted based on the value stored at the *sort* name. You can use "1" or "true" to sort using the options labels. You can prepend the *sort* value with "-" to sort in descending order instead of the default ascending order.
- **sortGroups**: {type: Boolean, default: false}, If true, the groups will be sorted as well with the ascending or descending order defined in sort.

### Search and filter

- **editable**: {type: Boolean, default: false}: If true, the field is editable. The options are filtered based on the text typed (query). Only the options matching the query will be displayed.
- **noFilter**: {type: Boolean, default: false}: If true, the options will not be filtered when a value is typed.
- **searchType**: {type: String, default: "start"}: Search type. If 'start' is used, only the options starting with the typed query will be displayed. If another search type value is used, any part of the label matching the query will display the option.
- **freeInput**: {type: Boolean, default: false}: If *editable* is true, the returned value is the typed query or the selected option value (the user can manually edit the value on top of the available options)..

### Multiple

- **multiple**: {type: Boolean, default: false}: The value is expected to be an array, and the options are displayed as tags inside the field.
- **tagPrefix**: {type: String, default: ""}: Text to be displayed on the left of all the tags (displayed if *multiple* is true).
- **tagSuffix**: {type: String, default: ""}: Text to be displayed on the left of all the tags (displayed if *multiple* is true).
- **clickable**: {type: Boolean, default: false}: If true, the tags are clickable.

### Style

- **buttonStyle**: {type: Boolean, default: false}: If true, the select text box field will be an EgButton (can be *primary*).
- **over**: {type: Boolean, default: false}: If true, the menu will be displayed on top of the field box.

## Structure

The EgInput (here with the id *#my-field*) has the following structure:

```jsx
<div id="my-field-wrapper" class="eg-input eg-input-container">
	<!-- Label -->
	<!-- Input box -->
	<div class="input-shell">
		<div class="egi-inner no-edit">
			<div class="fake-wrapper">
				<div class="custom-fake-inner">
					<input id="my-field" class="fake-input"> 
					<span class="fake-value">Item 1</span>
				</div>
			</div>
			<!-- Right icons -->
		</div> 
		<!-- Floating Menu -->
		<div id="my-field-menu" class="floating-menu" style="...">
			<div class="items-group">
				<span class="group-title">Group name (display if grouped)</span>
				<ul>
					<li class="item"><span>Item 1</span></li>
				</ul>
			</div>
		</div>
	</div>
</div>
```
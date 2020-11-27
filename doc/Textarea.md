# Textarea

A textarea is a form element similar to Input, but allows the user to enter text on several lines. The enter key is used to create a line break, and the @enter event can be triggered with Shift + Enter.

```html
<eg-input type="textarea" v-model="val"></eg-input>
```

Number inputs can be displayed using by default `<eg-input>` with the 'textarea' type.

This component is an [Input](https://github.com/misurida/eg-elements/blob/master/doc/Input.md) [](https://github.com/misurida/eg-elements/blob/master/doc/EgInput.md)wrapper. It has a similar structure and shares all its arguments. Nevertheless, it has some specific attributes.

## Attributes

- **rows**: {default: 2}: The native "rows" attribute value (defining the base height).
- **cols**: {default: null}: The native "cols attribute (defining the base width).
- **minHeight**: {type: Number, default: 40}: The minimal field height (in px*).*
- **newLineShiftOnly**: {type: Boolean, default: false}: If true, pressing enter **in a textarea field will emit the @enter event and won't do a new line, unless the shift button is pressed at the same time.

## Events

- The Input events: v-model (**@input**), **@click**, **@iconClick**, **@change**, **@focus**, **@blur**, **@mousedown**, **@cross**, **@escape**, **@enter** (with shift enter), **@down**, **@up**, **@keydown**, **@keyup**.
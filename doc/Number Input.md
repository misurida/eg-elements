# Number Input

Number inputs are UI elements used to allow the user to enter numbers. It ensures that a number will be entered, an provide easy number manipulation UI.

```html
<eg-input type="number" v-model="val"></eg-input>
```

Number inputs can be displayed using by default `<eg-input>` with the 'number' type.

The native input number type is used. The value can be limited with a minimum and maximum, and incremented (by steps) using the keyboard up or bottom arrow keys. Small and big steps can be used holding respectively ctrl or shift while incrementing. Plus or minus stack buttons are also available to quickly increment the value using the mouse.

This component is an [Input](https://github.com/misurida/eg-elements/blob/master/doc/Input.md) [](https://github.com/misurida/eg-elements/blob/master/doc/EgInput.md)wrapper. It has a similar structure and shares all its arguments. Nevertheless, it has some specific attributes.

## Attributes

- **decimals**: {type: Number, default: null}: Number of decimal to round to.
- **step**: {type: Number, default: 1}: Base increment value.
- **stepBig**: {type: Number, default: 10}: Big increment value.
- **min**: {type: Number, default: null}: Minimal value accepted (any value below will be converted to the min value).
- **max**: {type: Number, default: null}: Maximal value accepted (any value above will be converted to the max value).
- **plusMinus**: {type: Boolean, default: true}: If false, the plus and minus button will be hidden.
- **strongDecimals**: {type: Boolean, default: false}: If true, the decimals will always be displayed.

## Events

- v-model (**@input**): any value can be passed to the field but will be converted to a number.
- The Input events: **@click**, **@iconClick**, **@change**, **@focus**, **@blur**, **@mousedown**, **@cross**, **@escape**, **@enter**, **@down**, **@up**, **@keydown**, **@keyup**.
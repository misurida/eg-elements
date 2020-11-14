# EgButton

Buttons are UI elements containing a text label and used to trigger an action. Buttons can be displayed with different styles (mainly the *default* and *primary* styles) and can contain icons. They can also be programatically disabled to make them unusable or display status informations (*loading* or *error* for examples).

## Usage

A button can be displayed using the `<eg-button>` tag and setting the label as main slot value (between the tags).

## Events

- @click: when the button is clicked (default event payload).
- @focus: The the button gets focus (default event payload).
- @blur: when the button looses focus (default event payload).

## Attributes

### Main

- **disabled**: {type: Boolean, default: false}: If *true*, the field aspect will change (grayed by default) and the button will no longer be usable (no interaction will be possible and no events will be emitted).

### Styles

For more informations about the color, you can lok at the CSS variables list.

- **primary**: {type: Boolean, default: false}: The button will be of the primary color.
- **secondary**: {type: Boolean, default: false}: The button will be of the secondary color.
- **tertiary**: {type: Boolean, default: false}: The button will be of the tertiary color.
- **transparent**: {type: Boolean, default: false}: The button will be transparent: no background or borders (but the padding will still be displayed).
- **dark**: {type: Boolean, default: false}: The button will be of a dark color (dark gray by default).
- **light**: {type: Boolean, default: false}: The button will be of a light color (light gray by default).
- **link**: {type: Boolean, default: false}: The button will have the link style: no padding, underlined text (to fit in a paragraph).
- **type**: {type: String, default: null}: Any style attribute can be passed as string with *type* instead of using the matching attribute (*primary* for example).

### State

- **loading**: {type: Boolean, default: null}: If true, a loader will be displayed to indicate a loading state.
- **error**: {type: Boolean, default: false}: If true, the button will be of the error color (red by default).
- **warning**: {type: Boolean, default: false}: If true, the button will be of the warning color (orange by default).
- **success**: {type: Boolean, default: false}: If true, the button will be of the success color (green by default).

### Icons

By default, the icons are displayed on the right side of the buttons, but all attributes have a left version to display them on the left style. The icons' attributes are respecting the rules of the EgIcon component.

- **help**: {default: null}: Can be a String or an parameters object that will be given to a HelpIcon components used instead of an icon.
- **icon**: {type: String, default: null}: Main icon to display the icon name can be prefixed to use a specific library.
- **lIcon**: {type: String, default: null}: Main icon to display but on the left of the field (similar to *icon*).
- **icons**: {type: Array, default() {return []}}: Display multiple icons providing an array of strings containing the icon names (similar to the attribute *icon*).
- **lIcons**: {type: Array, default() {return []}}: Display multiple icons but on the left instead of the right (similar to *icons*).

### Helpers

- **fr**: {type: Boolean, default: false}: The icon will have the `float: right` css attribute.
- **fl**: {type: Boolean, default: false}: The icon will have the `float: left` css attribute.
- **wide**: {type: Boolean, default: false}: The icon will take all the horizontal space (the text will be centered).
- **big**: {type: Boolean, default: false}: The button appears bigger.
- **small**: {type: Boolean, default: false}: The button appears smaller.

## Structure

The EgButton has the following structure:

```html
<!-- If the button contains only text -->
<button class="eg-button button-shell primary">Narrow</button>

<!-- Otherwise -->
<div class="eg-button button-shell primary">
	<div class="button-inner">Label</div>
</div>
```

The sizing style is applied to the class *.button-shell*. The theme styling (primary, secondary) is mostly done altering this class.
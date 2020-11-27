# Button

Buttons are elements that allow the user to trigger an action. Their visual aspect allows to draw attention or not to a possible interaction.

```html
<eg-button primary>Save</eg-button>
```

A button can be displayed using by default `<eg-button>` (with the inner label between the tags)

Buttons can be disabled, have special states (error, warning, success) or incorporate icons in addition to the styles provided by the theme: "default", "primary", "secondary", "tertiary" and all special aspects such as "link".

## Attributes

### Main

- **disabled**: {type: Boolean, default: false}: If *true*, the field aspect will change (grayed by default) and the button will no longer be usable (no interaction will be possible and no events will be emitted).

### Styles

For more information about the colors, you can look at the theme's CSS variables list.

- **primary**: {type: Boolean, default: false}: The button will be of the primary color.
- **secondary**: {type: Boolean, default: false}: The button will be of the secondary color.
- **tertiary**: {type: Boolean, default: false}: The button will be of the tertiary color.
- **transparent**: {type: Boolean, default: false}: The button will be transparent: no background or borders (but the padding will still be displayed).
- **dark**: {type: Boolean, default: false}: The button will be of a dark color (dark gray by default).
- **light**: {type: Boolean, default: false}: The button will be of a light color (light gray by default).
- **link**: {type: Boolean, default: false}: The button will have the link style: no padding, underlined text (to fit in a paragraph).
- **type**: {type: String, default: null}: Any style attribute can be passed as string with "type" instead of using the matching attribute (*primary* for example).

### State

- **loading**: {type: Boolean, default: null}: If true, a loader will be displayed to indicate a loading state.
- **error**: {type: Boolean, default: false}: If true, the button will be of the error color (red by default).
- **warning**: {type: Boolean, default: false}: If true, the button will be of the warning color (orange by default).
- **success**: {type: Boolean, default: false}: If true, the button will be of the success color (green by default).

### Icons

By default, the icons are displayed on the right side of the buttons, but can be displayed on the left using the left-hand version of the icon attribute. [More information on how to use the icons.](https://github.com/misurida/eg-elements/blob/master/doc/Icon.md)

- **help**: {default: null}: Can be a String or an parameters object that will be given to a HelpIcon components used instead of an icon.
- **icon**: {type: String, default: null}: Main icon to display the icon name can be prefixed to use a specific library.
- **lIcon**: {type: String, default: null}: Main icon to display but on the left of the field (similar to *icon*).
- **icons**: {type: Array, default() {return []}}: Display multiple icons providing an array of strings containing the icon names (similar to the attribute *icon*).
- **lIcons**: {type: Array, default() {return []}}: Display multiple icons but on the left instead of the right (similar to *icons*).

### Helpers

- **fr**: {type: Boolean, default: false}: The icon will have the `float: right` CSS attribute.
- **fl**: {type: Boolean, default: false}: The icon will have the `float: left` CSS attribute.
- **wide**: {type: Boolean, default: false}: The icon will take all the horizontal space (the text will be centered).
- **big**: {type: Boolean, default: false}: The button appears bigger.
- **small**: {type: Boolean, default: false}: The button appears smaller.

## Events

- **@click**: when the button is clicked (default event payload).
- **@focus**: The the button gets focus (default event payload).
- **@blur**: when the button looses focus (default event payload).

## Structure

The Button has the following structure:

```html
<!-- If the button contains only text -->
<button class="eg-button button-shell primary">Narrow</button>

<!-- Otherwise -->
<div class="eg-button button-shell primary">
	<div class="button-inner">Label</div>
</div>
```

The sizing style is preferably applied to the class ".button-shell". The style of the theme mainly alters this class.
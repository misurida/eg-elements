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
[Back to home](https://github.com/misurida/eg-elements#eg-elements)

---

## \<Popover\> and v-tooltip

### The \<Popover\> element

The popover allows you to display any type of content (text, buttons or inputs, images, etc.) right next to the text. You can choose the `side` (top, bottom, left and right), and also the positioning related to the element. By default centered, you can set the popover to the left or right of the target if you use the top or bottom position, or up or down if you use the left or right position with `position`.

**Attributes**:

Structural:
- `value` (default, false): A *truthy* or *falsy* value to define whether the popover should be revealed or not.
- `id` (String, null): The string to use as id. If not specified, the id will be randomly generated.
- `targetId` (String, null): A string being the id of the popover target: the element that will host the popover. The DOM parent is used by default.
- `triggerId` (String, null): A string being the id of the popover trigger: the element that will display the popover when clicked. The DOM parent is used by default.

Positioning:
- `position (p)`: A character defining the display mode: 'l' to left align the popover, 'c' to center the popover or 'r' to right align the popover. You can also use the shorthand `p`.
- `side (s)`: A character defining the side to display: 't' for on top, 'r' for on the right, 'b' for below and 'l' for on the left. You can also use the shorthand `s`.
- `width (w)`: The maximum width of the popover wrapper. You can also use the shorthand `w`.
- `height (h)`: The maximum height of the popover wrapper. You can also use the shorthand `h`.

Dimensions:
- `arrowDistFromBorder` (None, 12): The distance in `px` separating the popover arrow from the side of the popover.
- `arrowSize` (None, 12): the arrow size in `px`.
- `panelDist` (None, 20): The distance in `px` separating the popover from the target.
- `bg`: (String, '#fff'): The background color.
- `nopad` (Boolean, false): If *true*, no padding is used on the popover content.


### Directive v-tooltip

If you just need to display text in a popover, you can use this directive to do it very quickly. The *v-tooltip* is a [vuejs directive](https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments) that can be used on any html element and displays some text in an hovering bubble, next to the target element. The attributes are similar to the *popover*:

- `text (t)`: A string representing the text to display in the tooltip. You can also use the shorthand `t`.
- `display (d)`: A string defining the display mode: 'hover' to reveal the tooltip on target hover, or 'click' to reveal the tooltip when the target is clicked. You can also use the shorthand `d`.
- `position (p)`: A character defining the display mode: 'l' to left align the tooltip, 'c' to center the tooltip or 'r' to right align the tooltip. You can also use the shorthand `p`.
- `side (s)`: A character defining the side to display: 't' for on top, 'r' for on the right, 'b' for below and 'l' for on the left. You can also use the shorthand `s`.
- `width (w)`: The maximum width of the tooltip wrapper. You can also use the shorthand `w`.
- `height (h)`: The maximum height of the tooltip wrapper. You can also use the shorthand `h`.

There are several ways to use it:

You can simply pass a string to use the default parameters: 'hover' (display), 't' (side) et 'c' (position). The maximum width will be the width of the target element.

```
<div v-tooltip="'Hello'"></div>
```

You can also use the binding value as args Object:

```
<div v-tooltip="{t:'Hello!', w:'120px'}"></div>
```

You can alternatively use the *binding modifiers*: 'click' for the display, 'left', 'top', 'right' or 'bottom' for the side and 'l', 'c' or 'r', 't', b' for the position:

```
<div v-tooltip.r.bottom.click="'Hello'"></div>
```

You can finally use the dynamic argument to change any attribute (`text`, `side`, etc) after the tooltip rendering:

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
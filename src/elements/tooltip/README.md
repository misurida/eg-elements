[Back to home](https://github.com/misurida/eg-elements#eg-elements)

---

## Directive v-tooltip

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
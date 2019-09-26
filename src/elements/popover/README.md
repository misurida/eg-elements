[Back to home](https://github.com/misurida/eg-elements#eg-elements)

---

## \<Popover\>

The popover allows you to display any type of content (text, buttons or inputs, images, etc.) right next to the text. You can choose the `side` (top, bottom, left and right), and also the positioning related to the element. By default centered, you can set the popover to the left or right of the target if you use the top or bottom position, or up or down if you use the left or right position with `position`.

**Attributes**:

Structural:
- `value` (default, false): A *truthy* or *falsy* value to define whether the popover should be revealed or not.
- `id` (String, null): The string to use as id. If not specified, the id will be randomly generated.
- `targetId` (String, null): A string being the id of the popover target: the element that will host the popover. The DOM parent is used by default.
- `triggerId` (String, null): A string being the id of the popover trigger: the element that will display the popover when clicked. The DOM parent is used by default.
- `target` (String, null): A DOM id string shorthand if you want to define the same `targetId` and `triggerId`.

Positioning:
- `side (s)` (String, 't'): A character defining the side to display: 't' for on top, 'r' for on the right, 'b' for below and 'l' for on the left. You can also use the shorthand *s*.
- `width (w)` (String, null): The maximum width of the popover wrapper. You can also use the shorthand *w*.
- `domLevel` (Boolean, false): If *true*, the popover is moved in the DOM under the main container top be place in an absolute position to the relative *page*.
- `domParentId` (String, "app"): Defines the main container used by `domLevel`.

Dimensions:
- `arrowDistFromBorder` (None, 12): The distance in `px` separating the popover arrow from the side of the popover.
- `arrowSize` (None, 12): the arrow size in `px`.
- `panelDist` (None, 20): The distance in `px` separating the popover from the target.
- `pad` (Boolean, false): If *true*, a *6px 12px* padding is applied.
- `spad` (Boolean, false): If *true*, a *5px* padding is applied.

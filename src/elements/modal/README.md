## \<Modal\>

The modal element allows the user to display content over the visible page. The content is centered in a block and the background of the page is dark. It is possible to close the modal by clicking on the dark background, clicking on the cross or by modifying `value` (or the variable passed by `value` directly from the parent).

The content in the center block is divided into three parts:
- The *header*: contains a title (default *h2*).
- The *content* (or *body*): Text, or any element passed through the *slot* `slot="content"`.
- The *footer*: usually contains action buttons (such as return or validate), or any element passed through the *slot* `slot="footer"`.

**Attributes**:

- `value` (None, null): A *truthy* or *falsy* value to define whether the modal should be revealed or not.
- `animation` (String, 'smooth'): The animation. Can be 'smooth' to have a scaling effect, `fade` to have a fading effet or `direct` to have an instant opening and a faded closing.
- `noPad` (Boolean, false): If *true*, no padding is applied to the body.
- `hideCross` (Boolean, false): If *true*, the cross will not be displayed.

Sizes:
- `big` (String, false): If *true*, the modal is wider.
- `medium` (String, false): If *true*, the modal is slightly bigger.
- `small` (String, false): If *true*, the modal is smaller.

Content:
- `title` (String, null): The title to display in the header.
- `content` (String, null): The text content to display in the body.
- `back` (String, null): If specified, a *back button* (default style) will be display with the `back` label. Clicking on it will close the modal.
- `b` (Boolean, false): If *true*, a *back button* will be displayed with the `backLab` label.
- `backLab`(String, 'Back'): Label to display in the *back button* if `b` is *true*.
- `validate` (String, null): If specified, a *validate button* (primary style) will be display with the `validate` label. Clicking on it will trigger the `@validate` event.
- `v` (Boolean, false): If *true*, a *validate button* will be displayed with the `valLab` label.
- `valLab`(String, 'Validate'): Label to display in the *display button* if `v` is *true*.
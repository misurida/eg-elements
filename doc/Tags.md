# Tags

Tags are elements that can be used directly to display important information in a more visible way. This element is also used in another element: Select (with the multiple attribute).

## Attributes

- **cross**: {type: Boolean, default: false}: If true, a cross is visible and can be used to emit the 'cross' event when clicked.
- **clickable**: {type: Boolean, default: false}: If true, is visibly clickable (css cursor and hover effects). Emits the event 'click' when clicked.

## Events

- **@click**: triggered when the whole element is clicked. Default event payload.
- **@escape**: triggered when the escape key is pressed (default event payload).
# Modal

Modals are UI elements used to display extra content on top of the whole page. Modal are generally closed by default and can be open (or closed) using the v-model value. When open, modals appear on top of a dark background (the modal shadow) covering the page. Clicking on the shadow or (on the corner cross) will hide the modal window to return to the previous app state.

The main characteristic of the modals are their size. By default, the modal will adjust its size to the content, but you can choose between two types of defined sizes:

- Fixed: The modal size is set and there boolean attributes for all the thresholds: tiny, mini, smaller, small, classic, medium, long, big, bigger and large.
- Flex: The size is proportional to the viewport width and will grow of shrink accordingly. You can choose between regular, basic, narrow and wide.

You can alternatively apply css modification to the modal box element (class .eg-modal-container).

## Usage

Modals can be displayed using `*<modal>*`.

The modal content can be anything passed using slots for any of the three zones of the modal:

- The header (on the top) displays generally a title.
- The body (on the middle, default slot) can display anything.
- The footer (on the bottom) generally used to display buttons. Traditionally, there is a button to confirm the action, and a button to go back and close the modal.

## Events

- v-model (@input): boolean flip to show (or hide if false) the modal window.
- @crossClick: when the modal cross is clicked. No payload.
- @close: when the modal closes. No payload.
- @validate: when the *validate* shorthand button is clicked. No payload.

## Attributes

### Main

- **value**: {default: null}: The value of the modal is given and updated using v-model. The modal can be displayed (if truthy) or hidden (if falsy), based on *value.*
- **animation**: {type: String, default: 'smooth'}: The revealing animation. Can be:
    - *direct* for an instant transition
    - *fade* for a fading effet.
    - *smooth* for a slight scale up and fading effect.

### Sizing

#### Responsive sizes

- **regular**: {type: Boolean, default: false}: Width of 25vw.
- **basic**: {type: Boolean, default: false}: Width of 33vw.
- **narrow**: {type: Boolean, default: false}: Width of 50vw.
- **wide**: {type: Boolean, default: false}: Width of 75vw.

#### Fixed sizes

- **tiny**: {type: Boolean, default: false}: Width of 300px.
- **mini**: {type: Boolean, default: false}: Width of 480px.
- **smaller**: {type: Boolean, default: false}: Width of 540px.
- **small**: {type: Boolean, default: false}: Width of 720px.
- **classic**: {type: Boolean, default: false}: Width of 900px,
- **medium**: {type: Boolean, default: false}: Width of 1090px.
- **long**: {type: Boolean, default: false}: Width of 1200px.
- **big**: {type: Boolean, default: false}: Width of 1440px.
- **bigger**: {type: Boolean, default: false}: Width of 1600px.
- **large**: {type: Boolean, default: false}: Width of 1920px.

### Content

- **title**: {type: String, default: null}: The title of the modal, displayed in the header.
- **content**: {type: String, default: null}: A string to be display in a paragraph as modal content.
- **back**: {type: String, default: null}: If defined, a default button will be displayed in the footer. The label button will be the value of *back.*
- **b**: {type: Boolean, default: false}: Shortcut to use the back button with the default label.
- **validate**: {type: String, default: null}: If defined, a primary button will be displayed in the right of the footer. The label button will be the value of *validate.*
- **v**: {type: Boolean, default: false}: Shortcut to use the primary button with the default label.

### Helpers

- **noCross**: {type:Boolean, default: null}: If true, the closing cross will be hidden.
- **noShadowClose**: {type: Boolean, default: false}: If true, clicking on the modal shadow will not close the modal.
- **noFocus**: {type: Boolean, default: false}: If true, the modal will not have the focus when displayed (preventing an escape key closing).

## Slots

- **header**: Markup to insert in the modal window header.
- **content** (also default and body): Markup to insert in the modal window body.
- **footer**: Markup to insert in the modal window footer.
- **leftFooter**: Markup to insert on the left side of the modal window footer.

The default slot sets its content in the body wrapper as well.

## Structure

The Modal component has the following structure:

```jsx
<div class="eg-modal-mask">
    <div class="eg-modal-wrapper">
				<!-- Modal window -->
        <div class="eg-modal-container">
            <div class="eg-modal-content">
                <div class="exit-cross"><eg-icon type="cross"></eg-icon></div>
                <!-- Header -->
								<div class="eg-modal-header" v-if="$slots.header">
                    <slot name="header"></slot>
                </div>
								<!-- Body -->
                <div class="eg-modal-body">
                    <slot name="body"></slot>
                </div>
								<!-- Footer -->
                <div class="eg-modal-footer-wrapper">
                    <div class="eg-modal-side-footer">
                        <slot name="leftFooter"></slot>
                    </div>
                    <div class="eg-modal-footer" v-if="!noFooter">
                        <slot name="footer"></slot>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
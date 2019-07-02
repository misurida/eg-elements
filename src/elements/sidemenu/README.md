## \<Sidemenu\>

A sidemenu allows you to display any content via the default slot. This element has a wrapper that has the class'.eg-sidemenu-wrapper' that can be manipulated using CSS. The menu itself has the class'.eg-sidemenu'. This element is hidden outside the default page, on the side specified by `orientation` (left or right). If the attribute `trigger` is not null, its value defines the size *limit* of the viewport: below this size, the menu will be hidden. Otherwise, it will be placed in its wrapper and visible in the DOM as a simple *div*. When the menu is hidden, it is possible to display it by modifying `value`, or by using the *touch zones*. These areas are bands displayed on the side of the viewport that corresponds to `orientation` and the menu can be opened by clicking on them (with''), pan ban (with'') or swipe (with'').

- `value` (None, null): A *truthy* or *falsy* value to define whether the menu should be revealed or not.
- `orientation: {type: String, default: 'left'},
- `show` (Number, 0): A *truthy* or *falsy* value to define whether the menu should be revealed or not.
- `width` (Number, 300): Width in `px` of the menu (when hidden).
- `touchWidth` (Number, 10): Width in `px` of the *touch zones*.
- `enableTouch` (Boolean, true): If *true*, hammerjs will be used to listen to the touch events.
- `bounce` (Boolean, false): If *true*, the hidden menu is not locked: you can drag it futher than the side of the viewport.
- `shadowBackground` (String, '#222'): The color of the darken background.
- `touchBackground` (String, 'transparent'): The background color of the *touch zones*.
- `opacityMax` (Number, 0.5): The maximum opacity of the darken background (from 0 when hidden to `opacityMax` when open, maximum 1).
- `zIndexMult` (Number, 2.0): A multiplier to modulate the z-index position of the menu.
shadowSpeed: {type: Number, default: 2},
showBigSize: {type: Boolean, default: false},
- `viewportResize` (Boolean, true): If *true*, the viewport `@resize` is listened to update the menu.
invisible: {type: Boolean, default: false},
thinScroll: {type: Boolean, default: false},
- `background` (String, '#fff'): The menu background color
- `trigger` (Number, Infinity): If specified, the viewport width threshold to hide or reveal the menu. 0 means that the menu is always open (regular div) and Infinity mean that it will be always closed.
- `enableClickDeploy` (Boolean, false): if *true*, clicking on the *touch zone* will deploy the menu.
- `enablePan` (Boolean, false): If *true*, you can drag the *touch zone* to open the menu (*pan*).
- `enableSwipe` (Boolean, true): If *true*, you can swipe on the *touch zone* to open the menu.
- `disabled` (Boolean, false): If *true*, you can not open or close the menu.
# Sidemenu

Sidemenus are structural UI elements that are used as container. You can see them as div on a regular viewport size (desktop) that will be hidden on the sides of the viewport under a defined threshold. Under the thresold, the sidemenu has the compact form. When deployed, the rest of the page has an overlay (sidemenu shadow). You can deploy the sidemenu using *value* or using the handlers that are invisible divs placed on the side of the viewport to interact with the closed menu (with mouse or touch events). Clicking on the handle will deploy the menu, and clicking on the shadow will close it.

## Usage

Sidemenus can be displayed using `*<sidemenu>*`.

Its main goal is to display what is provided in the main content. You can place it anywhere on the page, and set a trigger value that can be one of the threshold names or a *px* value. If the viewport size is smaller than the threshold, it will be hidden: placed in an absolute position, outside of the viewport (the *side* can be defined). It is therefore advised to place the sidemenu in the lowest level parent possible (only a few divs after the body tag).

## Events

- v-model (@input): boolean flip to show (or hide if false) the menu panel.

## Attributes

### Main

- value: {default: null}: The value of the sidemenu is given and updated using v-model. When the viewport screen is smaller than the threshold, the sidemenu is hidden if *value* is falsy.
- trigger: {type: Number, default: Infinity}: The sidemenu is hidden when the viewport size is smaller than the threshold value. Can be a number or a threshold name (small, medium, big, etc.).
- show: {type: Number, default: 0}: *value* override (does the same thing but is prioritized).
- disabled: {type: Boolean, default: false}: If true, the sidemenu can not be deployed.

### Positionning

- side: {type: String, default: 'left'}: Side of the viewport to hide the sidemenu in (left, right).
- width: {type: Number, default: 250}: The sidemenu compact width.
- height: {type: Number, default: 250}: The sidemenu compact height (if *side* is bottom).
- touchWidth: {type: Number, default: 10}: The size of the handlers.

### Touch

The touch events can be catched using the external library Hammer.js.

- enableTouch: {type: Boolean, default: true}: If true, the touch events are captured.
- enablePan: {type: Boolean, default: false}: If true, the pan event is captured to drag the sidemenu in and out using the handlers.
- enableSwipe: {type: Boolean, default: true}: If true, the swipe event is captured to deploy quickly the menu.

### Styling

- background: {type: String, default: "#FFF"}: The background color.
- shadowBackground: {type: String, default: '#222'}: The shadow overloay color.
- touchBackground: {type: String, default: 'transparent'}: The handlers background color.
- opacityMax: {type: Number, default: 0.5}: The maximal shadow overlay opacity.
- zIndexMult: {type: Number, default: 2.0}: The z-index factor. All the elements have a z-index hierarchy already defined, but you can increase all of them using this factor.

### Helpers

- enableClickDeploy: {type: Boolean, default: false}: If true, clicking on the handles will deploy the sidemenu.
- bounce: {type: Boolean, default: false}: If true, the sidemenu is not locked to the side when deployed: you can drag it inside the page, bu releasing will set it back against the side.
- shadowSpeed: {type: Number, default: 2}: The speed at which the shadow overlay opacity should change.
- invisible: {type: Boolean, default: false}: If true, the scrollbar is hiden.
- thinScroll: {type: Boolean, default: false}: If true, the scrollbar is discrete.
- showBigSize: {type: Boolean, default: false}: ???
- viewportResize: {type: Boolean, default: true}: ???

## Slots

- default: Content of the menu.
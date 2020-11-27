# Sidemenu

Side menus are structural UI elements that are used as container. You can see them as div on a regular viewport size (desktop) that will be hidden on the sides of the viewport under a defined threshold. Under the threshold, the sidemenu has the compact form. When deployed, the rest of the page has an overlay (sidemenu shadow). You can deploy the sidemenu using "value" or using the handlers that are invisible divs placed on the side of the viewport to interact with the closed menu (with mouse or touch events). Clicking on the handle will deploy the menu, and clicking on the shadow will close it.

```html
<eg-sidemenu :threshold="classic" orientation="left" v-model="s1">
    Content hidden below the specified viewport width threshold (classic is 900px)
</eg-sidemenu>
```

Side menus can be displayed using `<eg-sidemenu>`.

Its main goal is to display what is provided in the main content. You can place it anywhere on the page, and set a trigger value that can be one of the threshold names or a px value. If the viewport size is smaller than the threshold, it will be hidden: placed in an absolute position, outside of the viewport (the "side" can be defined). It is therefore advised to place the sidemenu in the lowest level parent possible (only a few divs after the body tag).

## Attributes

- **value**: {default: false}: The value of the sidemenu is given and updated using v-model. When the viewport screen is smaller than the threshold, the sidemenu is hidden if "value" is falsy.
- **threshold**: {default: Infinity}: The sidemenu is hidden when the viewport size is smaller than the threshold value. Can be a number or a threshold name (small, medium, big, etc.).
- **disabled**: {type: Boolean, default: false}: If true, the sidemenu can not be deployed.
- **orientation**: {type: String, default: 'left'}: Side of the viewport used to hide the sidemenu: 'left', 'right', 'top' or 'bottom'.
- **enableClickDeploy**: {type: Boolean, default: true}: If true, handles are displayed next to the hidden panels but inside the viewport (on the extreme border of the screen). Clicking on it will deploy the sidemenu.
- **opacityMax**: {type: Number, default: 0.5}: The maximal shadow overlay opacity.

## Events

- v-model (**@input**): boolean flip to show (or hide if false) the menu panel.

## Slots

- **default**: Content of the menu.
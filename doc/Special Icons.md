# Special Icons

Special icons are elements to be used like icons but which have their own components because they have a very specific logic or style (animations for example).

## Hamburger Icon

The hamburger icon is a classic icon that represents three vertical bars visible when the icon is not active (when a menu is closed for example) and changes its aspect with an efficient animation when it is clicked or active.

This component is based on the [https://jonsuh.com/hamburgers](https://jonsuh.com/hamburgers) library which includes the following animations:

Slider, Squeeze, Arrow, Arrow Alt, Arrow Turn, Spin, Elastic, Emphatic, Collapse, Vortex, Stand Spring, Minus, 3DX, 3DY, 3DXY, Boring

### Usage

You can use this icon by default using `<hamburger-icon>`. The chosen animation can simply be passed to the class, and the "active" attribute changes the state and appearance of the icon.

```html
<hamburger-icon class="hamburger--collapse" :active="showMenu" @click="showMenu=!showMenu"></hamburger-icon>
```

### Attributes

- **active**: {default: false}: If the icon should be active (alternative visual aspect).

### Events

- **@click**: when the icon is clicked (default event payload).
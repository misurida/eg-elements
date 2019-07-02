# Eg-Elements

## Installation

Using **npm**:

```
npm i eg-elements
```

To use the library globally and register all the components in your main js file:
```
import eg from "eg-elements"
Vue.use(eg)
```

You can alternatively use the components individually:

```
import { EgInput, EgBtn, EgIcon, Popover, Modal, Sidemenu } from 'eg-elements'
```

## [Demo](https://ege.erwan.ch) and Documentation

You can see the live demo [here](https://ege.erwan.ch), and the documentation just below!

## Elements

The EgElements are the following:
- \<EgBtn\>: A button with different style layers or state attributes
- \<EgInput\>: Any kind of input: text, textarea, select, checkbox, radio, switch, number, slider, file, date, time, star or color
- \<Popover\> an v-tooltip: A popover or tooltip directive to display text or actions quickly next to any element
- \<Modal\>: A modal with attributes to display quick content or slot to insert any html
- \<Sidemenu\>: A menu that can be hidden next to viewport and based on its width. Pan and swipe events are available (thanks to hammerjs) to display the menu

## Icons

You can display quickly an icon using the `<eg-icon>` wrapper:

```
<eg-icon i=cross/>
```

**Attributes**
- `i (icon, type)` (String, null): The name of the icon to display. You can also use the arguments `icon` or `type` instead of `i`.

### EG Icons

You can use any of the following icons:

### Material Icons

You can also use the [Google Material Icons](https://material.io/tools/icons). Then insert the following code in your `index.html` file:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
To use the icons, you have to prepend the attribute with **ma:**. Ex: *ma:alarm*.

### Font Awesome Icons

You can also use the [Font Awesome Icons](https://fontawesome.com/icons). You simply have to create an account and ask for a [kit](https://fontawesome.com/start). You will receive the `SECRET` code to inset into the `index.html` file:

```
<script src="https://kit.fontawesome.com/{{SECRET}}.js"></script>
```
To use the icons, you have to prepend the attribute with **fa:**. Ex: *fa:fas fa-arrow-up*. YOu can also use special attributes `fa`, `fas`, `far` ou `fal` to use just like `i` but prepending automatically *fa:fa fa-*, *fa:fas fa-*, *fa:far fa-* ou *fal:fa fa-*. You can then just use the icon name, such as *arrow-up*.

## SCSS

The components styles are written using `lang="scss"`, so you might need the [Webpack SASS pre-processor](https://vue-loader.vuejs.org/guide/pre-processors.html) if you want to tweak the elements files:

```
npm install -D sass-loader node-sass
```

Then, in the webpack config:

```
module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // plugin omitted
}
```
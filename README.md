# Home

EG Elements is a vuejs library of modular and easily customizable interface components.

## Installation

Using **npm**:

```
npm i eg-elements
```

## Usage

To use the library globally and register all the components in your main js file:

```
import eg from "eg-elements"
Vue.use(eg)
```

You can alternatively use the components individually in one of your components:

```
import { EgInput, EgButton } from 'eg-elements'
```

## Components

Basics:

- Buttons
- Icons
- Special Icons

Inputs:

- Text Input
- Textarea
- Number Input
- Select
- Checkbox

Structure:

- Modal
- Sidemenu

Helpers:

- V-Tooltip directive
- V-Visible directive
- Tags

## Global parameters

you can pass some parameters when using Vue.use() to set up several actions:

- First of all, the native icon libraries selected as a string or an array with the attribute "icons"
- Then the globally installed components can be selected and their names can be customized by passing to the "components" attribute an object that contains the component code as a key and the chosen name as a value.
- Finally, the theme can be selected, either as a single theme by passing a string to the "theme" attribute, or by passing multiple themes with a table. If multiple themes are selected, they will be active only if one of the parent elements has the theme name as class.

```jsx
Vue.use(ege, {
    theme: "basic",
    components: {
        icon: "icon",
        input: "text-input",
        numberInput: "eg-number"
    },
    icons: ['brandico', 'elusive']
});
```

## Design and Themes

Each component has an internal CSS structure with a default design and some key classes that you can target and customize. If you select a theme using Vue.use(), you can also use CSS variables to quickly modify the key attributes of the components used in your own css files.

If you import one or more components individually, you can also import the theme manually. The path for the Basic theme is "~eg-elements/src/themes/theme_basic.scss".

Here is the [Page of the Basic theme]() that contains the list of variables and that is currently displayed by default in the demo. The main purpose of using variables is to be able to stylize a component locally. You can overwrite the value of any of these variables in of the parents classes to make it fit the situation, of even your whole design if you overwrite most of them in the :root.

The components styles are written using `lang="scss"`, so you might need the [Webpack SASS pre-processor](https://vue-loader.vuejs.org/guide/pre-processors.html) if you want to tweak the elements files:
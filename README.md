# Home

EG Elements is a Vuejs components libraries. It contains UI Components, CSS, and helpers that you can use individually or import as a toolbox pack.

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
// can also accept arguments: Vue.use(eg, {})
```

You can alternatively use the components individually in one of your components:

```
import { EgInput, EgButton, etc. } from 'eg-elements'
```

## Components

Standard components:

- [EgInput](https://github.com/misurida/eg-elements/blob/master/doc/EgInput.md)
- [EgButton](https://github.com/misurida/eg-elements/blob/master/doc/EgButton.md)
- [EgIcon](https://github.com/misurida/eg-elements/blob/master/doc/EgIcon.md)
- [EgSelect](https://github.com/misurida/eg-elements/blob/master/doc/EgSelect.md)
- [EgNumberInput](https://github.com/misurida/eg-elements/blob/master/doc/EgNumberInput.md)
- [EgCheckbox](https://github.com/misurida/eg-elements/blob/master/doc/EgCheckbox.md)
- [Modal](https://github.com/misurida/eg-elements/blob/master/doc/Modal.md)

Helpers components:

- [Tooltip directive](https://github.com/misurida/eg-elements/blob/master/doc/Tooltip.md)
- EgFloatingMenu
- HelpIcon
- EgSidemenu
- EgActionMessages

## Design

The components have a internal CSS structure (on the .vue file) but are mainly styled from one of the theme files. These SCSS files are defining most of the visual properties with the help of CSS native variables. The default theme is imported when `Vue.use(eg)` is used, but you have to import it manually at some point if you are importing the components individually. To do that, simply import the theme file: `src/themes/theme_default.scss`

[See the list of CSS Variables.](https://github.com/misurida/eg-elements/blob/master/doc/CSS.md)
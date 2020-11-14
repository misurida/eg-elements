# CSS

## Variables

Those CSS variables are defining the most important properties of the components and are defined in the used theme (`src/themes/theme_default.scss` by default).

The main purpose of using variables is to be able to stylize a component locally. You can overwrite the value of any of these variables in of the parents classes to make it fit the situation, of even your whole design if you overwrite most of them in the :root.

```css
/*|   Colors    |*/

// main colors
--rgb-default: 212, 212, 212;
--rgb-default-text: 90, 90, 90;
--rgb-primary: 69, 100, 143;
--rgb-primary-text: 255, 255, 255;
--rgb-secondary: 219, 223, 225;
--rgb-secondary-text: 0, 0, 0;
--rgb-tertiary: 60, 160, 160;
--rgb-tertiary-text: 255, 255, 255;

// status colors
--rgb-error: 156, 39, 39;
--rgb-warning: 214, 109, 2;
--rgb-success: 82, 162, 44;

// special colors
--rgb-dark: 67, 67, 67;
--rgb-dark-text: 217, 217, 217;
--rgb-light: 255, 255, 255;
--rgb-light-text: 100, 100, 100;
--rgb-transparent-text: 80, 80, 80;
--rgb-black: 18, 18, 18;
--rgb-white: 245, 245, 245;

// rgb renders
--color-default: rgb(var(--rgb-default));
--color-default-text: rgb(var(--rgb-default-text));
--color-primary: rgb(var(--rgb-primary));
--color-primary-text: rgb(var(--rgb-primary-text));
--color-secondary: rgb(var(--rgb-secondary));
--color-secondary-text: rgb(var(--rgb-secondary-text));
--color-tertiary: rgb(var(--rgb-tertiary));
--color-tertiary-text: rgb(var(--rgb-tertiary-text));
--color-error: rgb(var(--rgb-error));
--color-warning: rgb(var(--rgb-warning));
--color-success: rgb(var(--rgb-success));
--color-dark: rgb(var(--rgb-dark));
--color-dark-text: rgb(var(--rgb-dark-text));
--color-light: rgb(var(--rgb-light));
--color-light-text: rgb(var(--rgb-light-text));
--color-transparent-text: rgb(var(--rgb-transparent-text));
--color-black: rgb(var(--rgb-black));
--color-white: rgb(var(--rgb-white));

/*|   Buttons    |*/
--button-padding: var(--input-padding);
--button-padding-big: var(--input-padding-big);
--button-padding-small: var(--input-padding-small);

/*|   Inputs    |*/
--input-bg: #fff;
--input-border: thin solid #cdcdcd;
--input-border-focus: thin solid #bebebe;
--input-color: var(--color-black);
--input-color-placeholder: rgba(0,0,0,.5);
--input-color-placeholder-focus: rgba(0,0,0,.65);
--input-box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
--input-icon-gap: 0.75em;
--input-padding: 12px 14px;
--input-padding-big: 1em 1.5em;
--input-padding-small: 0.4em 0.8em;
--select-padding: 9.5px 14px;

/*|   Tooltips    |*/
--tooltip-font-size: 1rem;
--tooltip-line-height: 1;
--tooltip-bg: #111; // #111 | #FFF
--tooltip-color: #EEE; // #CCC | #777
--tooltip-padding: 5px 10px;
--tooltip-shadow: 0 2px 2px 0 rgba(0,0,0,0.05); //  0 0 5px 5px rgba(0,0,0,.0)
--tooltip-border: none; // 1px solid #000 // 1px solid #eee
--tooltip-border-radius: 3px;
--tooltip-max-width: 200px;
--tooltip-max-height: 200px;

/*|   Modals    |*/
--modal-min-width: 300px;
--modal-shadow-color: rgba(0,0,0,.5);
--modal-bg: #fff;
--modal-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
--modal-border: none;
--modal-inner-border: none;
--modal-padding-header: 1.5rem 1.5rem 0 1.5rem;
--modal-padding-body: 1rem 1.5rem 1.5rem 1.5rem;
--modal-padding-footer: 0 1.5rem 1rem 1.5rem;

/*|   Sidemenu    |*/
--sidemenu-bg: #FFF;
--sidemenu-shadow-bg: #222;
--sidemenu-touch-bg: transparent;

/*|   Action messages    |*/
--action-message-bg: rgba(0,0,0,0.8);
--action-message-padding: 10px 15px;
--action-message-color: #f5f5f5;
--action-message-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
```

### SCSS

The components styles are written using `lang="scss"`, so you might need the [Webpack SASS pre-processor](https://vue-loader.vuejs.org/guide/pre-processors.html) if you want to tweak the elements files:

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
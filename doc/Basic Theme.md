# Basic Theme

```css
/*|   Colors    |*/
// main colors
--rgb-default: 222, 222, 222;
--rgb-default-text: 90, 90, 90;
--rgb-primary: 69, 100, 143;
--rgb-primary-text: 255, 255, 255;
--rgb-secondary: 202, 215, 232;
--rgb-secondary-text: 75, 90, 120;
--rgb-tertiary: 60, 160, 160;
--rgb-tertiary-text: 255, 255, 255;
// status colors
--rgb-error: 200, 75, 75;
--rgb-warning: 242, 153, 74;
--rgb-success: 40, 160, 90;
// special colors
--rgb-dark: 67, 67, 67;
--rgb-dark-text: 217, 217, 217;
--rgb-light: 255, 255, 255;
--rgb-light-text: 175, 175, 175;
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
--tooltip-bg: #111;
--tooltip-color: #EEE;
--tooltip-padding: 5px 10px;
--tooltip-shadow: 0 2px 2px 0 rgba(0,0,0,0.05);
--tooltip-border: none;
--tooltip-border-radius: 3px;
--tooltip-max-width: 200px;
--tooltip-max-height: 200px;

/*|   Modals    |*/
--modal-min-width: 300px;
--modal-shadow-color: rgba(0,0,0,.5);
--modal-bg: #fff;
--modal-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
								0 3px 1px -2px rgba(0,0,0,0.12), 
								0 1px 5px 0 rgba(0,0,0,0.2);
--modal-border: none;
--modal-inner-border: none;
--modal-padding-header: 1.5rem 1.5rem 0 1.5rem;
--modal-padding-body: 1rem 1.5rem 1.5rem 1.5rem;
--modal-padding-footer: 0 1.5rem 1rem 1.5rem;

/*|   Sidemenu    |*/
--sidemenu-bg: #FFF;
--sidemenu-shadow-bg: rgba(0,0,0,.5);
--sidemenu-touch-bg: transparent;
--sidemenu-transition-time: .3s;
--sidemenu-z: 2;

/*|   Action messages    |*/
--action-message-bg: rgba(0,0,0,0.8);
--action-message-padding: 10px 15px;
--action-message-color: #f5f5f5;
--action-message-shadow:  0 2px 2px 0 rgba(0,0,0,0.14), 
													0 3px 1px -2px rgba(0,0,0,0.12), 
													0 1px 5px 0 rgba(0,0,0,0.2);
```
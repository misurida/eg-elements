# V-Visible

v-visible is a custom directive that allows to give the element to which it is attached the css class 'visible' when another target element appears on the screen. 

This directive takes as parameter a string that allows to target an element of the DOM using the querySelector function (ex: "#my-div"). The class given to the parent element and the position of the target element relative to the visible screen can also be customized by passing an object as parameter.

## Usage

You can use the custom directive in multiple forms:

1. The most basic one is providing a string as directive argument to display it using the default parameters: `v-visible="'#target-element'"`.
2. You can also give an object containing the parameters to the tooltip if you want to change one or multiple parameters: `v-visible="args"`.
3. You can also use modifiers to quickly change one parameter value. Example with the side parameter: `v-visible.above="args"`. The list of modifiers can be found below.
4. If the parameters can change after the parent element is mounted, you can use the dynamic arguments: `v-visible:[args]`.

## Attributes

This object can contain the following attributes:

- **target (t)**: A string allowing to identify the target element that should trigger the inheritance of the 'visible' class according to its position on the screen. You can also use the shortcut attribute 't'.
- **css (c)**: A String representing the name of the class given to the parent element (the default name is 'visible'). You can also use the shortcut attribute 'c'.
- **position (t)**: A String representing String representing the mode of triggering the inheritance in the class according to the position of the target element designated by the target attribute. You can also use the shortcut attribute 't'. This parameter can take the following values and that defines that the class is given when the target element is (...) :
    - **above**: Completely hidden above viewport (e.g. a navigation bar when scrolling).
    - **below**: Completely hidden below viewport (e.g. a page footer until visible).
    - **inside**: Completely visible in the viewport and has no hidden part.
    - **visible**: Visible in the viewport (even partially).
    - **partial** (default): Mostly visible on the screen (more than half of its volume is visible) or when is overflowing on top and bottom of the viewport.

## Modifiers

The only modifiers available are the names of the position values to quickly change it: **above**, **below**, **inside**, **visible** or **partial**.
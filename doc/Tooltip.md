# Tooltip

Tooltips are simple text indications that are display next to an element. They are initially hidden, and displayed when the user needs more information. 

They can be set on any element (any html tag called tooltip parent in the documentation) to generate a tooltip <span> inside in order to position the tooltip based on the parent size.

The tooltips can mainly be modified by editing the default CSS variables.

## Parameters

Tooltips have the following parameters available. Most of the parameters have a one-letter shorthand that you can also use the same way (written between parenthesis next to the parameter name). You can also find the possible values after the description (with the default one in italic) or details about the unit to use.

- **text (t)**: The text to display (a string).
- **side (s)**: Tooltip wrapper positioning (b, bottom, t, top, l, left, r, right).
- **position (p)**: Tooltip content positioning (l, r, c, t, b).
- **zone (z)**: shorthand to define the side and the position with a 2-letters string (side then position).
- **display (d)**: The trigger or interactivity option (hover, click, clickout, furtive).
- **width (w)**: Top / Bottom tooltip size constraint (in *px* or any other size unit).
- **height (h)**: Top / Bottom tooltip size constraint (in *px* or any other size unit).
- **textAlign (a)**: Text alignment in the tooltip (left, right, center).
- **theme**: CSS color quick change (dark, light).
- **fontSize**: The font size (in any font size unit).
- **enterDelay**: The time needed for the hovering event triggers the tooltip reveal (number in *ms*).
- **exitDelay**: The time needed for the hovering event triggers the tooltip hiding (number in *ms*).

## Usage

You can use the custom directive in multiple forms. The most basic one is providing a string as directive argument to display it using the default parameters: `v-tooltip="'Hello world!'"`.

You can also give an object containing the parameters to the tooltip if you want to change one or multiple parameters: `v-tooltip="args"`.

You can also use modifiers to quickly change one parameter value. Example with the side parameter: `v-tooltip.left="args"`. The list of modifiers is just below.

If the parameters can change after the parent element is mounted, you can use the dynamic arguments: `v-tooltip:[args]`.

### Modifiers

The modifiers are the following:

- Position: `l`, `c`, `r`, `t` or `b` for 'left', 'center', 'right', 'top' or 'bottom' positionning.
- Display: `hover`, `click` or `clickout`
- Side: `top`, `right`, `bottom` or `left`
- Text: `tal`, `tar` or `tac` for 'left', 'right' or 'center' text align.
- Themes: `dark` or `light`.

### Text

The number of lines of text displayed is base on the width or height of the wrapper (sizing), but you can change the size and alignment of the text (the color must be defined using theme).

### Display

By default, the tooltip opens when the parent element is hovered but other triggers can be used:

- **hover**: the tooltip is visible after a few ms (defined by enterDelay)  when the curor hovers the parent element. It is hidden after a few ms (defined by exitDelay) when the cursor exits the parent element.
- **click**: the tooltip is visible when the parent element is clicked. It is hidden when anything is clicked again.
- **clickout**: the tooltip is visible when the parent element is clicked. It is hidden when anything except the tooltip itself is clicked again.

### Positioning

The positioning has two main components:

- **side**: defines on which side of the parent element the tooltip should appear. It can be top, bottom, left or right. Each of these values have a shorthand value available: t, b, l and r.
- **position**: defines how the tooltip should be align compared to the parent element. It can be l, c, r (for left, center and right in a top or bottom sided), or t, c, b (for top, center and bottom in a left or right sided tooltip). For example, a tooltip with the left position will stick to the left of the parent element side and expand to the right.

You can also use the shorthand zone to define both the side and the position as one attribute:

- **zone**: 2 characters string defining the side (t, b, l, r) and the position (l, c, r, t, b) quickly (ex: "tl" for top left).

### Sizing

The tooltip size is variable between the boundaries of the tooltip wrapper. The position of this one is defined by the side and the position. This wrapper has a fixed size (max width and height) and the tooltip grows inside it and add several lines if the size of the text is bigger than the wrapper size. You can set the wrapper size using these parameters:

- **width**: wrapper max width.
- **height**: wrapper max height.

### Themes

The color of the tooltip, text and border (including the arrow) are defined by css variables. A set of these variables are defining a theme. By default, the tooltip has the dark theme and the background color is black with a white text, but you can use the light theme to display a white background tooltip with a black text, you defines the variables to make the tooltips match your design.

- **theme**: dark or light.

## Structure

The tooltip (here in a <span>Target text</span> parent) has the following structure:

```html
<span style="position: relative;">Target text
	<!-- Tooltip area -->
	<span class="tt-wrapper" style="...">
		<!-- Tooltip bubble -->
		<span class="tt-content" style="...">Short helping text</span>
	</span>
</span>
```
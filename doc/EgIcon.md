# EgIcon

Icons are visual elements that can be used embedded in a text, in a component or as a standalone element (clickable or not). They are mostly *web font* character, by a few of them are *svg*.

## Usage

An icon can be displayed using the `<eg-icon>` tag and setting the icon name as main slot value (between the tags) or using the attributes *i, icon* or *type*. You will have to choose an icon source first.

## Events

- @click: when the icon is clicked. Payload: the event, containing the extra attribute *eventName* containing the click action as string: 'click', 'dblclick', 'ctrlClick'.

## Attributes

- **icon** {type: String, default: null}: The name of the icon to display. You can also use the arguments *i* or *type* instead of *icon*. The eg element icon names can be used, but you can prefix the name with 'ma:' to use the material (google) icons, with 'fa:' to use the font awesome icons or with 'svg:' to use the native svg icons.
- **i** {type: String, default: null}: *icon* shorthand (see above).
- **type** {type: String, default: null}: *icon* shorthand (see above).
- **clickable**: {type: Boolean, default: false}: If true, the icon has a clickable style (cursor and hover change).
- **fr**: {type: Boolean, default: false}: The icon will have the `float: right` css attribute.
- **fl**: {type: Boolean, default: false}: The icon will have the `float: left` css attribute.
- **svg**: {type: Boolean, default: false}: If true, the svg library is used by default (you don't need to use the prefix).
- **title**: {default: null}: The default *title* attribute, defining a default helping text revealed when the element is hover for a long time.
- **stop**: {type: Boolean, default: false}: If true, `e.stopPropagation()` is applied before emitting any click event.
- **flip**: {type: Boolean, default: false}: If true, the icon is vertically flipped.

## Sources

You can use icons from multiple source. You can use the default integrated icon web font provided from fontello or the few native SVG icons. You can also import the external libraries **[Google Material Icons](https://material.io/tools/icons) or** **[Font Awesome Icons](https://fontawesome.com/icons)** to use with the EgIcon component.

### Fontello icon webfonts

[Fontello](https://github.com/fontello/fontello) is a tool that lets you combine icon web fonts. The default font sets from [fontello.com](http://fontello.com) are available as packs. The licenses information are available on the web site. The available libraries are the following: Brandico, Elusive, Entypo, Iconic, Linecons, Maki, MFG Labs, Modern Pictograms, Typicons, Web Symbols and Zocial.

You can set the icon library to with the initialization parameters: 

```
Vue.use(eg, {
    icons: [
        'brandico',
        'elusive',
        'entypo',
        'font_awesome',
        'iconic',
        'linecons',
        'maki',
        'mfg_labs',
        'modern_pictograms',
        'typicons',
        'web_symbols',
        'zocial',
    ]
});
```

### Google Material Icons

You can use the **[Google Material Icons](https://material.io/tools/icons)**. Then insert the following code in your *index.html* file:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

To use the icons, you have to prepend the icon name with "ma:". For example if you want to use the *alarm* icon, you can use the attribute *icon* like this: `icon="ma:alarm"`. 

You can also use the text shorthand using a '+' before the name: `icon="+alarm"`

### Font Awesome Icons

You can also use the **[Font Awesome Icons](https://fontawesome.com/icons)**. You simply have to create an account and ask for a **[kit](https://fontawesome.com/start)**. You will receive the {SECRET} **code to insert into the *index.html* file:

```
<script src="https://kit.fontawesome.com/{SECRET}.js"></script>
```

To use the icons, you have to prepend the icon name with "fa:". For example if you want to use the *arrow-up* icon, you can use the attribute *icon* like this: `icon="fa:fas fa-arrow-up"`. You have to prepend "fa-arrow-up" by "fas" to specify the [font awesome style](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) (in this case for the *Solid* library). 

You can also use another shorthand on the *fa* value. You can prefix "fas fa-" (not only fas by all icons styles) using the font style representative letter (s for fas, l for fal, etc.) followed by a '/' character: `icon="s/arrow-up"`.

### Native EG Elements SVG Icons

To use a native svg icon, you have to prefix the icon name with "svg:" or set the boolean attribute *svg* to true. The icons size is based on the text size.

## Structure

The EgIcon has the following structure:

```html
<span class="eg-icon">
	<i class="icon-{name}"></i>
</span>
```
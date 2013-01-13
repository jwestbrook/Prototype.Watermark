Prototype.Watermark
===================

Mirrored from http://www.blipuscek.com/?p=27 (no longer working)

Watermark is a [PrototypeJS](http://prototypejs.org) based class that emulates the HTML5 placeholder attribute for Internet Explorer.

It uses and overlying div to present the placeholder text instead of changing the textual content of an input box. Since any changes of text can cause some problems when posting a form I found this to be an ideal solution. The component works in all browsers that PrototypeJS supports.

A relative and absolute div is wrapped around a text input or area to make sure that watermark is positioned right above it. Styles from the underlying input box are copied into the watermark div element. We can also apply watermark to every element that has a class named "watermark"

__Usage__

Include the `watermark.js` after `prototype.js` and link or import the CSS file.

```html
<script src="prototype.js" type="text/javascript"></script>
<script src="watermark.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="watermark.css" />
<!--   OR    -->
<style type="text/css">
@import url('watermark.css');
</style>
```

__Example__

By default any `<input />` or `<textarea />` tags with the `watermark` class will get the watermark attached to them. Update the `title` tag to change the text of the watermark.

```html
<input type="text" class="watermark" title="My default data" />
```

Real running example is here http://jsfiddle.net/jwestbrook/QJWdK/
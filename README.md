Prototype.Watermark
===================

Mirrored from http://www.blipuscek.com/?p=27 (no longer working)

I’ve decided to opensource some of my javascript user interface components that I used in some of my projects. One of them is a watermark text stamp on top of text input fields. This javascript component is based on prototype-js library and it uses and overlying div to present a watermark instead of changing the textual content of an input box. Since any changes of text can cause some problems when posting a form I found this to be an ideal solution. The component works in most of the modern browsers IE 6+, Firefox 2+, Safari, Chrome …

A relative and absolute div is wrapped around a text input or area to make sure that watermark is positioned right above it. Styles from the underlying input box are copied into the watermark div element. We can also apply watermark to every element that has a class named "watermark"

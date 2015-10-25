## HTML & CSS

- **always** important to follow best practices:
	- close tags:

	```html
	<h1>I just opened this header! Now close it</h1>
	```

	- check that your page validates by going through [W3 Validator](http://validator.w3.org/)
	- separate markup and style (HTML & CSS).
- `HTML` used to markup a document. `CSS` is used to style the document:
- CSS selectors: `id`, `class`

### A simple HTML example

```html
<p class="centered">
	This is a paragraph.
</p>
<p class="centered" id="last">
	This is a second paragraph.
</p>
```

### And the CSS

```css
p {
	font-size: 18px;
}
.centered {
	text-align: center;
}
#last {
	color: blue;
}
```

## TCP / IP

- Transmission Control Protocol/ Internet Protocol is a means of ensuring delivery of data.

## HTTP

- Hyptertext Transfer Protocol is an application protocol for requesting and sending data between computers.
# jQuery Focal

Simulates a camera focal point on a layer in a container using CSS blur filters.

## Browser support

- Safari
- Chrome

Dependant on [browser support for CSS filters](http://caniuse.com/#feat=css-filters), specifically `blur()`.

Works beautifully in Safari. Transitioning filters in Chrome flickers as at version 37. Firefox probably wont support filters properly [until version 34](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility). IE for now is an epic fail on `filter` standards, although support may be achieved by adding propriety syntax.

## Usage

Refer to `demo.html` for a working example.

In the HTML, wrap your scene layers in a container.

Set a layer as the focal point:

```javascript
$('#layer').focalPoint();
```

Again, with options:

```javascript
$('#layer').focalPoint({
	maxBlur: 10, // The blurriest near and far layers may appear
	callback: function() {
		// Do stuff
	}
});
```

If you would like changes to the focal point to transition, apply these styles to all layers:

```css
.layer {
	-webkit-transform: translateZ(0); /* Chrome bugs hack */
	transition: -webkit-filter 1s;
}
```

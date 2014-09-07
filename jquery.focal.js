(function($) {

	// Sets the focus layer within a container
	$.fn.focalPoint = function(options) {

		// Defaults
		var config = $.extend({
			maxBlur:	8,
			callback:	undefined
		}, options);

		// Derived
		var	$layer		= this,
			$foreground	= $layer.prevAll(),
			$background	= $layer.nextAll(),
			blurStep	= config.maxBlur / ($foreground.length + 1 + $background.length);

		// Sets CSS blur filter cross-browser
		function blur($layer, blur) {
			var value = 'blur(' + blur + 'px)';
			$layer.css({
				'-webkit-filter':	value,
				'filter':			value
			});
		}

		// Sets gradual blur on layers
		function blurLayers($layers) {
			$layers.each(function(index) {
				blur($(this), blurStep * (index + 1));
			});
		}

		// Blur foreground layers
		blurLayers($foreground);

		// Sharpen focus layer
		blur($layer, 0);

		// Blur background layers
		blurLayers($background);

		// Run optional callback
		if (typeof config.callback === 'function') config.callback.call($layer);

		// jQuery chaining
		return $layer;

	};

}(jQuery));
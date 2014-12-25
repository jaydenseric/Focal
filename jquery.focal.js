// jQuery Focal: https://github.com/jaydenseric/Focal
(function($) {
	// Sets the focal point within a container
	$.fn.focalPoint = function(point, options) {
		var $container = this;
		// Defaults
		var config = $.extend({
			minZ	: 0,
			maxZ	: 1000,
			maxBlur	: 8
		}, options);
		// Gets an element's translateZ
		function getTranslateZ($element) {
			var transform = $element.css('transform');
			if (transform == 'none') return 0;
			return parseInt(transform.split(',')[14]);
		}
		// Sets a cross-browser CSS filter blur
		function blur($element, amount) {
			var value = 'blur(' + amount + 'px)';
			$element.css({
				'-webkit-filter'	: value,
				'filter'			: value
			});
		}
		// Get focus point (may be supplied as a number or jQuery object)
		var focusZ = $.isNumeric(point) ? point : getTranslateZ(point);
		// Blur layers according to their distance from the focal point
		$container.children().each(function() {
			var	$layer			= $(this),
				layerZ			= getTranslateZ($layer),
				distance		= Math.abs(focusZ - layerZ),
				blurIntensity	= distance / (config.maxZ - config.minZ);
			blur($layer, blurIntensity * config.maxBlur);
		});
		// Allow chaining
		return $container;
	};
}(jQuery));
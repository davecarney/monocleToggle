/*
* monocleToggle() 1.0.0
*
* Copyright 2015
*
* By Dave Carney, http://www.fallingmonocle.com
* Mimics hover functionality for li's with dropdown navigation for touchscreens
* Available for use under the MIT License
*
* Borrows heavily and updates from doubleTapToGo() By Osvaldas Valutis, www.osvaldas.info
*/

(function ( $ ) {
	$.fn.monocleToggle = function() {
		if (!('ontouchstart' in window) &&
			!navigator.maxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i )) {
			return false;
		}
		this.each(function() {
			var menu_open = false;

			$(this).on('click', function(e) {
					if (menu_open === false) {
						e.preventDefault();
						$(this).closest('ul').show();
						menu_open = true;
					}
			});
			$(document).on('click touchstart pointerdown', function(e) {
				if (!$(e.target).closest('nav li:has(ul)').length &&
					!$(e.target).is('nav li:has(ul)')) {
						if($('nav li:has(ul)').is(':visible')) {
							$(this).closest('ul').hide();
							menu_open = false;
						}
				}
			});

		});
		return this;
	};
}( jQuery ));

$('nav li:has(ul)').monocleToggle();


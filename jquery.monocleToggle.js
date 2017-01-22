/*
* monocleToggle() 1.0.0
*
* Copyright 2016
*
* By Dave Carney, http://www.fallingmonocle.com
* Mimics hover functionality for li's with dropdown navigation for touchscreens
* Available for use under the MIT License
*/

(function ( $ ) {
	$.fn.monocleToggle = function() {

		this.each(function() {

			$(this).on('mouseenter', function(e) {
				$(this).children('ul').show();
					$(e.target).closest('nav li:has(ul)').addClass('monocle-hover');
					setTimeout(function() {
						$('.monocle-hover').removeClass('monocle-hover').addClass('monocle-open');
					}, 500);
			});

			$(this).on('click', function(e) {
					if (!$(this).closest('nav li:has(ul)').hasClass('monocle-open')) {
						e.preventDefault();
						$(this).children('ul').show();
						setTimeout(function() {
							$(e.target).closest('nav li:has(ul)').addClass('monocle-open');
						}, 500);
					}
			});

			$(document).on('click touchstart onpointerdown', function(e) {
				if (!$(e.target).parents('nav li:has(ul)').hasClass('monocle-open')) {
						$('.monocle-open').removeClass('monocle-open').find('ul').hide();
					}
			});

			$(document).on('mousemove', function(e) {
				if (!$(e.target).closest('nav li:has(ul)').is(':visible')) {
						$('.monocle-hover, .monocle-open').removeClass('monocle-hover monocle-open').find('ul').hide();
					}
			});

		});
		return this;
	};
}( jQuery ));

$('nav li:has(ul)').monocleToggle();


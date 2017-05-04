/*
* monocleToggle() 1.2.1
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
				// Useful for if a dropdown overlaps a top level li
				// Without it, the "mousemove" check would not hide the ul you are leaving because the cursor would still be within the nav
				if (!$(this).closest('nav li:has(ul)').hasClass('monocle-open') &&
					!$(this).parents('nav li:has(ul)').hasClass('monocle-open')) {
					$('.monocle-open, .monocle-hover').removeClass('monocle-open monocle-hover').find('ul').hide();
				}

				// When the cursor hovers over the li find the nested ul/ul's and reveal it/them
				$(this).children('ul').show();

					// adds .monocle-hover and changes it to .monocle-open after 500ms
					// the delay is added to unify a cursor hover with a tap event
					$(e.target).closest('nav li:has(ul)').addClass('monocle-hover');
					setTimeout(function() {
						$('.monocle-hover').removeClass('monocle-hover').addClass('monocle-open');
					}, 500);
			});

			$(this).on('click', function(e) {

					// Tap or click, if the li does not have .monocle-open, prevent the link from opening and reveal the nested ul
					// after 500ms, add .monocle-open (soonest amount of time to allow touch event to finish before class is added)
					if (!$(this).closest('nav li:has(ul)').hasClass('monocle-open')) {
						e.preventDefault();
						$(this).children('ul').show();
						setTimeout(function() {
							$(e.target).closest('nav li:has(ul)').addClass('monocle-open');
						}, 500);
					}
			});

			// Used to close dropdown if you touch outside of the ul
			$(document).on('click touchstart onpointerdown', function(e) {
				if (!$(e.target).parents('nav li:has(ul)').hasClass('monocle-open')) {
						$('.monocle-open').removeClass('monocle-open').find('ul').hide();
					}
			});

			// If the mousemoves outside of the nav, hide the ul
			// Hiding both .monocle-hover and .monocle-open is useful if you hover over and out of the nav in under 500ms
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


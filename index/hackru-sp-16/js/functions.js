//smooth scroll anchor
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

// on scroll nav appear
$(function($) {
	$(document).ready(function(){
		$(window).scroll(function(){
			var window = $('#landing').height()* .5;
			if ($(this).scrollTop() > window) {
				$('nav').fadeIn(500);
			} else {
				$('nav').fadeOut(500);
			}
		});
	});
});


/*

matt, my gitbud, help me pls.

everything works as expected, EXCEPT:

when you go into mobile and click on a section in faq to make the text show up then
click it again to make disappear, resizing the window into tablet or desktop makes the thing still disappear

the p element in .q-text needs to be display: block when you resize out of
570px (the phone media query i have for the site)

*/

//mobile faq dropdown
jQuery(document).ready(function(){
		if($(window).width() < 570) {
			jQuery('.collapse').on('click', function(event) {
				jQuery(this).find('p').slideToggle('show');
			});
		} else {

		}
});

//svg editing capabilities
$(function(){
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, else we gonna set it if we can.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
});

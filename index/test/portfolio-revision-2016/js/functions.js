//onhover fill from madogatari
$(document).ready(function () {
	$(".main_copy_active").hover(function(){
		$(this).find('span').stop(true, false).animate({ width: "100%" });
	}, function() {
		$(this).find('span').stop(true, false).animate({ width: "0px" });
	});
});

//mo.js
new mojs.Tween({
	repeat:   0,
	delay:    50,
	duration: 500,
	onUpdate: function (progress) {
		var square = document.querySelector('.heart');
		var extremeInElasticOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,-15.815625 53.7148438,-19.1218754 60.4981394,0 C62.2625924,4.97393188 66.4286578,6.07928485 68.3303467,0 C71.3633751,-6.23011049 74.5489919,-1.10166123 75.7012545,0 C79.6946191,3.60945678 84.2063904,-0.104182975 84.2063905,0 C87.5409362,-2.25875668 90.4589294,-0.0327241098 93.4950242,0 C97.3271182,0.20445262 100,-0.104182352 100,0');
		var extremeInElasticOutProgress = extremeInElasticOutEasing(progress);
		square.style.transform = 'scale(' + (2 + (.9*extremeInElasticOutProgress)) + ')';
	}
}).run();

// smoothstate.js

;(function($) {
	'use strict';
	var $body = $('html, body'),
		content = $('#main').smoothState({
			// Runs when a link has been activated

			onStart: {
				duration: 250, // Duration of our animation
				render: function (url, $container) {
					// toggleAnimationClass() is a public method
					// for restarting css animations with a class
					content.toggleAnimationClass('is-exiting');
					// Scroll user to the top
					$body.animate({
						scrollTop: 0
					});
				}
			}
		}).data('smoothState');
	//.data('smoothState') makes public methods available
})(jQuery);

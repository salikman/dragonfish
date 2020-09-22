"use strict";

(function($) {
    ///////////////////////////
	// Btn nav collapse
	$('#nav .navbar__collapse').on('click', function() {
		$('#nav').toggleClass('open');
    });
    $('#nav .lang__active').on('click', function() {
		$('#nav').toggleClass('open-lang');
	});
	///////////////////////////
	// On Scroll
	$(window).on('scroll load', function() {
		var wScroll = $(this).scrollTop();

		const $img = $('.logo__link img');
		$img.data('src-orig', $img.attr('src'));

		// Fixed nav
		if (wScroll > 1) {
			$('#nav').addClass('fixed-nav');
			$img.attr('src', $img.data('logo-red'));
		} else {
			$('#nav').removeClass('fixed-nav');
			$img.attr('src', $img.data('logo'));
		}
	});

})(jQuery);
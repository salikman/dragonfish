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
	$(window).on('scroll load resize', function() {
		var wScroll = $(this).scrollTop();
		

		const $img = $('.logo__link img');

		$img.data('src-orig', $img.attr('src'));

		// Fixed nav
		if (wScroll > 1) {
			$('#nav').addClass('fixed-nav');
			if ($('body').hasClass('is-home') == true) {
				$('#logo').addClass('logo__link--red');
			}
		} else {
			$('#nav').removeClass('fixed-nav');
			$('#logo').removeClass('logo__link--red');
		}

		// tabs
		var wWidth = $(window).width();
		if (wWidth < 769) {
			$("#tabs").tabs();
		}
	});

})(jQuery);
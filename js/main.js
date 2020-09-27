"use strict";

(function($) {

	$(document).on('click', '#breadcrumb', function (e) {
		window.location.href = "?"+Date.now()+"/about.html/#about-news";
  	});
    ///////////////////////////
	// Btn nav collapse
	$('#nav .navbar__collapse').on('click', function() {
		$('#nav').toggleClass('open');
    });
    $('#nav .lang__active').on('click', function() {
		$('#nav').toggleClass('open-lang');
	});
	// On Scroll
	var $logo = $('.logo__link img');
	$logo.data('initial', $logo.attr('src'));

	$(window).on('scroll load resize', function () {
		var wScroll = $(this).scrollTop();
		var wWidth = $(this).width();

		if (wScroll > 1) {
			$('#nav').addClass('fixed-nav');

			$logo.attr('src', $logo.data('inverse'));
			$('#request').addClass('request--bg');
		} else {
			$logo.attr('src', $logo.data('initial'));

			$('#nav').removeClass('fixed-nav');
			$('#request').removeClass('request--bg');

		}
		if ($('body').hasClass('not-is-home') == true) {
			$logo.attr('src', $logo.data('inverse'));
		}
		// tabs
		if (wWidth <= 768) {
			$("#tabs").tabs();
		}
	});
})(jQuery);


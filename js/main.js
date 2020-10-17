"use strict";

(function($) {
	///////////////////////////
	// Smooth scroll
	$(".scroll a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 85
		}, 700);
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

		// Smooth scroll
		wScroll > 50 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();

		if ($('body').hasClass('not-is-home') == true) {
			$logo.attr('src', $logo.data('inverse'));
		} else {
			if ($(this).scrollTop() > 1 && $(this).scrollTop()!==$(document).height()-$(window).height()) {
				$('#request').addClass('request--bg');
			} else {
				$('#request').removeClass('request--bg');
			}
		}
		// tabs
		if (wWidth <= 768) {
			$("#tabs").tabs();
		}

	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});
	// $('#back-to-top').on('click', function (ev) {
    //     $('#back-to-top').removeClass('on');

    //     $('html,body').animate({scrollTop: 0}, 'slow');

    //     return false;
    // });
})(jQuery);


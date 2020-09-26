"use strict";
(function () {

	// VARIABLES
	const timeline = document.querySelector(".timeline ol"),
		elH = document.querySelectorAll(".timeline li > div"),
		arrows = document.querySelectorAll(".timeline .arrows .arrow"),
		arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
		arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
		firstItem = document.querySelector(".timeline li:first-child"),
		lastItem = document.querySelector(".timeline li:last-child"),
		xScrolling = 300,
		disabledClass = "disabled";

	// START
	window.addEventListener("load", init);

	function init() {
		setEqualHeights(elH);
		animateTl(xScrolling, arrows, timeline);
		// setSwipeFn(timeline, arrowPrev, arrowNext);
		setKeyboardFn(arrowPrev, arrowNext);
	}

	// SET EQUAL HEIGHTS
	function setEqualHeights(el) {
		let counter = 0;
		for (let i = 0; i < el.length; i++) {
			const singleHeight = el[i].offsetHeight;

			if (counter < singleHeight) {
				counter = singleHeight;
			}
		}

		for (let i = 0; i < el.length; i++) {
			el[i].style.height = `${counter}px`;
		}
	}

	// CHECK IF AN ELEMENT IS IN VIEWPORT
	// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	// SET STATE OF PREV/NEXT ARROWS
	function setBtnState(el, flag = true) {
		if (flag) {
			el.classList.add(disabledClass);
		} else {
			if (el.classList.contains(disabledClass)) {
				el.classList.remove(disabledClass);
			}
			el.disabled = false;
		}
	}

	// ANIMATE TIMELINE
	function animateTl(scrolling, el, tl) {
		let counter = 0;
		for (let i = 0; i < el.length; i++) {
			el[i].addEventListener("click", function () {
				if (!arrowPrev.disabled) {
					arrowPrev.disabled = true;
				}
				if (!arrowNext.disabled) {
					arrowNext.disabled = true;
				}
				const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
				if (counter === 0) {
					tl.style.transform = `translateX(-${scrolling}px)`;
				} else {
					const tlStyle = getComputedStyle(tl);
					// add more browser prefixes if needed here
					const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
					const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
					tl.style.transform = `translateX(${values}px)`;
				}

				setTimeout(() => {
					isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
					isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
				}, 1100);

				counter++;
			});
		}
	}

	// ADD SWIPE SUPPORT FOR TOUCH DEVICES
	// function setSwipeFn(tl, prev, next) {
	// 	const hammer = new Hammer(tl);
	// 	hammer.on("swipeleft", () => next.click());
	// 	hammer.on("swiperight", () => prev.click());
	// }

	// ADD BASIC KEYBOARD FUNCTIONALITY
	function setKeyboardFn(prev, next) {
		document.addEventListener("keydown", (e) => {
			if ((e.which === 37) || (e.which === 39)) {
				const timelineOfTop = timeline.offsetTop;
				const y = window.pageYOffset;
				if (timelineOfTop !== y) {
					window.scrollTo(0, timelineOfTop);
				}
				if (e.which === 37) {
					prev.click();
				} else if (e.which === 39) {
					next.click();
				}
			}
		});
	}

})();


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
	// $(window).on("scroll", function() {
	// 	var wScroll = $(this).scrollTop();
	// 	var doc = $('#svg').getSVGDocument();
	// 	var paths = doc.querySelectorAll("path");
	// 	if (wScroll > 1) {
	// 		for (let i = 0; i < paths.length; ++i) {
	// 			paths[i].setAttribute('style', 'fill:#AC252B !important');
	// 		}
	// 		console.log(paths);
	// 	} else {
	// 		for (let i = 0; i < paths.length; ++i) {
	// 			paths[i].setAttribute('style', 'fill:#ffffff !important');
	// 		}
	// 	}
		
	// });


	$(window).on('scroll load resize', function() {
		var wScroll = $(this).scrollTop();

		if (wScroll > 1) {
			$('#nav').addClass('fixed-nav');

			$('.logo__link img').attr('src', 'img/svg/home/logo-red.svg');
			// $img.attr('src', $img.data('logo-red'));

			if ($('body').hasClass('is-home') == true) {
				// $('#logo').addClass('logo__link--red');
			}
			$('#request').addClass('request--bg');
		} else {
			$('.logo__link img').attr('src', 'img/svg/home/logo-white.svg');

			$('#nav').removeClass('fixed-nav');
			// $('#logo').removeClass('logo__link--red');
			$('#request').removeClass('request--bg');
			
		}
		if ($('body').hasClass('not-is-home') == true) {
			$('.logo__link img').attr('src', 'img/svg/home/logo-red.svg');
		}

		// tabs
		var wWidth = $(this).width();

		var sld = function() {
			if (wWidth < 769) {
				$("#tabs").tabs();
			}
		}

		$(window).resize(sld);
	});


})(jQuery);


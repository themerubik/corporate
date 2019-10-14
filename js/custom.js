(function ($) {
	"use strict"

	/* Offset start */
	var html_body = $('html, body'),
		nav = $('header'),
		navOffset = nav.offset().top,
		$window = $(window);
	/* offset ends */

	$('header nav a').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 65
				}, 1500);
				return false;
			}
		}
	});
	//navbar fixed js here   
	$window.on('scroll', function () {

		var scrollPos = $window.scrollTop();

		if (scrollPos > navOffset) {
			$('header').addClass('navbar-fixed');
		} else {
			$('header').removeClass('navbar-fixed');
		}

	});

	//scrollspy menu
	$('body').scrollspy({
		target: '#navbarSupportedContent',
		offset: 80
	});


	//for scroll bottom to top js here
	$('.scroll-top').on('click', function () {
		html_body.animate({
			scrollTop: 0
		}, 800);
	});
	$(window).on('scroll resize', function () {
		var bodyscroll = $(this).scrollTop();
		var scrolloffset = 300;
		if (bodyscroll >= scrolloffset) {
			$('.scroll-top').fadeIn(500);
		} else {
			$('.scroll-top').fadeOut(500);
		}
	});

	//bannar slider here
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	// Service Slider
	$('.service-slide').slick({
		infinite: true,
		autoplay: true,
		arrows: false,
		dots: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,

				}
            },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
            }
        ]
	});

	//    price tab js here
	$('.two').click(function () {
		$('.second_slide').css({
			'opacity': '1',
			'z-index': '5',
			'transition': '0.5s'
		});
		$('.first_slide').css({
			'opacity': '0',
			'transition': '0.5s'
		});
	});
	$('.one').click(function () {
		$('.second_slide').css({
			'opacity': '0',
			'z-index': '-1',
			'transition': '0.5s'
		});
		$('.first_slide').css({
			'opacity': '1',
			'transition': '0.5s'
		});
	});
	$('ul li.two').on('click', function () {
		$('ul li.one').removeClass('active');
		$(this).addClass('active');
	});
	$('ul li.one').on('click', function () {
		$('ul li.two').removeClass('active');
		$(this).addClass('active');
	});

	// test Slider large device
	$('.test-slide').slick({
		infinite: true,
		autoplay: true,
		arrows: false,
		dots: true,
		speed: 300,
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,

				}
            },
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: 0,
				}
            },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: 0,
				}
            }
        ]
	});
	// test slider all devices
	$('.test-slide-mob').slick({
		infinite: true,
		autoplay: true,
		arrows: false,
		dots: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,

				}
            },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,

				}
            },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
            },
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
            }
        ]
	});

	//price-box slider js
	$('.price-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.price-details',
		dots: false,
		centerMode: true,
		centerPadding: false,
		focusOnSelect: true,
		nextArrow: '',
		prevArrow: '<i class="fa fa-angle-left"></i>',
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 1
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
            },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 1
				}
            }
        ]
	});

	//prices details slide
	$('.price-details').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.price-slider'
	});

	//price-box slider js
	$('.price-slider-two').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.price-details-two',
		dots: false,
		centerMode: true,
		centerPadding: false,
		focusOnSelect: true,
		nextArrow: '',
		prevArrow: '<i class="fa fa-angle-left"></i>',
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
            },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 1
				}
            }
        ]
	});

	//prices details slide
	$('.price-details-two').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: '.price-slider-two'
	});

	//    venobox js here
	$('.venobox').venobox();

	// counter activation js here
	$('.counter').counterUp({
		delay: 20,
		time: 1500
	});

	//video background js here
	$("#bgndVideo").YTPlayer({
		showControls: false,
	});
	
	//animation js here
	new WOW().init();
	
	//all js ends here

})(jQuery);

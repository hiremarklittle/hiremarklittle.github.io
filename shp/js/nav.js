/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
	'use strict';
	
	//Create Functions
	function links(link, sect) {
		$(link).on('click', function () {
			if (sect !== 0) {
				if ($(window).width() >= 940) {
					$('html, body').animate({
						scrollTop: $(sect).offset().top - 40
					}, 1000);
				} else {
					$('html, body').animate({
						scrollTop: $(sect).offset().top + 1
					}, 1000);
				}
			} else {
				$('html, body').animate({
					scrollTop: 0
				}, 1000);
			}
		});
		return true;
	}
	
	function footerNav(link, open, close) {
		$('footer ' + link).on('click', function () {
			$(close).slideUp();
			$('#legal ' + open).slideToggle();
			
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$('footer *').removeClass('active');
				$(this).addClass('active');
			}
			
			$('html, body').animate({
				scrollTop: $('#legal').offset().top
			}, 1000);
		});
	}
	
	function mobileLegal(link, open) {
		$(link).on('click', function () {
			$(open).fadeIn();
		});
		
		$(link).siblings().on('click', function () {
			$(open).fadeOut();
		});
		
		$('#legal .closeBox').on('click', function () {
			$(open).fadeOut();
		});
	}
	
	function activeToggle(curr, sect) {
		$('.nav_page').removeClass('active');
		$(curr).addClass('active');
		document.title = sect + 'St^y Highly Positive';
		return true;
	}
	
	//Scroll Event
	$(document).on('scroll', function () {
			
		//Declare Variables
		var home = 0,
			how = $('#how').offset().top,
			mission = $('#mission').offset().top,
			about = $('#about').offset().top,
			preorder = $('#preorder').offset().top,
			signup = $('#signup').offset().top,
			answers = $('#answers').offset().top,
			winPos = $(window).scrollTop();

		how = how - ((mission - how) / 2);
		mission = mission - ((about - mission) / 2);
		about = about - ((preorder - about) / 2);
		preorder = preorder - ((signup - preorder) / 2);
		signup = signup - ((answers - signup) / 2);
		
		if (winPos >= 60) {
			$('#fixed_nav').slideDown();
		} else {
			$('#fixed_nav').slideUp();
		}
		
		if (winPos >= home && winPos < how) {
			activeToggle('.homeLink', '');
		} else if (winPos >= how && winPos < mission) {
			activeToggle('.howLink', 'How We Work | ');
		} else if (winPos >= mission && winPos < about) {
			activeToggle('.missionLink', 'The Mission | ');
		} else if (winPos >= about && winPos < preorder) {
			activeToggle('.aboutLink', 'About Us | ');
		} else if (winPos >= preorder && winPos < signup) {
			activeToggle('.preorderLink', 'Pre-Order | ');
		} else if (winPos >= signup && winPos < answers) {
			activeToggle('.signupLink', 'Sign Up | ');
		} else if (winPos >= answers) {
			activeToggle('.answersLink', 'Answers | ');
		} else {
			document.title = 'St^y Highly Positive';
		}
	});
	//End Scroll Event
	
	//Display Fixed Nav if >= 60 & width>=940
	if ($(window).scrollTop() >= 60) {
		$('#fixed_nav').show();
	}
	
	//Toggle Small Nav Menu
	$('#mobile_nav img').on('click', function () {
		$('#mobile_nav ul').toggle();
	});
	
	$('#mobile_nav ul li').on('click', function () {
		$('#mobile_nav ul').hide();
	});

	//Links and Buttons
	links('.homeLink', 0);
	links('#fixed_nav .nav_logo', 0);
	links('.howLink', '#how');
	links('#home img', '#how');
	links('.missionLink', '#mission');
	links('.aboutLink', '#about');
	links('.learnMore', '#about');
	links('.preorderLink', '#preorder');
	links('.preorder', '#preorder');
	links('.signupLink', '#signup');
	links('.answersLink', '#answers');
	footerNav('.shippingLink', '#shippingInfo', '#returnsPolicy, #termsConditions');
	footerNav('.returnsLink', '#returnsPolicy', '#shippingInfo, #termsConditions');
	footerNav('.termsLink', '#termsConditions', '#shippingInfo, #returnsPolicy');
	mobileLegal('#mobile_nav .shippingLink', '#shippingInfo');
	mobileLegal('#mobile_nav .returnsLink', '#returnsPolicy');
	mobileLegal('#mobile_nav .termsLink', '#termsConditions');
});
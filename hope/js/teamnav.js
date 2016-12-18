$(document).ready(function () {
	$('li').click(function () {
		$('li').removeClass('active');
		$(this).addClass('active');
		
		if ($('#therapistsLink').hasClass('active')) {
			$('article').removeClass('active');
			$('article#therapists').addClass('active');
		} else if ($('#leadershipLink').hasClass('active')) {
			$('article').removeClass('active');
			$('article#leadership').addClass('active');
		} else if ($('#affiliatesLink').hasClass('active')) {
			$('article').removeClass('active');
			$('article#affiliates').addClass('active');
		}
	});
});
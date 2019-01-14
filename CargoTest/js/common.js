// $('body').fadeOut();
$(document).ready(function() {
	$("body .slide").on('click', funcShow);
	$(".slide__active .slide-description").css({"display" : "block"})
});

function funcShow() {

	if($(this).hasClass('slide__inactive')) {

		$('body .slide').not($(this)).removeClass('slide__active').addClass('slide__inactive');
		$(".slide-description").fadeOut(500)
		$(this).removeClass('slide__inactive').addClass('slide__active');
		$(".slide-description", this).fadeIn(500)
	}
	
}


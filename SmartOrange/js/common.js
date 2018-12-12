$(document).ready(function() {

	function heightDetect() {
		$(".main-head").css("min-height", $(window).height());
		$(".slider").css("min-height", $(window).height());
	};
	heightDetect();

	$('#header-button').click(function() {
		if($(".modal-window").not(":visible")) {
			$(".modal-window").fadeIn(600);
		}
	})
	$('#button-close').click(function() {
		if($(".modal-window").is(":visible")) {
			$(".modal-window").fadeOut(600);
		}
	})

function startSlider() {
	var currentSlide = $('.slide.active');   // слайд з класом slide.active !!!поточний слайд
	var currentSlideIndex = $('.slide.active').index();		//індекс поточний слайду
	var nextSlideIndex = currentSlideIndex+1;		//індекс наступного слайду
	if(nextSlideIndex === 3) {nextSlideIndex = 0}
	var nextSlide = $('.slide').eq(nextSlideIndex);		//наступний слайд
	var lastSlide = ($('.slide:last').index());			//індекс останнього слайду


	currentSlide.fadeOut(1000);        
	currentSlide.removeClass('active');      

	if(nextSlide == lastSlide) {
		$('.slide').eq(0).fadeIn(1000); 
		$('.slide').eq(0).addClass('active');
	} else {
		nextSlide.fadeIn(1000);
		nextSlide.addClass('active');
	}
}

	
setInterval(startSlider, 7000);


$('.section-title').animated("fadeIn", "fadeOut");
$('.member:nth-child(1)').animated("bounceInLeft", "bounceOutLeft");
$('.member:nth-child(2)').animated("bounceIn", "bounceOut");
$('.member:nth-child(3)').animated("bounceInRight", "bounceOutRight");
$('.contacts-text').animated("bounceInLeft", "bounceOuLeft");
$('input[type="text"]').animated("bounceInRight", "bounceOutRight");
$('input[type="mail"]').animated("bounceInRight", "bounceOutRight");
$('textarea[name="text"]').animated("bounceInRight", "bounceOutRight");


});

$(window).on('load', function(){
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});


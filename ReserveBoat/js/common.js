$(document).ready(function() {
	function heightDetect() {
			$("header").css("min-height", $(window).height());
		};
	heightDetect();

	function cardHeight() {
			$(".card-container").css("height", $(".card-container").css('width'));
			$(".card-container-big").css("height", $(".card-container").css('width'));
		};
	cardHeight();


	$(window).resize(function() {
		heightDetect();
		cardHeight();
	})
		
})


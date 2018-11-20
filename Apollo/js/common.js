$(document).ready(function() {

	$(".toggle_menu, .menu_item").click(function() {
		$("#sandwich").toggleClass("active");
	})

	$(".toggle_menu").click(function() {
		if($(".header_menu").is(":visible")) {
			$(".header_menu").fadeOut(600);
		} else {
			$(".header_menu").fadeIn(600);
		}
	})



// ---------------------------SLIDER---------------------------------------

	var slides = document.querySelectorAll('.slider .slide');
	var currentSlide = 0;
	var sliderInterval = setInterval(goToSlide(currentSlide+1), 2000);
	var playing = true;
	var sliderButtonStop = document.querySelectorAll(".pause");
	var slider = document.querySelectorAll('.slider');

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = 'slide active';
	}
	function nextSlide() {
		goToSlide(currentSlide+1);
	}

	function stopPlaying() {
		sliderButtonStop[0].className ='slider-btn play';
		playing = true;
		clearInterval(sliderInterval);
	}

	function startPlaying() {
		sliderButtonStop[0].className ='slider-btn pause';
		playing = false;
		sliderInterval = setInterval(nextSlide, 2000);
	} 

	sliderButtonStop[0].onclick = function() {
		if(playing) {
			startPlaying();
		} else {
			stopPlaying();
		}
	}

	var sliderButtonNext = document.getElementById("next");
	var sliderButtonPrev = document.getElementById("prev");


	sliderButtonNext.onclick = function() {
		stopPlaying();
		goToSlide(currentSlide+1);
	}

	sliderButtonPrev.onclick = function() {
		stopPlaying();
		goToSlide(currentSlide-1);
	}

	startPlaying();


	$('.variable-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '60px',
	});


	function threeSlider() {

		$('.triple-slider .prev, .triple-slider .next').click(function() {

			var $this = $(this),
					curBack =   $('.triple-slider-main___block').find('.back'),
					posBack =   $('.triple-slider-main___block').children().index(curBack),
					curCurr =   $('.triple-slider-main___block').find('.current'),
					posCurr =   $('.triple-slider-main___block').children().index(curCurr),
					curFront =  $('.triple-slider-main___block').find('.front'),
					posFront =  $('.triple-slider-main___block').children().index(curFront),
					totalPics = $('.triple-slider-main___block').children().length;


			$('.triple-slider-main___block').addClass('swap');
			// console.log(curBack);
			// console.log(curCurr);
			// console.log(curFront);

			setTimeout(function(){
				
			if ($this.hasClass('next')){

				if (posFront < totalPics - 1 && posCurr < totalPics - 1 && posBack < totalPics - 1){
					$('.back').removeClass('back').next().addClass('back');
					$('.current').removeClass('current').next().addClass('current');
					$('.front').removeClass('front').next().addClass('front');

				}
				
				else {
					
					if (posFront === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.triple-slider-main___block li').removeClass('front').first().addClass('front');
					}
					
					else if (posCurr === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.triple-slider-main___block li').removeClass('current').first().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}
					
					else {
						$('.triple-slider-main___block li').removeClass('back').first().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}
					
				}
				
			}

			else {
				
				if (posBack !== 0 && posCurr !== 0 && posFront !== 0){
					$('.back').removeClass('back').prev().addClass('back');
					$('.current').removeClass('current').prev().addClass('current');
					$('.front').removeClass('front').prev().addClass('front');
				}
				
				else {
					
					if (posBack === 0){
						$('.triple-slider-main___block li').removeClass('back').last().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}
					
					else if (posCurr === 0){
						$('.back').removeClass('back').prev().addClass('back');
						$('.triple-slider-main___block li').removeClass('current').last().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}
					
					else {
						$('.back').removeClass('back').prev().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.triple-slider-main___block li').removeClass('front').last().addClass('front');
					}
					
				}
				
			}
			
			$('.triple-slider-main___block').removeClass('swap');
			
		}, 300);

		});
	
	}
threeSlider();
});

$(window).on('load', function(){
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
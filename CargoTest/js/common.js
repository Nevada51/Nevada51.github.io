// $('body').fadeOut();
$(document).ready(function() {
	$("body .slide").on('click', funcShow);					//вішаєм оборбник подій на кожну секцію меню
	$(".slide__active .slide-description").css({"display" : "block"})   //розготаєм опис активної секції при загрузці сторінки
});

function funcShow() {                                        //робота акордеон

	if($(this).hasClass('slide__inactive')) {				 //перевірка при натисканні на одну з секцій меню чи вона розгорнута (відміняєм повторну анімацію при натисканні на розгорнуту секцію)

		$('body .slide').not($(this)).removeClass('slide__active').addClass('slide__inactive');   //заміняєм клас розгорнутої секції на згорнутий 
		$(".slide-description").fadeOut(500);								 //анімація згортання опису секції
		$(this).removeClass('slide__inactive').addClass('slide__active');    //заміняєм клас згорнутої секції на розгорнутий 
		$(".slide-description", this).fadeIn(500);							 //анімація розгортання опису секції			

	}	
}

var button = document.getElementsByTagName("button"),				//кнопка що відкриває ПОП-АП
	popUp = document.getElementsByClassName("comments")[0],			//сам блок ПОП-АП
	allSlides = document.getElementsByClassName("slide"),			//масив секцій акордеона
	popUpTitle = document.getElementById("popUpTitle"),				//масив заголовків секцій акордеона
	closeButton = document.getElementsByClassName("close")[0],		//кнопка закриття ПОП-АП
	slideTitle;														//текст в ПОП-АП


function getCurrentSlide() {														//функція що вибирає розгорнутий слайд
	for(var i = 0; i < allSlides.length; i++){										//проходимся по всіх слайдах  
		if(allSlides[i].classList.contains('slide__active')){						//перевіряєм наявність класу що розгортає секцію меню
			slideTitle = allSlides[i].getElementsByTagName("h2")[0].innerHTML;		//записуєм заголовок активної секції
			console.log(slideTitle);
		}
	}
}

button[0].addEventListener("click", function() {    //додаєм функцію яка відкриватиме ПОП-АП
	popUp.className += ' visible';					//відкриваєм вікно
	getCurrentSlide();								//шукаєм активну секцію меню і запиуєм її заголовк
	popUpTitle.innerHTML = slideTitle;				//записуєм в поп-апі заголовок активної секції
	OffScroll();									//забороняєм вертикальну прокрутку 
})

closeButton.addEventListener("click", function() {   //додаєм функцію яка закриває ПОП-АП
	popUp.className = 'comments';					//закриваєм вікно
	$(window).unbind('scroll'); 					//даєм змогу вертикальної прокрутки
})

function OffScroll () {								//функція що забороняє вертикальну прокрутку
	var winScrollTop = $(window).scrollTop();
	$(window).bind('scroll',function () {
		$(window).scrollTop(winScrollTop);
});}

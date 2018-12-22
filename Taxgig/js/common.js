window.onload = function () {
	var button_open = document.querySelector(".open-button");
	var button_close = document.querySelector(".close-button");
	var menu_mobile = document.querySelector(".menu-hidden");

	button_open.addEventListener('click', function() {
		menu_mobile.classList.add('menu-hidden_show');
		button_open.classList.remove('show-btn');
		button_close.classList.add('show-btn');
	});
	button_close.addEventListener('click', function(){
		menu_mobile.classList.remove('menu-hidden_show');
		button_close.classList.remove('show-btn');
		button_open.classList.add('show-btn');
	});

	$(window).resize(function() {
		if ( $(window).width() < 768 ) {
			button_open.classList.remove('show-btn');
		}
	});

	var foter_list_items = document.getElementsByClassName("footer-items__buttons");  //список дивов скнопкаи

	for (var i = 0; i < foter_list_items.length; i++) {

		var foter_btn_open = foter_list_items[i].childNodes[1];   //вибираєм всі кнопки з плюсом
		var foter_btn_close = foter_list_items[i].childNodes[3];  //вибираєм всі кнопки з мінусом

		foter_btn_open.onclick = function(event) {   // вішаєм на кнопку обробник подій на кнопку відкрити

			var target = event.target;     //вказуєм контекст  (Делегирование событий)
			var parrent = target.parentElement.parentElement;  //вибираєм потрібний батьківський елмент конкретної кнопки
	
			parrent.classList.remove('footer-items__item_hidden');  //забираєм клас для приховування списку
			target.classList.add('footer-hidde-btn');               //приховуєм кнопку відкрити
			var show = target.nextSibling.nextSibling.classList.remove('footer-hidde-btn');    //показуєм кнопку закрити
		}

		foter_btn_close.onclick = function(event) {     // вішаєм на кнопку обробник подій на кнопку закрити

			var target = event.target;
			var parrent = target.parentElement.parentElement;  //вибираєм потрібний батьківський елмент конкретної кнопки

			parrent.classList.add('footer-items__item_hidden');  //забираєм клас для приховування списку
			target.classList.add('footer-hidde-btn');			 //приховуєм кнопку закрити
			var show = target.previousSibling.previousSibling.classList.remove('footer-hidde-btn');  //показуєм кнопку відкрити
		}
	}

}


	
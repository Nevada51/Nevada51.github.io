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

	window.addEventListener("resize", function(){
		if(window.innerWidth < 768){
			button_open.classList.remove('show-btn');
		}
	});

	var foter_list_items = document.getElementsByClassName("footer-items__buttons");  //список div з кнопкаи

	for (var i = 0; i < foter_list_items.length; i++) {

		var foter_btn_open = foter_list_items[i].firstElementChild;   //вибираєм всі кнопки з плюсом
		var foter_btn_close = foter_list_items[i].lastElementChild;  //вибираєм всі кнопки з мінусом

		foter_btn_open.onclick = function(event) {   // вішаєм на кнопку "відкрити" обробник подій

			var target = event.target;     //вказуєм контекст  (Делегирование событий)
			var parrent = target.parentElement.parentElement;  //вибираєм потрібний батьківський елмент конкретної кнопки
	
			parrent.classList.remove('footer-items__item_hidden');  //показуєм прихований списку
			target.classList.add('footer-hidde-btn');               //приховуєм кнопку відкрити
			target.nextElementSibling.classList.remove('footer-hidde-btn');    //показуєм кнопку закрити
		}

		foter_btn_close.onclick = function(event) {     // вішаєм на кнопку закрити обробник подій 

			var target = event.target;                   //вказуєм контекст  (Делегирование событий)
			var parrent = target.parentElement.parentElement;  //вибираєм потрібний батьківський елмент конкретної кнопки

			parrent.classList.add('footer-items__item_hidden');  //приховуєм список
			target.classList.add('footer-hidde-btn');			 //приховуєм кнопку закрити
			target.previousElementSibling.classList.remove('footer-hidde-btn');  //показуєм кнопку відкрити
		}
	}

}


	
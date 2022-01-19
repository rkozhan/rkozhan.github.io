const AllSwipers = document.querySelectorAll('.swiper');
if (AllSwipers.length) {
	AllSwipers.forEach(swiper => {
		const style = getComputedStyle(swiper.parentElement.parentElement);

		if (style.display == 'flex') {

			swiper.parentElement.style.minHeight = 0;
			swiper.parentElement.style.minWidth = 0;
		};
	});
}



//Инициализация (для нескольких слайдеров указать два селектора, первый как идентификатор):
let sliderParent = '.main-slider';
let mainSlider = new Swiper(`${sliderParent} .swiper`, {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

	// Направление:
	direction: 'vertical',

	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	//loop: true,

	// Количество дублирующих слайдов:
	//loopedSlides: 0,

	// Свободная прокрутка:
	//freeMode: true,

	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	//autoplay: {
	//	delay: 2000,
	//	stopOnLastSlide: false,
	//	disableOnInteraction: false
	//},

	// ЕСЛИ нужна pagination (точки):
	//HTML:
	//     <div class="swiper-pagination"></div>

	/*pagination: {
		// ---------------------указать элемент 
		//el: `${sliderParent} .swiper-pagination`,
		
		// ИЛИ bullets-------------------------
		//type: 'bullets',
		//clickable: true,

		// динамические bullets----------------
		//dynamicBullets: true,

		// кастомные bullets--------------------
		//renderBullet: function (index, className) {
		//	return `<span class="${className}">${index + 1}</span>`;
		//},
		
		// ИЛИ fractions	------------------------
		// type: 'fraction',

		// -----------------Кастомные:
		//renderFraction: function (currentClass, totalClass) {
		//return `Photo <span class="${currentClass}""></span> from <span class="${totalClass}"></span>`;
		//},
	
		// ИЛИ пргрессбар:
		//type: 'progressbar',
	
	},*/

	// ------------------------------------------------Навигационные кнопки-стрелки
	//HTML:
	//     <div class="swiper-button-prev"></div>
	//     <div class="swiper-button-next"></div>
	/*
	navigation: {
		prevEl: `${sliderParent} .swiper-button-prev`,
		nextEl: `${sliderParent} .swiper-button-next`,
	},
	*/
	//----------------------------------------------- Если нужен скроллбар
	//HTML 
	//    <div class="swiper-scrollbar"></div>)
	/*
	scrollbar: {
		el: `${sliderParent} .swiper-scrollbar`,
		draggable: true
	},
	*/

	// ---------------------------------------------Курсор-рука:
	//grabCursor: true,

	// ---------------------------------------------Переключение на слайд по которому клик:
	// slideToClickedSlide: true,

	// ---------------------------------------------Добавление адреса в адресной строке слайду:
	/*
	hashNavigation: {
		watchState: true,
	},
	*/

	// ---------------------------------------------Пееключение стрелками:
	/*
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	*/

	// --------------------------------------------Прокрутка колесиком:
	/*
	*/
	mousewheel: {
		eventsTarget: `${sliderParent} .swiper`
	},

	//-------------------------------------------- АВТОВЫСОТА (удобно с разным количеством текста):
	//autoHeight: true,

	// --------------------------------------------ОТСТУП между слайдами:
	//spaceBetween: 20,

	// --------------------------------------------КОЛИЧЕСТВО показанных слайдов (можно дробное число и auto):
	//slidesPerView: 1.2,

	// --------------------------------------------КОЛИЧЕСТВО пролистываемых слайдов:
	//slidesPerGroup: 3,

	// --------------------------------------------Первый активный слайд по центру:
	//centeredSlides: true,

	// --------------------------------------------Стартовый слайд:
	//initialSlide: 1,

	//---------------------------------------------Мультирядность (обязательно отключить автовысоту,|
	//-------------------------------------------------------------количество показанных слайдов 2 или больше)
	// СSS:
	//		.slider {
	//			height: 700px;
	//			.swiper-slide {
	//				height: calc((100% - 30px) / 2);
	//				overflow: hidden;
	//			}
	//		}
	//SlidesPerColumn: 2,

	// -------------------------------------------СКОРОСТЬ переключения (300 по умолчанию):
	//speed: 1000,

	// -------------------------------------------ЭФФЕКТЫ переключения: (slide по умолчанию):
	/*
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	*/

	/*
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},
	*/

	// Для куба ---- в стилях ограничить ширину слайдера 
	//	.slider { width: 500px;}

	/*
		effect: 'cube',
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowsScale: 0.94
		},
	*/

	/*
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 40,
		stretch: 50,
		slideShadows: true,
	},
	*/

	// --------------------------------------------АДАПТИВ:
	//	------------------------------Ширина экрана:
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	*/

},
);






//Инициализация (для нескольких слайдеров указать два селектора, первый как идентификатор):
sliderParent = '.new-slider';
let newSlider = new Swiper(`${sliderParent} .swiper`, {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

	// Направление:
	//direction: 'vertical',

	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	loop: true,

	// Количество дублирующих слайдов:
	//loopedSlides: 0,

	// Свободная прокрутка:
	//freeMode: true,

	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},

	// ЕСЛИ нужна pagination (точки):
	//HTML:
	//     <div class="swiper-pagination"></div>

	/*pagination: {
		// ---------------------указать элемент 
		//el: `${sliderParent} .swiper-pagination`,
		
		// ИЛИ bullets-------------------------
		//type: 'bullets',
		//clickable: true,

		// динамические bullets----------------
		//dynamicBullets: true,

		// кастомные bullets--------------------
		//renderBullet: function (index, className) {
		//	return `<span class="${className}">${index + 1}</span>`;
		//},
		
		// ИЛИ fractions	------------------------
		// type: 'fraction',

		// -----------------Кастомные:
		//renderFraction: function (currentClass, totalClass) {
		//return `Photo <span class="${currentClass}""></span> from <span class="${totalClass}"></span>`;
		//},
	
		// ИЛИ пргрессбар:
		//type: 'progressbar',
	
	},*/

	// ------------------------------------------------Навигационные кнопки-стрелки
	//HTML:
	//     <div class="swiper-button-prev"></div>
	//     <div class="swiper-button-next"></div>
	/*
	navigation: {
		prevEl: `${sliderParent} .swiper-button-prev`,
		nextEl: `${sliderParent} .swiper-button-next`,
	},
	*/
	//----------------------------------------------- Если нужен скроллбар
	//HTML 
	//    <div class="swiper-scrollbar"></div>)
	/*
	scrollbar: {
		el: `${sliderParent} .swiper-scrollbar`,
		draggable: true
	},
	*/

	// ---------------------------------------------Курсор-рука:
	//grabCursor: true,

	// ---------------------------------------------Переключение на слайд по которому клик:
	// slideToClickedSlide: true,

	// ---------------------------------------------Добавление адреса в адресной строке слайду:
	/*
	hashNavigation: {
		watchState: true,
	},
	*/

	// ---------------------------------------------Пееключение стрелками:
	/*
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	*/

	// --------------------------------------------Прокрутка колесиком:
	/*
	mousewheel: {
		eventsTarget: `${sliderParent} .swiper`
	},
	*/

	//-------------------------------------------- АВТОВЫСОТА (удобно с разным количеством текста):
	//autoHeight: true,

	// --------------------------------------------ОТСТУП между слайдами:
	//spaceBetween: 20,

	// --------------------------------------------КОЛИЧЕСТВО показанных слайдов (можно дробное число и auto):
	//slidesPerView: 1.2,

	// --------------------------------------------КОЛИЧЕСТВО пролистываемых слайдов:
	//slidesPerGroup: 3,

	// --------------------------------------------Первый активный слайд по центру:
	//centeredSlides: true,

	// --------------------------------------------Стартовый слайд:
	//initialSlide: 1,

	//---------------------------------------------Мультирядность (обязательно отключить автовысоту,|
	//-------------------------------------------------------------количество показанных слайдов 2 или больше)
	// СSS:
	//		.slider {
	//			height: 700px;
	//			.swiper-slide {
	//				height: calc((100% - 30px) / 2);
	//				overflow: hidden;
	//			}
	//		}
	//SlidesPerColumn: 2,

	// -------------------------------------------СКОРОСТЬ переключения (300 по умолчанию):
	//speed: 1000,

	// -------------------------------------------ЭФФЕКТЫ переключения: (slide по умолчанию):
	/*
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	*/

	/*
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},
	*/

	// Для куба ---- в стилях ограничить ширину слайдера 
	//	.slider { width: 500px;}

	/*
		effect: 'cube',
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowsScale: 0.94
		},
	*/

	/*
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 40,
		stretch: 50,
		slideShadows: true,
	},
	*/

	// --------------------------------------------АДАПТИВ:
	//	------------------------------Ширина экрана:
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	*/

},
);

slideOnHover(sliderParent, newSlider);


// Остановка автопрокрутки при наведении: -указать арументы вызова функции для отдельных слайдеров
// -------------------------------------------------------------------------------------------разместить внизу!

function slideOnHover(sliderParent, initVariable, delay = 3000) {
	const slider = document.querySelector(`${sliderParent} .swiper`);
	if (slider) {
		slider.addEventListener('mouseenter', function (e) {
			initVariable.autoplay.stop();
		});

		slider.addEventListener("mouseleave", function (e) {
			initVariable.params.autoplay.disableOnInteraction = false;
			initVariable.params.autoplay.delay = delay;
			initVariable.autoplay.start();
		});
	}
}

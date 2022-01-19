"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const portfolio = document.querySelector('.portfolio');

	if (portfolio) {
		portfolio.addEventListener('click', (e) => {
			if (e.target && e.target.closest('.portfolio__img')) {
				const url = e.target.src;
				//let id = getId(url);
				//createModal(id);
				createModal(getId(e.target.src));
				initPortfolioSlider();
			}
		});
	}

	function getId(url) {

		let index = url.search("/id/");
		let id = url.slice(index + 4);
		index = id.search('/');
		id = id.slice(0, index);
		console.log(id);
		return id;
	}



	const modal = document.createElement('div');
	modal.classList.add('portfolio-modal');
	document.body.prepend(modal);

	function createModal(id) {
		//const modal = document.createElement('div');
		//modal.classList.add('portfolio-modal');
		let slide, slides;
		slide = `
		<div class="portfolio-modal__slide swiper-slide">
			<div class="portfolio-modal__image">
				<source srcset="https://picsum.photos/id/${id}/2400/1600" type="image/jpeg"
			media="(min-width:1680px)">
				<source srcset="https://picsum.photos/id/${id}/1800/1200" type="image/jpeg"
			media="(min-width:1330px)">
				<source srcset="https://picsum.photos/id/${id}/1200/800" type="image/jpeg"
			media="(min-width:769px)">
				<source srcset="https://picsum.photos/id/${id}/750/500" type="image/jpeg"
			media="(min-width:481px)">
				<source srcset="https://picsum.photos/id/${id}/450/300" type="image/jpeg"
			media="(max-width:480px)">
				<img src="https://picsum.photos/id/${id}/1800/1200" alt="">
			</div>
			<div class="portfolio-modal__content">
				<div class="portfolio-modal__title">Photo ${id}</div>
				<div class="portfolio-modal__subtitle">Subtitle</div>
			</div>
		</div>
	`;
		slides = slide;
		id = 110;
		while (id < 120) {
			slide = `
			<div class="portfolio-modal__slide swiper-slide">
				<div class="portfolio-modal__image">
					<picture>
						<source srcset="https://picsum.photos/id/${id}/2400/1600" type="image/jpeg"
							media="(min-width:1680px)">
						<source srcset="https://picsum.photos/id/${id}/1800/1200" type="image/jpeg"
							media="(min-width:1330px)">
						<source srcset="https://picsum.photos/id/${id}/1200/800" type="image/jpeg"
							media="(min-width:769px)">
						<source srcset="https://picsum.photos/id/${id}/750/500" type="image/jpeg"
							media="(min-width:481px)">
						<source srcset="https://picsum.photos/id/${id}/450/300" type="image/jpeg"
							media="(max-width:480px)">
						<img src="https://picsum.photos/id/${id}/1800/1200" alt="">
					</picture>
				</div>
				<div class="portfolio-modal__content">
					<div class="portfolio-modal__title">Photo ${id}</div>
					<div class="portfolio-modal__subtitle">Subtitle</div>
				</div>
			</div>
		`;
			slides += slide;
			id++;
		}

		modal.innerHTML = `
							<div div class="portfolio-modal-slider" >
								<div class="portfolio-modal__swiper swiper">
									<div class=" swiper-wrapper">
										${slides}
										
									</div>
															<!-- If we need pagination
															<div class="swiper-pagination"></div>
															-->
															<!-- If we need navigation buttons
															<div class="swiper-button-prev"></div>
															<div class="swiper-button-next"></div>
															-->
															<!-- If we need scrollbar
															-->
															<div class="swiper-scrollbar"></div>
								</div>
							</div>
							<div class="portfolio-modal__close"><span></span></div>
			`;
		//document.body.prepend(modal);
		modal.classList.add('visible');
		document.body.classList.add('_lock');
		closeModal(modal);
	}

	function closeModal(modal) {
		const close = modal.querySelector('.portfolio-modal__close');
		close.addEventListener('click', deleteModal);
		function deleteModal() {
			modal.classList.remove('visible');
			document.body.classList.remove('_lock');
			setTimeout(() => {
				modal.innerHTML = '';
			}, 500);
			//modal.remove();
			close.removeEventListener('click', deleteModal);
		}
	}





});





//-------------------------------------------------
function initPortfolioSlider() {

	//Инициализация (для нескольких слайдеров указать два селектора, первый как идентификатор):
	const sliderTag = '.portfolio-modal-slider';
	let portfolioModalSlider = new Swiper(`${sliderTag} .swiper`, {
		// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

		// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
		loop: true,

		//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},

		// ЕСЛИ нужна pagination (точки):
		//HTML:
		//     <div class="swiper-pagination"></div>

		/*
		pagination: {
			// ---------------------указать элемент 
			el: `${sliderTag} .swiper-pagination`,
			
			// ИЛИ bullets-------------------------
			type: 'bullets',
			clickable: true,
			
		},
		*/

		//----------------------------------------------- Если нужен скроллбар
		//HTML 
		//    <div class="swiper-scrollbar"></div>)
		/*
		*/
		scrollbar: {
			el: `${sliderTag} .swiper-scrollbar`,
			draggable: false
		},

		// ---------------------------------------------Пееключение стрелками:

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},


		// --------------------------------------------Прокрутка колесиком:

		mousewheel: {
			eventsTarget: `${sliderTag} .swiper`
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
		speed: 500,

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
}
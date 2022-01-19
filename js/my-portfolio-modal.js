"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const portfolio = document.querySelector('.portfolio');

	if (portfolio) {
		portfolio.addEventListener('click', (e) => {
			if (e.target && e.target.closest('.portfolio__img')) {
				const url = e.target.src;
				createModal(getId(e.target.src));
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



	function createModal(id) {
		const modal = document.createElement('div');
		modal.classList.add('portfolio-modal');
		modal.innerHTML = `
			<div class="portfolio-modal__image">
				<picture>
					<source srcset="https://picsum.photos/id/${id}/2400/1600" type="image/jpeg"
						media="(min-width:1680px)">
					<source srcset="https://picsum.photos/id/${id}/1600/1200" type="image/jpeg"
						media="(min-width:1330px)">
					<source srcset="https://picsum.photos/id/${id}/1200/800" type="image/jpeg"
						media="(min-width:769px)">
					<source srcset="https://picsum.photos/id/${id}/800/600" type="image/jpeg"
						media="(min-width:481px)">
					<source srcset="https://picsum.photos/id/${id}/400/600" type="image/jpeg"
						media="(max-width:480px)">
					<img src="https://picsum.photos/id/${id}/1800/1200" alt="">
				</picture>
			</div>
			<div class="portfolio-modal__close"><span></span></div>
		`;
		document.body.prepend(modal);
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
			modal.remove();
			close.removeEventListener('click', deleteModal);
		}
	}





});


"use strict";


//----------------------------------------------hide header on scroll
function getScrollDirection() {
	const header = document.querySelector('.header'),
		arr = [];
	let start = 0,
		i = 0,
		finish = document.documentElement.scrollTop,
		down,
		direction;
	if (finish > 50) header.classList.add('_hiddenPC');
	document.addEventListener('scroll', () => {
		finish = document.documentElement.scrollTop;
		if (finish >= 30 && finish > start) {
			down = true;
		} else down = false;
		start = finish;
		i += 1;

		if (i == 5) {
			i = 0
			arr.unshift(down);
			arr.length = 3;
		}

		if (arr[0] && arr[1] && arr[2]) {
			header.classList.add('_hidden');
			header.classList.add('_hiddenPC');

		} else if ((!arr[0] && !arr[1] && !arr[2]) || finish < 50) {
			header.classList.remove('_hidden');
		}
		if (finish < 50) header.classList.remove('_hiddenPC');

	});
}
getScrollDirection();



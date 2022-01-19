"use strict";

const matrixStars = '1234567890-=_`!@#$%^&*()[]{}()[]{}()[]{}()[]{}"/?.>,<;:QWERTYUIOPASDFGHJKLZXCVBNM';

window.onload = function () {
	const preload = document.querySelector('._preload');

	preload.classList.add('_loaded');

	/*
	preload.classList.add('_hide');
	setTimeout(() => {
		preload.remove();
		document.body.classList.remove('_lock');
	}, 800);
	*/
	function makeStar() {

		const matrixStar = document.createElement('div');
		const matrix = preload.querySelector('.matrix');
		matrix.append(matrixStar);
		matrixStar.textContent = matrixStars[getR(0, matrixStars.length)];
		matrixStar.classList.add('matrix__star');

		//-----------------------------------------------------------event hover
		matrixStar.addEventListener('mouseenter', (e) => {
			showTarget(e.target);

		});

		matrixStar.addEventListener('mouseleave', (e) => {
			showHitTargets(hitCountArray);

		});

		//-------------------------------------------------------------
		setTimeout(() => {
			const direction = getR(1, 6);
			const rotation = getR(0, 1);

			if (direction === 1) {
				matrixStar.style.top = `${getR(0, 50)}%`;
				matrixStar.style.left = '-30%';
			} else if (direction === 2) {
				matrixStar.style.top = `${getR(0, 50)}%`;
				matrixStar.style.left = '130%';
			} else {
				matrixStar.style.top = '-30%';
				matrixStar.style.left = `${getR(0, 100)}%`;
			}
			//--------------------------------rotation
			if (rotation === 0) {
				matrixStar.style.transform = `scale(${getR(3, 16)}) rotate(${getR(0, 180)}deg)`;
			} else {
				matrixStar.style.transform = `scale(${getR(3, 16)}) rotate(-${getR(0, 180)}deg)`;
			}
			matrixStar.style.color = `rgb(${getR(0, 255)}, ${getR(0, 255)}, ${getR(0, 255)})`;
		}, 0);

		setTimeout(() => {
			matrixStar.remove();
		}, 10000);
	}
	let intervalID = setInterval(makeStar, getR(50, 100));
	//------------------------------------------------------------------------audio
	const audio = {
		enter: new Audio("sounds/hover.mp3"),
		//shot: new Audio("sounds/shot.mp3"),
		hit: new Audio("sounds/hit.mp3"),
		smash: new Audio("sounds/smash.mp3"),
		//locked: new Audio("sounds/locked4.mp3"),
	}

	Object.values(audio).forEach(sound => {
		sound.volume = 0.2;
		sound.autoplay = false;
	});


	//----------------------------------------------------------------btn
	const preloadButton = preload.querySelector('.preload__button');
	preloadButton.textContent = 'enter';
	preloadButton.addEventListener('mouseenter', (e) => {
		audio.enter.play();
	});
	preloadButton.addEventListener('click', (e) => {
		document.body.classList.add('_enter');
		clearInterval(intervalID);
		setTimeout(() => {
			preload.remove();
		}, 4000);
	});

	//--------------------------------------------------------------Fragmentate title
	const mainTitle = document.querySelector('.hello h1');
	fragmentate(mainTitle);


	//----------------------------------------------------------------counter
	const hitCount = document.createElement('div');
	preload.append(hitCount);
	hitCount.style = `
	position:fixed;
	top:20px;
	left:20px;
	color: rgb(0,255,255);
	z-index:100;

	`;

	const hitCountArray = [];


	//---------------------------------------------------------target targeted

	function showTarget(target) {
		const audio = new Audio("sounds/locked4.mp3");
		audio.play();
		//audio.locked.play();
		hitCount.style.opacity = 1;
		hitCount.innerHTML = `target: <span style="color: ${target.style.color}">${target.innerText}</span>`;
	}


	function showHitTargets(targetsArray) {
		hitCount.style.opacity = 0.4;
		if (targetsArray.length) {
			hitCount.innerHTML = `${targetsArray.length} hit: ${targetsArray.reverse().join(' ')}`;
		} else {
			hitCount.innerHTML = '';
		};
	}

	//-----------------------------------------------------------------shot
	document.addEventListener('click', (e) => {
		clickToStar(e);
	});

	function clickToStar(e) {
		if (!e.target.closest('.preload__button')) {
			laserShot(e.clientX, e.clientY);
			if (!e.target.closest('.matrix__star')) {
				//audio.shot.play();
				const audio = new Audio("sounds/shot.mp3");
				audio.volume = 0.1;
				audio.play();
			}
			else if (e.target.closest('.matrix__star')) {

				hitCountArray.push(`<span style="color: ${e.target.style.color}">${e.target.innerText}</span>`);
				showHitTargets(hitCountArray);
				const audio = new Audio("sounds/smash.mp3");
				const audio2 = new Audio("sounds/shot.mp3");
				audio2.play();
				audio.play();
				//audio.hit.play();
				//audio.smash.play();

				let i = 0;

				e.target.style.top = '130%';
				e.target.style.outline = 'none';
				let random = '';
				if (getR(0, 1)) random = '-';
				e.target.style.transform = `scale(16) rotate(${random}${getR(36, 71)}0deg)`; //rotateX(${getR(72, 107)}deg)
				e.target.style.transition = `top 1s cubic-bezier(.54,.4,.79,.4), left 3s cubic-bezier(0.58, 0.18, 1, 0.24),
			transform 1s ease`;

				e.target.addEventListener("transitionend", () => {
					//console.log('end');
				});
			}
		}
	}
}

function laserShot(x, y) {
	const laser = document.createElement('div');
	const rad = Math.atan((x - (window.innerWidth / 2)) / (window.innerHeight - y));

	document.body.prepend(laser);
	laser.style = `
position:fixed;
transform: rotate(${rad}rad);
transform-origin: top;
top:98%;
left:50%;
background-color: rgba(0,255,255,0.5);
z-index:100;
width:10px;
height:200px;
//border-radius: 50%;
transition: top 0.05s linear, left 0.05s linear;
`;
	setTimeout(() => {
		laser.style.top = y + 'px';
		laser.style.left = x + 'px';
	}, 50);
	laser.addEventListener("transitionend", () => {
		laser.remove();
	});
}

function getR(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}



function fragmentate(element) {
	const text = Array.from(element.textContent);
	element.textContent = '';
	text.forEach(symbol => {
		const span = document.createElement('span');
		span.innerText = symbol;
		element.append(span);
	});

}


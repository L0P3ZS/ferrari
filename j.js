const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let current = 0;

function reset() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('active');
	}
}

function startSlide() {
	reset();
	images[current].classList.add('active');
	current++;
	if (current === images.length) {
		current = 0;
	}
}

let slideInterval = setInterval(startSlide, 2000);
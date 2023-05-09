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

let slideInterval = setInterval(startSlide, 987);

const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
  boton.style.border = "2px solid blue";
  boton.style.backgroundColor = "transparent";
});
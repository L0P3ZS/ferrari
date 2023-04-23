// Selecciona los elementos del slider
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');

// Configura el índice inicial de la diapositiva
let slideIndex = 0;

// Función para mostrar la diapositiva actual y ocultar las demás
function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
  // Reinicia el índice de la diapositiva si llega al final
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  // Muestra la diapositiva actual
  showSlide();
  // Inicia la reproducción automática del video
  const video = slides[slideIndex].querySelector('video');
  video.play();
}

// Muestra la primera diapositiva
showSlide();
// Inicia la reproducción automática del primer video
const video = slides[0].querySelector('video');
video.play();
// Configura un temporizador para avanzar a la siguiente diapositiva después de 5 segundos
setInterval(nextSlide, 10000);
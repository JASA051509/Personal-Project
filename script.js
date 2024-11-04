let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(-${carouselWidth * currentSlide}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the carousel
showSlide(currentSlide);
// script.js

window.addEventListener('load', () => {
    document.querySelector('.banner').classList.add('visible');
});

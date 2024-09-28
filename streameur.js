let slideIndex = 0;
let slides = document.querySelectorAll('.streameur');
let totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Défilement automatique toutes les 7 secondes
setInterval(() => {
    moveSlide(1);
}, 7000);

// Affiche la première slide
showSlide(slideIndex);

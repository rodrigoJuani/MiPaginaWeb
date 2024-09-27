
/*Carrusel */
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img'); // Select all images
    const totalSlides = slides.length;

    // Ensure the index is within the bounds of the slides
    if (index >= totalSlides) {
        currentIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Loop back to the last slide
    } else {
        currentIndex = index; // Update current index
    }

    // Hide all slides and show the active one
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none'; // Show only the active slide
    });
}

// Initialize the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
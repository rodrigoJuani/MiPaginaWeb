
/*Carrusel */
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

// Función para desplazarse a la imagen anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Vuelve al final si está en la primera imagen
    }
    updateCarousel();
}

// Función para desplazarse a la siguiente imagen
function nextSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al principio si está en la última imagen
    }
    updateCarousel();
}

// Actualiza la posición del carrusel
function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}

// Escucha los eventos de los botones
document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);
/*Cuan es peq */
function enableSwipeForSmallScreens() {
    const carouselImages = document.querySelector('.carousel-images');
    let startX;
    let scrollLeft;

    if (window.matchMedia("(max-width: 768px)").matches) {
        // Activar la funcionalidad de deslizamiento solo en pantallas pequeñas
        carouselImages.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = carouselImages.scrollLeft;
        });

        carouselImages.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - startX;
            carouselImages.scrollLeft = scrollLeft - x;
        });
    }
}

// Llama a la función en el evento de carga de la página
window.addEventListener('load', enableSwipeForSmallScreens);

// Escuchar cambios de tamaño de la pantalla para activar/desactivar
window.addEventListener('resize', () => {
    enableSwipeForSmallScreens();
});

/*Menu pequeño */
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".tab-bar button");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Mostrar la barra de navegación solo en pantallas pequeñas
    const tabBar = document.querySelector('.tab-bar');
    function toggleNavBar() {
        if (window.innerWidth > 700) {
            tabBar.style.display = 'none'; // Oculta en pantallas grandes
        } else {
            tabBar.style.display = 'flex'; // Muestra en pantallas pequeñas
        }
    }

    window.addEventListener('resize', toggleNavBar); // Cambia la visibilidad en el cambio de tamaño
    toggleNavBar(); // Inicializa la visibilidad
});

/*Armadura*/




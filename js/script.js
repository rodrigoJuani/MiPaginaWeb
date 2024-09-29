
/*Carrusel */
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselImages = document.querySelector('.carousel-images');

prevButton.addEventListener('click', () => {
    carouselImages.scrollBy({
        top: 0,
        left: -window.innerWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carouselImages.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: 'smooth'
    });
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





/*Carrusel */
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Mueve el carrusel
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
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



const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const colorChangeMessage = document.getElementById("color-change-message");
const styleSwitcher = document.querySelector(".style-switcher");

// Muestra el mensaje al cargar la página
window.addEventListener("load", () => {
    colorChangeMessage.style.display = "block"; // Mostrar mensaje
    setTimeout(() => {
        colorChangeMessage.style.opacity = 1; // Mostrar con transición
    }, 0); // Retraso para permitir que se aplique el estilo de display
});
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");

    if (!styleSwitcher.classList.contains("open")) {
        colorChangeMessage.style.display = "block"; // Mostrar mensaje
        colorChangeMessage.style.opacity = 1; // Mostrar sin transición
    } else {
        colorChangeMessage.style.opacity = 0; // Ocultar el mensaje al abrir
        setTimeout(() => {
            colorChangeMessage.style.display = "none"; // Ocultar después de la transición
        }, 10); // Mantener este retraso si deseas una transición suave
    }
});


// Cuando se desplaza la pantalla, oculta el mensaje
window.addEventListener("scroll", () => {
    colorChangeMessage.style.opacity = 0; // Ocultar el mensaje al deslizar
    setTimeout(() => {
        colorChangeMessage.style.display = "none"; // Ocultar después de la transición
    }, 0); // Espera la duración de la transición
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*Noche en la pantalla */
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


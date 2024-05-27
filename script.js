//FORMULARIO
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreUsuario = urlParams.get('nombre');
    const nombreCorreo = urlParams.get('email');

    const elementoNombreUsuario = document.getElementById("nombreUsuario");
    const elementoCorreo = document.getElementById("nombreCorreo");
    if (elementoNombreUsuario) {
        elementoNombreUsuario.textContent = nombreUsuario;
    }
    if(elementoCorreo){
        elementoCorreo.textContent = nombreCorreo;
    }
});

function regresarForm(){
    location.href = "index.html";
}


//CARRUSEL CELU
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Inicializar el carrusel mostrando la primera imagen
showImage(currentIndex);


const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');


iconoMenu.addEventListener('click', (e) =>{
menu.classList.toggle('active');
document.body.classList.toggle('opacity');
iconoMenu.classList.toggle('opacidadmenu');
iconoMenu.classList.toggle('box-hamburguesa');

  

})
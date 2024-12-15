// Configura aquí la imagen que quieres mostrar
const showPngImage = true; // Cambia a true para mostrar la imagen PNG, false para la JPG

document.addEventListener('DOMContentLoaded', function() {
    const centralImage = document.getElementById('centralImage');
    
    if (showPngImage) {
        centralImage.src = './assets/nueva-imagen.png';
    } else {
        centralImage.src = './assets/800600.jpg';
    }
});


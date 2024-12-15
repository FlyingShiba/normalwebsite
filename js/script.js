// Configura aquí la imagen que quieres mostrar
const imageToShow = 'none'; // Opciones: 'jpg', 'png', o 'none'

document.addEventListener('DOMContentLoaded', function() {
    const centralImage = document.getElementById('centralImage');
    
    switch(imageToShow) {
        case 'jpg':
            centralImage.src = './assets/800600.jpg';
            centralImage.style.display = 'block';
            break;
        case 'png':
            centralImage.src = './assets/nueva-imagen.png';
            centralImage.style.display = 'block';
            break;
        case 'none':
            centralImage.style.display = 'none';
            break;
        default:
            console.error('Opción de imagen no válida');
            centralImage.style.display = 'none';
    }
});


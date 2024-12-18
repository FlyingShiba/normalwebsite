// Configura aquí el medio que quieres mostrar
const mediaToShow = 'jpg'; // Opciones: 'jpg', 'png', 'video', o 'none'

document.addEventListener('DOMContentLoaded', function() {
    const centralContent = document.querySelector('.central-content');
    const centralImage = document.getElementById('centralImage');
    const centralVideo = document.getElementById('centralVideo');
    
    function updateMedia(type) {
        switch(type) {
            case 'jpg':
                centralContent.style.backgroundImage = "url('./assets/800600.jpg')";
                centralImage.style.display = 'none';
                centralVideo.style.display = 'none';
                break;
            case 'png':
                centralContent.style.backgroundImage = "none";
                centralImage.src = './assets/nueva-imagen.png';
                centralImage.style.display = 'block';
                centralVideo.style.display = 'none';
                break;
            case 'video':
                centralContent.style.backgroundImage = "none";
                centralImage.style.display = 'none';
                centralVideo.style.display = 'block';
                centralVideo.play();
                break;
            case 'none':
                centralContent.style.backgroundImage = "none";
                centralImage.style.display = 'none';
                centralVideo.style.display = 'none';
                break;
            default:
                console.error('Opción de medio no válida');
        }
    }

    updateMedia(mediaToShow);
});


document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('centralImage');
    const video = document.getElementById('centralVideo');

    // Función para cambiar entre imagen y video
    function toggleMediaType(showVideo) {
        if (showVideo) {
            image.style.display = 'none';
            video.style.display = 'block';
            video.play();
        } else {
            video.style.display = 'none';
            image.style.display = 'block';
            video.pause();
        }
    }

    // Función para cambiar la fuente de la imagen
    function changeImage(newSrc) {
        image.src = newSrc;
    }

    // Función para cambiar la fuente del video
    function changeVideo(newSrc) {
        video.innerHTML = `<source src="${newSrc}" type="video/mp4">`;
        video.load();
    }
	function changeImage('./assets/nueva-imagen.png');

    // Ejemplo de uso:
    // toggleMediaType(true); // Mostrar video
    // toggleMediaType(false); // Mostrar imagen
    // changeImage('./assets/nueva-imagen.png'); // Cambiar a una nueva imagen PNG
    // changeImage('./assets/otra-imagen.jpg'); // Cambiar a una nueva imagen JPG
    // changeVideo('./assets/nuevo-video.mp4'); // Cambiar a un nuevo video
});


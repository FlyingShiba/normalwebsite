// Configura aquí el medio que quieres mostrar
const mediaToShow = 'jpg'; // Opciones: 'jpg', 'png', 'gif', 'video', o 'none'

document.addEventListener('DOMContentLoaded', function() {
    const centralContent = document.querySelector('.central-content');
    const centralImage = document.getElementById('centralImage');
    const centralVideo = document.getElementById('centralVideo');
    
    function updateMedia(type) {
        switch(type) {
            case 'jpg':
                centralContent.style.backgroundImage = "url('./assets/background800x600.jpg')";
                centralImage.style.display = 'none';
                centralVideo.style.display = 'none';
                break;
            case 'png':
                centralContent.style.backgroundImage = "none";
                centralImage.src = './assets/nueva-imagen.png';
                centralImage.style.display = 'block';
                centralVideo.style.display = 'none';
                break;
            case 'gif':
                centralContent.style.backgroundImage = "url('./assets/background800x600.gif')";
                centralImage.style.display = 'none';
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

    // Audio player functionality
    const audioPlayer = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const volumeControl = document.getElementById('volumeControl');

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;
    });
});
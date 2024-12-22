document.addEventListener('DOMContentLoaded', function() {
    const centralImage = document.getElementById('centralImage');
    const centralVideo = document.getElementById('centralVideo');

    centralImage.addEventListener('click', function() {
        centralImage.style.display = 'none';
        centralVideo.style.display = 'block';
        centralVideo.play();
    });

    centralVideo.addEventListener('ended', function() {
        centralVideo.style.display = 'none';
        centralImage.style.display = 'block';
    });

    // New audio player functionality
    const audioPlayer = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});

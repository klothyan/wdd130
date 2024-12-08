// Map image IDs to their respective audio file paths
const audioMap = {
    verecundia: ""
};

// Add click event listeners
const images = document.querySelectorAll('.image-container img');
let currentAudio; // To keep track of the currently playing audio

images.forEach(image => {
    image.addEventListener('click', () => {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play the audio associated with the clicked image
        const audioSrc = audioMap[image.id];
        if (audioSrc) {
            currentAudio = new Audio(audioSrc);
            currentAudio.play();
        }
    });
});
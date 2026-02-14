const startDate = new Date("2025-05-22T00:00:00").getTime();
const bgVideo = document.querySelector(".bg-video");
if (bgVideo) {
    bgVideo.playbackRate = 0.3; // slower (1 = normal)
}

const daysElement = document.getElementById("days");
const timeElement = document.getElementById("time");

function updateTimer() {

    const now = new Date().getTime();
    let difference = now - startDate;

    if (difference < 0) difference = 0;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    // Smooth fade animation
    timeElement.style.opacity = 0;

    setTimeout(() => {
        daysElement.innerHTML = `It's been ${days} days💕`;

        timeElement.innerHTML =
            `${hours.toString().padStart(2,'0')} : ` +
            `${minutes.toString().padStart(2,'0')} : ` +
            `${seconds.toString().padStart(2,'0')}`;

        timeElement.style.opacity = 1;
    }, 150);
}

updateTimer();
setInterval(updateTimer, 1000);

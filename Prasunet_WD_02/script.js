let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let laps = [];
let idx = 0;
let previousLapTime = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");
const modeToggleButton = document.getElementById("modeToggle");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", recordLap);
modeToggleButton.addEventListener("click", toggleMode);

function start() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 10);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.innerHTML = "00:00:00.00";
    laps = [];
    lapsContainer.innerHTML = "";
    idx = 0;
    previousLapTime = 0;
}

function recordLap() {
    if (running) {
        idx++;
        const currentLapTime = difference;
        const lapDifference = currentLapTime - previousLapTime;
        const formattedCurrentLapTime = formatTime(currentLapTime);
        const formattedLapDifference = formatTime(lapDifference);
        laps.unshift({
            index: idx,
            difference: formattedLapDifference,
            time: formattedCurrentLapTime,
        });

        const lapElement = document.createElement("div");
        lapElement.style.opacity = "0";
        lapElement.innerHTML = `
            <span class="lap-index">${idx}</span>
            <span class="lap-difference">(+${formattedLapDifference})</span>
            <span class="lap-time">${formattedCurrentLapTime}</span>
        `;
        lapsContainer.prepend(lapElement);
        setTimeout(() => {
            lapElement.style.opacity = "1";
        }, 5);

        previousLapTime = currentLapTime;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const formattedTime = formatTime(difference);
    display.innerHTML = formattedTime;
}

function formatTime(ms) {
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return (
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds +
        "." +
        (milliseconds < 10 ? "0" : "") +
        milliseconds
    );
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modeToggleButton.textContent = "Light Mode";
    } else {
        modeToggleButton.textContent = "Dark Mode";
    }
}

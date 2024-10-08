const wcf = document.querySelector('#wcf');

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

let tempC = 10;
let speed = 5;
if (tempC <= 10 && speed > 4.8) {
    wcf.textContent = calculateWindChill(tempC, speed).toFixed(1);
} else {
    wcf.textContent = "N/A";
}

const lastModified = document.querySelector('#last-modified');
lastModified.textContent = document.lastModified;

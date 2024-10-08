// Select elements
const wcf = document.querySelector('#wcf');
const yearElement = document.querySelector('#year');
const lastModifiedElement = document.querySelector('#last-modified');

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Test data (can be replaced with actual data source)
let tempC = 10;
let speed = 5;

if (tempC <= 10 && speed > 4.8) {
    wcf.textContent = `${calculateWindChill(tempC, speed)}°C`;
} else {
    wcf.textContent = "N/A";
}

// Set current year in the footer
yearElement.textContent = new Date().getFullYear();

// Set the last modified date in the footer
lastModifiedElement.textContent = document.lastModified;

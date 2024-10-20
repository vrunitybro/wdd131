const yearElement = document.querySelector('#year');
const lastModifiedElement = document.querySelector('#last-modified');

document.addEventListener("DOMContentLoaded", function () {
    const products = [
      { id: "fc-1888", name: "flux capacitor" },
      { id: "fc-2050", name: "power laces" },
      { id: "fs-1987", name: "time circuits" },
      { id: "ac-2000", name: "low voltage reactor" },
      { id: "jj-1969", name: "warp equalizer" },
    ];
  
    const productSelect = document.getElementById("productName");

    // Populate the product options dynamically
    products.forEach((product) => {
        let option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Handle form submission
    const form = document.getElementById("reviewForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Simulate a thank you message
        document.body.innerHTML = `
            <h1>Thank you for your review!</h1>
            <p>Your review has been successfully submitted.</p>
        `;

        // Update and save the review count in localStorage
        let reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem("reviewCount", reviewCount);

        // Display the review count
        document.body.innerHTML += `<p>You have submitted ${reviewCount} reviews.</p>`;
    });

    // Display the last modified date in the footer
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.toLocaleDateString()} at ${lastModified.toLocaleTimeString()}`;
    lastModifiedElement.textContent = `Last modified: ${formattedDate}`;
});
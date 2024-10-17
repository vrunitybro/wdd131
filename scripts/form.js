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
  });
  
  if (window.location.pathname.includes("review.html")) {
    // Increase the counter when the review.html page is loaded
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);
  
    // Display the thank you message with the review count
    document.body.innerHTML = `
      <h1>Thank you for your review!</h1>
      <p>You have submitted ${reviewCount} reviews.</p>
    `;
  }

// Display the last modified date in the footer
document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
});
  
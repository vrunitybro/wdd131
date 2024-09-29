document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

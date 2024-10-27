function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
}

// Project data
const projects = [
    {
        title: "Mixed Reality Shooter",
        description: "An immersive mixed reality shooting game.",
        image: "images/mrs_oculus.png",
        playLink: "https://vrunity.itch.io/mrss",
        videoLink: "https://www.youtube.com/shorts/8Ds4u4n6Uc4"
    },
    {
        title: "VR Gallery",
        description: "Explore a VR museum.",
        image: "images/vrgallery.png",
        playLink: "https://vrunity.itch.io/vr-museum",
        videoLink: "https://www.youtube.com/watch?v=r9HY8bDRRfQ"
    },
    {
        title: "VR Apartment",
        description: "A VR tour on your favorite aparment.",
        image: "images/vrtour.png",
        playLink: "https://vrunity.itch.io/vr-house-tour",
        videoLink: "https://www.youtube.com/watch?v=ek7mkt21hOM"
    }
];

// Function to display projects with lazy loading
function displayProjects() {
    const cardContainer = document.getElementById('card-container');
    
    // Delayed display of projects with lazy loading
    setTimeout(() => {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <h3>${project.title}</h3>
                <img data-src="${project.image}" alt="${project.title} Image" class="lazy-load">
                <p>${project.description}</p>
                <a href="${project.videoLink}" target="_blank">Watch Video</a>
                <a href="${project.playLink}" target="_blank">Play Game</a>
            `;
            
            cardContainer.appendChild(card);
        });
        
        // After appending, initiate lazy loading
        lazyLoadImages();
    }, 3000);  // 3-second delay
}

// Function to lazy load images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    lazyImages.forEach(image => {
        const src = image.getAttribute('data-src');
        image.setAttribute('src', src);
        image.removeAttribute('data-src');
    });
}

// Call displayProjects on page load
document.addEventListener('DOMContentLoaded', displayProjects);

document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;

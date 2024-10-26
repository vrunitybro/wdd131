function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
}

// Project data
const projects = [
    {
        title: "Mixed Reality Shooter",
        description: "An immersive mixed reality shooting game.",
        image: "images/project1.png",
        playLink: "link_to_play_project1",
        videoLink: "link_to_youtube_video1"
    },
    {
        title: "Augmented Reality Positioning",
        description: "Description of Project 2.",
        image: "images/project2.png",
        playLink: "link_to_play_project2",
        videoLink: "link_to_youtube_video2"
    },
    {
        title: "Virtual Department Tour",
        description: "Description of Project 3.",
        image: "images/project3.png",
        playLink: "link_to_play_project3",
        videoLink: "link_to_youtube_video3"
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

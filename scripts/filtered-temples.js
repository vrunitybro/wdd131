document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  // Hamburger menu functionality
  hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      hamburger.textContent = "☰";
    } else {
      navMenu.style.display = "block";
      hamburger.textContent = "✖";
    }
  });

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
      templeName: "Idaho Falls",
      location: "Idaho Falls, Idaho",
      dedicated: "1945, September, 25",
      area: 8.28,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-53761-thumb.jpg"
    },

    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "1893, April, 24",
      area: 46,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-6816-thumb.jpg"
    },

    {
      templeName: "Sacramento California",
      location: "Rancho Cordova, California, USA",
      dedicated: "2006, September, 3",
      area: 8.28,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-53526-thumb.jpg"
    },
    

    // Add more temple objects here...
  ];

  const templeContainer = document.getElementById("templeContainer");

  const displayTemples = (templesArray) => {
    templeContainer.innerHTML = "";

    templesArray.forEach((temple) => {
      const card = document.createElement("div");
      card.className = "temple-card";

      const name = document.createElement("h1");
      name.textContent = temple.templeName;
      card.appendChild(name);

      const location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;
      card.appendChild(location);

      const dedicated = document.createElement("p");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      card.appendChild(dedicated);

      const area = document.createElement("p");
      area.textContent = `Total Area: ${temple.area} sq ft`;
      card.appendChild(area);

      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.loading = "lazy";
      card.appendChild(image);

      templeContainer.appendChild(card);
    });
  };

  const filterByOldTemples = () => {
    const filteredTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );
    displayTemples(filteredTemples);
  };

  const filterByNewTemples = () => {
    const filteredTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );
    displayTemples(filteredTemples);
  };

  const filterByLargeTemples = () => {
    const filteredTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(filteredTemples);
  };

  const filterBySmallTemples = () => {
    const filteredTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(filteredTemples);
  };

  document.querySelector("nav").addEventListener("click", (event) => {
    event.preventDefault();

    const filter = event.target.textContent.toLowerCase().trim();

    switch (filter) {
      case "old":
        filterByOldTemples();
        break;
      case "new":
        filterByNewTemples();
        break;
      case "large":
        filterByLargeTemples();
        break;
      case "small":
        filterBySmallTemples();
        break;
      case "home":
        displayTemples(temples);
        break;
      default:
        break;
    }
  });
  displayTemples(temples);
});
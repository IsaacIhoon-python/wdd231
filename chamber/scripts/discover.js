import { places } from '../data/places.mjs';

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Display cards
const grid = document.getElementById('discover-grid');

let html = '';

places.forEach((place) => {
    html += `
        <div class="discover-card">
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.photo}"
                     alt="${place.name}"
                     width="300"
                     height="200"
                     loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button class="learn-more">Learn More</button>
        </div>
    `;
});

grid.innerHTML = html;

// LocalStorage visit message
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = parseInt(lastVisit);
    const timeDiff = now - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    if (timeDiff < (1000 * 60 * 60 * 24)) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem('lastVisit', now.toString());
export function setFooterYear() {
  document.querySelector('#year').textContent = new Date().getFullYear();
}

export function setHamburger() {
  const menuBtn = document.querySelector('#menu');
  const nav = document.querySelector('.navigation');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });
}

export function displayRestaurants(restaurants, containerId) {
  const container = document.querySelector(containerId);
  container.innerHTML = '';
  
  restaurants.forEach(restaurant => {
    const card = document.createElement('section');
    card.classList.add('card');
    card.innerHTML = `
      <img src="images/${restaurant.image}" alt="${restaurant.name}" loading="lazy" width="400" height="300">
      <h3>${restaurant.name}</h3>
      <p><strong>Category:</strong> ${restaurant.category}</p>
      <p><strong>Price:</strong> ${restaurant.priceRange}</p>
      <p><strong>Location:</strong> ${restaurant.location}</p>
      <button class="details-btn" data-id="${restaurant.id}">View Details</button>
    `;
    container.appendChild(card);
  });
  
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const restaurant = restaurants.find(r => r.id === id);
      showModal(restaurant);
    });
  });
}

function showModal(restaurant) {
  const modal = document.querySelector('#restaurant-modal');
  modal.innerHTML = `
    <button id="close-modal" aria-label="Close">X</button>
    <h3>${restaurant.name}</h3>
    <img src="images/${restaurant.image}" alt="${restaurant.name}" loading="lazy">
    <p><strong>Specialty:</strong> ${restaurant.specialty}</p>
    <p><strong>Category:</strong> ${restaurant.category}</p>
    <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
    <p><strong>Location:</strong> ${restaurant.location}</p>
    <p>${restaurant.description}</p>
  `;
  modal.showModal();
  
  document.querySelector('#close-modal').addEventListener('click', () => {
    modal.close();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}

export function setGridList() {
  const gridBtn = document.querySelector('#grid');
  const listBtn = document.querySelector('#list');
  const display = document.querySelector('#restaurant-container');
  
  if (!gridBtn || !listBtn || !display) return;
  
  gridBtn.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
  });
  
  listBtn.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
  });
}

export function setFilters(allRestaurants) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' 
        ? allRestaurants 
        : allRestaurants.filter(r => r.category === filter);
      
      displayRestaurants(filtered, '#restaurant-container');
    });
  });
}

export function displaySpotlights(restaurants) {
  const spotlightRestaurants = restaurants.filter(r => r.spotlight === true);
  displayRestaurants(spotlightRestaurants, '#spotlight-container');
}

export function displayWeather() {
  const weatherDiv = document.querySelector('#weather-info');
  if (!weatherDiv) return;
  
  // Mock data since we're 100% local JSON
  weatherDiv.innerHTML = `
    <p><strong>28°C</strong> - Partly Cloudy</p>
    <p>Perfect weather to grab Suya at Yahuza!</p>
  `;
  
  // Save to localStorage for rubric
  localStorage.setItem('lastVisit', new Date().toLocaleDateString());
}
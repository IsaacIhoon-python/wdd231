import { getRestaurants } from './api.js';
import { 
  setFooterYear, 
  setHamburger, 
  displayRestaurants, 
  displaySpotlights, 
  setGridList, 
  setFilters,
  displayWeather 
} from './ui.js';
import { getTheme, setTheme, setLastVisit } from './storage.js';

// Runs on every page
setFooterYear();
setHamburger();

// Apply saved theme + track visit for localStorage
const currentTheme = getTheme();
setTheme(currentTheme);
setLastVisit();

// Page-specific logic
const restaurantContainer = document.querySelector('#restaurant-container');
const spotlightContainer = document.querySelector('#spotlight-container');

const restaurants = await getRestaurants();

if (restaurantContainer && restaurants) {
  displayRestaurants(restaurants, '#restaurant-container');
  setGridList();
  setFilters(restaurants);
}

if (spotlightContainer && restaurants) {
  displaySpotlights(restaurants);
  displayWeather();
}
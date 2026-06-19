// Get theme from localStorage or default to 'light'
export function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

// Save theme to localStorage
export function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.body.classList.toggle('dark', theme === 'dark');
}

// Get favorite restaurants array
export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

// Save favorites array
export function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Track last visit for form-action.js
export function setLastVisit() {
  localStorage.setItem('lastVisit', new Date().toISOString());
}
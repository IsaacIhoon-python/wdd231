export async function getRestaurants() {
  try {
    const response = await fetch('data/restaurants.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Could not load restaurant data:', error);
    const container = document.querySelector('#restaurant-container') || document.querySelector('#spotlight-container');
    if (container) {
      container.innerHTML = '<p class="error">Sorry, we could not load restaurants. Please try again later.</p>';
    }
  }
}
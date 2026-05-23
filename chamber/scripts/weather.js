// chamber/scripts/weather.js
const currentTemp = document.querySelector('#current-weather');
const forecast = document.querySelector('#weather-forecast');

const myKey = '874e9424678cad3fe530644cfd027d51';
const myLat = '9.0579';  // Abuja latitude
const myLong = '7.4951'; // Abuja longitude

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
  try {
    // Current Weather
    const response = await fetch(currentURL);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }

    // 3-Day Forecast
    const forecastResponse = await fetch(forecastURL);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayForecast(forecastData);
    } else {
      throw Error(await forecastResponse.text());
    }

  } catch (error) {
    console.log(error);
    currentTemp.innerHTML = '<p>Weather unavailable</p>';
    forecast.innerHTML = '<p>Forecast unavailable</p>';
  }
}

function displayCurrentWeather(data) {
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const descCapitalized = desc.charAt(0).toUpperCase() + desc.slice(1);

  currentTemp.innerHTML = `
    <p>${data.main.temp.toFixed(0)}&deg;C</p>
    <figure>
      <img src="${iconsrc}" alt="${descCapitalized}" width="50" height="50" loading="lazy">
      <figcaption>${descCapitalized}</figcaption>
    </figure>
  `;
}

function displayForecast(data) {
  // API returns 3-hour blocks for 5 days. We want 1 per day at 12:00:00
  const forecastDays = data.list.filter(item => item.dt_txt.includes('12:00:00'));
  const nextThreeDays = forecastDays.slice(0, 3);

  let forecastHTML = '';
  nextThreeDays.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    forecastHTML += `<p><strong>${dayName}:</strong> ${day.main.temp.toFixed(0)}&deg;C</p>`;
  });
  
  forecast.innerHTML = forecastHTML;
}

apiFetch();
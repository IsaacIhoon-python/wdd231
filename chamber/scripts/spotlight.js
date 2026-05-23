// chamber/scripts/spotlight.js
const spotlightURL = 'data/members.json';
const cards = document.querySelector('#spotlight-cards');

async function getSpotlightMembers() {
  try {
    const response = await fetch(spotlightURL);
    if (response.ok) {
      const data = await response.json();
      const membersArray = data.members || data;
      // only gold or silver members
      const qualified = membersArray.filter(member => 
        member.membership === 'gold' || member.membership === 'silver'
      );
    
      // Shuffle array and pick 2-3
      const shuffled = qualified.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      displaySpotlights(selected);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displaySpotlights(members) {
  cards.innerHTML = ''; 
  if (members.length === 0) {
    cards.innerHTML = '<p>No spotlight members found</p>';
    return;
  }
  members.forEach(member => {
    let card = document.createElement('section');
    card.classList.add('spotlight');
    
    let logo = document.createElement('img');
    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100');
    logo.setAttribute('height', '100');

    if (member.logoClass) {
        logo.classList.add(member.logoClass);
    }
    
    let name = document.createElement('h3');
    name.textContent = member.name;
    
    let address = document.createElement('p');
    address.textContent = member.address;
    
    let phone = document.createElement('p');
    phone.textContent = member.phone;
    
    let website = document.createElement('a');
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    website.textContent = 'Website';
    
    let level = document.createElement('p');
    level.classList.add('membership-level');
    level.textContent = `${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)} Member`;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(level);
    
    cards.appendChild(card);
  });
}

getSpotlightMembers();
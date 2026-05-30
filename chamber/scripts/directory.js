const url = 'data/members.json';
const directory = document.querySelector('#directory');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembers();

const displayMembers = (members) => {
    directory.innerHTML = '';
    
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let membership = document.createElement('p'); 
        let website = document.createElement('a');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        if (member.logoClass) {
            logo.classList.add(member.logoClass);
        }
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        
        membership.textContent = `Membership: ${member.membership.charAt(0).toUpperCase() + member.membership.slice(1)}`;
        membership.style.color = '#8B0000'; 
        membership.style.fontWeight = '600';
        
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Visit Website';

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);

        directory.appendChild(card);
    });
}

// Grid/List Toggle
gridBtn.addEventListener('click', () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    directory.classList.add('list');
    directory.classList.remove('grid');
});
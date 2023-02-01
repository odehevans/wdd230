const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

// Portrait of Heber J. Grant - 7th Latter-day President

const displayProphets = (prophets) => {
  prophets.forEach((prophet, idx) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthdate = document.createElement('p');
    const birthplace = document.createElement('p');
    const portrait = document.createElement('img');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${idx+1}${idx > 1 ? 'th' : idx == 1 ? 'nd' : 'st' } Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}

getProphetData();
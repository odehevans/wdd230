const url = 'data/members.json';
const memberCards = document.querySelector('#members');
const gridViewBtn = document.querySelector('.grid-view');
const listViewBtn = document.querySelector('.list-view');

const toggleView = () => {
  memberCards.classList.toggle('list');
  gridViewBtn.classList.toggle('active');
  listViewBtn.classList.toggle('active');
}

gridViewBtn.addEventListener('click', toggleView);
listViewBtn.addEventListener('click', toggleView);

const getMembersData = async () => {
  const response = await fetch(url);
  const members = await response.json();
  displayMembers(members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement('section');
    const companyName = document.createElement('h2');
    const level = document.createElement('h4');
    const contact = document.createElement('p');
    const address = document.createElement('p');
    const image = document.createElement('img');
    const details = document.createElement('div');
    companyName.textContent = member.name;
    level.textContent = member.level;
    contact.innerHTML = `Tel: ${member.phone} <br> Website: ${member.website}`;
    address.textContent = `Office Address: ${member.address}`;
    image.setAttribute('src', member.imageUrl);
    image.setAttribute('alt', member.name);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '240');
    details.appendChild(companyName);
    details.appendChild(level);
    details.appendChild(contact);
    details.appendChild(address);
    card.appendChild(details);
    card.appendChild(image);
    memberCards.appendChild(card);
  });
}

getMembersData();
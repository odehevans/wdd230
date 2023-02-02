const informationList = document.querySelector('#information ul');

const city = 'Benin City';
const apiKey = '99fedeb9ab4dbde1f00c1d5fe29d45d0';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
  const currentTemp = document.createElement('li');
  const weather = document.createElement('li');
  const weatherIcon = document.createElement('img');
  const weatherDesc = document.createElement('span');
  currentTemp.innerHTML = `The current temprature of <em>${city}</em> is <strong>${data.main.temp}&deg;F</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt',`${desc}`);
  weatherDesc.textContent = `${desc}`;
  weather.appendChild(weatherIcon);
  weather.appendChild(weatherDesc);
  informationList.appendChild(currentTemp);
  informationList.appendChild(weather);
}

apiFetch();

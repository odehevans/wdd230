const listOfWeather = document.querySelector('#weather ul');

const city = 'Benin City';
const apiKey = '99fedeb9ab4dbde1f00c1d5fe29d45d0';
const lat = 6.3330586;
const lon = 5.6221058;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      displayResults(result.list);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(weatherList) {
  for (let i = 0; i < weatherList.length; i+=10) {
    const data = weatherList[i];
    const weatherItem = document.createElement('li');
    const date = document.createElement('span');
    date.innerHTML = `<em>${new Date(data.dt_txt).toDateString()}</em>`;
    const weatherIcon = document.createElement('img');
    const weatherDesc = document.createElement('span');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = `${data.weather[0].description} | <strong>${data.main.temp}&deg;F</strong>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt',`${desc}`);
    weatherDesc.innerHTML = `${desc}`;
    weatherItem.appendChild(date);
    weatherItem.appendChild(weatherIcon);
    weatherItem.appendChild(weatherDesc);
    listOfWeather.appendChild(weatherItem);
  }  
}

apiFetch();

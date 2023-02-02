const fetchJSON = async () => {
  try {
    const response = await fetch('links.json');
    data = await response.json();
    for (week in data) {
      const links = data[week];
      document.querySelectorAll(`#${week} a`).forEach((a, index) => a.setAttribute('href', links[index]));
    }
  } catch (error) {
    console.log(error);
  }
}

fetchJSON();

const darkModeButton = document.querySelector("#darkMode");
const main = document.querySelector("main");
const DARK_MODE = "Dark Mode";
const LIGHT_MODE = "Light Mode";

darkModeButton.addEventListener('click', () => {
  main.classList.toggle("dark");
  document.body.classList.toggle("dark");
  if (darkModeButton.textContent === DARK_MODE) {
    darkModeButton.textContent = LIGHT_MODE;
  } else {
    darkModeButton.textContent = DARK_MODE;
  }
})

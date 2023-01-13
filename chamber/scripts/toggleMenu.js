const menuicon = document.querySelector("#menu-icon");
const menuitems = document.querySelectorAll(".menu-item");

menuicon.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
  if (menuicon.src.includes('menu-icon.svg')) {
    menuicon.setAttribute('src', 'images/close-icon.svg');
  } else {
    menuicon.setAttribute('src', 'images/menu-icon.svg')
  }
});
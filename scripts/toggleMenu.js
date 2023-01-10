const menuicon = document.querySelector("#menuIcon");
const menuitems = document.querySelectorAll(".menuItem");

menuicon.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
  if (menuicon.src.includes('menu-icon.svg')) {
    menuicon.setAttribute('src', 'images/cancel-icon.svg');
  } else {
    menuicon.setAttribute('src', 'images/menu-icon.svg')
  }
});
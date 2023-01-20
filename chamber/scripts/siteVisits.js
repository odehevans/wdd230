const visitsDisplay = document.querySelector(".site-visits");
let numVisits = Number(window.localStorage.getItem("site-visits")) || 1;
visitsDisplay.textContent = numVisits;
numVisits++;
localStorage.setItem("site-visits", numVisits);
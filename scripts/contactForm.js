const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const rating = document.querySelector("#rating");
const ratingInput = document.querySelector("#ratingInput");
const username1 = document.querySelector("#username1");
const username2 = document.querySelector("#username2");
const message = document.querySelector("#errorMessage em");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("#contactForm form");
const table = document.querySelector("#inputTable");
const tName = document.querySelector("td.name");
const tEmail = document.querySelector("td.email");
const tRating = document.querySelector("td.rating");
const tUsername = document.querySelector("td.username");

ratingInput.addEventListener('change', displayRatingValue);
ratingInput.addEventListener('input', displayRatingValue);
username2.addEventListener("focusout", validateUsername);
form.addEventListener("submit", submitForm)

function displayRatingValue() {
  rating.innerHTML = ratingInput.value;
}

function validateUsername() {
	if (username1.value !== username2.value) {
		message.textContent = "Username DO NOT MATCH!";
		username2.value = "";
		username1.focus();
    return false;
	}

  message.textContent = "";
  return true;
}

// console.log('table', table)

function submitForm(e) {
  // console.log('something shasssss')
  
  e.preventDefault();
  if (!validateUsername()) return;
  message.textContent = "";
  table.style.display = "block";
  tName.textContent = fullname.value;
  tEmail.textContent = email.value;
  tRating.textContent = ratingInput.value;
  tUsername.textContent = username1.value;
}



displayRatingValue();


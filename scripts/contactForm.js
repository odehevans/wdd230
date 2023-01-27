const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const rating = document.querySelector("#rating");
const ratingInput = document.querySelector("#ratingInput");
const username1 = document.querySelector("#username1");
const username2 = document.querySelector("#username2");
const message = document.querySelector("#errorMessage");
const submitBtn = document.querySelector(".submitBtn");
const table = document.querySelector("#inputTable");
const tName = document.querySelector("td.name");
const tEmail = document.querySelector("td.email");
const tRating = document.querySelector("td.rating");
const tUsername = document.querySelector("td.username");

ratingInput.addEventListener('change', displayRatingValue);
ratingInput.addEventListener('input', displayRatingValue);
username2.addEventListener("focusout", validateUsername);
submitBtn.addEventListener("click", submitForm);

function displayRatingValue() {
  rating.innerHTML = ratingInput.value;
}

function validateUsername() {
	if (username1.value !== username2.value) {
		message.textContent = "Username DO NOT MATCH!";
		username2.value = "";
		username1.focus();
    return;
	} else {
    message.textContent = "";
	}
}

// console.log('table', table)

function submitForm(e) {
  console.log('something shasssss')
  
  e.preventDefault();
  if (username1.value !== username2.value || !fullname.value || !email.value || rating.value) {
    console.log('Na wah ooooo')
    return message.textContent = "Please fill all required fields";
  }
  message.textContent = "";
  table.style.display = "block";
  tName.textContent = fullname.value;
  tEmail.textContent = email.value;
  tRating.textContent = ratingInput.value;
  tUsername.textContent = username1.value;
}

displayRatingValue();


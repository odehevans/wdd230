document.querySelector("#current-year").textContent = `${new Date().getFullYear()}`;
document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;
hiddenInput = document.querySelector("#current-hidden-date");
const currentDate = new Date();
if (hiddenInput) hiddenInput.value = `${currentDate.toLocaleString()}`;

const weekday = currentDate.getDay();
if ([1,2,3,4].includes(weekday)) {
  const banner = document.createElement('div');
  banner.innerHTML = "<em>Your are invited to attend a chamber of commerce meet and greet on Wednesday at 7:00 pm.</em>";
  banner.id = "page-banner";
  document.querySelector("footer").append(banner);
}
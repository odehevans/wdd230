document.querySelector("#current-year").textContent = `${new Date().getFullYear()}`;
document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;
hiddenInput = document.querySelector("#current-hidden-date");
if (hiddenInput) hiddenInput.value = `${new Date().toLocaleString()}`;
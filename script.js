const nameForm = document.querySelector("#name-form");

nameForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  const nameInput = document.querySelector("#name");

  localStorage.setItem("name", nameInput.value);

  nameInput.value = "";
});

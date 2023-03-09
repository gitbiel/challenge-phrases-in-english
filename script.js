const nameForm = document.querySelector("#name-form");

nameForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  const nameInput = document.querySelector("#name");

  localStorage.setItem("name", nameInput.value);

  nameInput.value = "";
});

let arr = [];

function addItem() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
  }

  let novoItem = document.getElementById("name").value;
  arr.push(novoItem);
  document.getElementById("name").value = "";
  localStorage.meuArr = JSON.stringify(arr);
}

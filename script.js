const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const phrasesTextarea = document.querySelector("#phrase");

  localStorage.setItem("phrase", phrasesTextarea.value);

  phrasesTextarea.value = "";
});

let arr = [];

function newPhrase() {
  if (localStorage.phraseBank) {
    arr = JSON.parse(localStorage.getItem("phraseBank"));
  }

  let newItem = document.getElementById("phrase").value.toLowerCase();

  const itemAlreadyExists = arr.find((item) => item == newItem);

  if (itemAlreadyExists) {
  } else {
    arr.push(newItem);
  }

  document.getElementById("phrase").value = "";
  localStorage.phraseBank = JSON.stringify(arr);
}
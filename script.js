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

  let novoItem = document.getElementById("name").value.toLowerCase();

  const itemJaExiste = arr.find((item) => item == novoItem);
  console.log("itemJaExiste", itemJaExiste);

  if (itemJaExiste) {
  } else {
    arr.push(novoItem);
  }

  document.getElementById("name").value = "";
  localStorage.meuArr = JSON.stringify(arr);
}

function showItems() {
  let resultDIV = document.getElementById("phrasesStayHere");
  resultDIV.innerHTML = "";
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
  }

  for (var i in arr) {
    let p = document.createElement("p");
    p.innerHTML = arr[i];
    resultDIV.append(p);
  }
}
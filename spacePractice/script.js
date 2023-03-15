function showPhrase() {
  const phrasesStayHere = document.getElementById("phrasesStayHere");
  phrasesStayHere.innerHTML = "";
  if (localStorage.phraseBank) {
    arr = JSON.parse(localStorage.getItem("phraseBank"));
  }

  for (var i in arr) {
    const item = document.createElement("li");
    item.classList.add("paragraph");
    item.innerHTML = arr[i];
    phrasesStayHere.append(item);
  }
}
showPhrase();
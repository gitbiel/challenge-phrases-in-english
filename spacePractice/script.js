function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  for (var i in arr) {
    const item = document.createElement("li");
    item.classList.add("paragraph");
    item.innerHTML = arr[i];
    phrasesStayHere.append(item);
  }
}
showPhrase();
console.log(arr);

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPhrase(list = []) {
  const max = list.length - 1;
  const index = randomIntFromInterval(0, max);
  return list[index]
}


function addNewPhrase(newPhrase = '') {
  // Check if (newPhrase) exists
  const firstLetter = newPhrase.charAt(0).toUpperCase();
  const restPhrase = newPhrase.substring(1)

  const item = document.createElement("li");
  item.classList.add("paragraph");
  item.innerHTML = `${firstLetter}${restPhrase}`
  phrasesStayHere.append(item);
}
showPhrase();
console.log(arr);

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)
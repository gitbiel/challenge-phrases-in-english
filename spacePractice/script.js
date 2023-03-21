function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPhrase(list = []) {
  const max = list.length - 1;
  const index = randomIntFromInterval(0, max);
  return list[index]
}   
}
showPhrase();
console.log(arr);

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPhrase(list = []) {
  const max = list.length - 1;
  const index = randomIntFromInterval(0, max);
  return index;
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

function showPhrases() {
  const phrasesStayHere = document.getElementById("phrasesStayHere");
  phrasesStayHere.innerHTML = "";

  const listPhrases = localStorage.getItem("phraseBank");
  console.log('typeof listPhrases =>', typeof listPhrases, listPhrases)

  const listPhrasesParsed = [];
  if (listPhrases) {
    // ... espalha o conteudo do array (spread)
    listPhrasesParsed.push(...JSON.parse(listPhrases));

    if (listPhrasesParsed.length > 3) {
      // Mostrar aleatório
      for (let index = 0; index < 3; index++) {
        const randomPhrase = generateRandomPhrase(listPhrasesParsed)
        addNewPhrase(randomPhrase)
      }     
      
    } else {
      for (let i = 0; i < listPhrasesParsed.length; i++) {
        addNewPhrase(listPhrasesParsed[i]);
      }
    }
  }
}

showPhrases();
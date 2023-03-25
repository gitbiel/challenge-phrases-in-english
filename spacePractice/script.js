function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPhrase(list = []) {
  const max = list.length - 1;
  const index = randomIntFromInterval(0, max);
  return index;
}

const phrasesStayHere = document.getElementById("phrasesStayHere");
function addNewPhrase(newPhrase = '') {
  // Check if (newPhrase) exists
  const firstLetter = newPhrase.charAt(0).toUpperCase();
  const restPhrase = newPhrase.substring(1)

  const item = document.createElement("li");
  item.classList.add("paragraph");
  item.innerHTML = `${firstLetter}${restPhrase}`
  phrasesStayHere.append(item);
}

function sortPhrases(listPhrases = []) {
  // lista de frases sorteadas
  // essa list serve para guardar as frases que vou mostrar na tela
  const sorted = [];
  for (let index = 0; index < 3; index++) {
    const indexSorteado = generateRandomPhrase(listPhrases)
    const fraseSorteada = listPhrases.splice(indexSorteado, 1);
    sorted.push(fraseSorteada[0]);
    console.log({fraseSorteada, size: listPhrases.length })
  }
  return sorted
}

function showPhrases() {
  phrasesStayHere.innerHTML = "";

  const listPhrases = localStorage.getItem("phraseBank");
  console.log('typeof listPhrases =>', typeof listPhrases, listPhrases)

  const listPhrasesParsed = [];
  if (listPhrases) {
    // ... espalha o conteudo do array (spread)
    listPhrasesParsed.push(...JSON.parse(listPhrases));

    if (listPhrasesParsed.length > 3) {
      // Mostrar aleatório
      const sorteados = sortPhrases(listPhrasesParsed)
      for (let index = 0; index < 3; index++) {
        
        addNewPhrase(sorteados[index])
      }     
      
    } else {
      for (const frase of listPhrasesParsed) {
        addNewPhrase(frase);
      }
    }
  }
}

showPhrases();
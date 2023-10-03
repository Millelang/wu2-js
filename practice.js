export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  let siffra = 0
  let siffra1 = 42
  let siffra2 = 5120
  let cool = true
  const max = 12
  console.log(max,siffra,siffra1,siffra2,cool)
  
}

function operators(element) {
  let nummer = 325
  let nummer2 =583
  let nummer3 =321
  let nummer4 =134
  let nummer5 = 215
  let nummer6 = 632
  let antal = 6
  nummer = 5
  let medelvarde = (nummer+nummer2+nummer3+nummer4+nummer5+nummer6)/antal
  console.log(medelvarde)
  if(nummer==nummer2) {
    console.log('bläh')
  }

  // kod för att visa vad du lärt dig om operatorer
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let siffr =0
  let varning = false
for(let x = 0; x<100;x++) {
  siffr = siffr+x
  console.log(siffr)
  
  if ( x==99) {
    varning = true
  }
}
if (varning = true) {
  alert('varning')
}
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  let dencoolalistan = []
  for (let x =0; x<=100; x++) {
    dencoolalistan.push(x)
  }
  console.log(dencoolalistan)
  
  
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  let sida = document.querySelector('#stor')
  console.log(sida)
  sida.addEventListener( "click", event =>{
    sida.textContent = 'ATTACK'
})
}

function domManipulation (element) {
  var bild= document.createElement("img");
bild.setAttribute('src', 'data:image/jpeg;base64,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');
bild.setAttribute('alt', 'yumyum');
bild.setAttribute('height', '200px');
bild.setAttribute('width', '200px');
document.body.appendChild(bild);
 

  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  
}
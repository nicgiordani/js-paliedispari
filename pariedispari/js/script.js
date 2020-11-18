// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var sceltaUtente = prompt("scegli pari o dispari");
console.log("hai scelto " + sceltaUtente);

var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log("il tuo numero è " + numeroUtente);

var numeroComputer = Math.floor((Math.random() * 5) + 1);
console.log("il numero del computer è " + numeroComputer);


function sommaNumeri(num1, num2) {
  var risultato = num1 + num2;
  return risultato;
}

var somma = sommaNumeri(numeroUtente, numeroComputer);
console.log("il totale è " + somma);

if (numeroUtente % 2 == 0 && somma % 2 == 0) {
    console.log("hai vinto");
  } else if (numeroUtente % 2 != 0 && somma % 2 == 0) {
    console.log("ha vinto il computer");
  } else if (numeroUtente % 2 == 0 && somma % 2 != 0) {
    console.log("ha vinto il computer");
  } else {
    console.log("hai vinto");
  }

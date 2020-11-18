// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("inserisci una parola");
console.log(parola);

const str = parola;
const newStr = str
  .split ("")
  .reverse()
  .join("");

console.log(newStr);

if (parola === newStr ) {
  console.log("La parola che hai inserito è palindroma");
} else {
  console.log("La parola che hai inserito non è palindroma");
}

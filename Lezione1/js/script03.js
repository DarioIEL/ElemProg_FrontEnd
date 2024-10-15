let miaStringa = "Il martedì pomeriggio abbiamo lezione in aula 2";

console.log(miaStringa.length); //conta i caratteri spazi inclusi

//anche le stringhe sono 0-based
console.log(miaStringa.charAt(0));//I
console.log(miaStringa.charAt(11)); //p
console.log(miaStringa.charCodeAt(0)); //codice ASCII 


//metodi per ricerca
console.log(miaStringa.indexOf("martedì")); //mi restituisce l'indice della parola martedì
console.log(miaStringa.indexOf("ciao")); //-1
console.log(miaStringa.includes("pomeriggio")); //true

console.log(miaStringa.indexOf("a"));//restituisce la prima occorrenza
console.log(miaStringa.lastIndexOf("a"));//ultima occorrenza

//metodi per il taglio
console.log(miaStringa.slice(5,22));

//metodi per la sostituizione
console.log(miaStringa.replace("martedì", "giovedì"));

//metodi split() e join()
//split taglia la stringa ogni volta che incontra il pattern e la trasforma in un array
console.log(miaStringa.split(""));

console.log(miaStringa.split(" "));

//Giochino: inverti la frase o la parola
let parola = "Immaginazione e lavoro";

console.log(parola.split("").reverse().join(""));

//Caso d'uso
let nomeFile = "certificazione di uso e manutenzione.pdf";
let nomeFileMod = nomeFile.split(" ").join("_");

console.log(nomeFileMod);

let nomeFileMod2 = nomeFile.replaceAll(" ", "_");

console.log(nomeFileMod2);

let estensioneFile = nomeFileMod.split(".")[nomeFileMod.split(".").length - 1];

console.log(estensioneFile);












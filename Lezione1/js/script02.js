//ARRAY - Strutture, contenitori di elementi simili (tipo identico, valore diverso) tra di loro
//               0        1        2        3        4        5          
let colori = ["bianco", "blu", "verde", "giallo", "rosso", "nero"];

//leggo il valore in una determinata posizione
console.log(colori[0]);//bianco
console.log(colori[4]);//rosso
console.log(colori[2]);//verde
console.log(colori);//verde

//voglio sapere quanti elementi ci sono nel mio array
console.log("Nel mio array ci sono: " + colori.length + " colori");

//voglio l'ultimo elemento senza conoscere la posizione
//                        6      - 1 = 5  
console.log(colori[colori.length - 1]); //nero

let coloreInesistente = colori[10];
console.log(coloreInesistente); //

//Stampo l'intero array
console.log(colori);

//Metodi per la manipolazione di array

//Aggiungo un elemento

colori.push("rosa");
colori.push("arancione");
colori.push("viola");

//ordino alfabeticamente i colori
colori.sort();

//inverto l'ordine
colori.reverse();

//elimino l'ultimo colore
colori.pop();

//verificare l'esistenza di un elemento
console.log( colori.includes("viola") );
console.log( colori.includes("magenta") );

//In che indice si trova quella stringa
console.log(colori.indexOf("rosso"));
console.log(colori.indexOf("magenta")); //-1

console.log(colori);

//Esempio 
let frutta = ["pesca", "mela", "kiwi", "mandarino"];
let verdure = ["spinaci", "broccoli", "cavolfiori", "lattuga"];

//Unire i due array

let fruttaEVerdura = frutta.concat(verdure);

fruttaEVerdura.sort();

console.log(fruttaEVerdura);

for(let i = 0; i < fruttaEVerdura.length; i++){
    console.log(fruttaEVerdura[i+1]);
}
// cerco una frutta in particolare

let fruttoPreferito = "kiwi";

if(fruttaEVerdura.includes(fruttoPreferito)){
    console.log("Sì, abbiamo il tuo frutto preferito, " + fruttoPreferito);
}else{
    console.log("Mi spiace, non abbiamo questo frutto");
}


//cosa non fare con gli array per quanto sia possibile
let arrayMisto = ["ciao",2,false,"22",12,42,"Dario"];
console.log(arrayMisto);



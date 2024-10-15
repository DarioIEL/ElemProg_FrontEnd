//Dichiaro una variabile
let oraDelGiorno;

//assegno il valore alla variabile
oraDelGiorno = 15;

//riassegno il valore
oraDelGiorno = 16;
oraDelGiorno = 17;
oraDelGiorno = 18;
oraDelGiorno = 19;
oraDelGiorno = 20;
oraDelGiorno = 21;

console.log(oraDelGiorno);


//Dichiaro e assegno sulla stessa riga
let numeroStudenti = 10;


let miaVariabile = "Ciao";
miaVariabile = "Arrivederci";
miaVariabile = "Buongiorno";

console.log(miaVariabile);

//Saltare da tipo in tipo nella riassegnazione di una variabile è possibile ma NON SI FA
miaVariabile = 42;

miaVariabile = true;

console.log(miaVariabile);


//CAST del dato
let miaEta = "35";

//Per trattare questa stringa come un numero devo eseguire il cast del dato
// let somma = miaEta + 1; //351
let somma = Number(miaEta) + 1 ;
console.log(somma);

//ESEMPIO
let num1 = "22";
let num2 = "34";

let somma2 = Number(num1) + Number(num2); //56
console.log(somma2);

let prod2 = num1 * num2; // 748
console.log(prod2);

let sott2 = num1 - num2;
console.log(sott2);

let div2 = num1 / num2;
console.log(div2);


let mioNome = "Dario";
let mioCognome = "Mennillo";

let nomeCompleto = mioNome + " " + mioCognome;

console.log(nomeCompleto);

//COSTANTI
const piGreco = 3.14;

// piGreco = 8; NON è possibile riassegnare

console.log(piGreco);


//BOOLEAN
let varB = true;

let pioggia = true;
pioggia = false;

 if(pioggia){
    console.log("Porto l'ombrello");
 }else{
    console.log("Non porto l'ombrello");
 }

let varBNum = 0;
console.log(Boolean(varBNum)); //false

if(varBNum){
    console.log("La var è vera");
}else{
    console.log("La var è falsa");
}
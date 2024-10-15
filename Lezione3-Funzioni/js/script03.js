//return

function faiUnCalcolo(){
    let num1 = 5;
    let num2 = 6;

    let somma = num1 + num2;

    return somma;
}

//quando ho un valore di return devo "raccoglierlo"
// console.log(faiUnCalcolo());
let risultato = faiUnCalcolo();
console.log(risultato);


//GEOMETRIA

function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

// console.log("L'area vale: " + calcolaArea(4,5));
let miaArea = calcolaArea(4,5);
console.log("L'area vale: " + miaArea);


function calcolaVolume(base, altezza, profond){
    let volume = calcolaArea(base, altezza) * profond; 
    return volume;
}

let base = 6;
let altezza = 7.8;
let profond = 6.9;

let mioVolume = calcolaVolume(base, altezza, profond);
console.log("Il volume vale: " + mioVolume);


function calcolaVolume2(area, profond){
    let volume = area * profond;
    return volume
}

//posso utilizzare una funzione come parametro di un'altra funzione
//funzioni di callback
console.log("Il volume vale: " + calcolaVolume2(calcolaArea(5,6), 7));


//Funzione anonima
//ES: foreach, addEventListener
// (base, altezza) => {
//     return base * altezza
// }

// function(base, altezza){
//     return base * altezza;
// }

let colori = ["bianco", "rosso", "blu"];

colori.forEach((col) =>{
    console.log(col);
})

// setInterval(function(){
//     console.log("Ciao " + new Date().getSeconds());
// }, 1000)

//CLOSURE - simulo l'incapsulamento
function primaFunz(){
    let mioNome = "Dario";

    function secondaFunz(){
        let mioCognome = "Mennillo";
        return mioNome + " " + mioCognome;
    }
    return secondaFunz();
}

console.log(primaFunz());

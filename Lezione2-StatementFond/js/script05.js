//Dato un set di 90 numeri estrai 6 numeri senza far avvenire la ripetizione dello stesso numero

//2 scelte: 1creare un array di 90 numeri; 2non creare un array di 90 numeri

let numeri = []; //Estratti
let numGiri = 0;

for(let i = 0 ; i < 10; i++){
    let numCasuale = Math.ceil(Math.random() * 90); //numero casuale da 1 a 90

    if(numeri.includes(numCasuale)){
        i--;
    }else{
        numeri.push(numCasuale);
    }

    numGiri++;
}

console.log(numeri);
console.log("Ho utilizzato " + numGiri + " giri");

//Stessa estrazione senza if

let setNumeri = [];

//con questo for vado a riempire il set di numeri
for(let i = 0; i<90; i++){
    setNumeri.push(i+1);
}
console.log(setNumeri);


let numeriEstratti=[];


for(let i= 0; i < 10; i++){
    let indiceCasuale = Math.ceil(Math.random() * setNumeri.length);
    
    numeriEstratti.push(setNumeri[indiceCasuale]);

    setNumeri.splice(indiceCasuale, 1);
}

console.log(numeriEstratti);




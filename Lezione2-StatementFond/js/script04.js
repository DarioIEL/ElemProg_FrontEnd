//Math.random() produce un numero random tra 0 e 1
let numRandom = Math.random() * 10;
console.log(numRandom);
console.log(Math.ceil(numRandom));


//MAth.ceil arrotonda all'intero maggiore
let numRand2 = Math.ceil(Math.random() * 10);
console.log(numRand2);


//Math.floor arrotonda all'intero inferiore
let numRand3 = Math.floor(Math.random()*10);
console.log(numRand3);


//Numero random tra 10 e 25
let min = 10;
let max = 25;
let numRand4 = Math.ceil((Math.random() * (max - min)) + min);
console.log(numRand4);


//Arrotondamento classico
let numArr = Math.round(5.21); //arrotonda per difetto
console.log(numArr);

let numArr2 = Math.round(5.61); //arrotonda per eccesso perché sono oltre 5.50
console.log(numArr2);





//Seleziono elementi
let primoEl = document.querySelector("#uno"); 
console.log(primoEl);

let h1 = document.querySelector("h1");
console.log(h1);

let ul = document.querySelector("ul");
console.log(ul);

//ATT: quando passo un nome tag al querySelector mi viene restiuita la prima occorrenza
let li = document.querySelector("li");
console.log(li);

let primoLi = document.querySelector("ul#listaSpesa li#tre");
console.log(primoLi);

let primoLibro = document.querySelector("#listaLibri li");
console.log(primoLibro);

let ultimoLibro = document.querySelector("#listaLibri li:last-child");
console.log(ultimoLibro);
console.log(typeof ultimoLibro);

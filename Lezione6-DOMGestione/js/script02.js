// ATT: il querySelectorAll crea una NOdelist, cioè un parente stretto degli array
let lis = document.querySelectorAll("li");
console.log(lis);

console.log(lis[5]);

lis.forEach(li => {
    console.log(li.textContent);
    
});

let lisSpesa = document.querySelectorAll("#listaSpesa li");
console.log(lisSpesa);

let lisLibri = document.querySelectorAll("#listaLibri li");
console.log(lisLibri);

let lisLibri2 = document.querySelectorAll("li.txtRed");
console.log(lisLibri2);


//Children -> HTMLCollection
let listaSpesa = document.querySelector("#listaSpesa");
let lisSpesa2 = listaSpesa.children;
console.log(lisSpesa2);

//...operatore spread
[...lisSpesa2].forEach(li=>{
    console.log(li);
})


//Da notare: Anche se l'elemento che recuperando è singolo comunque verrà inserito in una nodelist

let h1 = document.querySelectorAll("h1");
console.log(h1);


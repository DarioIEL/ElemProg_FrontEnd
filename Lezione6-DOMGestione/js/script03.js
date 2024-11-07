let lisSpesa = document.querySelectorAll("#listaSpesa li");

lisSpesa.forEach(li =>{
    li.setAttribute("class", "txtPurple");
})

//Voglio leggere il valore di un attributo
let h1 = document.querySelector("h1");
console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "txtRed txtUnder")
//per poter aggiungere una classe utilizzo la prop classList
h1.classList.add("txtUnder");

console.log(h1.classList); //classList produce un DOMTokenList, ovvero un oggetto simile agli array

h1.classList.remove("txtRed");
console.log( h1.classList.contains("txtRed") );




let aIL = document.querySelector("#linkIL");
aIL.setAttribute("href", "https://www.immaginazioneelavoro.it");


//Dark Mode
let btnDM = document.querySelector("#btnDM");

function applicaDM(){
    let body = document.querySelector("body");
    // body.setAttribute("class", "dark");
    
    // if(!body.getAttribute("class")){
    //     body.setAttribute("class", "dark")
    // }else{
    //     body.removeAttribute("class")
    // }

    body.classList.toggle("dark")
}

btnDM.addEventListener("click", applicaDM);
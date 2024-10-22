let btn = document.getElementById("btn"); //<button....
let demo = document.getElementById("demo");//<div id="demo"></div>

// function salutami(){
//     let saluto = "Ciao, Dario";
//     demo.innerHTML += saluto;
// }

// //RIchiamo la funzione SENZA le parentesi tonde
// btn.addEventListener("click", salutami);


// function salutami(){
//     let saluto = "Ciao, Dario";
//     return saluto;
// }

// btn.addEventListener("click", function(){
//     demo.innerHTML = "<h1>" + salutami() + "</h1>";
// })

function salutami(nome){
    let saluto = "Ciao " + nome;
    return saluto;
}

btn.addEventListener("click", function(){
    let nomeUtente = "Pippo";
    demo.innerHTML = "<h1>" + salutami(nomeUtente) + "</h1>";
})
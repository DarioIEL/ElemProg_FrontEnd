let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

// STEP 1
//creo la funzione da associare al pulsante
// function saluta(){
//     demo.innerHTML = "Ciao Dario";
// }

// //saluta senza () è una chiamata indiretta
// btn.addEventListener("click", saluta);


//STEP 2
//creo una funzione con parametri
function saluta(nome){
    demo.innerHTML = `Ciao ${nome}`;
}

//utilizzare una funz anonima mi permette di eseguire una funzione avente parametri
btn.addEventListener("click", function(){
    console.log("Mi trovo nella funzione anonima");
    let nomeUtente = document.querySelector("#nomeUtente").value;
    saluta(nomeUtente);
});

btn.addEventListener("dblclick", function(){
    document.querySelector("#nomeUtente").value = "";
    demo.innerHTML = "";
})

demo.addEventListener("mouseover", function(){
    demo.classList.add("txtBlue");
})

demo.addEventListener("mouseout", function(){
    demo.classList.remove("txtBlue");
})


//EVENTI TASTIERA
let frase = document.querySelector("#frase"); //input
let feed = document.querySelector("#feed");
let feed2 = document.querySelector("#feed2");

frase.addEventListener("input", () => {
    feed.textContent = "";
    feed.textContent = frase.value;
})

frase.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.target);
    console.log(event.code);

    feed2.textContent = "Stai digitando il seguente carattere " + event.key;

    //Se l'evento tastiera è Enter allora cliccca il pulsante sopra
    if(event.key == "Enter"){
        btn.click();
    }
})

document.addEventListener("keydown", function(event){
    console.log("Stai cliccando " + event.key + " nella pagina");
})
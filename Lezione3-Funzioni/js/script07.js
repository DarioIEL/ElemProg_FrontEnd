let btn1 = document.getElementById("btn1");

function salutaInConsole(){
    let numeroFortunato = Math.ceil(Math.random() * 100);
    console.log("Ciao Dario, questa è la console");
    console.log("Il tuo numero fortunato è: " + numeroFortunato);    
}

//ATT: la funzione nell'event listener viene inserita senza le parentesi tonde
btn1.addEventListener("click", salutaInConsole);

////////////-----------////////////////////
//Faccio la stessa identica cosa ma con una funzione anonima
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    let numeroFortunato = Math.ceil(Math.random() * 200);
    console.log("Ciao Anna");
    console.log("Oggi il tuo numero fortunato é: " + numeroFortunato);    
})

////////////////------------//////////////
//Metto insieme una funzione con parametri e un'anonima

let btn3 = document.getElementById("btn3");
let demo = document.getElementById("demo");

function salutaNome(nome, cognome){
    // let saluto = "Ciao " + nome + " " + cognome;
    let saluto = `Ciao ${nome} ${cognome}`;
    console.log(saluto);
    return saluto;    
}

function generaNumeroFortunato(){
    let numeroFortunato = Math.ceil(Math.random() * 100);
    return numeroFortunato;
}

btn3.addEventListener("click", function(){

    //recupero il valore del campo input dell'utente
    let mioNome = document.getElementById("mioNome").value;
    let mioCognome = document.getElementById("mioCognome").value;

    demo.innerHTML = salutaNome(mioNome, mioCognome) + ". Oggi il tuo numero fortunato " + generaNumeroFortunato();

    document.getElementById("mioNome").value = "";
    document.getElementById("mioCognome").value = "";

})
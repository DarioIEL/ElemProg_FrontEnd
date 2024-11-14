let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");

let mioForm = document.querySelector("#mioForm");

mioForm.addEventListener("submit", function(event){
    if(nome.value == "" || cognome.value == ""){
        event.preventDefault();
        event.stopPropagation();
        console.log("Stai dimenticando qualcosa"); 
    }else{
        console.log("Sto registrando " + nome.value + " " + cognome.value);
    }
})

mioForm.addEventListener("reset", function(){
    console.log("Hai pulito tutti i campi");
})
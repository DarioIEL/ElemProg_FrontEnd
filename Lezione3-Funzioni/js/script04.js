function saluta(){
    console.log("Ciao utente!");
}

//recupero il pulsante
let btn = document.getElementById("btn");

//con questo sistema aggancio la funzione all'evento onclick. La funzione non ha le parentesi tonde
// btn.onclick = saluta; //Anche questo è un modo vecchio

// btn.addEventListener("click", saluta);

//nell'eventListener posso anche inserire una funzione anonima
btn.addEventListener("click", function(){
    saluta();
    console.log("Ciao Dario");
});


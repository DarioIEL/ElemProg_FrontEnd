//Scopo del gioco
//clicco sul pulsante, parte una funzione che esegue una fetch. Stampo il contenuto del file nel div#demo

let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

function recuperaFile(){
    let pathFile = "./asset/mioTesto.txt";
    //Qui eseguo e strutturo la fetch
    //Se specifico solo l'URL di default il metodo che utilizza la mia fetch è il metodo GET
    fetch(pathFile)
    //Questo metodo vien eseguito quando la richiesta ha successo
    .then(response => {
        //il metodo .text() converte in un file di testo il contenuto del mio file
        return response.text();
    })
    //Questo metodo viene eseguito dopo che ho estratto il contenuto
    .then(data =>{
        demo.innerHTML = data
    })

}

btn.addEventListener("click", recuperaFile);
class User{
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;

        this.toString = function(){
            return `${this.nome} ${this.cognome}`;
        }
    }
}

let btnAdd = document.getElementById("btnAdd");
let nomeUser = document.getElementById("nomeUser"); //<input ...
let cognomeUser = document.getElementById("cognomeUser"); //<input type....
let listaIscritti = document.getElementById("listaIscritti"); //UL

let listaUtenti = [];

function aggiungiUser(){
    let nome = nomeUser.value;
    let cognome = cognomeUser.value;

    //creo l'oggetto (creo l'utente)
    let user = new User(nome, cognome);

    listaUtenti.push(user);


    //Pulisco i campi input
    nomeUser.value = "";
    cognomeUser.value = "";

    console.log(listaUtenti);
    
}

function stampaUtenti(){
    listaIscritti.innerHTML = "";
    
    listaUtenti.forEach(
        /**
         * @param {User} utente
         */
        utente=>{
        listaIscritti.innerHTML += `<li>${utente.toString()}</li>`;
    })
}

btnAdd.addEventListener("click", function(){
    aggiungiUser();
    stampaUtenti();
});


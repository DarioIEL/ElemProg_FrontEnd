let feedNome = document.querySelector("#feedNome");
let feedCognome = document.querySelector("#feedCognome");
let feedEmail = document.querySelector("#feedEmail");
let feedTel = document.querySelector("#feedTel");
let feedRuolo = document.querySelector("#feedRuolo");

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let tel = document.querySelector("#telefono");
let email = document.querySelector("#email");
let ruolo = document.querySelector("#ruolo");

let formRegUser = document.querySelector("#formRegUser");

class Utente{
    constructor(nome, cognome, tel, email, ruolo){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.tel = tel;
        this.ruolo = ruolo;
    }
}

let userString = '{"nome":"Mario","cognome":"Rossi","email":"mario@mail.it","tel":"3333333333","ruolo":"docente"}'

function verificaUtente(){
    if(localStorage.getItem("utente")){
        document.querySelector("body").innerHTML = "";
        let mioUtenteRegistrato = JSON.parse(localStorage.getItem("utente"));
        document.querySelector("body").innerHTML = `<h2> Ciao ${mioUtenteRegistrato.nome}</h2>`;
        
        let btnLogout = document.createElement("button");
        btnLogout.textContent = "Logout"
        btnLogout.addEventListener("click", function(){
            localStorage.removeItem("utente");
            location.reload();
        })
        document.querySelector("body").appendChild(btnLogout);
    }
}

document.addEventListener("DOMContentLoaded", verificaUtente);


function registraUtente(event) {
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let tel = document.querySelector("#telefono").value;
    let email = document.querySelector("#email").value;
    let ruolo = document.querySelector("#ruolo").value;

    if(checkNome(nome) && checkCognome(cognome) && checkTel(tel) && checkEmail(email) && checkRuolo(ruolo)){
        let mioUser = new Utente(nome, cognome, tel, email, ruolo);

        localStorage.setItem("utente", JSON.stringify(mioUser));
        console.log(mioUser);
    }else{
        event.preventDefault();
    }

}

formRegUser.addEventListener("submit", registraUtente);

nome.addEventListener("blur", function(){
    let nome = document.querySelector("#nome").value;
    checkNome(nome);
})

cognome.addEventListener("blur", function(){
    let cognome = document.querySelector("#cognome").value;
    checkCognome(cognome);
})

email.addEventListener("blur", function(){
    let email = document.querySelector("#email").value;
    checkEmail(email);
})

tel.addEventListener("blur", function(){
    let tel = document.querySelector("#telefono").value;
    checkTel(tel);
})

ruolo.addEventListener("blur", function(){
    let ruolo = document.querySelector("#ruolo").value;
    checkRuolo(ruolo);
})


function checkNome(nome){
    if(nome.length > 0){
        feedNome.textContent = ""
        return true;
    }else{
        feedNome.textContent = "Non hai inserito il nome";
        return false
    }
}

function checkCognome(cognome){
    if(cognome.length > 0){
        feedCognome.textContent = "";
        return true;
    }else{
        feedCognome.textContent = "Non hai inserito il cognome";
        return false
    }
}

/**
 * 
 * @param {string} email 
 */
function checkEmail(email){
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if(email.match(regexMail)){
        feedEmail.textContent = "";
        return true;
    }else{
        feedEmail.textContent = "Stai sbagliando la mail";
        return false;
    }

}

function checkTel(tel){
    let regexTel = /\d{10}/;
    if(tel.match(regexTel)){
        feedTel.textContent = "";
        return true;
    }else{
        feedTel.textContent = "Numero di telefono non corretto";
        return false;
    }
}

function checkRuolo(ruolo){
    if(ruolo){
        feedRuolo.textContent = "";
        return true;
    }else{
        feedRuolo.textContent = "Ruolo non selezionato"
        return false;
    }
}
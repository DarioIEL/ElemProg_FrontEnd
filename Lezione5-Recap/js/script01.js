class Impiegato{

    constructor(nome, cognome, matr, ruolo){
        this.nome = nome;
        this.cognome = cognome;
        this.matr = matr;
        this.ruolo = ruolo;
        this.stipendioBase = 1000;
        
        this.calcolaStipendio = function(){
            let stipendio = this.stipendioBase;
            switch(this.ruolo){
                case "manager":
                    return stipendio * 3;
                
                case "operaio":
                    return stipendio * 1.5;
                
                case "fattorino":
                    return stipendio * 1.2;

                default:
                    return stipendio;
            }

        }

        this.presentaImp = function(){
            let presentazione = `Impiegato: ${this.nome} ${this.cognome} - Matricola: ${this.matr}. Stipendio: ${this.calcolaStipendio()} € . Ruolo: ${this.ruolo}`;
            return presentazione
        }
    }
}

let impiegati = [];

let impiegato1 = new Impiegato("Anna", "Rossi", 1, "manager");
impiegati.push(impiegato1);
console.log(impiegato1.presentaImp());

let impiegato2 = new Impiegato("Mario","Verdi", 2, "operaio");
impiegati.push(impiegato2);
console.log(impiegato2.presentaImp());

let impiegato3 = new Impiegato("Luca", "Bianchi", 3, "fattorino");
impiegati.push(impiegato3);
console.log(impiegato3.presentaImp());


let listaImp = document.getElementById("listaImp");
let btnAdd = document.getElementById("btnAdd");
let btnStmpLista = document.getElementById("btnStmpLista");

btnStmpLista.addEventListener("click",stampaListaImpiegati);

function stampaListaImpiegati(){
    listaImp.innerHTML = "";    
    impiegati.forEach(imp =>{
        listaImp.innerHTML += `<li> ${imp.presentaImp()} </li>`
    })
}

let feed = document.getElementById("feed");

function controllaCampiForm(nome, cognome, ruolo){
    if(nome.trim() == "" || cognome.trim() == "" || ruolo == ""){
        feed.innerHTML = "Stai dimenticando qualcosa";
        return false;
    }else{
        feed.innerHTML = "";
        return true;
    }
}   


function pulisciInput(){
    document.getElementById("nome").value = "";  
    document.getElementById("cognome").value = "";   
    document.getElementById("ruolo").value = ""; 
}

function aggiungiImp(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let ruolo = document.getElementById("ruolo").value;
    let matricolatore = impiegati[impiegati.length - 1].matr + 1;

    if(controllaCampiForm(nome, cognome, ruolo)){
        let nuovoImp = new Impiegato(nome, cognome, matricolatore, ruolo);
        // console.log(nuovoImp);
        impiegati.push(nuovoImp);
        stampaListaImpiegati();
        pulisciInput();
    }

}

btnAdd.addEventListener("click", aggiungiImp);

let parola = "ciao";

console.log(parola[0].toLocaleUpperCase()+parola.substring(1));

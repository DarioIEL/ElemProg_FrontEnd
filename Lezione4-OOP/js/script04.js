
class Studente {
    /**
     * @param {String} nome 
     * @param {String} cognome 
     * @param {Number} matricola 
     * @param {String} corso 
     */
    constructor(nome, cognome, matricola, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.corso = corso;

        this.studia = function () {
            return `Sto studiando per il corso di ${this.corso}`;
        }

        this.toString = function () {
            return `${this.nome} ${this.cognome} - matricola n° ${this.matricola} - corso: ${this.corso}`;
        }
    }
}

let aula = [
    new Studente("Luca", "Braina", 2, "FrontEnd"),
    new Studente("Alice", "D'Alessandro", 3, "FrontEnd"),
    new Studente("Pietro", "Schiavone", 5, "FrontEnd"),
    new Studente("Gabriel", "Tamburo", 6, "FrontEnd"),
    new Studente("Davide", "Vasi", 7, "FrontEnd"),
    new Studente("Luisella", "Augello", 8, "FrontEnd"),
    new Studente("Freddy", "Delnardo", 9, "FrontEnd"),
    new Studente("Jesus", "Martinez", 10, "FrontEnd")
];

let btnShowStud = document.getElementById("btnShowStud");
let elencoStudenti = document.getElementById("elencoStudenti");

// VERSIONE1
// function stampaElenco(){
//     aula.forEach(studente =>{
//         elencoStudenti.innerHTML += "<li>" + studente.toString() + "</li>";
//     })
// }

// btnShowStud.addEventListener("click", stampaElenco);


//VERSIONE 2
// btnShowStud.addEventListener("click", function () {
//     aula.forEach(studente => {
//         elencoStudenti.innerHTML += "<li>" + studente.toString() + "</li>";
//     })
// })


//VERSIONE 3
function stampaElenco(elenco){
    elenco.forEach(s => {
        elencoStudenti.innerHTML += "<li>" + s.toString() + "</li>";
    });
}

btnShowStud.addEventListener("click", function(){
    stampaElenco(aula);
})
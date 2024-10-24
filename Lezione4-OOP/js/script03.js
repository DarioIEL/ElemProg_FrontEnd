//funzione costruttore

function Studente(nome, cognome, matricola, corso){
    //creo adesso le proprietà in base ai parametri che mi vengono passati
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.corso = corso;
    this.studia = function(){
        return `Ciao mi chiamo ${this.nome} ${this.cognome} - matricola n° ${this.matricola}. Studio ${this.corso}`;
    }
}


let primoStudente = new Studente("Luca", "Braina", 2, "FrontEnd");
let secondoStudente = new Studente("Alice", "D'Alessandro", 3, "FrontEnd");


let aula = [
    new Studente("Luca", "Braina", 2, "FrontEnd"),
    new Studente("Alice", "D'Alessandro", 3, "FrontEnd"),
    new Studente("Pietro", "Schiavone", 5, "FrontEnd"),
    new Studente("Gabriel", "Tamburo", 6, "FrontEnd"),
    new Studente("Davide", "Vasi", 7, "FrontEnd"),
    new Studente("Luisella", "Augello", 8, "FrontEnd"),
    new Studente("Freddy", "Delnardo", 9, "FrontEnd"),
    new Studente("Jesus", "Martinez", 10, "FrontEnd")
]


function stampaStudenti(){
    aula.forEach(studente =>{
        console.log(studente.studia());
    })
}

stampaStudenti();


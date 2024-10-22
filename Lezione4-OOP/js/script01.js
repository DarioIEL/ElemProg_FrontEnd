let studente = {
    //definisco le prop dello studente
    nome: "Laura",
    cognome: "Verdi",
    eta: 25,
    presenza: true,
    materie: ["JS", "HTML & CSS", "Angular", "JAVA"],
    corso: {
        titolo: "Tecnico Informatico",
        responsabile: "Egle Risola",
        docenti: [
            {
                nome: "Dario Mennillo",
                materia: "JS"
            },
            {
                nome: "Davide Ghione",
                materia: "HTML & CSS"
            }
        ]
    },

}

//Accedo alle proprietà
console.log(studente.nome, studente.cognome, "Iscritta al corso: " + studente.corso.titolo);

console.log("materie d'esame");

for(let i = 0; i < studente.materie.length; i++){
    console.log(studente.materie[i]);
}

console.log("Docente preferito: " + studente.corso.docenti[0].nome);

///////////////////////////////////////////////
let docente = {
    nome: "Mario",
    cognome: "Gialli",
    citta: "Torino",
    stato: "online",
    materia: "",

    //definisco dei metodi
    presentati: function(){
        let presentazione = "Ciao, sono il docente: " + this.nome + " " + this.cognome + " Vivo a " + this.citta + " In questo momento sono: " + this.stato + " Sto insegnando la seguente materia: " + this.materia;

        return presentazione;
    },

    cambiaStatus: function(){
        // if(this.stato == "online"){
        //     this.stato = "offline";
        // }else{
        //     this.stato = "online";
        // }

        this.stato == "online" ? this.stato = "offline" : this.stato = "online"; //operatore ternario
    },

    assegnaMateria: function(materia){
        this.materia = materia;
    }

} 

docente.cambiaStatus();
// docente.cambiaStatus();
docente.assegnaMateria("React");
docente.assegnaMateria("Angular");

docente.presentati();

let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

btn.addEventListener("click", function(){
    let materia = document.getElementById("materia").value;
        if(materia != ""){
            docente.assegnaMateria(materia);
            demo.innerHTML = docente.presentati();
        }else{
            demo.innerHTML = "Non hai inserito nessuna materia";
        }
    })


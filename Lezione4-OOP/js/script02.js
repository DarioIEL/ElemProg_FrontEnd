let automobile = {
    marca: "BMW",
    modello: "i5",
    cilindrata: 2000,
    colore: "blue",
    trasmissione: "automatica",

    marciaAttuale: 0,
    accesa: false,
    numGiri: 0,
    velocita: 0,

    descriviAuto(){
        let descrizione = `${this.marca} ${this.modello} - cilindrata: ${this.cilindrata}cc - colore: ${this.colore} - trasmissione ${this.trasmissione}`;

        return descrizione;
    },

    guidaAuto(numGiri, marciaAttuale){
        if(this.accesa == false){
            return "Non hai ancora acceso l'auto"
        }else{

            this.numGiri = numGiri;
            this.marciaAttuale = marciaAttuale;
            
            this.velocita = (this.numGiri * this.marciaAttuale) / 100;
            
            return this.velocita;
        }
    },

    calcolaVelocita(){

        if(this.accesa){
            this.guidaAuto(this.numGiri, this.marciaAttuale);
            
            let infoGuida = "L'auto è accesa " + this.accesa + " Stai guidando la tua auto alla velocità di " + this.velocita + " km/h" + " Marcia attuale " + this.marciaAttuale + " Numero di giri " + this.numGiri;
            
            return infoGuida;
        }else{
            return "Non hai ancora acceso la macchina"
        }
    },

    accendi(){
        this.accesa = true;
    },

    spegni(){
        this.marciaAttuale = 0;
        this.cilindrata = 0;
        this.accesa = false;
    }


}

let numGiri = document.getElementById("numGiri");
let marcia = document.getElementById("marcia"); //input
let btnGuida = document.getElementById("btnGuida");

console.log(automobile.descriviAuto());
automobile.accendi();
// automobile.spegni();

btnGuida.addEventListener("click", function(){
    let marciaUtente =  marcia.value;
    let numGiriUtente = numGiri.value;

    console.log(automobile.guidaAuto(numGiriUtente, marciaUtente));
    console.log(automobile.calcolaVelocita());
})



//Funzioni parametriche
//Le funzioni possono avere dei parametri d'ingresso
//Backtick alt + 96


function salutaQualcuno(nome, cognome){
    let saluto = `Ciao ${nome} ${cognome}`;

    console.log(saluto);    
}


// salutaQualcuno("Dario", "Mennillo");
// salutaQualcuno("Anna", "Rossi");
// salutaQualcuno("Luca", "Bianchi");
// salutaQualcuno("Paola", "Verdi");


let nomi = ["Anna", "Marco", "Luisa", "Pasquale", "Claudia"];
let cognomi = ["Rossi", "Verdi", "Gialli", "Bianchi", "Azzurri"];


for(let i = 0; i < nomi.length; i++){
    salutaQualcuno(nomi[i], cognomi[i]);
}
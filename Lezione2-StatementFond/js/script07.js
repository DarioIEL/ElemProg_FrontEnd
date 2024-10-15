let i = 1;
let msg = "";

while(i < 10){
    msg = "Ciao " + i;
    console.log(msg);
    i++;
}


let colori = ["rosso", "nero", "verde", "giallo", "azzurro"];

let iColore = 0;

while(colori[iColore] != "giallo"){
    console.log("colore non trovato. Stai guardando " + colori[iColore] );
    iColore++;
}

//do-while

let iColore2 = 0;
do{
    console.log("Colore non trovato. Stai osservando " + colori[iColore2]);
    iColore2++;
}while(colori[iColore2] != "giallo")
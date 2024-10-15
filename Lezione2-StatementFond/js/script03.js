//FOR STATEMENT
//for(inizializzazione; condizione; aggiornamento){
//  corpo
//}

//OPERATORE DI POST/PRE INCREMENTO/DECREMENTO

let miaEta = 35;
miaEta++; //miaEta = miaEta + 1;

console.log(miaEta);

let tuaEta = 38;
tuaEta--;

console.log(tuaEta);

console.log("CICLO FOR");

for(let i = 0; i < 10; i++){
    console.log(i + "Ciao");
}



//OPERATORE resto della divisione %


//FOR con IF innestato - Esercizio
for(let i = 1; i <= 10; i++){

    if(i % 5 == 0){
        console.log(i + " eccolo");
    }else{
        console.log(i);
    }

}


//                 0                                                   5         6
let studenti = ["Anna", "Marco", "Francesca", "Federica", "Luigi", "Pippo", "Luisa", "Pierluigi"];

//voglio leggere i valori del mio array
//      0               8                       
for(let i = 0; i < studenti.length; i++){
    console.log("Benvenuto/a " + studenti[i] );  
}


console.log(studenti[1]);


//Tutte le volte che ho un array posso utilizzare un Foreach, metodo degli array
//array.foreach(elemento =>{ })

studenti.forEach(s => {
    console.log(s);  
})


//Stampa una lista di numeri da 1 a 100. Quando incontri un multiplo di 3 stampa Zoom, quando incontri un multiplo di 5 stampa Wroom. Quando incontri un multiplo di 3 e di 5 stampa ZoomWroom

for(let i = 1; i <= 100; i++ ){
    
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log(i + " ZoomWroom");
    }else if( i % 3==0 ){
        console.log(i + " Zoom");
    }else if( i % 5 == 0){
        console.log(i + " Wroom");
    }else{
        console.log(i);
    }

    // if(i%3==0 && i%5!=0){
    //     console.log(i + "Zoom");
    // }else if(i%3!=0 && i%5==0){
    //     console.log(i + "Wroom");
    // }else if((i % 3 == 0) && (i % 5 == 0)){
    //     console.log(i + "ZoomWroom");
    // }else{
    //     console.log(i);
    // }
    
}


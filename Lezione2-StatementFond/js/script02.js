//IF STATEMENT

let punteggio = 53;

let messaggio = "";

//if(condizione){
// viene eseguito quando la condizione è true
//}else{
//}

if(punteggio >= 50){
    messaggio = "Complimenti passi al livello successivo"
}else{
    messaggio = "Mi dispiace, non puoi accedere al livello successivo";
}

console.log(messaggio);


//Giochino
//HARD MODE - Per superare il livello i punti devono essere >= 50 e i punti Skill >= 40

let punti = 49;
let puntiSkill = 39;

// if(punti >= 50 && puntiSkill >= 40){
//     console.log("Bravo, hai superato il livello");
    
// }else{
//     console.log("Mi dispiace, non hai superato il livello");
    
// }

//Espandono le condizioni del costrutto if. ELSE-IF
if(punti >= 50 && puntiSkill >= 40){
    console.log("Bravo, hai superato il livello");
    
}else if(punti >= 50 && puntiSkill < 40){

    console.log("Mi dispiace, non hai superato il livello perché i punti Skill sono sotto la soglia");

}else if(punti < 50 && puntiSkill >= 40){

    console.log("Mi dispiace, non hai superato il livello perché i punti sono sotto la soglia");

}else{
    console.log("Mi dispiace, non hai superato il livello perché entrambi i punteggi sono sotto soglia");
}



//EASY MODE - Basta che uno dei due punteggi sia oltre la soglia per superare il livello
if(punti >= 50 || puntiSkill >= 40){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi dispiace non hai superato il livello perché entrambi i punteggi sono sotto soglia");
}

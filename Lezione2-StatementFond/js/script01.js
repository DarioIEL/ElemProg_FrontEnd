//Operatori di confronto - > producono un boolean


let num1 = 3;
let num2 = 3;

let valutazione = (num1 == num2); 
console.log(valutazione);

let num3 = "4";
let num4 = 4;
console.log(num3 == num4); //TRUE
console.log(num3 === num4); //FALSE

let num5 = 5;
let num6 = 6;

console.log(num5 != num6); //TRUE
console.log(num5 > num6); //FALSE
console.log(num5 < num6); //TRUE
console.log(num5 >= num6); //FALSE
console.log(num5 <= num6); //TRUE



//OPERATORI DI CONFRONTO LOGICO

//AND LOGICO
let num7 = 10;
let num8 = 20;

let num9 = 100;
let num10 = 200;
//                    F        &&        T        ----> FALSE    
let confronto = (num7 >= num8) && (num9 <= num10);


//GIOCHINO ONLINE - Per superare il livello il tuo punteggioSkill deve essere maggiore di 50 e i tuoi punti devono essere maggiori di 70
let punti = 60;
let puntiSkill = 49;

let valutazione2 = (punti >= 70 ) && (puntiSkill >= 50); //se TRUE --> ho superato il livello

console.log("Lo passo il livello? " + valutazione2);

//OR logico - easy del giochino. Basta che uno dei due punteggi sia sopra soglia per passare il livello
let valutazione3 = (punti >= 70) || (puntiSkill >= 50);
console.log("Lo passo il livello in EASY MODE ?" + valutazione3);

 

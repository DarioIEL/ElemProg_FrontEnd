//att: tutto ciò che arriva dal prompt è sempre e solo una stringa
let nome = window.prompt("Come ti chiami ?");
let cognome = window.prompt("Inserisci il tuo cognome");
let annoNascita = window.prompt("In che anno sei nato ? ");


console.log(typeof annoNascita); //string

//cast del dato annoNascita, poiché quando recupero qualcosa dall'input utente è sempre una stringa
let eta = 2024 - Number( annoNascita );

console.log(typeof eta); //number


document.write("Mi chiamo: <br> " + nome + " " + cognome + ". Ho " + eta + " anni.");
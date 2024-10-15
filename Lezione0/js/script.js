//Creo le mie variabili
let nome = "Dario";
let cognome = "Mennillo";
let eta = 35;
let dataNascita = "1989"; //String
let ruolo = "docente";
let azienda = "Immaginazione e Lavoro";
let sedeAzienda = "Torino";

//Riassegno una variabile
nome = "Anna";
cognome = "Bianchi";
eta = 34;
dataNascita = 1990; //Number, non è una bella cosa da fare


//creo una variabile presentazione nella quale inserisco tutte le altre variabili
let presentazione = "Ciao, mi chiamo " + nome + " " + cognome + ", ho "+ (eta) + " anni,\n <br> sono nato nel " + dataNascita + ". Lavoro come " + ruolo + " presso " + azienda;

console.log(presentazione);

document.write(presentazione); //scrivendo all'interno della mia pagina HTML

let username = window.prompt("Che username vorrai utilizzare ?");
let password = window.prompt("Inserisci una password");


console.log("Il tuo Username è : " + username + " con la seguente password " + password);
document.write("Il tuo Username é: " + username);

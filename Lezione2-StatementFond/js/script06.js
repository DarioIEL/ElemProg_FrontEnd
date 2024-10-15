let msg = "";

let lvl = 0;

switch(lvl){

    case 1:
        msg = "Ciao, buona fortuna per il primo livello";
    break;

    case 2:
        msg = "Adesso vediamo come te la cavi per il secondo livello";
    break;

    case 3:
        msg = "Sei all'ultimo livello, adesso c'è il mostro finale";
    break;

    default:
        msg = "Benvenuto nel gioco";
    break;    
}

console.log(msg);


let password = "12";

switch(password){
    case "1234":
        msg = "Benvenuto"
    break;

    case "123":
        msg = "Ti manca qualcosa";
    break;

    case "12":
        msg = "Sei a metà password";
    break;

    default:
        msg = "Ritenta, password completamente errata";
    break;
}

console.log(msg);

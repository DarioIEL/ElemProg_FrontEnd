let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

let utenti = [];

function recuperaDati(){
    const URLEndopoint = "https://dummyjson.com/users";

    fetch(URLEndopoint)
    .then(response => {
        return response.json();
    })
    .then(data => {
        //data è il "macro-oggetto" che ricevo dall'esterno
        //.users è la sua prop che contiene gli utenti
        // console.log(data.users);

        utenti = data.users;
        console.log(utenti);

        utenti.forEach(utente => {
            // demo.innerHTML += `<li> ${utente.firstName} ${utente.lastName} <img src='${utente.image}'> </li> `
            demo.appendChild(creaCard(utente))
        });


    })
    
    
    //NON giocare con i tempi
    // setTimeout(()=>{
    //     console.log(utenti);
    // }, 200)
}

function creaCard(utente){
    let card = document.createElement("div");
    card.innerHTML = `<li> ${utente.firstName} ${utente.lastName} <img src='${utente.image}'> </li> `;

    let btnUser = document.createElement("button");
    btnUser.innerHTML = "Mostra Info";

    let infoAccessorie = utente.age + " " + utente.phone + " " + utente.role
    btnUser.addEventListener("click", function(){
        mostraInfo(infoAccessorie)
    });
    
    card.appendChild(btnUser);

    return card;
}

function mostraInfo(info){
    console.log(info);
}

btn.addEventListener("click", recuperaDati);

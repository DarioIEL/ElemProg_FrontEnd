let elencoUtenti = document.querySelector("#elencoUtenti");
let commentoUtente = document.querySelector("#commentoUtente");

const URLEndopoint = "https://dummyjson.com/comments";

function caricaDati(){
    //Questa funzione si ocuuperà di eseguire la fetch
    fetch(URLEndopoint)
    .then(response =>{
        console.log(response.ok);
        
        if(response.ok){
            return response.json()
        }else{
            return "Il server non risponde";
        }
    })
    .then(data =>{
        console.log(data.comments[0].user.fullName);

        //Questo è il mio array di commenti
        let commenti = data.comments;

        commenti.forEach(commento => {
            // console.log(commento.user.fullName);
            // elencoUtenti.innerHTML += `<li onclick="mostraCommento('${commento.body}')">${commento.user.fullName}</li>`;
           elencoUtenti.appendChild( costruisciElencoUtenti(commento.user, commento.body) );
        });

    })
}

/**
 * 
 * @param {object} utente 
 */
function costruisciElencoUtenti(utente, commento){
    let li = document.createElement("li");
    li.textContent = utente.fullName;

    li.addEventListener("click", function(){
        // commentoUtente.innerHTML = `<h3>${commento}</h3>`
        commentoUtente.innerHTML = "";
        commentoUtente.appendChild(mostraCommento(commento));

    });
    return li;
}

function mostraCommento(commento){
    console.log(commento);
    // commentoUtente.innerHTML = `<h3>${commento}</h3>`
    let div = document.createElement("div");
    div.innerHTML = `<h3>${commento}</h3>`;
    let btnClose = document.createElement("button");
    btnClose.textContent = "Chiudi Commento";
    btnClose.addEventListener("click", function(){
        commentoUtente.innerHTML = "";
    })
    div.appendChild(btnClose);
    return div;
}

document.addEventListener("DOMContentLoaded", caricaDati);
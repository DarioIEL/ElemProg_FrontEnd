let elencoUtenti = document.querySelector("#elencoUtenti");
let commentoUtente = document.querySelector("#commentoUtente");
let btnPref = document.querySelector("#btnPref");
let commentiPrefBox = document.querySelector("#commentiPrefBox");

const URLEndopoint = "https://dummyjson.com/comments";

btnPref.addEventListener("click", mostraCommPref);

function mostraCommPref(){
     let ulToDel = document.querySelectorAll("#commentiPrefBox ul");
     if(ulToDel != null){
        ulToDel.forEach(ul =>{
            ul.innerHTML = "";
        })
     }

    let ul = document.createElement("ul");

    let commPrefs = JSON.parse(localStorage.getItem("commentiPref"));
    console.log(commPrefs);
    
    commPrefs.forEach(commento =>{
        
        let li = document.createElement("li");
        li.textContent = commento;
        ul.appendChild(li);
    });

    commentiPrefBox.appendChild(ul);

}

function caricaDati(){
    //Come prima cosa faccio caricare l'array di commenti preferiti
    if(localStorage.getItem("commentiPref")){
        commentiPreferiti = JSON.parse( localStorage.getItem("commentiPref") );
        btnPref.classList.replace("hide", "show");
    }else{
        btnPref.classList.replace("show", "hide");
    }
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

    //Creo il pulsante per chuiudere il commento
    let btnClose = document.createElement("button");
    btnClose.textContent = "Chiudi Commento";
    btnClose.addEventListener("click", function(){
        commentoUtente.innerHTML = "";
    })
    div.appendChild(btnClose);

    //creo il pulsante per rendere un commento preferito
    let btnPreferito = document.createElement("button");
    btnPreferito.textContent = "Add Preferiti";
    btnPreferito.addEventListener("click", function(){
        aggiungiAPreferiti(commento);
        if(!btnPref.classList.contains("show")){
            btnPref.classList.replace("hide", "show");
        }
    })

    div.appendChild(btnPreferito);

    return div;
}

//Questa funzione salva nel localStorage un array di commenti preferiti
let commentiPreferiti = [];

function aggiungiAPreferiti(commento){
    commentiPreferiti.push(commento);

    let commentiPreferitiJSON = JSON.stringify(commentiPreferiti); //Questa viene lanciata nel LS
    localStorage.setItem("commentiPref", commentiPreferitiJSON);
}

document.addEventListener("DOMContentLoaded", caricaDati);
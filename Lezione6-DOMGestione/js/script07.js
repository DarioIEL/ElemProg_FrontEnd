let films = [
    {
        titolo: "Oppenheimer",
        locandina: "oppenheimer.jpg",
        durata: 200,
        attori: ["Cyllian Murphy", "Robert Downey Junior", "Emily Blunt", "Matt Damon"],
        regista: "Christopher Nolan"
    },

    {
        titolo: "Home Alone",
        locandina: "homeAlone.jpg",
        durata: 80,
        attori: ["McCulay Culkin", "Joe Pesci", "Catherine O'Hara"],
        regista: "Chris Columbus"
    },
    {
        titolo: "Venom",
        locandina: "venom.jpg",
        durata: 120,
        attori: ["Tom Hardy", "Juno Temple"],
        regista: "Kelly Marcel"
    },
]

/**
 * 
 * @param {string} titolo 
 * @param {string} imgPath 
 * @param {string[]} attori 
 */
function creaInfoFilm(titolo, imgPath, attori, regista, durata){
    let listaAttori = "";
    attori.forEach(attore =>{
        listaAttori += `<li> ${attore} </li>`;
    })

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let infoFilm = ` 
        <h2 class="txtCenter">${titolo}</h2>
        <div>
            <figure class="txtCenter">
                <img src='./img/${imgPath}' class="imgWE"  alt="">
            </figure>
        </div>
       <div class="flex ">
           <div class="txtCenter">
               <h4>Attori</h4>
            <ul>
                ${listaAttori}
            </ul>
        </div>

        <div class="txtCenter">
            <h4>Regista: ${regista}</h4>
            <p>Durata: ${durata}</p>
        </div>
    </div>`;

    let divBtn = document.createElement("div");
    divBtn.setAttribute("class", "flex");

    let btnAvanti = document.createElement("button");
    btnAvanti.addEventListener("click", nextFilm);
    btnAvanti.textContent = "Avanti";

    let btnIndietro = document.createElement("button");
    btnIndietro.addEventListener("click", prevFilm)
    btnIndietro.textContent = "Indietro";

    divBtn.appendChild(btnIndietro);
    divBtn.appendChild(btnAvanti);

    container.innerHTML = infoFilm;
    container.appendChild(divBtn);

    return container;
}

let elInfoFilm = document.querySelector("#elInfoFilm");
let posizione =  0;

function nextFilm(){
    console.log("Sto andando avanti");
    if(posizione != films.length - 1){
        posizione++;
    }else{
        posizione = 0;
    }
    mostraLocandina(posizione);
}

function prevFilm(){
    console.log("Sto andando indietro");
    if(posizione != 0){
        posizione--;
    }else{
        posizione = films.length - 1
    }
    mostraLocandina(posizione)
}


function mostraLocandina(posizione){
    elInfoFilm.innerHTML = "";
    elInfoFilm.appendChild(creaInfoFilm(films[posizione].titolo, films[posizione].locandina, films[posizione].attori, films[posizione].regista, films[posizione].durata));
}

document.addEventListener("DOMContentLoaded", function(){
    mostraLocandina(posizione)
});
//popolo il mio ul dallo script
// let ul = document.querySelector("#miaLista");

// ul.innerHTML = "<li class='txtBlue'> Dario </li>";

// let li = document.createElement("li"); //<li></li>
// li.textContent = "Dario";              //<li>Dario</li>
// li.setAttribute("class", "txtBlue");
// li.addEventListener("click", function(){
//     li.classList.toggle("txtBlue");
// })

// ul.appendChild(li);

// let persone = ["Anna", "Laura", "Marco", "Paolo", "Luca", "Andrea"];

// persone.forEach(persona =>{
//     let li = document.createElement("li");
//     li.textContent = persona;
//     li.setAttribute("class", "txtBlue");

//     li.addEventListener("click", function(){
//         togliColore(this)
//     })

//     li.addEventListener("dblclick", function(){
//         //parentNode.removeChild(childNode)
//         ul.removeChild(this)
//     })

//     ul.appendChild(li);
// })

// /**
//  * 
//  * @param {HTMLObjectElement} li 
//  */
// function togliColore(li){
//     li.classList.toggle("txtBlue");
// }

let ul = document.querySelector("#miaLista")
let btnAdd = document.querySelector("#btnAdd");
let inputNome = document.querySelector("#nomeStudente");

function aggiungiStudente(){
    let nomeStudente = document.querySelector("#nomeStudente").value;
    
    ul.prepend(creaLi(nomeStudente));

    document.querySelector("#nomeStudente").value = "";
}

/**
 * 
 * @param {string} nome 
 * @returns 
 */
function creaLi(nome){
    let li = document.createElement("li");
    li.textContent = nome;

    li.addEventListener("click", function(){
        this.classList.toggle("txtBarrato");
    });

    let button = document.createElement("button");
    button.textContent = " X ";
    button.addEventListener("click", function(){
        ul.removeChild(li)
    })

    let buttonMod =document.createElement("button");
    buttonMod.textContent = " M ";
    buttonMod.addEventListener("click", function(){
        let testo = li.firstChild.textContent; 
        inputNome.value = testo;
        button.click(); //per rimuovere
    })


    li.appendChild(button);
    li.appendChild(buttonMod);

    return li;
}

btnAdd.addEventListener("click", aggiungiStudente);

inputNome.addEventListener("keypress", function(event){
    console.log(event);
    
    if(event.key == 'Enter'){
        // aggiungiStudente();
        btnAdd.click();
    }
})
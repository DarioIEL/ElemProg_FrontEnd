//senza toccare l'html inserisci il link alla pagina wikipedia (ogni link non deve essere sottolineato) e l'immagine della locandina che avrai precedentemente scaricato

let lis = document.querySelectorAll("#films li");

lis.forEach(li =>{
    li.innerHTML = costruisciLink(li.textContent); 
})

function costruisciLink(titolo){
    let titoloUnd = titolo.replace(" ", "_")
    let link = `<a href='https://it.wikipedia.org/wiki/${titoloUnd}' style='text-decoration: none'> ${titolo} </a>`;
    let img = `<img src='./img/${titoloUnd}.jpg' width=200px height=auto>`;
    return link + img;
}
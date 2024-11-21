class Pizza{
    /**
     * 
     * @param {string} nome 
     * @param {number} prezzo 
     * @param {string[]} ingredienti 
     */
    constructor(nome, prezzo, ingredienti){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti
    }
}


let listaPizze = [];

let pizza1 = new Pizza("Margherita", 7, ["pomodoro", "mozzarella", "olioEVO", "basilico"]);

listaPizze.push(pizza1);

let listaPizzeJSON = JSON.stringify(listaPizze);

localStorage.setItem("listaPizze", listaPizzeJSON);
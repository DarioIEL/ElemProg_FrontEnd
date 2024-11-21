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

    toString(){
        let ingr = "";
        this.ingredienti.forEach(ing => {
            ingr += ing + " - ";
        })
        return `Pizza: ${this.nome} - € ${this.prezzo}. Ingredienti ${ingr}`
    }

    compraPizza(){
        return `Stai acquistando una ${this.nome} al prezzo di ${this.prezzo} €`
    }
}

let pizza1 = new Pizza("Margherita", 6, ["Pomodoro", "Mozzarella", "Basilico", "Olio Evo"]);
let pizza2 = {
    nome: "Marinara",
    prezzo: 5,
    ingredienti: ["Pomodoro", "Origano", "Aglio", "Olio EVO"],
    compraPizza(){
        return `Stai comprando la seguente pizza ${this.nome}`;
    }
}

console.log(pizza1);

//dato che pizza1 è un oggetto posso utilizzare la notazione punto per accedere alle prop e ai suoi metodi
console.log(pizza1.nome); //MArgherita
console.log(pizza1.toString()); 

//Trasformo il mio OGGETTO in STRING utilizzando l'interfaccia JSON
let pizza1Json = JSON.stringify(pizza1);
console.log(typeof pizza1Json);
console.log(pizza1Json);
console.log(pizza1Json.nome); //undefined 

let pizza2Json = JSON.stringify(pizza2);
console.log(pizza2Json);



 
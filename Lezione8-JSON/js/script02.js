//Adesso trasformo un JSON in un OGGETTO
let pizza3Json = '{"nome": "Diavola", "prezzo": 8, "ingredienti": ["pomodoro", "mozzarella", "salame piccante", "olio EVO"]}';
console.log(pizza3Json.nome); //undefined

let pizza3 = JSON.parse(pizza3Json);

console.log(pizza3);

console.log(pizza3.nome);

class Pizza{
    constructor(nome, prezzo, ingredienti){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
    }
}

let pizza3Obj = new Pizza(pizza3.nome, pizza3.prezzo, pizza3.ingredienti);

console.log(pizza3Obj.prezzo);
console.log(pizza3Obj);




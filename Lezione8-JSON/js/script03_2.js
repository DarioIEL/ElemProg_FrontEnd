//Leggo le informazioni salvata nel LocalStorage
//listaPizze è il nome della key salvata nel LS
// let pizzeLS = localStorage.getItem("listaPizze"); //JSON

// console.log(pizzeLS);

// let pizzeLSOBJ = JSON.parse(pizzeLS);

// console.log(pizzeLSOBJ);

let pizze = JSON.parse(localStorage.getItem("listaPizze"));
console.log(pizze);

let demo = document.querySelector("#demo");

pizze.forEach(pizza => {
    demo.innerHTML += `<li> ${pizza.nome} - ${pizza.prezzo} € - ${pizza.ingredienti}`
});


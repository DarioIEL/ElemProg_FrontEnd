let adesso = new Date();
console.log(adesso);

let giorno = adesso.getDate();
let mese = adesso.getUTCMonth();
let anno = adesso.getFullYear();
let ora = adesso.getHours();
let minuti = adesso.getMinutes();
let secondi = adesso.getSeconds();

let giornoParlato = adesso.getDay();

console.log(giorno, mese, anno);
console.log(giornoParlato);

let data = moment().format('D MMMM YYYY, h:mm:ss');
console.log(data);



let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let miaData = document.getElementById("miaData").value;
    console.log(miaData);
    console.log(new Date(miaData)); //Consiglio per utilizzarlo in moment()
    console.log(moment(miaData).format('D MM YY'));
    
})
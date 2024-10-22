let btnAdd = document.getElementById("btnAdd");
let btnSott = document.getElementById("btnSott");
let btnMolt = document.getElementById("btnMolt");
let btnDiv = document.getElementById("btnDiv");
let btnUguale = document.getElementById("btnUguale");

let demo = document.getElementById("demo");

let risultato = 0;

let inputNum = document.getElementById("num1");

inputNum.addEventListener("focus", function(){
    inputNum.value = "";
})

function prendiNumero(){
    let num = Number( document.getElementById("num1").value );
    return num;
}

function addiziona(){
    risultato += prendiNumero();    
    document.getElementById("num1").value = risultato;
}

function moltiplica(){
    if(risultato == 0){
        risultato = 1;
    }else{
        risultato = risultato * prendiNumero();
        document.getElementById("num1").value = risultato;
    }
}

btnAdd.addEventListener("click", addiziona);
btnMolt.addEventListener("click", moltiplica);


// let risultato = 0;

// function addiziona(){
//     let num = Number( document.getElementById("num1").value );
//     risultato = risultato + num;
//     document.getElementById("num1").value = "";
// }

// function sottrai(){
//     let num = Number( document.getElementById("num1").value );
//     risultato = risultato - num;
//     document.getElementById("num1").value = "";
// }

// function moltiplica(){
//     let num = Number( document.getElementById("num1").value );
//     risultato = risultato * num;
//     document.getElementById("num1").value = "";
// }

// function dividi(){
//     let num = Number( document.getElementById("num1").value );
//     risultato = risultato / num;
//     document.getElementById("num1").value = "";
// }

// function totale(){
//     demo.innerHTML = "<h2>" + risultato + "</h2>";
//     document.getElementById("num1").value = "";
// }


// btnAdd.addEventListener("click", addiziona);
// btnSott.addEventListener("click", sottrai);
// btnMolt.addEventListener("click", moltiplica);
// btnDiv.addEventListener("click", dividi);

// btnUguale.addEventListener("click", totale);
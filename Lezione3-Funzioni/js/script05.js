let btn = document.getElementById("btn"); //<button....
let demo = document.getElementById("demo");//<div id="demo"></div>

// function salutami(){
//     let saluto = "Ciao, Dario";
    
//     demo.innerHTML += saluto;
// }

// btn.addEventListener("click", salutami);


function salutami(){
    let saluto = "Ciao, Dario";
    return saluto;
}

btn.addEventListener("click", function(){
    demo.innerHTML = "<h1>" + salutami() + "</h1>";
})

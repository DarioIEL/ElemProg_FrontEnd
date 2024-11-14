let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

//focus
nome.addEventListener("focus", function(event){
    console.log("Mi trovo nel campo " + this.getAttribute("id"));   
    demo.textContent = "Ricorda che non puoi utilizzare numeri";
    this.setAttribute("style", "border: 3px solid cyan");
})

//blur
nome.addEventListener("blur", function(event){
    console.log("Sono uscito dal campo " + this.getAttribute("id"));
    if(this.value == ""){
        demo.textContent = "Guarda che non hai scritto niente nel nome";
        this.setAttribute("style", "border-color: red");
    }
})

cognome.addEventListener("focus", function(event){
    if(this.value.length < 8){
        this.setAttribute("style", "border: 3px solid red");
    }
})

cognome.addEventListener("input", function(event){
    if(this.value.length >= 8){
        this.removeAttribute("style");
    }else{
        this.setAttribute("style", "border: 3px solid red");
    }
})
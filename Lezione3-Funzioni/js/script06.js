let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

function salutaUser(nome){
    let saluto = `Ciao ${nome}` ;
    return saluto;
}

btn.addEventListener("click", function(){
    //Tutto ciò che recuperate da un campo input è SEMPRE una stringa
    let nomeUser =  document.getElementById("nomeUser").value;

    if(nomeUser.trim() != ""){
        demo.innerHTML = "<h2>" + salutaUser(nomeUser) + "</h2>";
    }else{
        demo.innerHTML = "<p>Non hai inserito il tuo nome</p>";
    }

    document.getElementById("nomeUser").value = "";
})
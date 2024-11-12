
let lis = document.querySelectorAll("li.txtRed"); //nodelist

lis.forEach(li=>{
    li.classList.replace("txtRed", "txtBlue");
    //voglio mettere l'attributo title all'interno del quale ci andrà il nome della persona
    li.setAttribute("title", li.textContent);
})

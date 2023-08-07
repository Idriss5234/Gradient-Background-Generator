var css =document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
// or  var c1 =document.querySelector(".color1");
var body =document.getElementById("gradient");

function colorchanger(){
    body.style.background =
    "linear-gradient(to right,"
    +c1.value
    +","
    +c2.value
    +")";

    css.textContent = body.style.background + ";" ; 
};

c1.addEventListener("input",colorchanger);

c2.addEventListener("input",colorchanger);

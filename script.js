function validation()
{

let form = document.getElementById("form");
let email = document.getElementById("email").value;
let text = document.getElementById("text");
let pattern = /^[^ ]+\.[a-z]{1,3}$/;

if (email.match(pattern))
{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Votre adresse Email est valide";
    text.style.color ="#00ff00";
}
else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Votre adresse Email est invalide";
    text.style.color ="#ff0000";
}

if (email == ""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color ="#00ff00";
}






} 


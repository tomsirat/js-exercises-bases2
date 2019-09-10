var nameInput = document.getElementById("nom");
var surnameInput = document.getElementById("prenom");
var cityInput = document.getElementById("ville");
var buttonInput = document.getElementsByTagName("button")[0];

buttonInput.addEventListener("click" , function(){
    nameInput.value = "";
    surnameInput.value = "";
    cityInput.value = "";
});
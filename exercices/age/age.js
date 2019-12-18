let form = document.querySelector('form');
let restext = document.querySelector('.res');

form.addEventListener("submit", function(e){
    
    e.preventDefault();
    let res = document.querySelector("#name").value
    let resa = document.querySelector("#date").value

    let age = 2019 - resa;
    reponse = "Bonjour " + res + " , tu as " + age + " ans.";
    if(age < 18){
        reponse += " Encore quelques années avant la majorité, courage!"
    }
    restext.innerHTML = reponse;
})
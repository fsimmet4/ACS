// Déclaration des variables
// Formulaire
const form = document.querySelector('form');
// Div qui contiendra la réponse
const restext = document.querySelector('.res');

// Récupérer dynamiquement l'année en cours
const currentYear = new Date().getFullYear();


// Ajout de l'évènement submit au formulaire
form.addEventListener("submit", function(e){
    
    e.preventDefault();

    // Récupération des valeurs des inputs
    let res = document.querySelector("#name").value
    let resa = document.querySelector("#date").value

    // Calcul de l'age 
    let age = currentYear - resa;

    // Concaténation de la réponse avec les variables récupérées
    // Cette technique fonctionne aussi : reponse = "Bonjour " + res + " , tu as " + age + " ans.";
    reponse =  `Bonjour ${res}, tu as ${age} ans.`

    // Ajout de la condition si l'age est inférieur a 18
    if(age < 18){
        reponse += ` Encore quelques années avant la majorité, courage!`
    }

    // Insertion de la réponse dans le Html
    restext.childNodes[0].nodeValue = reponse;
    
})
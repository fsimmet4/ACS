// Déclaration des variables, on récupere chaque bouton
const blue = document.querySelector('.blue');
const texte = document.querySelector('.texte');
const alerte = document.querySelector('.alerte');


// Ajout de l'événement clique au premier bouton
blue.addEventListener('click', function(){
    // Changement de backgroundColor
    document.querySelector('body').style.backgroundColor = "#6495ED";

})

// Ajout de l'événement clique au deuxième bouton
texte.addEventListener('click', function(){
    //Insertion d'un texte dans le HTML
    document.querySelector('.text').innerHTML = "coucou";
})

// Ajout de l'événement clique au troisième bouton
alerte.addEventListener('click', function(){
    //alert
    alert('Bravo')
    
})
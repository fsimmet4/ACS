// --------------  Exercice 1 -------------- //

// Fonction ajout d'élément
function addElement(){

    // Création des 2 constantes NOM et PRENOM
    const NOM = 'Simmet';
    const PRENOM = 'Floriane';

    // Création d'un nouvel élément p
    let newP = document.createElement("p");
    // Création du contenu de l'élément p
    let newContent = document.createTextNode(`Votre nom est ${NOM} et votre prénom est ${PRENOM}`);
    // On met le contenu dans le nouveau p
    newP.appendChild(newContent);

    // On selectionne l'endroit ou on veut insérer ce nouvel élément dans le DOM
    const elem = document.querySelectorAll('section')[0];

    // Insertion dans le DOM du nouvel élément
    elem.insertBefore(newP, null);
}

// Au chargement, appel de la fonction 
document.body.onload = addElement();



// --------------  Exercice 2 -------------- //

// On récupère la div 
const divBleu = document.querySelector('section div');

// Evenement clic sur la div
divBleu.addEventListener('click', () =>{
    // On met la div en rond
    divBleu.style.borderRadius = '50%';
    // On change la couleur de la div
    divBleu.style.backgroundColor = 'rgb(222,49,99)'
})



// --------------  Exercice 3 -------------- //

// On récupère le bouton 
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{

    // On crée le tableau contenant 5 films
    const films = ['Les évadés', 'American Pie', 'Ghost in the shell', 'OSS117', 'Le prénom'];

    // Choix aléatoire d'un élément du tableau
    const randomFilms = films[Math.floor(Math.random() * films.length)];

    
    // On récupère tous les p dans la section 
    const numberP = document.querySelectorAll('section:nth-child(3) p');
    
    // S'il n'y a qu'un seul p alors on en crée un nouveau qui contiendra un film alétaoire
    if(numberP.length == 1){
         // // Création d'un nouvel élément p
         let newP = document.createElement("p"); 
        
        // On créé le contenu du p
        let newContentFilms = document.createTextNode(randomFilms);
        
        // On insère le contenu du p dans le p
        newP.appendChild(newContentFilms);
     
        // On selectionne le parent de l'endroit ou on veut mettre ce nouveau p créé
         const parentNode = document.querySelector('section:nth-child(3)');

        // Insertion dans le DOM du nouvel élément (en mettant null, l'élément ira automatiquement en dernier)
        parentNode.insertBefore(newP, null);
    }
    // Sinon, on change uniquement le contenu du p
    else{
        
        // On change le contenu
        numberP[1].innerText = randomFilms;
    }
})

// --------------  Exercice 4 -------------- //

// On récupère le bouton 
const btnInput = document.querySelector('.btn-response');

btnInput.addEventListener('click', () => {

    // On récupère la valeur de l'input
    let inputValue = document.querySelector('input').value;

    // On créé une nouvelle variable qui stockera la résultat
    let newValue = "";

    // On itère dans la valeur de l'input (pour vérifier chaque caractère)
    for (let index = 0; index < inputValue.length; index++) {
        // Si c'est en minuscule, on met le caractère en maj
       if(inputValue[index] == inputValue[index].toLocaleLowerCase()){
        newValue += inputValue[index].toLocaleUpperCase()
       }
       // Si c'est en majuscule, on met le caractère en min
       else if(inputValue[index] == inputValue[index].toLocaleUpperCase()){
            newValue += inputValue[index].toLocaleLowerCase()
        }
        // Sinon on garde le caractère comme il est
        else{
            newValue += inputValue[index];
        }
    }

    // Création d'un nouveau p, insertion du contenu et insertion dans le DOM
    let newP = document.createElement("p");
    let newContent = document.createTextNode(newValue);
    newP.appendChild(newContent);
    const parentNode = document.querySelector('section:nth-child(4)');
    parentNode.insertBefore(newP, null);
})


// --------------  Exercice 5 -------------- //


// Fonction qui permet d'avoir un chiffre aléatoire entre un minimum et un maximum
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

 // On récupère le bouton
 const btnPwd = document.querySelector('section:nth-child(5) button');
 // On récupère le p de la réponse
 const pPwd = document.querySelector('section:nth-child(5) p:nth-child(4)');

 // Au clique du bouton, on affiche le nouveau mot de passe
 btnPwd.addEventListener('click', () => {
     
    // Variable vide qui stockera le mot de passe
    let pwd ="";
    // Entre 8 et 16 caractères
    for(i = 0; i < getRandomInt(16, 8); i++){
        // On va chercher une valeur aléatoire depuis le codes ASCII 
    pwd += (String.fromCharCode(getRandomInt(126, 33)));
    }

    // Insertion du nouveau mot de passe dans le p déja présent dans le html
    pPwd.innerHTML = `Votre nouveau mot de passe aléatoire est : ${pwd}`;
 })

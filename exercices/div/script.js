//Déclaration des variables
// Récuperation de la div 
const cases = document.querySelector('.case');
// Creation d'un compteur de clique
let click = 0;



cases.addEventListener("click", function () {
    // Création du texte a afficher
    const res = "<h1 class='text-center'> Hello World! </h1>"

    // Switch pour chaque cas demandé
    switch (click) {
        case 0:
            cases.innerHTML = res;
            break;
        case 1:
            cases.style.backgroundColor = "#1d4358";
            break;
        case 2:
            cases.style.border = "3px solid black";
            break;
        default:
            cases.style.border = "none";
            cases.style.backgroundColor = "#698697";
            cases.innerHTML = "";
    }
    // Incréméntation du compteur a chaque clique dans la div
    click += 1;
})
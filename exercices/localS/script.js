// Création du tableau de noms
const names = ["Floriane","Manu"];
// Stocker dans le local storage le tableau de noms
window.onload = function(){
    if (localStorage.names == undefined ){

        localStorage.names = JSON.stringify(names);
    }
}

// Fonction qui permet de créer une liste à partir d'un tableau 
function createListe(arr){

    let liste = document.createElement('ul');
    liste.classList = 'list-group liste';

    for (let i = 0; i < arr.length; i++) {
        let inside = document.createElement('li');
        inside.classList = 'list-group-item'
        inside.appendChild(document.createTextNode(arr[i]));
        liste.appendChild(inside)
    }
    return liste;
}

// Création du tableau de noms
const names = ["Floriane","Manu"];
// Stocker dans le local storage le tableau de noms
window.onload = function(){
    if (localStorage.names == undefined ){

        localStorage.names = JSON.stringify(names);
    }
}
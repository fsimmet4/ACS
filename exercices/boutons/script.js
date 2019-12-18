

const blue = document.querySelector('.blue');
const texte = document.querySelector('.texte');
const alerte = document.querySelector('.alerte');


blue.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = "blue";

})

texte.addEventListener('click', function(){
    document.querySelector('.text').innerHTML = "coucou";
})

alerte.addEventListener('click', function(){
    alert('BRavo')
    
})
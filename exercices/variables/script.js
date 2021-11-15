// -------------------- Exercice 1 --------------------

// On créé les variables avec let car elles vont être modifiées par la suite

let num = 42;
let txt = "42";
let bin = true;
let flt = 3.14;

// ----- Incrémentation -----
num++;

// Autres solutions (liste non exhaustive) :
// num = ++num; ou num = num + 1 ; ou num += 1;


// ----- Concaténation -----

// Afin de ne pas écraser la variable txt j'ai recréé une autre variable 'phrase'
let phrase = txt + " est la réponse universelle.";

// Autres solutions (liste non exhaustive): 
// txt = txt + " est la réponse universelle."; ou txt += " est la réponse universelle.";


// ----- Inversion -----
bin = !bin;


// ----- Addition -----
flt += num;

// Autre solution (liste non exhaustive)
//flt = flt + num;


// ----- Concaténation str + int -----
console.log(num + txt); // On obtient 4342 car on additionne un nombre et une chaîne de caractère

// Conversion de la chaîne de caractère en nombre
txt = parseInt(txt);

// A noter que l'on utilise parseInt car il s'agit d'un nombre entier, pour un nombre à virgule il faudrait utiliser parseFloat()
// Autre solution ( liste non exhaustive)
// txt = Number(txt);

console.log(num +txt); // On obtient cette fois-ci 85


// -------------------- Exercice 2 --------------------

let a = 8;
let b = 2;

// On créé une variable temporaire afin de pouvoir sauvegarder une valeur
let temporaire;

// On sauvegarde a
temporaire = a;
// On donne à a la valeur de b
a = b;
// On donne à b la valeur de a (qu'on a gardé dans la variable temporaire)
b = temporaire;

// Autre solution sans variable temporaire :
// a = a+b;
// b = a-b;
// a = a-b;

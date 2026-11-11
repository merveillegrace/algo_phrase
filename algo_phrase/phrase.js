/*  un algorithme qui lit une phrase se terminant par un point, caractere par caractere, et qui determine*/

var prompt = require('prompt-sync')()
let phrase = prompt( "Entrez une phrase terminer par un point : ");
let compteur_char=0;
let compteur_mots=1;
let compteur_voyelles=0;
let car;
 let i = 0;
while (i<phrase.length && phrase[i] !== "."){
 let car =phrase[i].toLowerCase();
 compteur_char++;
 if (car=="a" || car=="e" || car=="i" || car=="o" 
    || car=="u" || car=="y"){
        compteur_voyelles  ++;
    }
    if(car==" ") {
    compteur_mots++;
}
 i++;
}
 while(phrase[i] !== ".")
    car = phrase[i];
    compteur_char++;
console.log("Nombre de caracteres : " + compteur_char);
console.log("Nombre de mots : " + compteur_mots);
console.log("Nombre de voyelles : " + compteur_voyelles);
var nome = prompt("Qual o seu nome? ");
var firstLetter = nome.slice(0,1).toUpperCase();
var restName = nome.slice(1,(nome.length)).toLowerCase();
var capName = firstLetter + restName;

alert("Olá, " + capName + "!");
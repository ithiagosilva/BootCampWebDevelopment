var n = prompt("Escreva sua mensagem:");
var limiteN = n.slice(0, 140);
var written = limiteN.length;
var remaining = 140 - limiteN.length;

alert(limiteN + "\n" + written + " caracteres utilizados. " + "caracteres " + remaining + " restantes.");


// var textBox = document.querySelector('#text-box');
// var button = document.querySelector('#checar');

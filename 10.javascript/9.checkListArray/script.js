var listNames = ["Jennifer", "Carlos", "André", "Thiago", "Paulo"];

// Captalize Name 
var yourName = prompt("Digite o seu nome: ");
var firstLetter = yourName.slice(0,1).toUpperCase();
var restOfName = yourName.slice(1, yourName.length).toLocaleLowerCase();
yourName = firstLetter + restOfName;

function checkNames (){
    if (listNames.includes(yourName) === true) {
        return `Bem vindo, ${yourName}!`;
    } else {
        return `Sinto muito ${yourName}, seu nome não consta na lista.`;
    }
}

alert (checkNames());
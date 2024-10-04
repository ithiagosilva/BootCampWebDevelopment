var msg = document.querySelector("h1");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");

var randomNumber1 = Math.ceil((Math.random() * 6));
var randomNumber2 = Math.ceil((Math.random() * 6));


if (randomNumber1 > randomNumber2) {
    msg.innerHTML="Player 1 VENCEU";
} else if (randomNumber1 < randomNumber2) {
    msg.innerHTML="Player 2 VENCEU";
} else {
    msg.innerHTML="EMPATE!";
}
dice1.setAttribute('src', `./dice/dice-${randomNumber1}.svg`);
dice2.setAttribute('src', `./dice/dice-${randomNumber2}.svg`);
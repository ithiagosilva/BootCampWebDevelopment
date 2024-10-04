document.querySelector(".tom1").addEventListener('click', playTom1);
document.querySelector(".tom2").addEventListener('click', playTom2);
document.querySelector(".tom3").addEventListener('click', playTom3);
document.querySelector(".tom4").addEventListener('click', playTom4);
document.querySelector(".caixa").addEventListener('click', playCaixa);
document.querySelector(".prato").addEventListener('click', playPrato);
document.querySelector(".bumbo").addEventListener('click', playBumbo);

function playTom1() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}

function playTom2() {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
}

function playTom3() {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
}

function playTom4() {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
}

function playCaixa() {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
}

function playPrato() {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
}

function playBumbo() {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
}

document.addEventListener('keypress', function(event){console.log(event.key)})
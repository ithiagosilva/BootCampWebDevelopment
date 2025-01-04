let btnReveal = document.getElementById('reveal');
let cardVerse = document.querySelector('.verse');

btnReveal.addEventListener('click', () => {
    cardVerse.classList.toggle('verse-reveal');
    btnReveal.style.display = 'none';
});
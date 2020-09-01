const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

text.style.fontSize = "25px"

let textSize = 10;

text.style.fontSize = textSize + "px";

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

btnIncrease.addEventListener("click", textIncrease);
btnDecrease.addEventListener("click", textDecrease);
const button = document.querySelector('.btn');

let number = 0;

const addBox = function () {
    number++;
    const div = document.createElement('div');
    div.innerText = number;

    if (number % 5 == 0) {
        div.classList.add('circle');
    }
    document.body.appendChild(div);
}


button.addEventListener("click", addBox);
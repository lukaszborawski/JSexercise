let size = 10;
let orderElement = 1;

const init = () => {
    const button = document.createElement('button');
    const button1 = document.createElement('button');
    const list = document.createElement('ul');
    button.textContent = "Stwórz 10 elementów"
    button1.textContent = "Wyczyść"
    document.body.appendChild(button);
    document.body.appendChild(button1);
    document.body.appendChild(list);

    button.addEventListener("click", createLiElements);
    button1.addEventListener("click", removeLiElements);

}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const item = document.createElement('li')
        item.textContent = "Element o numerze" + orderElement++;
        document.querySelector('ul').appendChild(item);
    }
    // console.log('klik');
}

const removeLiElements = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init();
// const btn = document.querySelector("button");

// btn.addEventListener("mouseover", function () {
//     console.log("klik");
// })

// let clickNumbers = 0;

// btn.addEventListener("click", function () {
//     clickNumbers++;
//     console.log("Ilość klinięć: " + clickNumbers);
// })

// document.addEventListener("scroll", function () {
//     console.log("skrolujesz o " + window.scrollY + "px");
// })

const spanResult = document.querySelector("span");

window.addEventListener("scroll", function () {
    spanResult.textContent = window.scrollY;
})
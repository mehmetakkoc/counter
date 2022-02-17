// variables

const displayDiv = document.querySelector(".display");
const buttonDec = document.querySelector(".btn-dec");
const buttonReset = document.querySelector(".btn-res");
const buttonInc = document.querySelector(".btn-inc");

let number = 0;

buttonReset.addEventListener("click", () => {
    displayDiv.textContent = "";
})

buttonDec.addEventListener("click", () => {
    number -= 1;
    displayDiv.textContent = number;
})

buttonInc.addEventListener("click", () => {
    number += 1;
    displayDiv.textContent = number;
})
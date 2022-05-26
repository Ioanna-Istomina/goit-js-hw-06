const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
const body = document.querySelector("body");

buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  colorEl.textContent = body.style.backgroundColor;
}

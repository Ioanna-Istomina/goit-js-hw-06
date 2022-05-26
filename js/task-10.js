function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

let amount = 0;

function createBoxes() {
  let size = 20;
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    markup += `<div class = 'box' style = 'width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}' ></div>`;
  }
  inputEl.value = "";
  return boxesEl.insertAdjacentHTML("beforeend", markup);
}

createBtn.addEventListener("click", createBoxes);

inputEl.addEventListener("input", (event) => {
  amount = event.target.value;
  return amount;
});

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
});

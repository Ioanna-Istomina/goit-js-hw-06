const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
textEl.style.fontSize = inputEl.value + "px";

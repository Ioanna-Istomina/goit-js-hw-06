const inputEl = document.querySelector("#validation-input");
const lengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (even) => {
  if (even.target.value.length === lengthEl) {
    checkValue(inputEl, "valid", "invalid");
  } else {
    checkValue(inputEl, "invalid", "valid");
  }
});

function checkValue(el, add, remove) {
  el.classList.add(add);
  el.classList.remove(remove);
}

// inputEl.addEventListener("blur", (even) => {
//   switch (true) {
//     case even.target.value.length === lengthEl:
//       inputEl.classList.add("valid");
//       inputEl.classList.remove("invalid");
//       break;
//     case even.target.value.length !== 0:
//       inputEl.classList.add("invalid");
//       break;
//     default:
//       inputEl.classList.remove("invalid") || inputEl.classList.remove("valid");
//       break;
//   }
// });

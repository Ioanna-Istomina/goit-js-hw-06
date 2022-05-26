const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

// textContent треба вставляти в кожну функцію ТОму що за межами ф-ії працювати не буде (область видимості)

const listEl = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createEl(name) {
  const itemEl = document.createElement("li");
  itemEl.textContent = name;
  itemEl.classList.add("item");
  return itemEl;
}

const arrList = ingredients.map(createEl);

listEl.append(...arrList);

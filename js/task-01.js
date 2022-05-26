const allCategoriesEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${allCategoriesEl.length}`);

for (let li of allCategoriesEl) {
  const titleTextEl = li.querySelector("h2").textContent;
  const amountEl = li.querySelectorAll("li").length;
  console.log(`Category: ${titleTextEl}`);
  console.log(`Elements: ${amountEl}`);
}

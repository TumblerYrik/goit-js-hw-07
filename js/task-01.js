const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryItemsCount = item.querySelectorAll("ul li").length;

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
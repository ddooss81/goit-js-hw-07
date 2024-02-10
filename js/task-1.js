const categoriesElement = document.getElementById('categories');
const categories = categoriesElement.querySelectorAll('.item');

const categoriesObject = {};

categories.forEach((category) => {
  categoriesObject[category.querySelector('h2').textContent] = category.querySelectorAll('li').length;
});

console.log(`Number of categories: ${Object.keys(categoriesObject).length}`);

for (const [category, items] of Object.entries(categoriesObject)) {
    console.log(`Category: ${category}`);
    console.log(`Elements: ${items}`);
};
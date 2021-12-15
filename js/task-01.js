const getItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${getItem.length}`);
getItem.forEach(item => {
const getItemTitle = item.querySelector('h2');
const getItemElement = item.querySelectorAll('li');
console.log(`Category: ${getItemTitle.textContent}`);
console.log(`Elements: ${getItemElement.length}`);
});


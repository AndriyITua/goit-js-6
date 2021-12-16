const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector('#ingredients');

const makeIngredientsList = (elementList) => {
  return elementList.map((ingredientName) => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = ingredientName;
    ingredientItemEl.classList.add('item');
    return ingredientItemEl;
  });
};

const ingredientsList = makeIngredientsList(ingredients);
ingredientsEL.append(...ingredientsList);

console.log(ingredientsList);
console.log(ingredientsEL);
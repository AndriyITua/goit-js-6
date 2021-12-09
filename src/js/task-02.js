const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.createElement('ul.ingredients');


const elementLi = document.createElement('li');
elementLi.textContent = 'Potatoes';
elementLi.classList.add('item');

const elementLiTwo = document.createElement('li');
elementLiTwo.textContent = 'Mushrooms';
elementLiTwo.classList.add('item');

const elementLiThree = document.createElement('li');
elementLiThree.textContent = 'Garlic';
elementLiThree.classList.add('item');

const elementLiFour = document.createElement('li');
elementLiFour.textContent = 'Tomatos';
elementLiFour.classList.add('item');

const elementLiFive = document.createElement('li');
elementLiFive.textContent = 'Herbs';
elementLiFive.classList.add('item');

const elementLiSix = document.createElement('li');
elementLiSix.textContent = 'Condiments';
elementLiSix.classList.add('item');

ingredientsEL.append(elementLi, elementLiTwo, elementLiThree, elementLiFour, elementLiFive, elementLiSix);
console.log(ingredientsEL);

// console.log(document.body.appendChild(elementLi));
// console.log(document.body.appendChild(elementLiTwo));
// console.log(document.body.appendChild(elementLiThree));
// console.log(document.body.appendChild(elementLiFour));
// console.log(document.body.appendChild(elementLiFive));
// console.log(document.body.appendChild(elementLiSix));

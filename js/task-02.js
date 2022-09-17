const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.classList.add('item');
  itemOfIngredients.textContent = `${el}`;
  return itemOfIngredients;
});
listOfIngredients.append(...elements);

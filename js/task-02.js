const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const arrayForNewElem = [];

function createLiForIngr(array) {
  for (const name of array) {
    let newElement = document.createElement('li');
    newElement.textContent = name;
    newElement.classList.add('item');
    arrayForNewElem.push(newElement);
    
  }
  
}

createLiForIngr(ingredients);
list.append(...arrayForNewElem);





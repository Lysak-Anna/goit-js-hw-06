function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');


const createBoxes = amount => {
  const newElementsArray = [];
  for (let i = 0; i < amount; i += 1) {
    let newElement = document.createElement('div');
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    newElementsArray.push(newElement);
  
  }

  return newElementsArray;
}

createButton.addEventListener('click', () => {
  let createdBoxes = createBoxes(input.value);
  boxes.append(...createdBoxes);
});

destroyButton.addEventListener('click', () => boxes.innerHTML = '');

const counter = document.querySelector('#value');
let counterValue = 0;
const increaseValue = document.querySelector('[data-action="increment"]');
increaseValue.addEventListener('click', increaseValueClickHandler);
const decreaseValue = document.querySelector('[data-action="decrement"]');
decreaseValue.addEventListener('click', decreaseValueClickHandler);





function increaseValueClickHandler() {
    counter.textContent = counterValue += 1;
}
function decreaseValueClickHandler() {
    if (counterValue >= 1) {
     counter.textContent = counterValue -= 1;
    }
    
}








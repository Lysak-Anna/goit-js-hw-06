const inputData = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputData.addEventListener('input', inputDataHandler);

function inputDataHandler(event) {
    // event.preventDefault();
    if (event.currentTarget.value !== '') {
       return nameOutput.textContent = event.currentTarget.value;
    }
   return nameOutput.textContent = 'Anonymous';
    
}










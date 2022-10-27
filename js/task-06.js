const input = document.querySelector('#validation-input');
input.addEventListener('blur', inputBlurHandler);
 

function inputBlurHandler() {
    if (input.value.length === 6) {
      return  input.classList.add('valid');
    
    }
   return input.classList.add('invalid');
    
}








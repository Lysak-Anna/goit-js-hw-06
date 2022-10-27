const controller = document.querySelector('#font-size-control');
controller.addEventListener('input', inputControllerHandler);

const text = document.querySelector('#text');
text.style.fontSize = '16px';
// let sizeOfFont = text.style.fontSize;
function inputControllerHandler(event) {
    let currentValue = event.currentTarget.value;  
    text.style.fontSize = currentValue;
//   sizeOfFont = dataForFontSize;
//    console.log(sizeOfFont); 
     console.log( text.style.fontSize);
}
console.log(text.style.fontSize);






// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
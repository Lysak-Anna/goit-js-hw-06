const allItems = document.querySelectorAll('.item');

function countItems(array) {
    return `Number of categories: ${array.length}`;
};

const list = document.querySelector('#categories');

const listItems = list.children;


function getItemInform(array) {
    for (let i = 0; i < array.length; i += 1) {
        let title = array[i].firstElementChild.textContent;
        let amountOfItems = array[i].lastElementChild.querySelectorAll('li');
        console.log(`Category: ${title}`);
        console.log(`Elements: ${amountOfItems.length}`);
        
    }
};

console.log(countItems(allItems));
console.log(getItemInform(listItems));
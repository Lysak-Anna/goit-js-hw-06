const allItems = document.querySelectorAll('.item');
const list = document.querySelector('#categories');
const listItems = list.children;

function countItems(array) {
    console.log(`Number of categories: ${array.length}`);
};

function getItemInform(array) {
    for (let i = 0; i < array.length; i += 1) {
        let title = array[i].firstElementChild.textContent;
        let amountOfItems = array[i].lastElementChild.querySelectorAll('li');
        console.log(`Category: ${title}`);
        console.log(`Elements: ${amountOfItems.length}`);
        
    }
};

(countItems(allItems));
(getItemInform(listItems));
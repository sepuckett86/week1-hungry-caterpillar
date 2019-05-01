import addCircleDiv from './add-circle-div.js';

const dragonParent = document.getElementById('dragon');
const foodButtons = document.querySelectorAll('.food-button');

for(let i = 0; i < foodButtons.length; i++) {
    const foodButton = foodButtons[i];
    const id = foodButton.id;
    let colorClass;
    if(id === 'burger-button') {
        colorClass = 'red';
    } else if(id === 'fruit-button') {
        colorClass = 'blue';
    } else if(id === 'lasagna-button') {
        colorClass = 'green';
    }
    foodButton.addEventListener('click', () => {
        addCircleDiv(dragonParent, colorClass);
    });
}